## Goal

Kill the "row of bordered boxes" pattern that repeats on every page, fix the header on tablet widths, make the mobile menu actually usable, and drop the floating call button so only the WhatsApp bubble floats on the right.

## 1. Header & mobile menu

- `Nav.tsx`: the inline `+370 603 05146` pill is what's squeezing the nav links at ~900–1100px and forcing labels to wrap/clip. Move the phone pill out of the desktop bar — keep only the logo, nav links, theme toggle, and Consultation CTA on desktop. Phone number moves into the mobile drawer + footer (already there).
- Raise the breakpoint logic: nav links visible at `lg:`, but reduce link gap from `gap-8` to `gap-6`, use `text-[10.5px]` and `tracking-[0.16em]` so all six labels ("Company Formation, Fintech, Talent, Study Abroad, Why Lithuania, About") fit cleanly between 1024–1280px.
- Mobile menu fix: the drawer renders but is not interactive because the WhatsApp / Call FABs sit at `z-40` and the fixed nav is `z-50` — the drawer panel inherits the nav's stacking but its links sit under the FAB hit area on small screens. Move the WhatsApp FAB to `z-30` and add `pointer-events-none` to its outer wrapper with `pointer-events-auto` on the bubble, and ensure the open drawer covers full viewport width with `inset-x-0` and `z-50`. Also close the drawer on route change (listen to `pathname`).
- Add a visible "Get consultation" CTA + tel link inside the drawer for mobile conversion.

## 2. Remove the Call FAB, keep WhatsApp only

- Delete `CallNowFab` usage from `__root.tsx` (file can stay but unmounted).
- `WhatsAppFab.tsx`: move from `bottom-5 left-5` to `bottom-6 right-6` (where the call button used to sit), keep the green bubble, ping ring, and the hover "Chat on WhatsApp" label sliding in from the right.

## 3. Replace boxy grids — one distinctive pattern per page

The rule: no page may use the current `border border-foreground/10 p-7` card grid. Each page gets its own treatment so the site feels composed, not templated.

### Home (`/`) — "Proof cases" (screenshot 2, dark navy)
Convert the 3-up case cards into a **horizontal split-rail**: one wide editorial panel where the three stories scroll-snap horizontally on mobile and animate as a stacked carousel on desktop. Active case fills 60% width; the other two collapse to vertical "spines" showing only the eyebrow (`TALENT · PAKISTAN → LITHUANIA`) rotated 90°. Click a spine to expand. No borders — separation is via a thin gold hairline between panels and a subtle parallax on the active panel's background tint.

### Home — "Four reasons" (screenshot 3, cream)
Replace 4 equal boxes with an **editorial numbered list**: oversized serif numerals (01–04) at 180px running down the left of each row, headline + body to the right, a thin gold underline that draws on scroll. Rows stack vertically, alternating left/right alignment (zigzag), with a faint Lithuanian map line-art watermark behind the section. Hover: numeral fills with gold and a small chevron slides in.

### Lithuania / Company Formation (screenshot 1, mint background) — service grid
Replace the 6 numbered service cards with a **fanned playing-card stack** on desktop (cards overlap by ~30%, hovered card lifts and spreads its neighbours) and an **accordion list** on mobile. Each card keeps the 01/02 numeral and headline but loses the hard border — instead uses a soft inner shadow + gold corner notch (clip-path) that animates on hover. Add a small lucide icon per service.

### Fintech, Recruitment, Study Abroad — `StepFlow` retreatment
Rewrite `StepFlow` to a **connected timeline**: a horizontal gold rail with numeral nodes; titles sit above the rail, bodies below in alternating positions. Replace bordered tiles with floating typographic blocks separated only by the rail and a subtle dot pattern. Active node (scroll-triggered) pulses gold.

### Why Lithuania — "at a glance" tiles
Replace the four Tilt3D glass boxes with a **bento mosaic** of 5 unequal blocks (one tall hero stat, three medium, one wide quote). No outlines — separation via different background tints (midnight, gold-soft, rose-soft, photo, transparent) and asymmetric gaps. Each tile uses a different content treatment (counter, photo + caption, blockquote, icon stat, map fragment).

### About — values / leadership grids
Replace bordered value cards with a **two-column editorial layout**: large pull-quote on the left, list of values on the right rendered as a typographic ladder (no boxes, just dividers + hover gold). Women-in-leadership panel keeps its rose gradient but loses internal box outlines.

### Contact — wizard chips and sticky rail
Strip borders from intent chips → underline-only with gold fill on selection. Sticky rail becomes a vertical typographic stack (no card) with hover gold accents.

### Footer / ConsultationCTA
Audit and remove any remaining `border ... p-6/p-7` card patterns; use dividers or background tint differentiation instead.

## 4. Shared primitives (new / changed)

- **New** `src/components/site/EditorialList.tsx` — numbered zigzag rows used by Home reasons + reusable elsewhere.
- **New** `src/components/site/CaseRail.tsx` — split-rail / spine carousel for Home cases.
- **New** `src/components/site/FanStack.tsx` — fanned-card stack for Lithuania services (with mobile accordion fallback via shadcn `Accordion`).
- **New** `src/components/site/Bento.tsx` — unequal mosaic grid primitive for Why Lithuania.
- **Rewritten** `StepFlow.tsx` — horizontal timeline rail variant.
- **Updated** `Nav.tsx`, `WhatsAppFab.tsx`, `__root.tsx`.
- **Removed from render** `CallNowFab` (file kept for now, not mounted).

## 5. Motion & interactivity budget

Stay within the already-approved "premium-restrained" budget: reveal-on-scroll, gold-line draw, magnetic hover on numerals, scroll-snap on rails, subtle parallax on the case rail backdrop, pulsing active node on the timeline. No bouncy springs, no auto-playing carousels, no global 3D.

## 6. Verification

- `tsgo --noEmit`
- Playwright sweep at 390 / 768 / 1024 / 1440px on `/`, `/lithuania`, `/why-lithuania`, `/study-abroad`, `/recruitment`, `/fintech`, `/about`, `/contact`. Screenshot each to confirm: no bordered-box grids remain, header links don't clip at 1024px, mobile drawer opens and links are clickable, only WhatsApp FAB is visible on the right.
- `prefers-reduced-motion` still disables animations.

## Out of scope

No copy rewrites beyond the structural changes above, no new backend, no new imagery beyond what's already generated.
