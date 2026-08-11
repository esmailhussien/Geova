# Geova Website Evaluation and Enhancement Report

**Review date:** 12 August 2026  
**Scope:** Public Geova website, with detailed attention to Mapplex, product information, Updates, accessibility, SEO, and production delivery.  
**Implementation principle:** Preserve the existing visual identity and React/Vite architecture while making product claims clearer, more credible, and easier to verify.

## Executive assessment

The site already had a strong visual foundation: a distinct teal/orange identity, confident typography, modern motion, and a clear spatial-technology mood. Its main weakness was not appearance; it was product communication. Mapplex capabilities were spread across long feature sections, the relationship between field collection and delivery was not explicit, release status was difficult to verify, and the Updates area did not yet function as a credible product record.

The enhancement therefore follows one strategic idea:

> **Show the operating model, not only the promise.**

Mapplex is now explained as a connected lifecycle—**prepare, collect, validate, exchange, and deliver**—with deployment status, data formats, spatial context, offline behavior, AI safeguards, and external-service boundaries described plainly. The Updates page now serves as an evidence layer for those claims.

## Evaluation scores

These scores describe the repository after the implemented enhancement. They are a product/design review, not synthetic Lighthouse measurements.

| Area | Score | Assessment |
| --- | ---: | --- |
| Brand and visual identity | 8.5/10 | Distinctive, consistent, and appropriate for spatial technology. |
| Information architecture | 8.5/10 | Product, Mapplex, Updates, documentation, and company routes are now discoverable. |
| Product clarity | 9/10 | Mapplex now explains workflows, formats, context, deployment state, and boundaries. |
| Credibility and evidence | 8.5/10 | Release notes use factual status language; unsupported claims were removed. |
| Accessibility foundation | 8/10 | Skip navigation, focus states, reduced motion, landmarks, and a proper 404 are present. |
| Performance architecture | 8.5/10 | Route-level code splitting reduced the initial application JavaScript substantially. |
| Content maintainability | 8/10 | Structured MDX release notes and reusable Mapplex sections support continued updates. |
| Overall | **8.6/10** | Strong launch-ready foundation, subject to device, analytics, and content-proof checks below. |

## Strategic positioning

### Recommended company/product narrative

- **Geova** is the spatial intelligence company and the owner of the ecosystem.
- **Mapplex** is the field and spatial operations platform within that ecosystem.
- **Geova AI** is the permission-aware analytical assistant, not a generic chatbot.
- **Custom Spatial Systems** extend the same capabilities into organization-specific workflows.

This separation prevents the site from presenting every capability as one undifferentiated platform. It also makes future product additions easier without redesigning the navigation.

### Recommended Mapplex promise

> Mapplex keeps spatial work usable from field preparation through collection, validation, exchange, analysis, and delivery—even when connectivity is limited.

This promise is supported by concrete workflow and format information instead of broad superlatives.

## Findings and implemented improvements

| ID | Finding | Severity | Why it mattered | Implemented response |
| --- | --- | --- | --- | --- |
| WEB-01 | Mapplex features lacked one coherent data story | High | Visitors could see many capabilities but not how they work together in an operational project. | Added a five-stage lifecycle, interoperability matrix, and context-preservation explanation. |
| WEB-02 | Deployment and availability boundaries were unclear | High | A visitor could confuse controlled APK deployments with public Play Store availability. | Added explicit status cards for managed deployments, Play Store review, and hosted/field-local exchange. |
| WEB-03 | Release content included claims that could not be verified from the product repository | High | Unsupported package and performance claims weaken trust and create legal/marketing risk. | Replaced the claim with an evidence-based product-update policy and factual release notes. |
| WEB-04 | Updates were sparse and not visible in primary navigation | Medium | Product maturity and ongoing work were difficult to discover. | Added Updates to desktop/mobile navigation, redesigned its page, and surfaced latest updates on the home page. |
| WEB-05 | The entire application loaded as one large JavaScript entry | Medium | Visitors paid the cost of routes they did not visit. | Added route-level lazy loading and an accessible loading state. Initial app JS changed from 541.39 kB to 251.52 kB before gzip. |
| WEB-06 | Focus, motion, and navigation accessibility had gaps | Medium | Keyboard and motion-sensitive users could have difficulty navigating the site. | Added skip navigation, visible focus states, reduced-motion handling, consistent main landmarks, and a no-index 404 page. |
| WEB-07 | Header breakpoints could crowd tablet layouts | Medium | The full desktop navigation became visually dense before enough width was available. | Moved the desktop/mobile switch to the large breakpoint and aligned the menu container with it. |
| WEB-08 | Nested interactive controls appeared in CTA markup | Low | A button inside a link creates invalid and unpredictable keyboard semantics. | Converted CTAs into single styled links. |
| WEB-09 | The default social preview did not reflect the current product story | Medium | Shared links could look generic or dated outside the site. | Added a branded Geova spatial-intelligence social card and connected Open Graph/Twitter metadata. |
| WEB-10 | Unknown routes had no intentional recovery experience | Low | Mistyped and retired URLs did not guide visitors back to useful content. | Added a branded 404 with links to Geova and Mapplex. |

## Page-by-page review

| Route | Current role | Evaluation | Recommended next evidence |
| --- | --- | --- | --- |
| `/` | Company and ecosystem overview | Stronger hierarchy now connects company positioning, products, current proof, and contact paths. | Add one real customer outcome when permission exists. |
| `/platform` | Geova platform and AI overview | Good product architecture page; should remain higher-level than Mapplex. | Add one architecture diagram based on deployable components, not marketing abstractions. |
| `/mapplex` | Mapplex product detail | Now the strongest product page: lifecycle, supported exchange, context, readiness, safeguards, and use cases are explicit. | Add short, real product clips or screenshots for collection, sync, and AI review. |
| `/consulting` | Service capability and engagement | Visually consistent and appropriately separated from software products. | Add engagement stages, expected client inputs, and one anonymized deliverable example. |
| `/about` | Company identity and competence | Good brand narrative. | Add leadership or verified operating history only when publication is approved. |
| `/updates` | Product evidence and release record | Now filterable, structured, linkable, and status-aware. | Maintain a monthly or release-driven editorial cadence. |
| `/guide` and `/user-guide` | Product education | Valuable long-form support content. | Add last-reviewed dates and per-version applicability. |
| `/privacy` | Store/legal support | Discoverable and suitable as a public policy route. | Obtain legal review before Play Store publication. |
| `/account-deletion` | Account-deletion information | Supports store compliance and customer trust. | Verify the live deletion workflow and response SLA. |
| `/contact` | Lead and support contact path | Clear route and CTA destination. | Connect form delivery monitoring and publish a user-facing success/failure state. |

## Mapplex content model

The Mapplex page should continue to use four layers of explanation:

1. **Outcome:** what field and spatial teams can accomplish.
2. **Workflow:** prepare → collect → validate → exchange → deliver.
3. **Technical proof:** supported formats, offline continuity, spatial reference handling, domains/lexicons, media, and protected external services.
4. **Availability:** what is active now, what is in review, and what depends on deployment configuration.

This model prevents a common product-site problem: adding more feature cards without increasing understanding.

## Updates editorial standard

Every future update should include:

- Publication date and stable slug.
- Product area: Geova, Mapplex, or Geova AI.
- Status such as shipped, readiness, beta, or operational improvement.
- A short summary written for users.
- What changed, why it matters, and operational limits.
- No performance percentage unless the measurement method and baseline exist.
- No availability claim until the corresponding deployment channel is live.

The Updates page should be treated as the factual source for marketing claims made elsewhere on the site.

## Accessibility and responsive design

The implementation now includes:

- A keyboard-visible skip link targeting a consistent `main-content` landmark.
- Global high-contrast `:focus-visible` treatment.
- Reduced-motion behavior for users who request it.
- Responsive header behavior that avoids tablet crowding.
- Single-semantic-element CTAs rather than nested controls.
- Accessible filter state and live result count on Updates.
- An intentional 404 recovery route marked `noindex`.

Remaining manual verification should cover keyboard navigation, 200% zoom, screen-reader heading order, Android Chrome, iOS Safari, and both light and dark modes.

## Performance evidence

The production build now emits route-specific chunks rather than one monolithic application bundle.

| Metric | Before | After |
| --- | ---: | ---: |
| Initial application JS | 541.39 kB | 251.52 kB |
| Initial application JS, gzip | 154.60 kB | 80.65 kB |
| Largest product route chunk | Included in initial bundle | Mapplex 32.93 kB / 7.75 kB gzip |
| Build status | Passed | Passed |

This is approximately a **53.5% reduction in initial JavaScript by uncompressed size** and a **47.8% reduction by gzip size**. These are build-output measurements, not claims about real-user load time. Real-user monitoring should be added before publishing speed claims.

The 149.93 kB SEO chunk is primarily the shared metadata/runtime dependency and is cached across routes. A later optimization can evaluate lighter head-management options, but changing it is not necessary for this launch iteration.

## SEO and sharing

- Canonical URLs, descriptions, Open Graph, Twitter cards, and structured data are centralized.
- Organization logo metadata now points to a stable public asset.
- The new share card communicates the company/product relationship without unverified metrics.
- The sitemap already exposes the key public routes.

Before launch, validate the deployed domain with Google Rich Results, Facebook Sharing Debugger, and LinkedIn Post Inspector after CDN caches update.

## Remaining roadmap

### Priority A — launch proof and reliability

- Replace generic decorative product imagery with three real, sanitized Mapplex screenshots or short clips.
- Verify privacy and account-deletion flows against the production application.
- Test every primary route and CTA on physical Android and iOS devices.
- Add error monitoring for contact submissions and broken client-side routes.
- Validate the deployed social image, sitemap, robots file, and structured data.

### Priority B — credibility and conversion

- Publish one approved case study with the problem, field conditions, workflow, and measured outcome.
- Add a short “deployment fit” selector to the contact form: managed cloud, organization-hosted, or field-local exchange.
- Connect each major Mapplex capability to a relevant user-guide section.
- Add a visible support or response expectation near the contact form.

### Priority C — international growth

- Localize the public site only after selecting an ownership workflow for English, Arabic, Spanish, and French content.
- Use stable route prefixes and `hreflang` rather than switching labels without translating full pages.
- Review Arabic layouts in RTL at component level; do not mirror maps, media controls, or universal directional symbols blindly.
- Add translated release summaries only when the underlying product documentation is also available in that language.

### Priority D — measurement

- Add privacy-respecting analytics for route visits, Mapplex CTA conversion, documentation exits, and contact completion.
- Establish Core Web Vitals monitoring with real-user data.
- Review search queries and update the Mapplex FAQ based on actual buyer/user questions.

## Launch gate

The codebase passes its current automated lint and production build checks. Deployment should remain a separate controlled step. Before making the enhanced site public, complete this short gate:

- [ ] Confirm all product and deployment wording with the product owner.
- [ ] Confirm legal wording for Privacy and Account Deletion.
- [ ] Test navigation, theme, and contact flow on physical mobile devices.
- [ ] Verify `/updates`, `/mapplex`, `/privacy`, and `/account-deletion` on the deployed host.
- [ ] Confirm the new `og.png` is publicly accessible and refreshed in social caches.
- [ ] Add at least one real product screenshot or explicitly accept the current illustrative approach.

## Final recommendation

The website should remain visually recognizable as Geova. The next gains will not come from another wholesale redesign; they will come from **real proof, disciplined release communication, deployment transparency, and measured conversion data**. The new structure is ready to support that work incrementally.
