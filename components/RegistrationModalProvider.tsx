"use client";

import { useState } from "react";

import RegistrationModal from "./RegistrationModal";

import {
  RegistrationModalContext,
  type RegistrationModalPrefill,
} from "@/hooks/useRegistrationModal";

export default function RegistrationModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] =
    useState(false);
  const [prefill, setPrefill] =
    useState<RegistrationModalPrefill>({});

  return (
    <RegistrationModalContext.Provider
      value={{
        openModal: (arg) => {
          if (
            arg &&
            typeof arg === "object" &&
            !("nativeEvent" in arg) &&
            ("companyName" in arg || "email" in arg)
          ) {
            setPrefill(arg as RegistrationModalPrefill);
          } else {
            setPrefill({});
          }
          setIsOpen(true);
        },

        closeModal: () =>
          setIsOpen(false),
      }}
    >
      {children}

      <RegistrationModal
        isOpen={isOpen}
        prefill={prefill}
        onClose={() =>
          setIsOpen(false)
        }
      />
    </RegistrationModalContext.Provider>
  );
}