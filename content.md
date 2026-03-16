# D8X Exchange – Content Reference

**Source:** https://d8x.exchange/  
**Purpose:** Build our app using D8X content and structure.

---

## How to Edit Content

You can edit content in two ways:

1. **Edit `assets/content.json`** – Change text here; the page loads it dynamically. Use for hero, features, stats.
2. **Edit `index.html`** – Change text directly in the HTML. Use for any section.

Both use the same template styling from `index-C0VVpEid.css`.

---

## Scraped Metadata (from HTML)

| Field | Value |
|-------|-------|
| Title | D8X App |
| Meta description | Omnichain decentralized trade engine |
| Theme color | #ffffff |
| Favicon | /favicon.ico |
| Apple touch icon | /apple-touch-icon.png |
| Manifest | /manifest.json |

**Note:** D8X is a React SPA—content is rendered by JavaScript. Use browser DevTools or screenshots to capture visible text and layout.

---

## Known Info (from research)

**D8X** is an institutional-grade decentralized perpetual futures exchange built on Polygon zkEVM.

### Key Features
- Fully decentralized perpetuals (limit order book + AMM)
- Flexible collateral (any ERC-20, including yield-bearing)
- Perpetual types: Linear, Inverse, Quanto
- Funding mechanism (no holding fees)
- White-label model for partners
- Advanced order types, leveraged trading, TradingView charts

---

## Content to Scrape (manual)

Because automated fetch timed out, use one of these methods:

1. **Browser DevTools:** Open d8x.exchange → F12 → Elements → copy text/HTML
2. **Save Page:** Right-click → Save As → Webpage, Complete
3. **Screenshots:** Capture each section for layout reference

---

## Section 1: Hero / Above the fold

| Field | Content |
|-------|---------|
| Headline | |
| Subheadline | |
| CTA button text | |
| CTA link | |
| Background (image/video) | |

---

## Section 2: Navigation

| Item | Label | Link |
|------|-------|------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |

---

## Section 3: Features / Value props

| # | Title | Description | Icon/Image |
|---|-------|--------------|------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

---

## Section 4: Stats / Numbers

| Metric | Value | Label |
|--------|-------|-------|
| 1 | | |
| 2 | | |
| 3 | | |

---

## Section 5: How it works / Steps

| Step | Title | Description |
|------|-------|--------------|
| 1 | | |
| 2 | | |
| 3 | | |

---

## Section 6: Footer

| Column | Links / Content |
|--------|-----------------|
| Product | |
| Company | |
| Resources | |
| Social | |
| Legal | |

---

## Section 7: Copy / Marketing text

Paste full paragraphs here:

```
(hero copy)
```

```
(features copy)
```

```
(FAQ or other long-form)
```

---

## Section 8: Assets to download

| Asset | URL | Notes |
|-------|-----|-------|
| Logo | | |
| Favicon | | |
| Hero image | | |
| Feature icons | | |

---

## Section 9: Colors / Brand

| Use | Value |
|-----|-------|
| Primary | |
| Secondary | |
| Background | |
| Text | |
| Accent | |

---

## Section 10: FAQ

| Question | Answer |
|----------|--------|
| | |
| | |

---

## Next steps

1. Open https://d8x.exchange/ in a browser
2. Fill in each section above by copying from the page
3. Save any images to `web/docs/assets/`
4. Use this doc when building our app
