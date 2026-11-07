# Betalia redesign — delivery notes (2026-11-05)

## CONCEPT UPDATE (2026-11-06, in progress) — "Redesign Concept" page is the new design source

The client confirmed the updated design lives on the Figma "Redesign Concept"
page (10 frames, all 1440 wide, #FBF6F8). Delta-only updates on the owner's
own cleaned codebase — no scratch rebuild. The Concept design applies the
Home page's visual system site-wide. Owner's decisions: the hardware
sub-nav strip is REMOVED (the Concept frames have none; the nav dropdown
replaces it). Shared changes: new SiteCTA/SiteFooter (components/site/
SiteClosing.tsx) — gradient CTA band with a two-field mini form (no card
title) + solid dark footer, unnumbered column labels, KONTAKT column with
Strandveien 20, 3050 Mjøndalen and hei@betalia.no; HomeNav gains the
Løsninger mega-dropdown (6 products, thumbnails + labels).

- **Home (/) — DONE.** Hero trust line above the eyebrow removed (not in
  the Concept frame), hero height 800 → 701, payments band moved to
  directly above the CTA (its Concept position), CTA/footer swapped to
  the shared Concept system. Verified at 1440: total 4623 vs frame 4634,
  industries 1912 vs 1907, footer height 406 = frame. Mobile 430 checked.
- **About (/about) — DONE.** Hero rewritten to the Concept version (white
  panel + plus-grid, eyebrow chip, two-tone H1; the Page-1 intro block and
  corner photos are gone). Dark band: same content, bg now #2A1328, photos
  588 tall in the 1280 panel system. Visjon rebuilt as eyebrow + intro +
  2x2 hairline card grid. Closing swapped to SiteCTA/SiteFooter. Verified
  at 1440: total 3449 vs frame 3455, dark band 640-1521 vs 640-1522,
  footer 406 = frame. Two Figma slips in the Concept frame, handled and
  flagged: card 02's body duplicates card 01's text (distinct Page-1 text
  kept) and the last card is numbered "03" in the frame (rendered 04).
- **Kontakt (/contact) — DONE.** Hero rewritten (panel + plus-grid,
  "Velkommen til Betalia Support"). Support cards rebuilt in the Concept
  style with the frame's .no emails — salg@betalia.no, hei@betalia.no,
  partner@betalia.no (this resolves the old .com-vs-.no open item in
  favour of .no). NEW form + map section ("Skriv til oss eller finn
  veien til oss på hovedkontoret"): form card + the client's own
  contact-map.png + Hovedkontor card. Address discrepancy IN THE FRAME:
  the card reads "Strandveien 20A", the footer "Strandveien 20" — both
  implemented as designed; client to confirm which is right. FAQ rebuilt
  as the shared FaqCards component with the frame's four questions and
  the codebase's answers (the frame's only answer is recycled body
  copy; the multi-location FAQ from the data file is not in the frame
  and is not rendered, though it remains in the FAQ JSON-LD data).
  Verified at 1440: total 4322 vs frame 4327, CTA 3433 vs 3437,
  footer 3915 vs 3920.
- **Løsninger (/hardware) — DONE.** Sub-nav strip REMOVED (per Concept;
  the nav dropdown replaces it — Asad left this call to Muse). Hero
  rebuilt in the panel system with the frame's buttons ("Få et tilbud"
  opens the lead modal; "Se løsninger" scrolls to Muligheter) and the
  four-item trust strip. Muligheter cards + Nettbestilling/Lojalitet
  blocks rebuilt (copy verbatim from the frame; the devices image is
  the codebase's nettbestilling.png). Integrasjoner: the pink pill band
  is GONE — replaced by two text cards, the Regnskap card and a logo
  grid (tripletex / PowerOffice / fiken / Wolt / foodora as styled
  text). Comparison rebuilt as one bordered 3-column grid (photos =
  the codebase's Figma crops; the name bar keeps the product-swap
  select). FAQ = FaqCards with the codebase's Norwegian FAQs (frame
  FAQ is Webflow placeholder). Verified at 1440: total 6090 vs frame
  6066. LosningerFaq still accepts the POS page's legacy layout props
  until that page's update removes them.
- **Betalia POS (/hardware/cashier) — DONE.** Sub-nav strip removed.
  Hero in the panel system (terminal art on its pink square; the
  frame itself was captured with the nav dropdown open — the live
  dropdown reproduces that state on hover). Features = four flat
  cards in a row. Hardware = numbered item chips + the annotated
  diagram. The dark industry band is now four EQUAL photo columns
  (Resturant [sic — the frame's spelling] / Bakeri / Kafé / Fastfood);
  the Page-1 mosaic widths are gone. Specs moved after the band
  (the Concept order) as a bordered two-column table. PosBygget's
  closing photo scatter is removed, as on every Concept page. The
  LosningerFaq legacy layout props are gone from both the component
  and this page's call. Verified at 1440: total 5057 vs frame 5102,
  CTA 4169 vs 4212 (the frame's FAQ is long Webflow placeholder;
  the live page renders the real Norwegian FAQs).
- **Online & QR (/hardware/online-qr) — DONE.** Sub-nav strip removed;
  QrClosing photo scatter removed. Hero in the panel system ("Nett-
  bestilling med QR-kode"). Features = the frame's seven numbered
  hairline rows + the QR table-stand photo; loyalty block below.
  The old Permanent-Marker stats line is replaced by the Concept
  version: "0 % provisjon på nettbestillinger til Betalia" over three
  clean stat boxes (−25% / 50s / +25%). Platform table ("Alt du
  trenger") in the bordered two-column pattern. NO FAQ on this page,
  as in the frame. Verified at 1440: total 4291 vs frame 4284.
- **Devices-image correction (QR + Hardware):** the codebase's
  hero-ordering.png / nettbestilling.png have a dark-purple studio
  background baked in, but BOTH Concept frames show the same devices
  on white. Cropped the devices from the Concept exports at full
  resolution (hero-ordering-concept.png, nettbestilling-concept.png)
  and swapped them in on both pages; if the client supplies the
  original light-background renders, drop them in under the same
  names. The client's dark-background assets remain in the repo,
  unused by these two spots.
- **Kjøkken Pluss / KSD (/hardware/ksd) — DONE.** Sub-nav strip and
  KsdClosing scatter removed. Hero in the panel system; the hero art
  is the frame's tablet render, cropped from the Concept export
  (hero-tablet-concept.png) — the codebase's hero-kitchen.png photo
  is not what the Concept frame shows. Features = the frame's five
  numbered hairline rows + the in-kitchen photo. Specs section is
  panel-less on the tint (grid background) with the table as a white
  card, as in the frame. VERIFIED at full zoom: the spec value reads
  "Opptill 24``" in the Concept frame too (double l, two backticks) —
  an earlier low-zoom reading of "Opptil 24\"" was wrong; the text is
  unchanged from the codebase. Verified at 1440: total 3155 vs
  frame 3164.
- **Kunde Display (/hardware/display) — DONE.** Sub-nav strip and
  DisplayClosing scatter removed. Hero heading shortened to the
  frame's "Bestillingsstatus"; the hero art is the flat status-screen
  UI cropped from the Concept export (hero-screen-concept.png) —
  the codebase's hero-photo.png is the same UI photographed on a
  tiled wall. Features = the frame's 2x2 divided card grid with no
  section heading. Specs panel-less on the tint with the white table;
  NOTE the Concept table's labels are Norwegian (Skjermoppløsning /
  Tilkobling / Kompatibilitet) where the Page-1 build's frame had
  English labels, and the value reads "Støtte opptil 65`` skjerm"
  with the frame's double backticks. Verified at 1440: total 2663
  vs frame 2690.
- **Betalia Express (/hardware/self-kiosk) — DONE.** Sub-nav strip and
  ExpressClosing scatter removed; the dark industry band is the
  shared PosBand (identical in both Concept frames). The 70 % / 99% /
  +25% stats row now closes the hero panel, as in the frame (in the
  Page-1 build the stats lived in the features section). Hero art:
  the codebase's hero-art.png has its own scene baked in, so the
  kiosk was cut out of the Concept export with its background masked
  away (hero-kiosk-concept.png, transparent PNG). "Skapt for en
  enklere arbeidshverdag" now has text left / photo right (swapped
  vs the Page-1 build). FLAG for the client: the features section's
  eyebrow in the Concept frame literally reads "— Spesifikasjoner —"
  although it heads the feature cards (the specs section lower down
  has its own "— Specs —") — implemented as designed. Verified at
  1440: total 4918 vs frame 4915.
- **Backoffice (/hardware/back-office) — DONE.** Sub-nav strip and
  BackofficeClosing scatter removed. Features are now the frame's
  divided 4x2 grid (seven icon cells + the dark "Og mye mer" cell)
  instead of the Page-1 build's text-row list. Hovedkontor swapped
  to text left / photo right. FLAGS for the client (reproduced as
  designed): this frame's features heading + intro are the
  Display/Express copy ("Den smarte plattformen for moderne
  kundedialog" / "Velg den løsningen som passer best …"), and its
  eyebrow reads "— Spesifikasjoner —" — both look like copy-paste
  slips in the Figma frame. Verified at 1440: total 3313 vs frame
  3316.
- **Pop up lead-form modal (RegistrationModal) — DONE.** Restyled to
  the Concept "Pop up" frame: wide white card, purple Betalia logo
  centred on top, tint-filled fields, consent line with shield icon,
  rose "Send forespørsel" button bottom-left (213x51). Form state,
  the prefill support and submit behaviour are unchanged; following
  the frame, Etternavn is now marked (and set) required and the
  phone placeholder reads "Telefon". Two deliberate keeps: the
  consent checkbox still exists inside its label (visually hidden —
  the frame shows no box, but the value is still recorded), and a
  subtle close X stays top-right although the frame shows none, so
  the modal can always be dismissed. Verified visually against the
  frame via a temporary preview route (removed afterwards).
- **Final responsive pass — DONE.** All ten pages audited at 1536 /
  1280 / 1024 / 768 / 430: document scroll width equals the viewport
  width everywhere (no horizontal scrollbar) and no clipped text.
  One fix came out of the audit: at exactly 1024 the KSD, Display,
  Express and Online&QR hero rows still went side-by-side and their
  560px art boxes overflowed the panel (clipped, no scrollbar) —
  those heroes now stack until xl (1280), and the QR hero image is
  capped at 580px. Desktop measurements at 1440 are unchanged.
  THE CONCEPT UPDATE IS COMPLETE: all ten pages + the Pop up modal.

## RESPONSIVE PASS (2026-11-06) — all pages, all screen sizes

The Figma frames are desktop-only (1920px / 1440px), so below
the design width the pages now degrade gracefully instead of
breaking. Verified by an automated audit of all ten pages at
1536 / 1280 / 1024 / 768 / 430px: no horizontal scrollbar
anywhere, and no text element extends past the viewport on any
page at any width. At the design widths nothing changed (Home
is pixel-identical to the approved delivery; the other pages
differ only by the 10px header shift from the header
unification, plus the Display feature cards, which now use
min-height like the /hardware cards and grew ~14px so their
text is never crowded).

What changed, by pattern:
- Heroes (Online&QR, KjøkkenPluss, Display, Express,
  Backoffice): the product image was positioned for the 1920px
  canvas and vanished off-screen on smaller screens. Below
  1024px each hero stacks: text first, image full-width below.
- Two-column feature/pricing sections (KjøkkenPluss, Online&QR,
  Display cards, Express "Skapt", Backoffice "Hovedkontor",
  Express "Velg", /hardware Nettbestilling): the fixed-width
  rows crushed or cut their text below ~1700px; they now stack
  into one column below 1700px (Display's cards become a
  2-column grid, then 1).
- Specification tables: their 241–320px side padding crushed
  the rows on small screens; padding now steps down (80px
  below 1280px, 24px below 1024px).
- POS page: the hardware diagram is fluid instead of a fixed
  880px; the Verifone info card sits in the flow below the
  feature grid except on very wide screens (≥1800px), where it
  keeps its designed position; the handheld photo hides below
  1280px.
- Closing sections (all solution pages): the photo tiles are
  decorative and positioned for 1920px; below 1024px they hide
  and the heading becomes a normal centred block, and the CTA
  card no longer overlaps the section.
- Footers: the link columns overflowed between 1024–1280px;
  their spacing now steps down in that range (unchanged at
  1280px+). Home's footer link grid is 2×2 in that range, and
  one fixed-width stat caption on Home is fluid below 1100px.
- /hardware: the page wrapper now clips horizontal overflow
  like the other pages (its Nettbestilling row also stacks).
This zip (betalia-final-responsive-v3-2026-11-06) supersedes
betalia-final-complete-v2-2026-11-06.

## OWNER REVIEW FIXES (2026-11-06) — header unification + laptop-width defects

Four issues from the owner's manual review, all fixed and
verified at 1920 / 1536 / 1440 / 1366:

1. HEADER: the site had four different headers. Per the owner's
   instruction there is now ONE header on all ten pages — the
   Home page's (HomeNav: 70px, logo mark, Hjem/Løsninger,
   Kundeportal + solid "Få et tilbud" button, which also makes
   that button open the registration modal everywhere; on
   /hardware it was previously a dead button). The solutions
   sub-nav strip stays under it on the seven hardware pages.
   Deliberate deviation from the Figma frames, whose own headers
   differ per page: everything below the header is unchanged,
   and page content now starts 10px higher than the frames
   (70px header instead of 80px).
2. MULIGHETER (/hardware): the cards' fixed 152px height
   clipped the middle card's text on narrower screens. Cards
   now use min-height 152px with equal-height rows and a 12px
   bottom padding matching the frame's text gap: 155px at
   1920px, growing as needed below that — no clipping at any
   width.
3. INTEGRASJONER (/hardware): the pill-stack image sat at its
   1920px Figma coordinate (left 1215), forcing the page to
   1668px wide on smaller screens. It keeps the exact Figma
   position at viewport ≥1700px and flows inside the band
   below that; the band clips overflow.
4. FOOTER LOGO: the vertical Betalia wordmark sat 19px too
   close to the footer's left edge (32px vs the frame's 51px).
   Shifted in the shared footer component; re-measured at
   50–51px, matching the frame.
Also: the six solution subpages had the same off-canvas
overflow class (absolutely positioned 1920px-canvas elements);
their wrappers now clip horizontal overflow like About/Contact
already did. Final width audit: no horizontal scrollbar on any
of the ten pages at 1536 / 1440 / 1366. This zip
(betalia-final-complete-v2-2026-11-06) supersedes the previous
final zip.

## FINAL CHECK + SEO completion (2026-11-06)

All ten rebuilt pages were re-screenshot from the final build
and compared pixel-by-pixel against their delivered versions:
zero drift on every page (Home compared at its 1440px design
viewport). Page heights vs the Figma frames: Home 4782/4754,
About 3616/3615, Contact 3655/3656, Løsninger 6218/6219, POS
6399/6402, Online&QR 4413/4414, KjøkkenPluss 3928/3928, Display
3322/3324, Express 4939/4936, Backoffice 3896/3896.

SEO audit of the rendered pages: every page has a unique
title and meta description (the client's own copy from
lib/page-seo), a canonical URL, JSON-LD (product + breadcrumbs;
organisation/website/FAQ schemas where the codebase defines
them), exactly one H1, alt text on every image, robots
"index, follow", lang="nb", and all ten routes are in the
sitemap with robots.txt allowing everything.

One gap was found and fixed: /, /about and /contact defined
their own openGraph block without images, which in Next.js
replaces the layout's default block — so those three pages
served no og:image. They now use the same default OG image as
the rest of the site (lib/seo defaultOgImage), verified live.
This final zip (betalia-final-complete-2026-11-06) supersedes
the per-page zips.

## UPDATE — Backoffice page rebuilt pixel-matched (2026-11-05, eleventh delivery — ALL TEN PAGES NOW REBUILT)

The last solution subpage (/hardware/back-office, Figma
"Løsninger - Backoffice" frame, 1920 x 3896) was rebuilt
pixel-by-pixel with the same method (final page height 3896,
exactly the frame's; scoped components in
`components/hardware-page/`: BackofficeHero, BackofficeFeatures,
BackofficeHoved, BackofficeClosing; header is the POS header
with no sub-nav item marked active, as in this frame).

- The hero's dashboard photo fills its square-cornered frame
  exactly (crop from the Figma export, including the faint blue
  glow over the monitor).
- This frame's footer block sits 6.5px LEFT of the centred
  position used on most other pages (footer Left 209); the
  shared footer is shifted accordingly. Its gradient is the
  636px variant with the standard 113px card overlap.

New open items (in addition to the list below):
33. This frame marks NO sub-nav item active (all six labels
    two-tone) — same inconsistency as items 24/27; implemented
    as designed.
34. The hero photo, the Hovedkontor tablet photo and the eleven
    scatter photos are crops from the Figma export
    (`public/images/backoffice/`).
35. Two layer-panel details disagreed with the frame's render
    and the render was implemented: the Hovedkontor body is not
    constrained to the panel's 576px inner width (its rendered
    lines run the full 770px column), and the closing scatter's
    right-hand flanking tile sits at column 9 (x1749), not
    column 8. The feature list's last row ("Og mye mer") has no
    divider under it in the frame; implemented as rendered.

## UPDATE — Betalia Express page rebuilt pixel-matched (2026-11-05, tenth delivery)

The fifth solution subpage (/hardware/self-kiosk, Figma
"Løsninger- Betalia Express" frame, 1920 x 4936) was rebuilt
pixel-by-pixel with the same method (final page height 4939 vs
the frame's 4936; scoped components in `components/hardware-page/`:
ExpressHero, ExpressVelg, ExpressSkapt, ExpressTable,
ExpressClosing; header is the POS header with no sub-nav item
marked active, as in this frame).

- The hero kiosk stands unclipped on its pink ellipse; the whole
  composite (ellipse + glow + kiosk) is one crop of the Figma
  export, clipped at the hero's bottom edge exactly as the frame
  clips it.
- The photo strip is one crop of the export's visible slice; the
  stats row includes the frame's fourth, empty cell.

New open items (in addition to the list below):
30. The closing heading's stored text in Figma reportedly reads
    "Bygget for vekt", but the frame RENDERS "Bygget for vekst –
    Skapt for suksess" (verified on the export at full
    resolution); the rendered version was implemented.
31. The photo strip's first label reads "Resturant" (missing an
    'a') in the frame itself, and the first photo starts off-page
    so the label is cut to "urant" at the page edge; both are
    reproduced as designed. The strip photos and labels are one
    crop from the Figma export (`public/images/express/`), as are
    the hero composite, the Skapt photo and the scatter photos.
32. The Skapt body copy contains the frame's own error "…får du
    mer ut av hver arbeidsdag flere kunder, bedre flyt…" (missing
    punctuation after "arbeidsdag"); kept verbatim. Also: the
    stats row's fourth cell is empty in the frame (kept), and the
    hero eyebrow's pink second word ("EXPRESS") is not visible in
    the Figma panel's colour list, which shows only black 50% —
    the render's two-tone eyebrow was implemented.

## UPDATE — Display page rebuilt pixel-matched (2026-11-05, ninth delivery)

The fourth solution subpage (/hardware/display, Figma "Løsninger -
Display" frame, 1920 x 3324) was rebuilt pixel-by-pixel with the
same method (final page height 3322 vs the frame's 3324; scoped
components in `components/hardware-page/`: DisplayHero,
DisplayFeatures, DisplaySpecs, DisplayClosing; header is the POS
header with NO sub-nav item marked active — see item 27).

- The hero photo overflows its frame visibly (the frame does not
  clip it in the render), so the full photo is placed as designed.
- This frame's footer block sits 9.5px right of centre (footer at
  x225, CTA card at x397) and its visible gradient is 636px tall
  (the 692px frame extends 56px below the page); the shared footer
  is used with the 636 height and a 19px left padding on its
  wrapper, which shifts both centred boxes by exactly +9.5px.
- The closing section is shifted 54px right, so its heading
  centres on x1014, not on the page centre.

New open items (in addition to the list below):
27. This frame marks no sub-nav item active (all six labels are
    two-tone); between the pages the active-state handling is now
    inconsistent in the design itself (Online&QR marks itself,
    KjøkkenPluss still marks Online&QR, Display marks nothing).
    Each page was implemented exactly as its frame shows.
28. The spec table's row labels are English in the frame
    (Display / Resolution / Connectivity / Compatibility) while
    the values mix Norwegian and English; implemented as designed.
29. The fourth feature card's title renders in the frame as
    "Hold bestillingene i flyt gjennom hele serveringen."
    (plural "bestillingene", with trailing period) although the
    layer's stored text reads "bestillingen" (singular); the
    rendered version was implemented. The hero photo and the
    eleven scatter photos are crops from the Figma export
    (`public/images/display/`).

## UPDATE — KjøkkenPluss page rebuilt pixel-matched (2026-11-05, eighth delivery)

The third solution subpage (/hardware/ksd, Figma "Løsninger -
KjøkkenPluss" frame, 1920 x 3928) was rebuilt pixel-by-pixel with
the same method (final page height 3928, exactly the frame's;
scoped components in `components/hardware-page/`: KsdHero,
KsdFeatures, KsdSpecs, KsdClosing; header is the POS header).

- This frame's eyebrow is two-tone inside one word: "KJØKKEN" in
  black/50, "PLUSS" in brand pink — implemented as rendered.
- The feature checklist uses a different style from the Online&QR
  page: bold dark-purple (#2F1764) Manrope titles over the same
  grey Manrope descriptions.
- This frame's closing section sits 26px right of the page edge,
  so its photo scatter is shifted 26px against the other pages;
  implemented as rendered.
- There is no FAQ on this page.

New open items (in addition to the list below):
24. The sub-nav's all-black "active" label in this frame marks
    "Online & QR", not "KjøkkenPluss" — evidently carried over
    from the Online&QR frame and never updated. Reproduced as
    designed; flagging in case the designer wants this page's own
    item marked instead.
25. The first spec value is the frame's own verbatim text
    "Opptill 24``" — double l and two backtick characters.
    Implemented as designed; the client may want "Opptil 24\"".
26. The hero kitchen photo, the feature KDS photo and the eleven
    scatter photos are crops from the Figma export
    (`public/images/ksd/`). Two checklist descriptions (items 2
    and 4) showed stale, different sentences in Figma's canvas
    cache; the texts stored in the file's layers were implemented.

## UPDATE — Online & QR page rebuilt pixel-matched (2026-11-05, seventh delivery)

The second solution subpage (/hardware/online-qr, Figma "Løsninger -
Online&QR" frame, 1920 x 4414) was rebuilt pixel-by-pixel with the
same method (final page height 4413 vs the frame's 4414; scoped
components in `components/hardware-page/`: QrHero, QrFeatures,
QrMarkerStats, QrSpecs, QrClosing; the header is the POS header with
this page's sub-nav item marked active).

- This frame marks the current sub-nav item: "Online & QR" renders
  all black while the other five labels stay two-tone. Implemented
  as a prop on the shared sub-nav; each remaining subpage frame
  should be checked for its own active item.
- The frame's three stats now have their labels (this resolves the
  question in item 1 below): "REDUSERTE PERSONALKOSTNADER" -25%,
  "FRA QR TIL BESTILLING" 50s, "MER OMSETNING PER KUNDE" +25%.
- This frame's gradient footer is 636px tall (not 692) and overlaps
  the CTA card by 96px (not 113); the shared CTA/footer component
  now takes those as props, defaults unchanged for the other pages.
- The frame uses three extra fonts, loaded scoped to this page:
  Permanent Marker (eyebrow "24/7" and the "0 % provisjon" line),
  Kalam (the "&" in "Online & QR") and Manrope (feature bodies).
  There is no FAQ on this page.
- The closing photo scatter adds a third row of two edge tiles
  flanking the CTA card.

New open items (in addition to the list below):
21. The hero image (tablet + phone render) is 1000px wide starting
    at x977 in the frame, so its right edge bleeds off the page;
    implemented with the visible part cropped from the Figma export
    (`public/images/onlineqr/` also holds the QR table-stand photo
    and the eleven staff photos, all crops — the originals are not
    in the codebase).
22. The hero paragraphs' text in the Figma layers panel differs
    from what the frame actually renders (different wording in
    paragraphs two and three); the rendered copy was implemented.
23. The "Alt du trenger" table has a value ending "…personlige
    tilbud." and a label "Betalinger*" whose asterisk, like the POS
    page's, has no footnote in the frame.

## UPDATE — Betalia POS page rebuilt pixel-matched (2026-11-05, sixth delivery)

The first solution subpage (/hardware/cashier, Figma "Løsninger -
Betalia POS" frame, 1920 x 6402) was rebuilt pixel-by-pixel with the
same method (final page height 6399 vs the frame's 6402; scoped
components in `components/hardware-page/`: PosHeader, PosHero,
PosFeatures, PosHardware, PosBand, PosSpecs, PosBygget; the FAQ
reuses the Løsninger component with this frame's offsets, and the
CTA/footer component is shared).

- This frame's header DIFFERS from the overview's: the logo is the
  B-mark only, both nav items are semibold, and the side padding is
  48px. The solutions sub-nav is identical and is now a shared
  component (SolutionsSubNav) used by both headers.
- Hero heading is 60px ("POS-system" in brand pink), the buttons are
  centred in the text column, the feature cards follow the frame
  (card 2 is left-aligned, the others centred), and the black photo
  band, specifications table (8 rows) and the "Bygget for vekst"
  photo scatter all follow the frame.
- The FAQ again uses the frame's design with the codebase's real
  FAQs (the frame's is Webflow placeholder).

New open items (in addition to the list below):
18. Two spellings in the frame were implemented verbatim: the black
    band's first label reads "Resturant" (for "Restaurant") and the
    specifications table says "Octa-Core Performance Prosessor"
    (for "Prosessor"). The client may want both corrected.
19. Several images are crops from the Figma export because the
    originals are not in the codebase (`public/images/pos/`): the
    hero terminal render, the Verifone handheld photo, the hardware
    diagram, the four black-band photos (their white labels are part
    of the photos in the frame itself), the nine staff photos, the
    Verifone pictogram and the header B-mark logo.
20. The hardware legend reads "3. Betalingsterminal*" with an
    asterisk that has no footnote anywhere in the frame; reproduced
    as-is.

## UPDATE — Løsninger page rebuilt pixel-matched (2026-11-05, fifth delivery)

The Hardware overview (/hardware, Figma "Løsninger" frame, 1920 x 6219)
was rebuilt pixel-by-pixel with the same method: full-frame Figma
export, pixel measurements, scoped components
(`components/hardware-page/`), and screenshot comparison at 1920px
width (final page height 6218 vs the frame's 6219). This frame has its
own full-width header (full logo lockup, bold "Løsninger") plus a
six-item solutions sub-nav, which later solution pages will reuse.

- Hero (36px/60 heading — the frame's real size), checkmark strip,
  "Muligheter" cards (middle card is pink in the frame itself: a baked
  hover state, kept), Nettbestilling/Lojalitet, the pink "Smarte
  integrasjoner" band, the hardware comparison (full-width divider
  rows, row labels in the first column only, functional product
  selects as before) and the FAQ all follow the frame.
- The FAQ uses the frame's design (numbered rows, centred questions,
  mauve open card, second item open) with the codebase's real
  Norwegian questions and answers — the frame's own FAQ text is
  Webflow template placeholder and was not implemented.
- The CTA card + footer are identical in content to the Kontakt frame
  (same component reused); this frame leaves 84px of white below the
  footer, which is reproduced.

New open items (in addition to the list below):
15. In the Figma prototype, the hero's outlined "Få et tilbud" button
    links to betalia.no/vendor/login (the customer-portal address).
    It is implemented as a link to /contact, like the quote buttons
    elsewhere. The client should confirm the intended destination.
16. Some images are crops from the Figma export because the originals
    are not in the codebase: the Nettbestilling photo, the three
    comparison photos, the integration logo pill stack (Tripletex,
    PowerOffice, Fiken, Wolt, foodora) and the six sub-nav thumbnails
    (`public/images/hardware/`). The designer may want to supply the
    original files for print-quality resolution.
17. The open FAQ card is given the frame's height (276px); the real
    second answer is shorter than the frame's placeholder answer, so
    the card has more empty space at the bottom than the frame shows.

## UPDATE — Contact page rebuilt pixel-matched (2026-11-05, fourth delivery)

The Contact page (/contact, Figma "Kontakt" frame, 1920 x 3656 on a
#B96394 5% tint) was rebuilt pixel-by-pixel with the same method as
Home and About: full-frame Figma export, pixel measurements, scoped
components (`components/contact-page/`), and screenshot comparison at
1920px width (final page height 3655 vs the frame's 3656).

- The header is identical to the "Om oss" header, so AboutHeader is
  reused and the global navbar is now suppressed on /contact too.
- Hero: the second heading line is the Betalia wordmark as an IMAGE
  (extracted from the Figma export, `public/images/hero-wordmark.png`)
  followed by "Support"; the whole hero block sits 32px right of page
  centre, as placed in Figma.
- Cards, the form (transparent fields, #B96394 50% borders), the
  office photo (existing `contact-office.png`), the FAQ accordion
  (first item open) and the CTA-card footer follow the frame; footer
  internals match the About footer with this frame's own offsets.
- The map next to the form is a static screenshot in Figma itself; the
  asset (`public/images/contact-map.png`) is cropped from the Figma
  export so it matches pixel-for-pixel.

New open items (in addition to the list below):
11. Card emails and headings follow the Figma frame verbatim —
    sales@betalia.com / support@betalia.com / partners@betalia.com
    and the English heading "Partnerships". These differ from the
    Norwegian salg@ / support@ / partnerskap@betalia.no used in the
    first delivery (see item 6). The client should confirm which set
    is correct; the frame's set is what is currently implemented.
12. FAQ: the Figma frame contains only the first answer; answers 2–5
    are the existing codebase answers (same questions). Confirm the
    client is happy to keep the English FAQ on a Norwegian page.
13. The map image is cropped from the Figma export (the designer's
    source was a screenshot named "Screenshot 2025-09-10 133655.png").
    If the client wants a live/embedded map or a licensed image,
    supply it and it can be swapped in.
14. The hero wordmark PNG was extracted from the Figma export; a
    vector/original logo file from the client would be cleaner.


## UPDATE — About page rebuilt pixel-matched (2026-11-05, third delivery)

The About page (/about, Figma "Om oss" frame, 1920 wide) was rebuilt
pixel-by-pixel with the same method as Home: full-frame Figma export,
pixel measurements, scoped components (`components/about-page/`), and
screenshot comparison at 1920px width until sections matched (final
page height 3616 vs the frame's 3615).

- Scoped components: AboutHeader (1920 header: B-mark only, Løsninger /
  Support, pink "Få et tilbud", Kundeportal), AboutStory (OUR STORY
  intro + hero with the four rotated corner photos), AboutDark (black
  section, flush 4-photo grid), AboutVisjon, AboutCtaFooter (white CTA
  card overlapping the gradient footer). The global navbar is
  suppressed on /about (NavbarSwitcher), as on Home.
- Fonts: Poppins throughout, EXCEPT the OUR STORY intro paragraphs,
  which are set in CashSans — Figma's own rendering of that block
  matches CashSans line widths/wraps exactly (the Visjon body matches
  Poppins). The intro eyebrow's wide letter-spacing (~0.58em) is also
  taken from the frame.
- The hero subtext is offset ~21px left of centre in the frame
  (hand-placed in Figma) and is reproduced as-is.
- All copy is the frame's real copy (no FAQ/placeholder text exists on
  this page). Footer link labels follow this frame exactly ("Kunde
  display", "Kjøkkenskjerm(KDS)"), which differ slightly from the Home
  footer's labels.
- CTA email form opens the existing registration modal, same as Home.

New open items (in addition to the list below):
8. Figma links the hero's secondary "Få et tilbud" button to
   /vendor/login, which looks like a design slip; it opens the
   registration modal instead, consistent with the rest of the site —
   confirm the intended target.
9. This frame's header has no "Om oss" link and no Løsninger dropdown
   (plain links only); the About/Home scoped headers follow the frames.
   The shared navbar (Contact, Hardware pages) still has both — confirm
   which behaviour the client wants long-term.
10. Dark-section wide photo: the codebase's `hospitality.webp` is a
    portrait crop of the scene, while Figma shows a wider crop. The
    page uses the existing file with a matched crop position; if the
    client has the landscape original, replacing the file makes it
    exact.


## UPDATE — Home page rebuilt pixel-matched (2026-11-05, second delivery)

The first delivery's Home was rejected for visual difference, so Home (`/`)
was rebuilt from direct Figma exports of the "Betalia - Hjem" frame
(1440 × 4754) and verified by screenshot comparison over several rounds:

- New scoped components in `components/home/` (HomeNav, HomeHero,
  HomeStatsPayments, HomeSolutions, HomeIndustries, HomeFeatures,
  HomeCtaFooter); `app/page.tsx` composes only these. The global navbar is
  suppressed on `/` (NavbarSwitcher) because the Home frame has its own
  70px nav (Hjem / Løsninger + Kundeportal + solid CTA).
- All imagery is the actual Figma export (`public/images/home/*`): logo
  mark, hero hardware, 4 industry photos, feature visual (Verifone card
  baked into the export), Kassesystem icon.
- Corrections vs first delivery: SIX solution cards (not 3); CTA is a
  gradient panel with a white lead form (company + email fields; submit
  opens the existing registration modal); Home footer is the solid
  #2A1328 variant with 01/02/03 columns and © 2026 bar.
- Typography on Home: Poppins for headings, Inter for body text, IBM Plex
  Mono for the small caps labels — matched against the frame's line wraps
  (Poppins body copy wrapped ~4% wider than the design everywhere).
- Verified deltas after final round: total height 4782 vs frame 4754
  (+0.6%); all section wraps, card positions and footer columns match.
- The other 9 pages still carry the first-delivery design below; the same
  export-and-measure method will be applied to them on approval of Home.

Implemented from `IMPLEMENTATION-PLAN.md` + `FIGMA-SPEC-PASS1.md` (Figma file
"Redesign Betalia"). All copy uses proper Norwegian characters (å/ø/æ) taken
from the existing codebase — the plan file's ASCII transliterations were
never shipped. `npm run build` passes with all 22 routes. Every `/images/*`
path referenced in code exists under `public/images` (39 refs checked, 0
missing).

## Global / shared

- **Header unified** (`components/Navbar.tsx`, `MobileMenu.tsx`,
  `hardware/HardwareNavbar.tsx`): one 80px white sticky header for all
  marketing pages (HardwareNavbar is now a thin wrapper rendering the shared
  Navbar, so `NavbarSwitcher` and existing imports work unchanged).
  Logo image + "Betalia" wordmark; **Løsninger** dropdown with Kassen,
  Online & QR-bestilling, Selvbetjeningskiosk, Kjøkkenpluss, Display,
  Backoffice (+ "Alle løsninger" → /hardware); **Om oss** → /about;
  **Support** → /contact. Right side is now a pink **text** button
  "Få et tilbud" (16px, weight 600, arrow) that opens the existing
  registration modal — the solid "Kundeportal" header button is removed;
  login lives in the footer as "Logg inn" → /vendor/login. The mobile menu
  mirrors all of these links.
- **CTA** (`components/CTASection.tsx`): banner with heading
  "La oss finne den rette løsningen for deg" and primary button
  "Få et uforpliktende tilbud" (opens the registration modal). The old
  decorative floating-photo CTA and the footer's floating email card were
  replaced by this banner, per the plan.
- **Footer** (`components/FooterSection.tsx`): centred block, max-width
  1489px, radius 20px, background = existing `/images/footer_background.webp`
  (the Figma footer background is an image, not a CSS gradient — a
  `#AE4D70` 60% overlay keeps white text legible). Vertical Betalia logo on
  the left (desktop), headline "ENKELT Å BRUKE / FULLT AV MULIGHETER",
  columns **Løsninger** (Kassen, Online & QR-bestilling,
  Selvbetjeningskiosk, Kjøkkenpluss, Backoffice) and **Betalia** (Om oss,
  Support, Løsninger, Logg inn), bottom bar "© 2025 Betalia. All rights
  reserved." plus the existing social icons.
- **Hardware closing block** (`hardware/FooterCTA.tsx`): repurposed from the
  old external-image floating CTA into the plan's photo-grid section —
  heading "Bygget for vekst - Skapt for suksess" + 4 local photos
  (Restaurant/Kafé/Bakeri/Fastfood) — followed by the shared CTA. All
  hardware pages therefore end: photo grid → shared CTA → shared footer.
- Buttons now use radius 6px and the plan's padding (16px 26px); primary
  `#AE4D70`, secondary white with 1px `#EEE3E8` border and dark text.
- The hardware sub-nav strip (`HardwareStickyBar`) is unchanged in content
  but now sticks at `top-20` so it sits under the new sticky header.
- Registration modal, vendor portal, forms logic, SEO/metadata, sitemap and
  fonts (ExactBlock headings, CashSans/Poppins body — the existing code
  tokens, matching Figma's font-head/font-body variables) are untouched and
  verified working via the production build.

## Home (/)

- **Hero**: page background `#FBF6F8`; white inner panel (max-w 1280px,
  1px `#EEE3E8` side borders), 2 columns. Eyebrow "BETALIA POS" kept;
  headline first line dark, second line in `#AE4D70` — "med smarte
  kasseløsninger" (Figma spelling, replacing "kassesystemløsninger");
  subtext is the existing hero paragraph; buttons "Få et tilbud" (modal)
  and "Se løsninger" → /hardware. Existing BlurScroller product visual and
  GSAP intro kept.
- **Stats row (new, `HomeStats.tsx`)**: Over 10 års ERFARING / 24/7 SUPPORT
  / 99,9% OPPETID / Verifone PARTNER.
- **Payments strip (new)**: Vipps, BankAxept, Mastercard, Visa, Apple Pay,
  Google Pay, Klarna as greyscale text wordmarks (no logo files exist in
  the project).
- **Løsninger** (`PosSection.tsx` rewritten): heading "Teknologi som
  driver vekst", intro sentence taken from the existing footer CTA copy,
  and only THREE cards — Kassesystem, Online & QR, Kjøkkenskjerm — with
  existing `posData` copy/images and "Les mer" links. The old 6-item
  accordion is no longer used on the home page.
- **Bransjer** (`IndustrySection.tsx` rewritten): dark `#2A1328` section,
  heading "Bransjetilpasset programvare", 4 photo cards in Figma order
  Restaurant (fine_dining.webp), Kafé (cafes.webp), Bakeri
  (quick_services.webp — the existing Bakeri mapping in industryData),
  Fastfood (fastfood.png). This component is also used on the cashier and
  self-kiosk pages, which inherit the new dark look. Note: the existing
  industryData title "Resturant" was a misspelling; the rendered label is
  now "Restaurant".
- **Funksjoner** (`FeatureSection.tsx` rewritten): eyebrow "FUNKSJONER",
  heading "Alt du trenger, i én plattform". Left: `feature-hardware.png`
  with a white overlay card carrying the Verifone logo and the existing
  Verifone-partner text. Right: numbered 01–04 list with the four existing
  features (Komplett løsning for serveringsbransjen / Integrasjoner som
  sparer tid / Skybasert og alltid tilgjengelig / Rask og brukervennlig)
  and their existing `featureData` texts.
- `BusinessShowcase` and `FeatureCard` are no longer used by the home page
  (files kept on disk).

## Contact (/contact)

- Page content sits on the pale-pink page background (`#B96394` at 5%).
- **Hero** centred: "Velkommen til Betalia Support" with "Betalia" in
  `#AE4D70`, subtext "Hvordan kan vi hjelpe deg?".
- **Three cards** (radius 32px, `#B96394` 10% fill, 1px `#B96394` border,
  32px padding): Salg / Support / Partnerskap with Figma bullets and the
  Figma emails **salg@betalia.no**, **support@betalia.no**,
  **partnerskap@betalia.no** (these replace the old sales@/support@/
  partners@betalia.com addresses shown on this page).
- **Form + office**: existing form kept, fields aligned to Figma —
  Fornavn, Etternavn, E-post, Telefonnummer, "Hva gjelder det?", message
  "Hvordan kan vi hjelpe deg?", button "Send melding". (The old
  "Navn på restaurant" field was replaced by "Hva gjelder det?".) Right
  side keeps the office photo, the Google Map embed and the existing
  address (Strandveien 20A, 3050 Mjøndalen), now labelled "Besøk oss /
  Hovedkontor".
- **FAQ**: existing `ContactFAQ` kept (its questions match Figma's list),
  container widened to max-w 1200px.
- Shared **CTA + Footer** added (the contact page previously had no CTA).

## About (/about)

- **Hero (new `AboutHero.tsx`)**: centred headline "Bygget for vekst." +
  "Skapt for suksess." in `#AE4D70`; subtext is the existing OurStory intro
  paragraph; buttons "Kom i gang" (modal) and "Les mer" (→ #visjon). Four
  small rounded photos at the corners on desktop, hidden on mobile.
- **Vision block (new `VisionBlock.tsx`)**: large restaurant photo
  (fine_dining.webp) with the heading "Smart restaurantteknologi utviklet
  for dagens serveringsbransje." (taken from the existing ValuesSection),
  followed by the existing Visjon section — intro text plus the four points
  Smartere salg. Bedre kundeopplevelser. / Én plattform for hele
  virksomheten / Teknologi som skaper vekst / Mer tid til det som skaper
  verdi, with their existing descriptive texts.
- Per the plan, the page then goes straight to the shared CTA + Footer.
  `OurStory.tsx` and `ValuesSection.tsx` are no longer in the page
  composition (files kept on disk); their copy lives on in the hero
  subtext and vision heading/points.

## Hardware overview (/hardware)

- **Hero**: headline kept ("Kassesystem for restaurant, kafé og
  takeaway"), subtext kept, buttons now Kontakt oss (solid) + "Se et
  tilbud" (outline, opens modal); photo `hardware-hero.png` kept.
- **Checkmark strip** updated to the Figma items: Skybasert plattform /
  Kassesystem og nettbutikk / 24/7 support / Tilgang fra flere steder.
- **Muligheter**: existing three feature cards kept, restyled (active card
  now `#AE4D70`, borders `#EEE3E8`, radius 16px).
- **OnlineOrderingSection** kept as-is (existing content between Muligheter
  and Integrasjoner).
- **Integrasjoner**: restyled from solid pink to a pink tint (`#B96394`
  10%) with dark text; heading "Smarte integrasjoner" kept; a wordmark row
  now leads with **Tripletex, PowerOffice, Fiken, Wolt, foodora** (text
  wordmarks — no logo files in the project), followed by the existing
  integration items and image.
- **Sammenlign hardware**: existing `HardwareComparison` kept with its
  existing data; the heading typo "SAMMENLING" was corrected to
  "SAMMENLIGN HARDWARE" and selectors restyled to the new tokens.
- Existing (real) FAQ kept; page now ends with the photo-grid block +
  shared CTA + shared footer.

## Hardware subpages

Shared template kept: sticky solution strip under the header, 2-column
hero, feature area, spec table, existing real FAQs where present, photo
grid + shared CTA + shared footer. All hero outline buttons were relabelled
and restyled to the plan pattern, and button radii set to 6px.

- **Display** (/hardware/display): eyebrow BETALIA DISPLAY, headline
  "Bestillingsstatusskjerm", existing subtext. Buttons: Kontakt oss +
  "Se et tilbud" (the old first button read "Contact Sales"). The four
  Figma feature cards were already in `DisplayFeatures` with matching
  titles — the 4th title was aligned to the plan ("Hold bestillingsflyt
  gjennom hele serveringen"). Spec table: heading "Den smarte plattformen
  for moderne kundedialog."; rows updated to Figma — Display: Støtte opptil
  65" skjerm; **Resolution: 1920x1080 IPS Touch Display** (was 1920×1200 in
  the old code); Connectivity: Wi-Fi & Ethernet; Compatibility: Fungerer
  med Betalia Kasse.
- **Kjøkkenpluss / KDS** (/hardware/ksd): eyebrow changed from "Kitchen
  Display System" to KJØKKENPLUSS; headline and subtext kept (they match
  Figma). Buttons Kontakt oss + "Se et tilbud". Checklist section "Smart
  kjøkkenstyring i sanntid" already contained all five Figma items
  (Papirløst kjøkken / Sanntidsvarsler / Optimalisert ordrehåndtering /
  Fleksible skjermoppsett / Støtte for opptil 24" skjerm) — unchanged.
  Spec table ("Utviklet for maksimal effektivitet."): rows aligned to
  Figma — Skjerm Opptil 24"; Ordreoppdatering Synkronisering i sanntid;
  Tilkobling Wi-Fi & Ethernet; Kjøkkenstasjoner "Ubegrenset støtte";
  Integrasjon Betalia POS & Online Ordering (label localised from
  "Integration").
- **Online & QR** (/hardware/online-qr): headline "Online
  bestillingsplattform med QR-bestilling" and existing subtext kept;
  buttons Kontakt oss + "Få et tilbud" (outline → modal), as in Figma.
  Existing "Online & QR" checklist features and the "Lojalitet som skaper
  faste kunder" block kept. **New highlights block**: pink strip
  "0 % PROVISJON PÅ NETTBESTILLINGER TIL BETALIA" and the Figma stats
  -25% / 50s / +25%. **The stat labels were unreadable in Figma and no
  existing component has labels for these numbers, so the numbers are
  rendered without captions rather than inventing copy** — client to
  confirm labels. "Alt du trenger" table aligned row-by-row to Figma:
  QR-bestilling / Betaling (Støtter servering, takeaway og levering) /
  Betalinger (Kort- og Vipps) / Menyoppdateringer / Ordrebehandling (Live
  dashboard og varslinger) / Tilgjengelighet (24/7) / Lojalitetsprogram
  (Belønn kunder med poeng, rabatter og personlige tilbud).
- **POS / Cashier** (/hardware/cashier): eyebrow BETALIA POS; headline now
  "Moderne kasse & POS-system" with "POS-system" in pink (replaces
  "Kasseløsning utviklet for serveringsbransjen."); existing subtext kept.
  Buttons Kontakt oss + "Se et tilbud". Feature cards: eyebrow changed to
  "FUNKSJONER SOM GJØR HVERDAGEN ENKLERE"; the four existing cards
  (Komplett løsning / Skybasert / Rask og brukervennlig / Integrasjoner)
  kept with their texts. Existing CashierOverview and the real CashierFAQ
  kept. Spec table ("Utviklet for profesjonell drift."): Skjerm 15.6" Full
  HD berøringsskjerm and Prosessor Octa-Core kept; **Minne row now reads
  "128 GB SSD / 16 GB RAM" per Figma, and the separate Lagring row was
  removed to avoid duplicating the SSD figure**; the remaining existing
  rows (Betaling, Tilkobling, Kvitteringsskriver, Operativsystem) kept.
- **Self-Kiosk / Express** (/hardware/self-kiosk): eyebrow BETALIA EXPRESS;
  headline and existing subtext kept; buttons Kontakt oss + "Få et
  tilbud". Kiosk image (`selvbetjent-kasse.png`) now sits on a pale-pink
  circle. **New stats band**: 70% Raskere betjening / 99% Bedre
  kundeopplevelse / +25% Mer omsetning per kunde. "Skapt for en enklere
  arbeidshverdag" showcase kept, with the Figma mounting heading added —
  "Velg det som passer - gulvstativ, bordmodell eller veggmontert" (40px)
  with Gulvstativ / Bordmodell / Veggmontert options. Industry photo strip
  (existing IndustrySection) sits above the spec table, as before. Spec
  table "Alt du trenger i en selvbetjeningskiosk" aligned to Figma:
  Tilpasninger "Ubegrenset valg, tillegg og tilbehør"; Kjøkken
  "Øyeblikkelig synkronisering med kasse og kjøkkensystem"; other rows
  unchanged.
- **Back-Office** (/hardware/back-office): hero headline "En smartere måte
  å drive restaurant på", existing subtext and dashboard image
  (`backoffice.png`) kept; buttons Kontakt oss + "Se et tilbud". Existing
  feature list and showcase (incl. video) kept; page now ends with the
  photo-grid/trust block ("Bygget for vekst - Skapt for suksess") + shared
  CTA + shared footer.

## Copy kept from the existing code (Figma unreadable / per plan)

- All hero subtexts, feature descriptions and spec values not explicitly
  listed above are the existing codebase copy, unchanged — Figma copy
  matched the code wherever both were readable.
- **Placeholder FAQ warning**: the POS + overview FAQ visible in Figma is
  Webflow template placeholder text. It was **not** used. The existing real
  FAQs remain everywhere (`data/faq.ts`, `CashierFAQ`, `ContactFAQ`).
- Partnerskap card bullets: unreadable in Figma and the existing card had
  no bullets, so three bullets were derived from the existing card
  description, as the plan instructed — flagged here for client review.
- Online & QR stats (-25% / 50s / +25%): numbers only, labels pending
  (see above).

## Open items for the client

1. Online & QR stats labels for -25% / 50s / +25%.
2. Partnerskap card bullets (derived, see above) — confirm wording.
3. Footer: only the copyright line "© 2025 Betalia. All rights reserved."
   was confirmed in Figma; the old footer's extra bottom text
   ("Powered by Betalia" kept; the org-number line was dropped) and any
   additional bottom links (privacy/terms) need confirmation.
4. Footer "gradient" is delivered as the existing background image
   (`footer_background.webp`) with a pink overlay, per the plan — Figma's
   exact gradient stops were never read.
5. Payment/integration wordmarks (Vipps, BankAxept, Mastercard, Visa,
   Apple Pay, Google Pay, Klarna; Tripletex, PowerOffice, Fiken, Wolt,
   foodora) are text wordmarks — supply logo files if real logos are
   wanted.
6. Contact page emails changed to the Figma addresses
   (salg@/support@/partnerskap@betalia.no) — confirm these mailboxes exist.
   (SEO structured data still references the address already present in the
   codebase and was left untouched.)
7. Header wordmark is the existing logo image + "Betalia" text; Figma
   shows a gradient "B" logo — supply the new logo asset if it should
   replace the current one.
