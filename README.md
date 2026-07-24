# Martha Skin Studio website

A static, responsive website built with semantic HTML, one CSS file, and one JavaScript file. It has no framework, package manager, CMS, or build step.

## Required before launch

- The ZIP code has been verified as `11746` and is used consistently throughout the site.
- The approved horizontal logo is included at `assets/martha-skin-studio-logo.png`.
- The approved square favicon is included at `assets/favicon.png`.
- Add an optimized 1200 × 900 or larger hero image at `assets/hero-skincare.jpg`.
- Add an optimized 800 × 1000 or larger portrait at `assets/martha-portrait.jpg`.
- Replace every biography, training, certification, and philosophy placeholder with Martha’s verified, approved copy.
- Replace the Google Maps search links with the exact verified Google Business Profile or Maps listing URL.
- Verified hours are Tuesday–Saturday, 10:00 AM–7:00 PM; Sunday–Monday closed.
- Booking is by telephone at 516-660-4411.
- Review the privacy page if analytics, tracking, embedded maps, payments, online booking, or a form provider is added.
- Confirm that the phone number, email, address, services, and business name are correct.
- Compress images before publishing. WebP or AVIF can be added with `<picture>` while retaining the supplied JPEG fallback.

## Preview locally

Open `index.html` directly in a browser, or serve the folder with any simple local static server. The site remains usable without JavaScript; JavaScript only enhances the mobile menu, copyright year, and mail-based inquiry form.

## Publish with GitHub Pages

1. Create or open the GitHub repository that will hold these files.
2. Add all files at the repository root and commit them to the publishing branch, usually `main`.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select the publishing branch and `/ (root)`, then save.
5. In **Custom domain**, enter `www.marthaskinstudio.com`.
6. Keep the root `CNAME` file. GitHub Pages may update it when the custom domain is saved; confirm it still contains only `www.marthaskinstudio.com`.

## Connect the domain through Cloudflare

1. In Cloudflare DNS, add a `CNAME` record for `www` pointing to the GitHub Pages hostname, usually `YOUR-GITHUB-USERNAME.github.io`.
2. Follow GitHub’s current custom-domain guidance for the root/apex domain if it should redirect to `www`.
3. Allow DNS changes to propagate, then return to GitHub Pages settings and enable **Enforce HTTPS** when available.
4. Confirm that both HTTP and HTTPS resolve to the preferred canonical `https://www.marthaskinstudio.com/` address.

DNS and GitHub interfaces change occasionally; check the current GitHub Pages and Cloudflare documentation while configuring records.

## Google launch checklist

1. Create a Google Search Console property for the canonical site. A Domain property provides the broadest coverage; a URL-prefix property can also be used.
2. Complete ownership verification using the verification method Google provides.
3. Submit `https://www.marthaskinstudio.com/sitemap.xml` in **Sitemaps**.
4. Use **URL Inspection** to test the homepage and key pages, then request indexing after the live pages pass inspection.
5. Test the homepage with Google’s Rich Results Test. Confirm the LocalBusiness and visible FAQ information matches the page and verified business facts.
6. Run Lighthouse on mobile and desktop for performance, accessibility, best practices, and SEO.
7. Test the navigation, contact links, form behavior, keyboard focus, and layouts at mobile, tablet, and desktop widths.
8. Create or claim the verified Google Business Profile. Use the real business category, accurate hours, exact address, and verified booking details.
9. Keep the business name, address, and telephone identical on the site, Google Business Profile, social profiles, directories, and other business listings.
10. Recheck Search Console after launch for indexing, structured-data, mobile usability, and security issues.

## Quality-control checklist

- Confirm the three required image assets load and have been compressed.
- Test every internal link and call-to-action.
- Confirm each public page has one H1, a unique title and description, and the correct canonical URL.
- Validate HTML, `sitemap.xml`, and the two JSON-LD blocks on the homepage.
- Confirm `robots.txt` is reachable and the sitemap contains every public canonical page.
- Review all visible copy for factual accuracy and remove every placeholder note and associated HTML comment only after replacement.
- Test with JavaScript disabled.
- Test keyboard navigation, the mobile menu, Escape-key behavior, visible focus styles, and the inquiry form.
- Verify color contrast and zoom to at least 200%.
- Do not add reviews, awards, credentials, business hours, prices, treatment details, or claims unless they are verified.
