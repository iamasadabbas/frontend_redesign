import { Handshake, Headphones, MessagesSquare } from "lucide-react";

const MONO = "[font-family:var(--font-home-mono)]";
const SANS = "[font-family:var(--font-home-sans)]";

/**
 * Support section — "Redesign Concept" version: eyebrow + heading +
 * intro on the frame tint, then one bordered white block divided into
 * three cards (icon chip, title, intro, dash bullets, email bar).
 * Emails are the Concept frame's .no addresses (the Page-1 frame and
 * the old build used .com — see REDESIGN-NOTES).
 */
const cards = [
  {
    Icon: MessagesSquare,
    title: "Salg",
    intro:
      "Utforsk hvordan Betalia kan effektivisere virksomheten din og bidra til økt lønnsomhet.",
    checks: [
      "Gratis demo og rådgivning",
      "Skreddersydde løsninger",
      "Rask oppstart og onboarding",
    ],
    email: "salg@betalia.no",
  },
  {
    Icon: Headphones,
    title: "Support",
    intro:
      "Få hjelp med konto, maskinvare eller bruk av systemet raskt og enkelt.",
    checks: [
      "Teknisk support og feilsøking",
      "Hjelp med oppsett og integrasjoner",
      "Opplæring og veiledning",
    ],
    email: "hei@betalia.no",
  },
  {
    Icon: Handshake,
    title: "Partnerskap",
    intro:
      "Interessert i et samarbeid med Betalia? Vi hjelper deg med å skape nye muligheter gjennom sterke partnerskap.",
    checks: [] as string[],
    email: "partner@betalia.no",
  },
];

export default function ContactCards() {
  return (
    <section className="px-0 lg:px-8 xl:px-[80px]">
      <div className="mx-auto max-w-[1280px] border-x border-y border-[#EEE3E8] bg-[#FBF6F8] px-5 pb-[96px] pt-[86px] sm:px-8 lg:px-[32px]">
        <p
          className={`text-[12px] uppercase leading-none tracking-[1.2px] text-[#AE4D70] ${MONO}`}
        >
          — Support —
        </p>
        <h2
          className={`mt-4 max-w-[720px] text-[40px] font-semibold leading-[1.12] tracking-[-1.4px] text-[#1A1218] lg:text-[44px] ${SANS}`}
        >
          Rask hjelp og skreddersydde løsninger til hele virksomheten din
        </h2>
        <p className="mt-5 max-w-[700px] text-[16px] leading-[1.6] text-[#6E6168]">
          Vi tilbyr salg, teknisk support og partnerskapsdialog — alt
          organisert i en tydelig, minimal struktur som gjør det enkelt å
          finne riktig kontaktpunkt.
        </p>

        <div className="mt-[56px] grid grid-cols-1 border border-[#EEE3E8] bg-white md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`flex flex-col p-[36px] ${i > 0 ? "border-t border-[#EEE3E8] md:border-l md:border-t-0" : ""
                }`}
            >
              <span className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#FBF6F8] text-[#AE4D70]">
                <card.Icon size={22} />
              </span>
              <h3
                className={`mt-[28px] text-[24px] font-semibold leading-[1.25] tracking-[-0.5px] text-[#1A1218] ${SANS}`}
              >
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-[#6E6168]">
                {card.intro}
              </p>
              {card.checks.length > 0 && (
                <ul className="mt-4 space-y-2 text-[15px] leading-[1.5] text-[#6E6168]">
                  {card.checks.map((check) => (
                    <li key={check}>— {check}</li>
                  ))}
                </ul>
              )}
              <div className="mt-auto pt-[32px]">
                <div className="border-t border-[#EEE3E8] pt-[24px]">
                  <a
                    href={`mailto:${card.email}`}
                    className="block bg-[#FBF6F8] py-[14px] text-center text-[15px] font-semibold leading-none text-[#1A1218] underline underline-offset-4"
                  >
                    {card.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
