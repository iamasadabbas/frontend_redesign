import FaqCards, { type FaqItem } from "@/components/site/FaqCards";
import { faqs } from "@/data/faq";

/**
 * Hardware FAQ — Norwegian Betalia POS FAQs on /hardware and /hardware/cashier,
 * with all items closed by default.
 */
const items: FaqItem[] = faqs.map(({ question, answer }) => ({
  question,
  answer,
}));

export default function LosningerFaq() {
  return <FaqCards items={items} />;
}
