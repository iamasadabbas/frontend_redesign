'use client';

import React, { createContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { vendorApiClient, AuthResponse } from '@/lib/vendor-api-client';
import { Device } from '@/lib/types';

export interface VendorAuthContextType {
  vendorUser: AuthResponse['vendorUser'] | null;
  vendor: AuthResponse['vendor'] | null;
  setVendor: (vendor: AuthResponse['vendor']) => void;
  userVendors: AuthResponse['vendor'][];
  setUserVendors: (vendors: AuthResponse['vendor'][]) => void;
  vendorAccessToken: string | null;
  isVendorAuthLoading: boolean;
  vendorLogin: (email: string, password: string) => Promise<void>;
  loginWithPin: ({number, pin, handle}: {number: number, pin: string, handle?: string}) => Promise<void>;
  vendorRegister: (data: {
    name: string;
    email: string;
    password: string;
    companyName: string;
  }) => Promise<void>;
  vendorLogout: () => void;
}

export const VendorAuthContext = createContext<VendorAuthContextType | undefined>(undefined);

export function VendorAuthProvider({ children }: { children: ReactNode }) {
  const [vendorUser, setVendorUser] = useState<AuthResponse['vendorUser'] | null>(null);
  const [vendor, setVendor] = useState<AuthResponse['vendor'] | null>(null);
  const [vendorAccessToken, setVendorAccessToken] = useState<string | null>(null);
  const [isVendorAuthLoading, setIsVendorAuthLoading] = useState(true)
  const [userVendors, setUserVendors] = useState<AuthResponse['vendor'][]>([]);


  const handleSetVendor = (vendor: AuthResponse['vendor']) => {
    // set css variables for theming
    document.documentElement.style.setProperty('--primary', vendor.branding.primaryColor);
    document.documentElement.style.setProperty('--secondary', vendor.branding.secondaryColor);
    document.documentElement.style.setProperty('--sidebar', vendor.branding.sidebarColor);
    setUserVendors((currentUserVendors) => {
      const updatedUserVendors = currentUserVendors.map((item) =>
        item._id === vendor._id ? vendor : item
      );
      localStorage.setItem('userVendors', JSON.stringify(updatedUserVendors));
      return updatedUserVendors;
    });
    setVendor(vendor);
    localStorage.setItem('vendor', JSON.stringify(vendor));
  };

  const handleSetActivePOS = (device: Device | null) => {
    if (device) {
      localStorage.setItem('activePOS', JSON.stringify(device));
    } else {
      localStorage.removeItem('activePOS');
    }
  }

  // Restore auth state from localStorage on mount
  useEffect(() => {
    setIsVendorAuthLoading(true);
    
    try {
      const storedVendorAccessToken = localStorage.getItem('vendorAccessToken');
      const storedVendorUser = localStorage.getItem('vendorUser');
      const storedVendor = localStorage.getItem('vendor');
      const storedUserVendors = localStorage.getItem('userVendors');

      if (storedVendor) {
        const parsedVendor = JSON.parse(storedVendor);
        document.documentElement.style.setProperty('--primary', parsedVendor.branding.primaryColor);
        document.documentElement.style.setProperty('--secondary', parsedVendor.branding.secondaryColor);
        document.documentElement.style.setProperty('--sidebar', parsedVendor.branding.sidebarColor);
      }

      const storedActivePOS = localStorage.getItem('activePOS');
      if (storedActivePOS) {
        handleSetActivePOS(JSON.parse(storedActivePOS));
      }
      if (storedVendorAccessToken) {
        setVendorAccessToken(storedVendorAccessToken);
      }
      
      if (storedVendorUser) {
        setVendorUser(JSON.parse(storedVendorUser));
      }
      
      if (storedVendor) {
        setVendor(JSON.parse(storedVendor));
      }

      if (storedUserVendors) {
        setUserVendors(JSON.parse(storedUserVendors));
      }
    } catch (error) {
      console.error('Error restoring auth state:', error);
    } finally {
      setIsVendorAuthLoading(false);
    }
  }, []);

  const vendorLogin = useCallback(async (email: string, password: string) => {
    setIsVendorAuthLoading(true);
    try {
      const response = await vendorApiClient.loginVendor(email, password);

      if (response.success && response.data) {
        const { vendorUser, vendorAccessToken } = response.data;

        setVendorUser(vendorUser);
        setVendorAccessToken(vendorAccessToken);
        

        localStorage.setItem('vendorUser', JSON.stringify(vendorUser));
        localStorage.setItem('vendorAccessToken', vendorAccessToken);
      }
    } finally {
      setIsVendorAuthLoading(false);
    }
  }, []);

  const loginWithPin = useCallback(async ({ number, pin, handle }: { number: number, pin: string, handle?: string }) => {
    setIsVendorAuthLoading(true);
    try {
      const response = await vendorApiClient.loginVendorWithPin({ number, pinCode: pin, handle });

      if (response.success && response.data) {
        const { vendorUser, vendorAccessToken } = response.data;

        if (vendorUser.role === 'cashier') {
          throw new Error('Cashiers must log in through the cashier portal');
        }

        setVendorUser(vendorUser);
        setVendorAccessToken(vendorAccessToken);

        localStorage.setItem('vendorUser', JSON.stringify(vendorUser));
        localStorage.setItem('vendorAccessToken', vendorAccessToken);
      }
    } finally {
      setIsVendorAuthLoading(false);
    }
  }, []);

  const vendorRegister = useCallback(
    async (data: {
      name: string;
      email: string;
      password: string;
      companyName: string;
    }) => {
      setIsVendorAuthLoading(true);
      try {
        const response = await vendorApiClient.registerVendor(data);

        if (response.success && response.data) {
          const { vendorUser, vendor, vendorAccessToken } = response.data;

          setVendorUser(vendorUser);
          handleSetVendor(vendor);
          setUserVendors([vendor]);
          setVendorAccessToken(vendorAccessToken);

          localStorage.setItem('vendorUser', JSON.stringify(vendorUser));
          localStorage.setItem('vendorAccessToken', vendorAccessToken);
          localStorage.setItem('userVendors', JSON.stringify([vendor]));
        }
      } finally {
        setIsVendorAuthLoading(false);
      }
    },
    []
  );

  const vendorLogout = useCallback(() => {
    localStorage.clear();
    setVendorUser(null);
    setVendor(null);
    setVendorAccessToken(null);
    setUserVendors([]);
    document.documentElement.style.setProperty('--primary', 'oklch(0.557 0.077 5)');
    document.documentElement.style.setProperty('--secondary', 'oklch(0.972 0.014 350)');
    document.documentElement.style.setProperty('--sidebar', 'oklch(0.972 0.014 350)');
  }, []);

  const handleSetUserVendors = (vendors: AuthResponse['vendor'][]) => {
    setUserVendors(vendors);
    localStorage.setItem('userVendors', JSON.stringify(vendors));
  };

  return (
    <VendorAuthContext.Provider
      value={{
        vendorUser: vendorUser,
        userVendors: userVendors,
        vendor,
        vendorAccessToken,
        isVendorAuthLoading,
        vendorLogin,
        setVendor: handleSetVendor,
        setUserVendors: handleSetUserVendors,
        loginWithPin,
        vendorRegister,
        vendorLogout,
      }}
    >
      {children}
    </VendorAuthContext.Provider>
  );
}

export function useVendorAuth() {
  const context = React.useContext(VendorAuthContext);
  if (context === undefined) {
    throw new Error('useVendorAuth must be used within a VendorAuthProvider');
  }
  return context;
}
