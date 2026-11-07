import FaqCards, { type FaqItem } from "@/components/site/FaqCards";

/**
 * Hardware FAQ — matches the "Redesign Concept" frames (Løsninger.png
 * and Løsninger- BetaliaPOS.png) verbatim, with item 02 open by default.
 */
const items: FaqItem[] = [
  {
    question: "How do you clone a template from the Showcase?",
    answer:
      "You can clone any template directly from the Showcase by opening the project page and clicking the Clone button to copy it into your workspace.",
  },
  {
    question: "What is Webflow and why is it the best website builder?",
    answer:
      "Webflow is a powerful web design tool that allows designers to build fully responsive websites visually—without writing code.\n\nIt combines the flexibility of custom code with the simplicity of drag-and-drop interfaces. With features like CMS integration, SEO controls, and advanced animations, Webflow empowers both beginners and professionals to create high-quality websites efficiently.",
  },
  {
    question: "Can I update my site on my own?",
    answer:
      "Yes. With the built-in Editor and CMS, you can update text, images, menus, and content at any time without needing a developer.",
  },
  {
    question: "When was Webflow officially launched?",
    answer:
      "Webflow was founded and officially launched in 2013 to empower designers to build for the web visually.",
  },
];

export default function LosningerFaq() {
  return <FaqCards items={items} defaultOpenIdx={1} />;
}
