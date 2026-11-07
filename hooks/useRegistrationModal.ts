"use client";

import { createContext, useContext } from "react";

export interface RegistrationModalPrefill {
  companyName?: string;
  email?: string;
}

interface RegistrationModalContextType {
  openModal: (prefillOrEvent?: RegistrationModalPrefill | unknown) => void;
  closeModal: () => void;
}

export const RegistrationModalContext =
  createContext<RegistrationModalContextType | null>(
    null
  );

export const useRegistrationModal = () => {
  const context = useContext(
    RegistrationModalContext
  );

  if (!context) {
    throw new Error(
      "useRegistrationModal must be used within RegistrationModalProvider"
    );
  }

  return context;
};