import { Vendor, GiftCardListResult, GiftCardOrderItem, ComplimentaryGiftCardResult, ZReportFull } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.betalia.no';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  pagination?: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}

export interface AuthResponse {
  vendorUser: {
    _id: string;
    name: string;
    email: string;
    role: string;
  };
  vendor: Vendor;
  vendorAccessToken: string;

}

class ApiClient {
  private token: string | null = null;

  getToken() {
      this.token = localStorage.getItem('vendorAccessToken');
      return this.token;
  }

  private getHeaders() {
    let headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    headers['vendorid'] = localStorage.getItem('vendor') ? JSON.parse(localStorage.getItem('vendor')!)._id : '';

    const token = this.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  async request<T = any>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_URL}${endpoint}`;

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.getHeaders(),
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok && response.status === 401) {
        localStorage.clear();
      };

      if (!response.ok) {
        throw new Error(data.message || `API Error: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Auth endpoints
  async registerVendor(payload: {
    name: string;
    email: string;
    password: string;
    companyName: string;
  }) {
    return this.request<AuthResponse>('/vendor/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async loginVendor(email: string, password: string) {
    return this.request<AuthResponse>('/vendor/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async forgotPassword(email: string) {
    return this.request('/vendor/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  async resetPassword(token: string, password: string) {
    return this.request('/vendor/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, password }),
    });
  }

  async changePassword(currentPassword: string, newPassword: string) {
    return this.request('/vendor/change-password', {
      method: 'POST',
      body: JSON.stringify({ currentPassword, newPassword }),
    });
  }

  async loginVendorWithPin({ number, pinCode, handle }: { number: number, pinCode: string, handle?: string }) {
    return this.request<AuthResponse>('/vendor/login/pin', {
      method: 'POST',
      body: JSON.stringify({ number, pinCode, handle }),
    });
  }

  // Vendor endpoints
  async getVendors() {
    return this.request('/vendor', {
      method: 'GET',
      cache: 'no-store',
    });
  }

  async listGiftCards(params: { status?: string; search?: string; page?: number } = {}) {
    const q = new URLSearchParams();
    if (params.status) q.set('status', params.status);
    if (params.search) q.set('search', params.search);
    if (params.page) q.set('page', String(params.page));
    return this.request<GiftCardListResult>(`/vendor/gift-cards?${q.toString()}`, { method: 'GET' });
  }

  async createComplimentaryGiftCard(data: { amount: number; reason: string; expiresAt?: string }) {
    return this.request<ComplimentaryGiftCardResult>('/vendor/gift-cards/complimentary', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async sendGiftCardSms(code: string, phone: string) {
    return this.request<{ shareUrl: string }>(`/vendor/gift-cards/${encodeURIComponent(code.replace(/\D/g, ''))}/send`, {
      method: 'POST',
      body: JSON.stringify({ channel: 'sms', phone }),
    });
  }

  async listGiftCardOrders(code: string) {
    return this.request<{ orders: GiftCardOrderItem[] }>(`/vendor/gift-cards/${encodeURIComponent(code)}/orders`, { method: 'GET' });
  }

  async setGiftCardStatus(code: string, status: 'void' | 'active') {
    return this.request(`/vendor/gift-cards/${encodeURIComponent(code)}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  async requestNewVendor(payload: { companyName: string; email: string }) {
    return this.request('/vendor/request', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async getDashboardStats() {
    return this.request('/vendor/dashboard/stats', {
      method: 'GET',
    });
  }

  // Admin/manager only — the backend enforces the role, this just surfaces it.
  // Every report section shares the same filter shape.
  async getReport(
    section: 'sales' | 'products' | 'payments' | 'vat' | 'orders' | 'kitchen' | 'employees' | 'customers' | 'cash-register' | 'accounting',
    params: {
      from: string;
      to: string;
      groupBy?: 'day' | 'week' | 'month';
      timezone?: string;
      orderType?: string;
      channel?: string;
      paymentMethod?: string;
      deviceId?: string;
      cashierId?: string;
    }
  ) {
    const query = '?' + new URLSearchParams(
      Object.entries(params)
        .filter(([, v]) => v !== undefined && v !== '')
        .map(([k, v]) => [k, String(v)])
    ).toString();
    return this.request(`/vendor/reports/${section}` + query, {
      method: 'GET',
    });
  }

  async getZReportById(sessionId: string) {
    return this.request<ZReportFull>(`/vendor/sessions/${sessionId}/z-report`, { method: 'GET' });
  }

  // SAF-T Cash Register XML (admin/manager). Returns the file as a Blob for download.
  async downloadSaft(from: string, to: string): Promise<Blob> {
    const query = '?' + new URLSearchParams({ from, to }).toString();
    const { 'Content-Type': _ct, ...headers } = this.getHeaders() as Record<string, string>;
    const response = await fetch(`${API_URL}/vendor/journal/saft${query}`, { headers });
    if (!response.ok) {
      let message = `API Error: ${response.status}`;
      try { message = (await response.json()).message || message; } catch {}
      throw new Error(message);
    }
    return response.blob();
  }

  async getVendorOrders(params?: {
    status?: string;
    limit?: number;
    page?: number;
    kitchenDisplay?: boolean;
    scheduled?: boolean;
  }) {
    const query = params
      ? '?' + new URLSearchParams(
          Object.entries(params)
            .filter(([, v]) => v !== undefined)
            .map(([k, v]) => [k, String(v)])
        ).toString()
      : '';
    return this.request('/vendor/orders' + query, {
      method: 'GET',
    });
  }

  async getVendorOrder(orderId: string) {
    return this.request(`/vendor/orders/${orderId}`, {
      method: 'GET',
    });
  }

  async updateOrderStatus(orderId: string, status: string) {
    return this.request(`/vendor/orders/${orderId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
  }

  async getVendorCustomers(params?: { search?: string; page?: number; limit?: number }) {
    const query = params
      ? '?' + new URLSearchParams(
          Object.entries(params)
            .filter(([, v]) => v !== undefined)
            .map(([k, v]) => [k, String(v)])
        ).toString()
      : '';
    return this.request('/vendor/customers' + query, {
      method: 'GET',
    });
  }

  async getVendorCustomerDetail(customerId: string, params?: { page?: number; limit?: number }) {
    const query = params
      ? '?' + new URLSearchParams(
          Object.entries(params)
            .filter(([, v]) => v !== undefined)
            .map(([k, v]) => [k, String(v)])
        ).toString()
      : '';
    return this.request(`/vendor/customers/${customerId}` + query, {
      method: 'GET',
    });
  }

  async getMenuItems(params?: { categoryId?: string }) {
    const query = params?.categoryId ? `?categoryId=${params.categoryId}` : '';
    return this.request(`/vendor/menu-items${query}`, {
      method: 'GET',
    });
  }

  async createMenuItem(payload: any) {
    return this.request('/vendor/menu-items', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async deleteMenuItem(id: string) {
    return this.request(`/vendor/menu-items/${id}`, { method: 'DELETE' });
  }

  async getCategories() {
    return this.request('/vendor/categories', {
      method: 'GET',
    });
  }

  async createCategory(payload: { name: string, color: string, channels?: string[], image?: string }) {
    return this.request('/vendor/categories', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async updateCategory(id: string, payload: { name?: string; color?: string; channels?: string[]; image?: string }) {
    return this.request(`/vendor/categories/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  }

  async deleteCategory(id: string) {
    return this.request(`/vendor/categories/${id}`, { method: 'DELETE' });
  }

  async updateVendorProfile(payload: any) {
    return this.request('/vendor/profile', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async uploadVendorMedia(kind: 'logo' | 'kiosk-background' | 'menu-item' | 'deal' | 'category', file: Blob) {
    return this.request<{ path: string }>(`/vendor/assets/media/${kind}`, {
      method: 'POST',
      headers: { 'Content-Type': file.type },
      body: file,
    });
  }

  async uploadCustomerBanner(file: File) {
    return this.request<{ path: string }>('/vendor/assets/customer-banner', {
      method: 'POST',
      headers: { 'Content-Type': file.type },
      body: file,
    });
  }

  async uploadBannerImage(dataUrl: string) {
    return this.request<{ path: string }>('/vendor/assets/banner', {
      method: 'POST',
      body: JSON.stringify({ dataUrl }),
    });
  }

  async getEmployees() {
    return this.request('/vendor/staff', {
      method: 'GET',
    });
  }

  async addEmployee(payload: any) {
    return this.request('/vendor/staff', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async removeEmployee(employeeId: string) {
    return this.request(`/vendor/staff/${employeeId}`, {
      method: 'DELETE',
    });
  }

  async resetEmployeeLogin(employeeId: string) {
    return this.request(`/vendor/staff/${employeeId}/reset-login`, {
      method: 'PATCH',
    });
  }

  async updateEmployeeStatus(employeeId: string, isActive: boolean) {
    return this.request(`/vendor/staff/${employeeId}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ isActive }),
    });
  }

  /** Open session (if any) on a POS device. */
  async getActiveSession(deviceId: string) {
    return this.request(`/vendor/sessions/active?deviceId=${encodeURIComponent(deviceId)}`, {
      method: 'GET',
    });
  }

  /** Admin/manager only: Z-report-close another device's open session. */
  async forceCloseSession(
    sessionId: string,
    data: { cashCounted: number; pinCode?: string }
  ) {
    return this.request(`/vendor/sessions/${sessionId}/force-close`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async resetPosDeviceLogin(deviceId: string) {
    return this.request(`/vendor/pos-devices/${encodeURIComponent(deviceId)}/reset-login`, {
      method: 'PATCH',
    });
  }

  async getLocations() {
    return this.request('/vendor/locations', { method: 'GET' });
  }

  async addLocation(payload: { name: string; phone?: string; address?: string; city?: string; state?: string; zipCode?: string }) {
    return this.request('/vendor/locations', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async deleteLocation(locationId: string) {
    return this.request(`/vendor/locations/${locationId}`, { method: 'DELETE' });
  }

  async getTables() {
    return this.request('/vendor/tables', { method: 'GET' });
  }

  async addTable(tableNumber: string) {
    return this.request('/vendor/tables', {
      method: 'POST',
      body: JSON.stringify({ tableNumber }),
    });
  }

  async updateTable(tableNumber: string, isActive: boolean) {
    return this.request(`/vendor/tables/${encodeURIComponent(tableNumber)}`, {
      method: 'PUT',
      body: JSON.stringify({ isActive }),
    });
  }

  async deleteTable(tableNumber: string) {
    return this.request(`/vendor/tables/${encodeURIComponent(tableNumber)}`, { method: 'DELETE' });
  }

  async getDeals(params?: { categoryId?: string; channel?: string }) {
    const q = params ? '?' + new URLSearchParams(Object.entries(params).filter(([,v]) => v !== undefined).map(([k, v]) => [k, String(v)])).toString() : '';
    return this.request(`/vendor/deals${q}`, { method: 'GET' });
  }

  async createDeal(payload: any) {
    return this.request('/vendor/deals', { method: 'POST', body: JSON.stringify(payload) });
  }

  async deleteDeal(id: string) {
    return this.request(`/vendor/deals/${id}`, { method: 'DELETE' });
  }

}

export const vendorApiClient = new ApiClient();
