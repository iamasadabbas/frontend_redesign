"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShieldCheck, X } from "lucide-react";
import type { RegistrationModalPrefill } from "@/hooks/useRegistrationModal";

interface RegistrationModalProps {
    isOpen: boolean;
    prefill?: RegistrationModalPrefill;
    onClose: () => void;
}

/**
 * Lead-form modal — restyled to the "Redesign Concept" Pop up frame:
 * wide white card on the grid backdrop, purple Betalia logo centred on
 * top, title and description left, tint-filled bordered fields, the
 * consent line with its shield icon, and the rose "Send forespørsel"
 * button (213x51) sitting flush below the bottom-left edge of the card.
 */
const FIELD =
    "w-full rounded-[4px] border border-[#EEE3E8] bg-[#FAF3F6] px-5 text-[15px] text-[#1A1218] placeholder:text-[#8A7A81] outline-none transition-colors focus:border-[#AE4D70] focus:bg-white";

export default function RegistrationModal({
    isOpen,
    prefill,
    onClose,
}: RegistrationModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        companyName: "",
        companyOrg: "",
        position: "",
        phone: "",
        email: "",
        message: "",
        consent: false,
    });

    useEffect(() => {
        if (isOpen && prefill) {
            setFormData((prev) => ({
                ...prev,
                companyName: prefill.companyName ?? prev.companyName,
                email: prefill.email ?? prev.email,
            }));
        }
    }, [isOpen, prefill]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value, type } =
            e.target as HTMLInputElement;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? (e.target as HTMLInputElement).checked
                    : value,
        }));
    };

    const handleSubmit = (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        console.log(formData);

        alert("Takk for din henvendelse!");

        onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#2A1328]/60 p-3 backdrop-blur-sm font-sans sm:p-5 md:p-6"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                data-lenis-prevent
                data-lenis-prevent-wheel
                onWheel={(e) => {
                    e.stopPropagation();
                }}
                className="hide-scrollbar relative max-h-[92vh] max-h-[92dvh] w-full max-w-[1180px] overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]"
            >
                <form onSubmit={handleSubmit}>
                        <div className="relative border border-[#EEE3E8] bg-white px-5 py-7 shadow-2xl sm:px-8 sm:py-10 md:px-[64px] md:py-[48px]">
                            {/* CLOSE BUTTON */}
                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Lukk"
                                className="absolute right-4 top-4 z-50 flex h-9 w-9 items-center justify-center rounded-full text-[#9A8C93] transition-colors hover:bg-[#FAF3F6] hover:text-[#1A1218] sm:right-5 sm:top-5"
                            >
                                <X size={18} />
                            </button>

                            <div className="flex justify-center">
                                <Image
                                    src="/images/betalia_logo_burgundy.png"
                                    alt="Betalia"
                                    width={132}
                                    height={37}
                                    className="h-[30px] w-auto sm:h-[37px]"
                                />
                            </div>

                                <h1 className="mt-6 text-[22px] font-semibold leading-[1.2] tracking-[-0.6px] text-[#1A1218] sm:mt-8 sm:text-[26px] md:mt-[40px] md:text-[28px]">
                                    La oss hjelpe deg i gang
                                </h1>

                                    <p className="mt-2.5 max-w-[760px] text-[14px] leading-[1.6] text-[#6E6168] sm:mt-3 sm:text-[15px]">
                                        La oss vise deg hvorfor stadig flere bedrifter velger Betalia og hvor enkelt det er å effektivisere driften og skape vekst.
                                    </p>

                                            <div className="mt-6 space-y-4 sm:mt-[36px] sm:space-y-5">
                                                <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        placeholder="Fornavn*"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className={`${FIELD} h-[48px] sm:h-[56px]`}
                                                    />

                                                    <input
                                                        type="text"
                                                        name="surname"
                                                        required
                                                        placeholder="Etternavn*"
                                                        value={formData.surname}
                                                        onChange={handleChange}
                                                        className={`${FIELD} h-[48px] sm:h-[56px]`}
                                                    />
                                                </div>

                                                <input
                                                    type="text"
                                                    name="companyName"
                                                    required
                                                    placeholder="Firmanavn*"
                                                    value={formData.companyName}
                                                    onChange={handleChange}
                                                    className={`${FIELD} h-[48px] sm:h-[56px]`}
                                                />

                                                    <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                                                        <input
                                                            type="text"
                                                            name="companyOrg"
                                                            placeholder="Organisasjons nr"
                                                            value={formData.companyOrg}
                                                            onChange={handleChange}
                                                            className={`${FIELD} h-[48px] sm:h-[56px]`}
                                                        />

                                                        <input
                                                            type="text"
                                                            name="position"
                                                            placeholder="Stilling"
                                                            value={formData.position}
                                                            onChange={handleChange}
                                                            className={`${FIELD} h-[48px] sm:h-[56px]`}
                                                        />
                                                    </div>

                                                        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                                                            <input
                                                                type="text"
                                                                name="phone"
                                                                placeholder="Telefon"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                className={`${FIELD} h-[48px] sm:h-[56px]`}
                                                            />

                                                            <input
                                                                type="email"
                                                                name="email"
                                                                required
                                                                placeholder="E-post*"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                className={`${FIELD} h-[48px] sm:h-[56px]`}
                                                            />
                                                        </div>

                                                        <textarea
                                                            rows={5}
                                                            name="message"
                                                            placeholder="Fortell gjerne mer om deres selskap"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            className={`${FIELD} resize-none py-3.5 sm:py-4`}
                                                        />

                                                        <label className="flex cursor-pointer items-start gap-3 pt-1">
                                                            <input
                                                                type="checkbox"
                                                                name="consent"
                                                                checked={formData.consent}
                                                                onChange={handleChange}
                                                                className="sr-only"
                                                            />
                                                            <ShieldCheck
                                                                size={16}
                                                                className="mt-[2px] shrink-0 text-[#AE4D70]"
                                                            />
                                                                <span className="text-[12px] leading-[1.55] text-[#6E6168] sm:text-[12.5px]">
                                                                    Jeg samtykker til at Betalia kan kontakte meg angående min forespørsel. Jeg bekrefter at jeg har signaturrett på vegne av virksomheten. Jeg godtar at opplysningene jeg sender inn kan lagres og behandles så lenge det er nødvendig for å behandle henvendelsen og følge opp saken.
                                                                </span>
                                                        </label>
                                                    </div>
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="mt-3 h-[48px] w-full rounded-[4px] bg-[#AE4D70] text-[15px] font-semibold text-white shadow-lg transition-opacity hover:opacity-90 sm:h-[51px] sm:w-[213px]"
                                                >
                                                    Send forespørsel
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                    );
}
