export type OptionChoice = {
  _id?: string;
  name: string;
  price: number;
};

export type OptionGroup = {
  _id?: string;
  name: string;
  type: 'single' | 'multiple';
  required: boolean;
  pricingType: 'fixed' | 'additional' | 'none';
  choices: OptionChoice[];
};

export type SelectedOptionGroup = {
  groupName: string;
  choices: Array<{ name: string; price: number }>;
};

export type MenuItem = {
  _id?: string;
  name: string;
  price: number;
  isDiscount: boolean;
  discountPrice?: number;
  channels: string[];
  image?: string;
  color?: string;
  ingredients?: string[];
  allergens?: string[];
  description?: string;
  categoryId?: string;
  isStock?: boolean;
  stockCount?: number;
  badge?: string;
  optionGroups?: OptionGroup[];
};

export interface Category {
  _id: string;
  name: string;
  image?: string;
  color: string;
  isActive: boolean;
  channels: string[];
}

export interface Vendor {
  _id?: string;
  name: string;
  labelName?: string;
  organizationId?: string;
  website?: string;
  handle: string;
  email: string;
  supportEmail?: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  logo: string;
  vendorStaffId: string;
  isVerified: boolean;
  isActive: boolean;
  branding: {
    primaryColor: string;
    secondaryColor: string;
    sidebarColor: string;
  };
  taxId?: string;
  createdAt: Date;
  updatedAt: Date;
  others?: {
    receiptMessage?: string;
  };
  settings: {
    kioskDevices?: Device[];
    posDevices?: Device[];
    kitchenSettings?: {
      prepTimeMinutes?: number;
    };
    menuSettings?: {
      comboLabel?: string;
    };
    qrSettings?: {
      color?: string;
      scanText?: string;
      showLogo?: boolean;
    };
    kioskSettings?: {
      orderTypes?: 'both' | 'dine' | 'takeaway';
      allowCashPayment?: boolean;
      allowCardPayment?: boolean;
      allowGiftCardPayment?: boolean;
      primaryColor?: string;
      backgroundImage?: string;
      contentPosition?: 'top' | 'center' | 'bottom';
      banners?: KioskBanner[];
    };
    cashierSettings?: {
      defaultOrderType?: 'dine' | 'takeaway' | 'delivery';
      defaultPaymentMethod?: string;
      showTodayRevenue?: boolean;
      allowCashPayment?: boolean;
      allowCardPayment?: boolean;
      allowGiftCardPayment?: boolean;
    };
    displaySettings?: {
      bannerImage?: string;
      footerText?: string;
      preparingColumnTitle?: string;
      readyColumnTitle?: string;
      preparingHeaderColor?: string;
      preparingTileColor?: string;
      readyHeaderColor?: string;
      readyTileColor?: string;
      displayBackgroundColor?: string;
      requireLogin?: boolean;
    };
    customerPanelSettings?: {
      banner?: string;
      deliveryTimeMinutes?: number;
      deliveryFee?: number;
      minDeliveryOrder?: number;
      maxDeliveryRadiusKm?: number;
      storeLatitude?: number;
      storeLongitude?: number;
      closedStorePolicy?: 'schedule' | 'pause';
      operatingHours?: {
        day: string;
        open: string;
        close: string;
        isClosed: boolean;
      }[];
      orderTypes?: {
        dineIn?: boolean;
        takeaway?: boolean;
        delivery?: boolean;
      };
      deliveryHours?: {
        day: string;
        open: string;
        close: string;
        isClosed: boolean;
      }[];
      showLocationSelector?: boolean;
      allowCashPayment?: boolean;
      allowCardPayment?: boolean;
      allowGiftCardPayment?: boolean;
    };
    dashboardSettings?: {
      dailyRevenueTarget?: number;
      monthlyRevenueTarget?: number;
    };
    giftCardSettings?: {
      enabled?: boolean;
    };
    loyaltySettings?: {
      enabled?: boolean;
      coinName?: string;
      earnAmountPerCoin?: number;
      redeemValuePerCoin?: number;
      minRedeemCoins?: number;
    };
    integrationsSettings?: {
      customerLogin?: {
        enabled?: boolean;
        phoneOtpEnabled?: boolean;
        emailOtpEnabled?: boolean;
        phoneOtpSentCount?: number;
        emailOtpSentCount?: number;
      };
    };
    termsAndConditions?: {
      content?: string;
      lastUpdated?: string | Date;
    };
    tables?: VendorTable[];
  };
}

export interface VendorTable {
  tableNumber: string;
  isActive: boolean;
  createdAt: string | Date;
}

export interface CustomerLookupResult {
  _id: string;
  name?: string;
  phone: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  coinBalance?: number;
}

export interface LoyaltyHistoryEntry {
  _id: string;
  orderNumber?: string;
  createdAt: string;
  coinsEarned?: number;
  coinsRedeemed?: number;
  coinDiscount?: number;
  status: Order['status'];
}

export interface Device {
  name: string;
  id: string;
  _id?: string;
  color: string;
  isActive: boolean;
  isActiveSession?: boolean;
}

export interface Order {
  _id?: string;
  orderNumber?: string;
  trackingId?: string;
  vendorId: string;
  customer?: {
    name: string;
    phone: string;
    email: string;
  };
  items: Array<{
    menuItemId: MenuItem | string;
    dealId?: string;
    quantity: number;
    price: number;
    ingredients: string[][];
    removedIngredients?: string[][];
    discountPrice?: number;
    vatPrice?: number;
    selectedOptions?: SelectedOptionGroup[];
    selectedVariant?: string; // variant name (e.g. "Small")
    /** Display-only: name of the combo deal this item belongs to (used as section header on receipt) */
    dealName?: string;
    /** Display-only: sub-items for a combo deal line on the receipt */
    subItems?: Array<{ name: string; quantity?: number; selectedOptions?: SelectedOptionGroup[] }>;
  }>;
  subtotalPrice: number;
  discountPrice?: number;
  specialDiscountPrice?: number;
  otherDiscountPrice?: number;
  extraDiscountPrice?: number;
  useLoyaltyCoins?: boolean;
  coinsRedeemed?: number;
  coinDiscount?: number;
  coinsEarned?: number;
  additionalChargesPrice?: number;
  additionalChargesDescription?: string;
  vatPrice?: number;
  totalPrice: number;
  totalWithoutVat?: number;
  deviceId?: string;
  sourceChannel?: 'web' | 'kiosk' | 'pos' | 'QR-code';
  sourceDeviceId?: string;
  cashierId?: string;
  cashierName?: string;
  status: OrderStatus;
  paymentMethod: string;
  /** Full code of the gift card an order was paid with (display masked via maskGiftCardCode). */
  giftCardCode?: string;
  /** Part of totalPrice paid from the gift card (the rest is paid by paymentMethod). */
  giftCardAmount?: number;
  /** Client-only: the card's remaining balance right after paying (success overlay). */
  giftCardBalance?: number;
  orderType: OrderType;
  channel: 'web' | 'mobile' | 'kiosk' | 'third-party' | 'pos' | 'QR-code';
  isPaid: boolean;
  tableNumber?: string;
  deliveryAddress?: {
    addressLine1: string;
    addressLine2?: string;
    home?: string;
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    location?: {
      type: 'Point';
      coordinates: [number, number]; // [longitude, latitude]
    };
  };
  notes?: string;
  preparingStartedAt?: Date;
  readyAt?: Date;
  pickedUpAt?: Date;
  deliveredAt?: Date;
  preparationTime?: number;
  deliveryTime?: number;
  estimatedDeliveryTime?: string | Date;
  deliverySlot?: string;
  scheduledFor?: string | Date;
  createdAt?: Date;
  updatedAt?: Date;
  isRefunded?: boolean;
  refundReason?: string;
  refundMethod?: 'cash' | 'card' | 'gift-card';
  refundTransaction?: Record<string, unknown>;
  refundTransactionId?: string;
  refundedAt?: string | Date;
  cashDenominations?: Record<number, number>;
  cashReceived?: number;
  cashChange?: number;
  cashChangeBreakdown?: Record<number, number>;
  transaction?: Record<string, unknown>;
  transactionId?: string;
  isCopyPrinted?: boolean;
}

export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'in-delivery' | 'completed' | 'cancelled' | 'refunded';
export type OrderType = 'dine' | 'takeaway' | 'delivery';

export interface CashierOrderNotification {
  _id: string;
  vendorId: string;
  orderId: string;
  orderNumber: string;
  channel: 'web' | 'QR-code' | 'kiosk';
  paymentMethod?: string;
  tableNumber?: string;
  /** Set only when the order is scheduled for a future date (e.g. an advance delivery slot). */
  scheduledFor?: string | Date;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// ── Deals ────────────────────────────────────────────────────────────────────

export type LockedOption = {
  groupName: string;
  choiceName: string;
};

export type KioskBanner = {
  id: string;
  imageUrl: string;
  title?: string;
  /** Deal opened when the banner is clicked; empty = non-clickable image. */
  linkedDealId?: string | null;
  /** Category view the banner shows in; empty/null = the "All" view. */
  categoryId?: string | null;
  position?: 'top' | 'middle' | 'bottom';
  active: boolean;
  order: number;
};

export type DealItem = {
  menuItemId: MenuItem | string;
  quantity: number;
  name: string;
  lockedOptions?: LockedOption[]; // locks specific optionGroup choices (e.g. Size: "Small")
};

/** A "choice slot" in a combo: the customer picks `pickCount` items from `options`. `label` is free text, e.g. "Half pizza". */
export type DealChoiceGroup = {
  label: string;
  pickCount: number;
  options: Array<{ menuItemId: MenuItem | string; name: string }>;
};

export type Deal = {
  _id?: string;
  name: string;
  description?: string;
  price: number;
  discountPrice?: number;
  isDiscount: boolean;
  image?: string;
  vendorId?: string;
  categoryId?: string;
  channels: string[];
  isActive: boolean;
  isStock: boolean;
  stockCount?: number;
  badge?: string;
  items: DealItem[];
  choiceGroups?: DealChoiceGroup[];
};

// ── Cashier Session ──────────────────────────────────────────────────────────

export interface ICardBreakdown {
  /** USB Verifone bank terminal — replaces the old visa/mastercard/bankAxept split. */
  bankterminal?: number;
  vipps?: number;
  /** Portable terminal ("Bærebarterminal"). */
  baerebarterminal?: number;
  // ── Legacy keys — optional, only for rendering historical reports. ───────
  visa?: number;
  mastercard?: number;
  bankAxept?: number;
  [key: string]: number | undefined;
}

export interface IVatEntry {
  rate: string;
  amount: number;
}

/** Money put into / taken out of the drawer mid-session, always with a note. */
export interface CashMovement {
  type: 'in' | 'out';
  amount: number;
  note: string;
  staffName?: string;
  at: string;
}

/** Response of POST /vendor/sessions/:id/cash-movements. */
export interface CashMovementResult {
  cashMovements: CashMovement[];
  cashInTotal: number;
  cashOutTotal: number;
  expectedInDrawer: number;
  nextFloat: number;
}

export interface Session {
  _id: string;
  /** Absent for an auto-opened kiosk session — no cashier is logged into a kiosk. */
  cashierId?: string | { _id: string; name: string; email: string; number: string; role: string };
  vendorId: string;
  deviceId: string;
  startAt: string;
  endAt?: string | null;
  openingBalance: number;
  status: 'OPEN' | 'CLOSED';
  /** Absent on sessions created before register money in/out existed. */
  cashMovements?: CashMovement[];

  // Order Totals
  totalCashOrders: number;
  totalOnlineOrders: number;
  totalCashAmount: number;
  totalOnlineAmount: number;
  totalSales: number;

  // Z Report Metadata
  zReportNumber: number;
  closedByCashierName: string;

  // Cash Counting
  cashCounted: number;
  cashDifference: number;
  bankOutAmount: number;
  bankOutReason: string;

  // Terminal / Card
  terminalReconciled: boolean;
  terminalDifference: number;
  cardBreakdown: ICardBreakdown;

  // Norwegian Regulation Counters
  receiptsIssued: number;
  drawerOpenings: number;
  receiptCopies: number;
  receiptCopiesAmount?: number;
  priceLookupsByCategory?: Array<{ name: string; count: number; amount: number }>;
  returnsCount: number;
  returnsAmount: number;
  /** Absent on sessions closed before this field existed. */
  returnsNetAmount?: number;
  refundsCount: number;
  refundsAmount: number;
  discountsCount: number;
  discountsAmount: number;
  cancelledCount: number;
  correctionsCount: number;
  priceLookups: number;
  otherCorrections: number;
  correctionsAmount?: number;
  otherCorrectionsAmount?: number;
  priceLookupAmount?: number;
  proFormaCount?: number;
  proFormaAmount?: number;
  trainingCount?: number;
  trainingAmount?: number;
  deliveryCount: number;
  cancelledAmount?: number;
  deliveryAmount?: number;
  categorySales?: Array<{ name: string; quantity: number; amount: number }>;

  // Payment breakdown by method — absent on sessions closed before this
  // feature existed (falls back to 0 / derived from totalOnlineAmount).
  bankterminalCount?: number;
  bankterminalAmount?: number;
  baerebarterminalCount?: number;
  baerebarterminalAmount?: number;
  onlineChannelCount?: number;
  onlineChannelAmount?: number;
  /** Gift cards sold in the session (liability, NOT turnover) / orders paid with a gift card (inside totalSales). */
  giftCardsSoldCount?: number;
  giftCardsSoldAmount?: number;
  giftCardsSoldCashAmount?: number;
  giftCardsSoldCardAmount?: number;
  advanceReceivedCount?: number;
  advanceReceivedAmount?: number;
  advanceReceivedCashAmount?: number;
  advanceReceivedCardAmount?: number;
  advanceReceivedOtherAmount?: number;
  advanceSettledCount?: number;
  advanceSettledAmount?: number;
  advanceOpeningAmount?: number;
  advanceClosingCount?: number;
  advanceClosingAmount?: number;
  giftCardRedeemedCount?: number;
  giftCardRedeemedAmount?: number;
  cashRoundingAmount?: number;

  // Financial
  netTurnover: number;
  vatByRate: IVatEntry[];
  vatTotal?: number;
  netSales?: number;
  /** Float carried to the next session (opening + money in - money out). */
  closingBalance: number;

  // Cumulative, non-resettable grand totals as of this session's close.
  // Absent on sessions closed before this feature existed (0 baseline).
  grandTotalSales?: number;
  grandTotalReturns?: number;
  grandTotalNet?: number;

  /** POS system build that signed this report. Absent on older sessions. */
  posVersion?: string;

  // Frozen at close time — the immutable Z-Report record (see reportSnapshot
  // on the backend Session model). Absent on OPEN sessions and on sessions
  // closed before this field existed.
  reportSnapshot?: Record<string, unknown>;

  createdAt: string;
  updatedAt: string;
}

export interface SessionReportVendor {
  name: string;
  organizationId?: string | null;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  phone?: string;
  email?: string;
  logo?: string;
}

export interface SessionReport {
  session: Session;
  vendor: SessionReportVendor | null;
  /** The Z-report number this session would receive if closed right now — not yet assigned/saved. */
  nextZReportNumber: number;
  totalOrders: number;
  totalCashOrders: number;
  totalOnlineOrders: number;
  totalCashAmount: number;
  totalOnlineAmount: number;
  totalSales: number;
  openingBalance: number;
  /** Expected cash in drawer (opening + cash sales + money in - money out). */
  closingBalance: number;
  cashReceived: number;
  cashMovements: CashMovement[];
  cashInTotal: number;
  cashOutTotal: number;
  expectedInDrawer: number;
  /** Float that stays in the drawer for the next session. */
  nextFloat: number;
  // ── Full Norwegian compliance fields ──────────────────────────────────────
  returnsCount: number;
  returnsAmount: number;
  returnsNetAmount: number;
  refundsCount: number;
  refundsAmount: number;
  discountsCount: number;
  discountsAmount: number;
  cancelledCount: number;
  deliveryCount: number;
  cancelledAmount?: number;
  deliveryAmount?: number;
  categorySales?: Array<{ name: string; quantity: number; amount: number }>;
  receiptsIssued: number;
  receiptCopies: number;
  receiptCopiesAmount?: number;
  priceLookupsByCategory?: Array<{ name: string; count: number; amount: number }>;
  vatByRate: IVatEntry[];
  vatTotal: number;
  netSales: number;
  netTurnover: number;
  // ── Payment breakdown by method ───────────────────────────────────────────
  bankterminalCount: number;
  bankterminalAmount: number;
  baerebarterminalCount: number;
  baerebarterminalAmount: number;
  onlineChannelCount: number;
  onlineChannelAmount: number;
  /** Gift cards sold in the session (liability, NOT turnover) / orders paid with a gift card (inside totalSales). */
  giftCardsSoldCount?: number;
  giftCardsSoldAmount?: number;
  giftCardsSoldCashAmount?: number;
  giftCardsSoldCardAmount?: number;
  advanceReceivedCount?: number;
  advanceReceivedAmount?: number;
  advanceReceivedCashAmount?: number;
  advanceReceivedCardAmount?: number;
  advanceReceivedOtherAmount?: number;
  advanceSettledCount?: number;
  advanceSettledAmount?: number;
  advanceOpeningAmount?: number;
  advanceClosingCount?: number;
  advanceClosingAmount?: number;
  giftCardRedeemedCount?: number;
  giftCardRedeemedAmount?: number;
  cashRoundingAmount?: number;
  // ── Cumulative, non-resettable grand totals (previous closed + this live) ─
  grandTotalSales: number;
  grandTotalReturns: number;
  grandTotalNet: number;
}

export interface ZReportHistoryEntry {
  _id: string;
  zReportNumber: number;
  endAt: string;
  closedByCashierName: string;
  totalSales: number;
  netTurnover: number;
  closingBalance: number;
  cashCounted: number;
  cashDifference: number;
  deviceId?: string;
}

export interface ZReportFull {
  session: Session;
  vendor: {
    name: string;
    organizationId: string;
  } | null;
  /** Frozen at close time — render from this when present rather than live session/vendor data. */
  snapshot?: Record<string, unknown> | null;
}

export interface ValidateCloseResult {
  canClose: boolean;
  totalUnsettled: number;
  unpaidOrders: Array<{
    _id: string;
    orderNumber?: string;
    status: string;
    isPaid: boolean;
    totalPrice: number;
    paymentMethod: string;
  }>;
  pendingOrders: Array<{
    _id: string;
    orderNumber?: string;
    status: string;
    isPaid: boolean;
    totalPrice: number;
    paymentMethod: string;
  }>;
  /** Vendor policy cap (default 2/device/day) — not a legal requirement. */
  dailyCapReached: boolean;
  closedTodayCount: number;
  maxZReportsPerDay: number;
  warning: string | null;
}

// ── Reports ──────────────────────────────────────────────────────────────────

/** The measures every bucket of the sales report shares. */
export interface SalesReportBucket {
  /** VAT-inclusive, already net of discounts, refunded orders included. */
  grossSales: number;
  refunds: number;
  refundedOrders: number;
  /** grossSales − refunds, still VAT-inclusive. */
  netRevenue: number;
  /** VAT on non-refunded sales. */
  vat: number;
  /** netRevenue − vat. */
  netSales: number;
  /** Informational — already deducted from grossSales, not a further deduction. */
  discounts: number;
  discountBreakdown: {
    item: number;
    special: number;
    other: number;
    extra: number;
  };
  additionalCharges: number;
  orderCount: number;
  averageOrderValue: number;
}

export interface SalesReportNamedBucket extends SalesReportBucket {
  key: string;
}

export interface ReportRangeMeta {
  from: string;
  to: string;
  groupBy: 'day' | 'week' | 'month';
  timezone: string;
}

export interface SalesReport {
  range: ReportRangeMeta;
  summary: SalesReportBucket;
  series: Array<SalesReportBucket & { period: string }>;
  byHour: Array<SalesReportBucket & { hour: number }>;
  byOrderType: SalesReportNamedBucket[];
  byChannel: SalesReportNamedBucket[];
  byPaymentMethod: SalesReportNamedBucket[];
  byCashier: SalesReportNamedBucket[];
  /** VAT rate is derived from order type — it is not stored on the order. */
  vatByRate: Array<SalesReportBucket & { ratePercent: number }>;
}

export interface ProductsReport {
  range: ReportRangeMeta;
  totals: {
    distinctProducts: number;
    /** How many of the distinct products are combos. */
    combos: number;
    unitsSold: number;
    /** Reconciles exactly with the Sales report's gross sales. */
    revenue: number;
    lineCount: number;
  };
  byProduct: Array<{
    key: string;
    name: string;
    categoryName: string;
    /** A combo sold as one product, priced at the deal price. */
    isCombo: boolean;
    quantity: number;
    revenue: number;
    orderCount: number;
  }>;
  byCategory: Array<{ key: string; name: string; quantity: number; revenue: number; productCount: number }>;
  /** Units actually made inside combos. Quantities only — the revenue belongs to the combo row. */
  comboContents: Array<{ key: string; name: string; quantity: number; orderCount: number }>;
  /** Count only — an option's price may add to or replace the line price, and the order does not record which. */
  modifiers: Array<{ groupName: string; name: string; quantity: number }>;
  freeItems: Array<{ key: string; name: string; quantity: number; orderCount: number }>;
}

export interface PaymentsReport {
  range: ReportRangeMeta;
  summary: SalesReportBucket;
  byMethod: SalesReportNamedBucket[];
  byMethodAndChannel: Array<SalesReportBucket & { method: string; channel: string }>;
  series: Array<SalesReportBucket & { period: string; method: string }>;
  /** How refunds were actually paid out, which can differ from the original sale. */
  refundsByMethod: Array<{ key: string; amount: number; count: number }>;
}

export interface VatRateRow extends SalesReportBucket {
  ratePercent: number;
}

export interface VatReport {
  range: ReportRangeMeta;
  summary: SalesReportBucket;
  byRate: VatRateRow[];
  byPeriod: Array<{ key: string; rates: VatRateRow[] }>;
  byPaymentMethod: Array<{ key: string; rates: VatRateRow[] }>;
  byChannel: Array<{ key: string; rates: VatRateRow[] }>;
}

export interface OrderCountBucket {
  orders: number;
  value: number;
  paid: number;
  unpaid: number;
  cancelled: number;
  refunded: number;
  completed: number;
}

export interface OrdersReport {
  range: ReportRangeMeta;
  summary: OrderCountBucket;
  byStatus: Array<OrderCountBucket & { key: string }>;
  byOrderType: Array<OrderCountBucket & { key: string }>;
  byChannel: Array<OrderCountBucket & { key: string }>;
  /** Channel the order was created on, before any cashier cash conversion. */
  bySourceChannel: Array<OrderCountBucket & { key: string }>;
  series: Array<OrderCountBucket & { period: string }>;
  byHour: Array<OrderCountBucket & { hour: number }>;
}

export interface KitchenTimingBucket {
  orders: number;
  /** Orders carrying the timestamps needed to measure preparation. */
  measured: number;
  coverage: number;
  /** Excluded from the averages as stale rather than slow. */
  outliers: number;
  /** Booked ahead, so excluded from wait and fulfilment but still counted for prep. */
  scheduled: number;
  medianPrepMinutes: number | null;
  avgPrepMinutes: number | null;
  minPrepMinutes: number | null;
  maxPrepMinutes: number | null;
  medianWaitMinutes: number | null;
  avgWaitMinutes: number | null;
  avgFulfilMinutes: number | null;
  onTime: number;
  delayed: number;
  onTimePercent: number | null;
}

export interface KitchenReport {
  range: ReportRangeMeta;
  outlierThresholdHours: number;
  summary: KitchenTimingBucket;
  byOrderType: Array<KitchenTimingBucket & { key: string }>;
  byChannel: Array<KitchenTimingBucket & { key: string }>;
  byHour: Array<KitchenTimingBucket & { hour: number }>;
  series: Array<KitchenTimingBucket & { period: string }>;
  byProduct: Array<{
    key: string;
    name: string;
    orders: number;
    medianPrepMinutes: number | null;
    avgPrepMinutes: number | null;
    maxPrepMinutes: number | null;
  }>;
}

export interface EmployeesReport {
  range: ReportRangeMeta;
  byEmployee: Array<SalesReportBucket & {
    key: string;
    totalOrders: number;
    cancelled: number;
    unpaid: number;
    firstOrderAt: string | null;
    lastOrderAt: string | null;
  }>;
}

export interface CustomersReport {
  range: ReportRangeMeta;
  summary: {
    identifiedCustomers: number;
    newCustomers: number;
    returningCustomers: number;
    repeatCustomers: number;
    repeatRate: number;
    identifiedOrders: number;
    anonymousOrders: number;
    identifiedNetRevenue: number;
    anonymousNetRevenue: number;
    identifiedAverageOrderValue: number;
    anonymousAverageOrderValue: number;
    averageSpendPerCustomer: number;
    averageOrdersPerCustomer: number;
  };
  loyalty: {
    enabled: boolean;
    coinName: string;
    earnAmountPerCoin: number | null;
    redeemValuePerCoin: number | null;
    coinsEarned: number;
    coinsRedeemed: number;
    redeemedValue: number;
    ordersWithRedemption: number;
    totalMembers: number;
    newMembers: number;
    membersWithBalance: number;
    outstandingBalance: number;
  };
  byChannel: Array<SalesReportBucket & { key: string }>;
  topCustomers: Array<SalesReportBucket & {
    key: string;
    name: string | null;
    phone: string | null;
    email: string | null;
    coinBalance: number;
    returning: boolean;
    coinsEarned: number;
    coinsRedeemed: number;
    firstOrderAt: string | null;
    lastOrderAt: string | null;
  }>;
  topCustomersLimit: number;
}

export interface CashRegisterSessionRow {
  id: string;
  status: 'OPEN' | 'CLOSED';
  deviceId: string;
  zReportNumber: number | null;
  startAt: string;
  endAt: string | null;
  cashierName: string;
  forcedClose: boolean;
  totalSales: number;
  netSales: number;
  vatTotal: number;
  netTurnover: number;
  totalCashAmount: number;
  bankterminalAmount: number;
  baerebarterminalAmount: number;
  onlineChannelAmount: number;
  openingBalance: number;
  closingBalance: number;
  cashCounted: number;
  cashDifference: number;
  terminalDifference: number;
  bankOutAmount: number;
  returnsAmount: number;
  refundsAmount: number;
  discountsAmount: number;
  cancelledAmount: number;
  receiptsIssued: number;
  drawerOpenings: number;
  receiptCopies: number;
  receiptCopiesAmount?: number;
  priceLookupsByCategory?: Array<{ name: string; count: number; amount: number }>;
  correctionsCount: number;
  otherCorrections: number;
  proFormaCount: number;
  giftCardsSoldAmount: number;
  cashRoundingAmount: number;
}

export interface CashRegisterReport {
  range: ReportRangeMeta;
  totals: Omit<CashRegisterSessionRow,
    'id' | 'status' | 'deviceId' | 'zReportNumber' | 'startAt' | 'endAt' | 'cashierName' | 'forcedClose'
  > & { zReportCount: number; openSessions: number };
  vatByRate: Array<{ rate: string; amount: number }>;
  byRegister: Array<{
    deviceId: string; zReports: number; totalSales: number;
    totalCashAmount: number; cashDifference: number; terminalDifference: number;
  }>;
  cashMovements: Array<{
    sessionId: string; deviceId: string; zReportNumber: number | null;
    type: 'in' | 'out'; amount: number; note: string; staffName: string; at: string;
  }>;
  sessions: CashRegisterSessionRow[];
}

export interface AccountingReport {
  range: ReportRangeMeta;
  summary: SalesReportBucket;
  vatByRate: VatRateRow[];
  settlement: Array<SalesReportBucket & {
    period: string;
    vatByRate: VatRateRow[];
    byPaymentMethod: SalesReportNamedBucket[];
  }>;
}


/** A gift card as returned by GET /vendor/gift-cards/:code. */
export interface GiftCardInfo {
  code: string;
  initialAmount: number;
  balance: number;
  status: 'active' | 'void' | 'expired' | 'depleted' | 'cancelled' | string;
  issuedAt: string;
  /** ISO instant after which the card can't be used; null/absent = no expiry. */
  expiresAt?: string | null;
  /** Set by the balance endpoint: true once expiresAt has passed. */
  expired?: boolean;
  lastUsedAt?: string | null;
}

/** One row of GET /vendor/gift-cards/sold-today. */
export interface SoldGiftCard {
  code: string;
  initialAmount: number;
  balance: number;
  expiresAt?: string | null;
  paymentMethod: 'cash' | 'card';
  issuedAt: string;
  issuedByCashierName?: string;
  status: string;
  isCopyPrinted?: boolean;
  transaction?: GiftCardTransaction;
  customer?: GiftCardCustomer;
}

/** Terminal receipt fields stored with a card-paid gift card sale. */
export type GiftCardTransaction = Record<string, string>;

export interface GiftCardCustomer {
  name?: string;
  phone?: string;
  email?: string;
}

/** Response data of POST /vendor/gift-cards. */
export interface GiftCardSaleResult {
  giftCard: GiftCardInfo;
  soldAt: string;
  paymentMethod: 'cash' | 'card';
  shareToken?: string;
  shareUrl?: string;
  vendorName?: string;
  transaction?: GiftCardTransaction;
  customer?: GiftCardCustomer;
}

/** Response data of POST /vendor/gift-cards/complimentary. */
export interface ComplimentaryGiftCardResult {
  giftCard: GiftCardInfo;
  shareToken?: string;
  shareUrl?: string;
  paymentMethod: 'complimentary';
}

/** Public shareable card view (GET /gift-cards/view/:token). */
export interface SharedGiftCard extends GiftCardInfo {
  vendor: { name?: string; handle?: string; primaryColor?: string; secondaryColor?: string };
}

/** Body for POST /vendor/orders/:id/card-payment/approve */
export interface CardPaymentApproveBody {
  transactionId?: string;
  rrn?: string;
  data?: Record<string, unknown>;
  /** True when approved by the startup/reconnect recovery routine. */
  recovered?: boolean;
  /** Manual settle when the terminal result is unknown; requires `reason`. */
  manual?: boolean;
  reason?: string;
}

/** An order whose card payment is still "processing" (GET /vendor/orders/card-payments/pending). */
export interface CardPaymentPendingOrder {
  _id: string;
  orderNumber?: string;
  totalPrice: number;
  tableNumber?: string;
  orderType?: string;
  channel?: 'pos' | 'kiosk' | 'web' | 'QR-code';
  createdAt?: string;
  cardPayment: {
    startedAt: string;
    deviceId?: string;
    amount: number;
    preexisting?: boolean;
  };
}

/** Row of the admin gift card list (GET /vendor/gift-cards). */
export interface GiftCardListItem extends GiftCardInfo {
  paymentMethod: 'cash' | 'card' | 'complimentary';
  complimentaryReason?: string;
  shareUrl?: string;
  issuedByCashierName?: string;
  sentToPhone?: string;
  sentAt?: string;
  terminalRef?: string;
  transaction?: GiftCardTransaction;
  customer?: GiftCardCustomer;
  history: { type: string; amount: number; at: string; note?: string }[];
}

export interface GiftCardListResult {
  cards: GiftCardListItem[];
  total: number;
  page: number;
  limit: number;
  summary: {
    totalCards: number;
    activeCards: number;
    voidCards: number;
    expiredCards?: number;
    totalIssued: number;
    complimentaryCards?: number;
    complimentaryIssued?: number;
    /** Excludes expired and disabled cards. */
    outstandingBalance: number;
    expiredBalance?: number;
  } | null;
}

export interface GiftCardOrderItem {
  _id: string;
  orderNumber: string;
  createdAt: string;
  totalPrice: number;
  /** Part of the order paid from the card. */
  giftAmount: number;
  paymentMethod: string;
  status: string;
  isPaid: boolean;
  channel?: string;
}

export interface VendorLocation {
  _id: string;
  name: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}
