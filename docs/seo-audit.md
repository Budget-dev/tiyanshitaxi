# Technical & Local SEO Audit: Tiyanshi Airport Taxi (https://tiyanshiairporttaxi.in)
**Entity:** Tiyanshi Airport Taxi | Bengaluru, Karnataka  
**Audit Date:** October 2026  
**Auditor:** Senior Technical SEO & Local Travel Search Engineering  
**Target Domain:** `https://tiyanshiairporttaxi.in`  
**Primary Market:** Bengaluru / Bangalore, Karnataka  

---

## 1. Executive Summary & Repository Baseline

Tiyanshi Airport Taxi is an established travel and taxi service brand operating in Bengaluru, offering airport transfers, local city rentals, outstation trips, and Mysore & Nandi Hills tour packages. 

While the application features a modern, responsive user experience with real-time lead capture, Firebase persistence, and interactive booking capabilities, its **organic search visibility and technical crawler discoverability were severely bottlenecked** by standard Single Page Application (SPA) pitfalls:
1. **Zero Static Crawlability for Sub-Pages:** The site operated entirely via hash routing (`#airport-taxi`, `#outstation-cabs`, etc.). Search engine crawlers (Googlebot, Bingbot) do not crawl hash fragments as independent URLs.
2. **Missing Robots.txt & XML Sitemap:** Neither `robots.txt` nor `sitemap.xml` existed in the repository or static public distribution.
3. **Domain & Brand Metadata Inconsistencies:** Head tags and dynamic schema referenced `tiyanshiairporttaxi.com` instead of the canonical business domain `https://tiyanshiairporttaxi.in`.
4. **Missing Structured Data Graph:** Dynamic JSON-LD was only injected on `FaqsPage.tsx`, leaving the Homepage, Airport Taxi, Outstation, Local Rentals, and Route landing pages completely devoid of structured semantic entities.
5. **Lack of Conversion & Event Tracking:** While Firebase Analytics was initialized (`G-4MX7ZXV2JW`), conversion events (`click_phone`, `click_whatsapp`, `booking_start`, `booking_submit`, `generate_lead`) were not tracked across CTAs.
6. **Codebase Stability Issue:** TypeScript compilation failed due to a type mismatch in `leadTrackingService.ts` (`booking_confirmed` missing from `LeadFootprint['source']`).

---

## 2. Comprehensive Architectural & Technical Findings

### 2.1 Framework & Environment
- **Framework & Version:** React 19.0.1 with TypeScript 5.8.2.
- **Build Tool:** Vite 6.2.3 with `@tailwindcss/vite` 4.1.14.
- **Server Environment:** Express 4.21.2 (`server.ts`) configured with rate limiting, correlation IDs, and static serving in production mode.
- **Rendering Paradigm:** Client-Side Rendering (CSR) Single-Page Application (SPA). All routes serve `index.html` as fallback.

### 2.2 Routing Architecture
- **Current State:** Hash-based routing (`window.location.hash`) inside `App.tsx` (`getInitialPage`, `handleHashChange`).
- **Crawler Impact:** Search crawlers treat `https://tiyanshiairporttaxi.in/#airport-taxi` as `https://tiyanshiairporttaxi.in/`. The sub-page content, FAQs, and pricing are hidden behind client-side execution.
- **Remediation Plan:** Support clean HTML5 paths (e.g., `/airport-taxi-bangalore/`, `/outstation-cabs-bangalore/`, `/bangalore-to-mysore-cab/`) while maintaining 100% backward compatibility with internal state and hash links. Pre-render metadata and provide full crawlability.

### 2.3 Metadata Implementation
- **Index HTML:** Contains optimized metadata (`Tiyanshi Airport Taxi | Premier Taxi & Cab Service in Bengaluru (Bangalore)`).
- **Dynamic Head Management:** `SEOHead.tsx` exists but was only instantiated on `FaqsPage.tsx`. All other 16 pages and the homepage lacked dynamic page-level titles, meta descriptions, canonical URLs, and Open Graph tags.
- **Canonical URLs:** No canonical tag in `index.html`; in `SEOHead.tsx` it used `window.location.origin` or had fallback references to `.com`.

### 2.4 Robots.txt & Sitemap Status
- **robots.txt:** ❌ Missing. Crawlers default to standard crawling without explicit sitemap declaration or crawler guidance.
- **sitemap.xml:** ❌ Missing. No sitemap index or URL registry for search engine discovery.

### 2.5 Structured Data (Schema.org Graph)
- **Current Graph:** A single client-side `TaxiService` schema was defined inside `SEOHead.tsx` pointing to `@id: https://tiyanshiairporttaxi.com` with telephone `+91-7676252579`.
- **Missing Graph Components:**
  - `Organization` with logo, official URL, and social profiles.
  - `LocalBusiness` / `TaxiService` with precise coordinates, GeoCircle service areas, and operational hours.
  - `BreadcrumbList` on all hierarchical service and route pages.
  - `FAQPage` schema on pages containing user-facing FAQs.
  - `Service` schema for individual offerings (Airport Transfers, Local Rentals, Outstation Cabs, Sightseeing Packages).

### 2.6 Analytics & Conversion Measurement
- **GA4 Measurement ID:** Identified `G-4MX7ZXV2JW` in `src/firebase.ts`.
- **Event Gaps:** No event firing on phone clicks (`tel:+917676252579`), WhatsApp CTA clicks, booking modal openings, or step progressions.
- **Required Events:**
  - `click_phone` (Phone call initiator)
  - `click_whatsapp` (WhatsApp chat initiator)
  - `booking_start` (Booking widget / modal opened)
  - `booking_submit` (Booking confirmed)
  - `generate_lead` (Quick booking / phone entered)

### 2.7 Internal Linking & Content Structure
- **Navbar & Footer:** Well-structured navigation linking to major service categories, policies, and support.
- **Descriptive Anchors:** Current links use internal IDs or hashes.
- **Contextual Linking Gaps:** Route and package cards currently open modals rather than providing indexable deep-linkable route pages for high-commercial search intents like "Bangalore to Mysore cab".

### 2.8 Assets, Fonts & Performance
- **Fonts:** `Plus Jakarta Sans` loaded via Google Fonts with `display=swap`.
- **Images:** Hero banner hosted locally (`/hero-banner.png`, `/hero-banner.jpg`, `/logo.png`), vehicle photos on Sirv CDN, destination photos on Unsplash.
- **Alt Text:** Several images lacked descriptive, localized alt attributes.
- **Core Web Vitals:** Largest Contentful Paint (LCP) is driven by the desktop/mobile hero image; priority loading and clean WebP/responsive dimensions are critical.

---

## 3. Findings & Issues Summary Table

| Priority | Category | Problem / Observation | Evidence | Required Action | Status |
|---|---|---|---|---|---|
| **CRITICAL** | Technical SEO | TypeScript compile failure | `leadTrackingService.ts(215,9)`: `booking_confirmed` not in union | Update `types.ts` union to include `booking_confirmed` | Identified |
| **CRITICAL** | Technical SEO | Missing `robots.txt` & `sitemap.xml` | `public/` directory empty of SEO files | Generate authoritative `robots.txt` and XML sitemap | Pending |
| **CRITICAL** | Indexability | Single-page hash routing prevents crawler discovery | `App.tsx` reads `window.location.hash` only | Implement path-aware routing & canonical URL mapping | Pending |
| **CRITICAL** | Metadata | Sub-pages lack individual `<title>` and `<meta description>` | Grep found `SEOHead` only on `FaqsPage.tsx` | Integrate `SEOHead` across all service, route, and info pages | Pending |
| **HIGH** | Local SEO | Inconsistent brand domain references | `tiyanshiairporttaxi.com` in `SEOHead.tsx` vs `tiyanshiairporttaxi.in` | Standardize domain to `https://tiyanshiairporttaxi.in` across all schema & metadata | Pending |
| **HIGH** | Structured Data | Incomplete Schema.org graph | Only minimal `TaxiService` in client memory | Implement multi-entity JSON-LD (LocalBusiness, WebSite, Breadcrumbs, FAQs) | Pending |
| **HIGH** | Analytics | Missing CTA conversion tracking | No `logEvent` or `gtag` calls on Call/WhatsApp | Add centralized conversion tracking utility for GA4 events | Pending |
| **MEDIUM** | Content / IA | High-value search intents (Bangalore to Mysore, Kempegowda Airport) lack dedicated landing pages | User search research proves heavy search volume for Mysore & Airport routes | Build dedicated high-intent route pages with verified distances & schedules | Pending |
| **MEDIUM** | Accessibility & UX | Missing descriptive alt text on vehicle & hero images | Generic or absent alt tags | Add contextual alt text matching local vehicle fleet | Pending |

---

## 4. Phase-by-Phase Remediation Roadmap

1. **Phase A — Stability & Technical Foundations:**
   - Fix compilation error in `types.ts` / `leadTrackingService.ts`.
   - Create `public/robots.txt` and `public/sitemap.xml`.
   - Configure canonical domain `https://tiyanshiairporttaxi.in` and update `index.html`.
2. **Phase B — Core SEO Architecture & Path Navigation:**
   - Update `App.tsx` and `Navbar.tsx` to support both clean path URLs and hash fallbacks.
   - Upgrade `SEOHead.tsx` to output rich JSON-LD entity graphs, OpenGraph tags, and canonical links.
   - Build lightweight analytics event dispatcher (`analyticsService.ts`).
3. **Phase C — Revenue & Commercial Landing Pages:**
   - Optimize existing pages: `AirportTaxiPage`, `LocalRentalsPage`, `OutstationCabsPage`, `OneWayTripsPage`, `RoundTripsPage`, `PackagesPage`, `AboutUsPage`, `ContactUsPage`, `FaqsPage`.
   - Build high-value route pages: `BangaloreToMysorePage` (Bangalore to Mysore Cab), `BangaloreAirportPage` (VTZ & Kempegowda Airport Cabs).
4. **Phase D — Local Authority & Google Business Profile Alignment:**
   - Standardize NAP (Tiyanshi Airport Taxi, Waltair Uplands, Siripuram, Bengaluru 560300, +91 76762 52579).
   - Document GBP optimization strategy and legitimate review acquisition workflow.
5. **Phase E — Validation & Build Verification:**
   - Run typecheck, build, and automated verification tests.
