# SEC & FINRA Compliance Scan Report

**Site:** United Financial Planning Group (unitedfpg.com)  
**Scan Date:** March 5, 2026  
**Scope:** All pages and components across the site

---

## Executive Summary

United Financial Planning Group is a **fee-only Registered Investment Advisor (RIA)**. SEC rules (including the Marketing Rule 206(4)-1) are the primary regulatory framework. **FINRA rules apply only if the firm or its personnel are broker-dealer registered** — confirm your registration status.

**Overall assessment:** The site has strong foundational compliance (footer disclosure, compliance page, Form ADV/CRS links, hypothetical scenario disclaimers). Several areas need attention, primarily around **testimonials/reviews** and **schema markup**.

---

## What’s Working Well

| Area | Status |
|------|--------|
| **Footer disclosure** | Comprehensive: SEC registration, no investment advice, past performance, risk of loss, Form ADV link |
| **Compliance page** | Form ADV Part 2A, Part 2B, Form CRS, Privacy Policy linked |
| **Hypothetical scenarios** | Investment management $12,400 example labeled: *"The scenarios above are hypothetical illustrations and do not represent actual client results"* |
| **Why United page** | Informational disclaimer present |
| **In The Media** | Disclaimer: *"Media appearances... should not be construed as an endorsement... or a guarantee of future investment success. No compensation was provided..."* |
| **No performance guarantees** | No explicit return promises or guarantees |
| **Fee-only / fiduciary claims** | Appropriate for an RIA |
| **Educational content** | Blog posts cite third-party research (Vanguard, Morningstar, JP Morgan) with attribution |

---

## Potential Violations & Recommendations

### 1. **Testimonials / Client Reviews — SEC Marketing Rule 206(4)-1**

**Location:** Homepage, `/testimonials`, `/financial-advisor-long-island`, `/financial-advisor-nyc`, `/financial-advisor-manhattan`, all `/financial-advisor-[town]` pages

**Issue:** Wealthtender reviews are displayed under "What Our Clients Say" with **no disclosure** near the review section. The Marketing Rule allows testimonials if:

- The adviser has a reasonable basis to believe they reflect genuine client experiences
- There is no undisclosed compensation for favorable reviews
- There are no materially misleading statements
- Material conflicts of interest are disclosed

**Risk:** Without a clear disclosure, the SEC could view this as non-compliant testimonial use.

**Recommendation:** Add a short disclosure immediately above or below the Wealthtender embed on every page that shows it:

> *"Client testimonials reflect individual experiences. Results and experiences vary. United Financial Planning Group does not compensate clients for testimonials. Wealthtender is an independent third-party review platform."*

---

### 2. **AggregateRating Schema — Potentially Misleading**

**Location:** `app/page.tsx`, `app/testimonials/page.tsx`

**Issue:** JSON-LD includes `aggregateRating` with `ratingValue: "5.0"`, `ratingCount: "25"`. If Wealthtender reviews are not all 5-star or the count is outdated, this could be misleading.

**Recommendation:**

- Ensure schema values match Wealthtender’s actual data
- Consider removing `aggregateRating` from schema if it cannot be kept current
- Or dynamically pull rating/count from Wealthtender if feasible

---

### 3. **TestimonialsSlider Component — High Risk If Used**

**Location:** `components/testimonials-slider.tsx` (not currently used on the site)

**Issue:** Hardcoded testimonials include specific dollar claims:

- *"my Roth conversion strategy alone saved us six figures"*
- *"saved me tens of thousands in taxes"*

These imply specific performance/results and lack:

- Past performance disclaimer
- “Individual results vary” language
- Disclosure of any compensation

**Recommendation:** Do **not** use this component on the live site without:

1. Removing or softening specific dollar amounts
2. Adding: *"Past performance is not indicative of future results. Individual experiences and outcomes vary."*
3. Adding testimonial disclosure per the Marketing Rule

Consider deleting the component if it will not be used.

---

### 4. **Stats — "$350M Under Management"**

**Location:** `components/stats.tsx`

**Issue:** AUM figures must be accurate and not misleading. A static number can become outdated.

**Recommendation:**

- Verify the figure is current
- Add “as of [date]” if it is not updated regularly
- Ensure the number is consistent with Form ADV and other regulatory filings

---

### 5. **Comparison Table — "Hundreds of Thousands of Dollars"**

**Location:** `components/blocks/comparison-1.tsx`

**Issue:** The statement *"Over a 20- or 30-year retirement, the difference in fees alone can amount to hundreds of thousands of dollars"* is a projection. It is conditional (“can amount to”) but could be read as a guarantee.

**Recommendation:** Soften the language, e.g.:

> *"Over a 20- or 30-year retirement, the difference in fees alone may amount to hundreds of thousands of dollars that either stay in your portfolio or go to someone else."*

---

### 6. **Form CRS Date**

**Location:** `app/compliance/page.tsx`, footer links

**Issue:** Form CRS is dated August 17, 2023. The SEC expects Form CRS to be updated when there are material changes.

**Recommendation:** Confirm the Form CRS is current and update the date on the compliance page when a new version is filed.

---

### 7. **Blog — Third-Party Research and Performance**

**Location:** `lib/blog.ts` — e.g., Vanguard “1.5% in net returns” from behavioral coaching; Morningstar fee/performance research

**Status:** Third-party research is cited with attribution. This is generally acceptable.

**Recommendation:** Consider adding a general disclaimer at the top or bottom of blog content, e.g.:

> *"Past performance is not indicative of future results. The information in this article is for educational purposes only and does not constitute investment advice."*

---

### 8. **Disclosure Placement**

**Issue:** The footer disclosure is strong but appears only at the bottom of pages. Users may not see it before engaging with testimonials, stats, or other marketing content.

**Recommendation:** For pages with testimonials or performance-related content, consider a short, prominent disclosure near that content (e.g., above the Wealthtender section) in addition to the footer.

---

## FINRA Considerations

**Applicability:** FINRA rules (e.g., Rule 2210) apply to **broker-dealers** and their communications. If United FPG is **RIA-only** (no broker-dealer registration), FINRA rules generally do not apply.

**Action:** Confirm registration status. If the firm or its personnel are dual-registered or affiliated with a broker-dealer, a FINRA-specific review of communications would be appropriate.

---

## Pages Scanned

| Page | Notes |
|------|------|
| `/` (Home) | Hero, stats, Wealthtender reviews, FAQ |
| `/about` | Founder story, credentials, affiliations |
| `/services` + service subpages | Investment management, financial planning, tax, retirement, equity comp |
| `/fees` | Pricing, process, subscription |
| `/team` + team profiles | Credentials, Wealthtender on Gerry’s profile |
| `/testimonials` | Wealthtender embed |
| `/compliance` | Form ADV, CRS, Privacy Policy |
| `/faq` | Fee-only, fiduciary, client type |
| `/contact` | Contact form |
| `/locations` + location pages | Office info, services |
| `/financial-advisor-long-island`, `-nyc`, `-manhattan` | Local landing pages with Wealthtender |
| `/financial-advisor-[town]` (programmatic) | Town pages with Wealthtender |
| `/in-the-media` | Media mentions with disclaimer |
| `/blog` + blog posts | Educational content, third-party research |
| `/why-united` | Value props with disclaimer |

---

## Prioritized Action Plan

1. **High:** Add testimonial disclosure near all Wealthtender review sections.
2. **High:** Verify or remove/update `aggregateRating` schema so it is not misleading.
3. **Medium:** Remove or heavily revise the `TestimonialsSlider` component before any use.
4. **Medium:** Confirm Form CRS is current and update the date if needed.
5. **Medium:** Verify “$350M under management” and add “as of” date if static.
6. **Low:** Soften “hundreds of thousands of dollars” language in the comparison table.
7. **Low:** Consider a general blog disclaimer for educational content.

---

## Disclaimer

This report is for internal review only and does not constitute legal or compliance advice. Consult your compliance officer or legal counsel before making changes. SEC and FINRA rules can change; ensure ongoing compliance with current regulations.
