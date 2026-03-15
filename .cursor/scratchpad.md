# Project Scratchpad

## D8X Content Extraction & Revamp Prep (Latest)

### What was done

1. **Analyzed d8x.exchange and related sources**
   - **Main site (https://d8x.exchange/):** Direct fetch timed out; main site content could not be scraped.
   - **D8X GitBook (https://d8x.gitbook.io/d8x):** Fetched and used for product overview, “Meet THE perpetual futures engine” positioning, what you can do on D8X, and perpetuals overview (TL;DR, types, funding, collateral).
   - **D8X Perpetuals Guide (GitBook):** Used for TL;DR, perpetual types (linear/inverse/quanto), funding mechanics, and contract properties.
   - **D8X Medium (Public Beta on Polygon zkEVM):** Used for launch narrative, quotes (Sandeep Nailwal, Caspar Sauter), partner frontends (d8x.trade, freelyperps.com, omnistrat.trade, decentralized-perps.com), funding/backers, FINMA, and official links (Docs, GitHub, Twitter, d8x.exchange).
   - **Web search:** Used to confirm D8X positioning (institutional-grade perpetual futures engine, Polygon zkEVM, white-label, BitMEX-like).

2. **Created content document**
   - **File:** `.cursor/docs/d8x-content-spec.md`
   - **Contents:** Single content spec for revamping the project, including:
     - Brand & meta (title, taglines, descriptions, keywords)
     - Hero / above-the-fold copy and CTAs
     - Sections: What you can do on D8X, Product overview (TL;DR), Perpetuals explained, Key features, Partner frontends, Why D8X, About
     - Suggested nav and footer with official links
     - External links table (Docs, GitHub, Twitter, main site, partner frontends)
     - Legal disclaimer reference
     - Implementation notes for replacing current (Axion) project with D8X-style content

3. **Revamp intent**
   - **Goal:** Replace current project (Axion in `.cursor/`) with the full content from d8x.exchange / D8X so the site is revamped to a D8X-style project.
   - **Next step:** Use `.cursor/docs/d8x-content-spec.md` as the single source of truth when implementing the revamp (copy, structure, links). Keep existing stack/animations; rebrand and swap in D8X content and sections.

4. **Hero content replaced (Executor)**
   - In `.cursor/assets/index-GniKqz-W.js` (minified React bundle):
     - `"SCALE WITH"` → `"MEET THE"`
     - `"AUTONOMY"` → `"PERPETUAL FUTURES ENGINE"`
     - Axion hero paragraph ("Deploy autonomous agents optimized for…") → D8X subhead: "Institutional-grade decentralized perpetual futures engine on Polygon zkEVM. Trade linear, inverse & quanto perps—white-label ready."
   - Hero now shows D8X headline and value proposition per d8x-content-spec.md.

5. **CTA and Pricing sections revamped (Executor)**
   - **CTA:** Headline "System Ready" → "Launch App"; body → "Trade perpetuals on partner frontends. Launch the app or choose a frontend to get started."; primary button already "Launch App."
   - **Pricing:** Label "ACCESS_CONTROL" → "PARTNER FRONTENDS"; headline "System / Access" → "Partner / Frontends"; description → "Trade on official partner frontends. Each frontend can set its own fees and branding—powered by the D8X engine."
   - All edits in `.cursor/assets/index-GniKqz-W.js` using code-path–anchored replacements.

### File locations

| Item | Path |
|------|------|
| D8X content spec (all copy/structure for revamp) | `.cursor/docs/d8x-content-spec.md` |
| Scratchpad (this file) | `.cursor/scratchpad.md` |
| Current app entry | `.cursor/index.html` |
| Current styles / animations | `.cursor/assets/` |

### Codebase Audit (March 2025)

- **Full report:** `.cursor/docs/CODEBASE_AUDIT.md`
- **Summary:** Two parallel systems: (1) Pre-built app in `.cursor/` (index-GniKqz-W.js) – what runs; (2) Source in `src/` – incomplete, missing App.tsx, cannot build.
- **Critical:** `src/App.tsx` missing; `main.tsx` imports it. Dev/build fail.
- **Edits today:** Done by patching the minified bundle; no React source for the live app.

### Source Rebuilt (March 2025)

- **Executor:** Rebuilt `src/` to match pre-built app. Created: `App.tsx`, `HeroSection`, `WhiteLabelSection` (6 cards), `FaqSection` (5 items from update-faq.js), `CtaSection`, `FooterSection`, `lib/utils.ts`. Wired `animations.css` in `index.css`. Build succeeds; outputs to `.cursor/`.

### Root Cleanup (March 2025)

- **Executor:** Removed all root-level project files and folders: `src`, `public`, `node_modules`, `index.html`, `package.json`, `package-lock.json`, `jsconfig.json`, `tsconfig*`, `tailwind.config.js`, `vite.config*`, `PROJECT_STRUCTURE.md`.
- Project now contains only `.cursor` (and `.vscode` for workspace config). `.cursor` is the sole project.

### Lessons

- When the main marketing site (d8x.exchange) is slow or timing out, official docs (GitBook) and blog (Medium) are sufficient to build a full content spec for a revamp.
- Keeping one content doc (d8x-content-spec.md) makes the revamp step repeatable and consistent.
- In a single-line minified bundle, use `"code-path":"src/sections/<Section>.tsx:<line>:<col>"` plus adjacent props (e.g. `className:...`, `children:...`) as unique context for string replacements; avoid short global replaces.
