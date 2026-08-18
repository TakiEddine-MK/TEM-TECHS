TEM TECHS — STATIC HOSTING PACKAGE
==================================

This package is ready for GitHub Pages and standard static web hosts.

IMPORTANT
---------
Upload the CONTENTS of this folder, not the enclosing folder itself.
At the hosting root you must see index.html directly.

Expected root structure:
  index.html
  styles.css
  app.js
  config.js
  i18n.js
  icons.js
  services-data.js
  assets/
  services/
  .nojekyll

GITHUB PAGES
------------
1. Create/open a PUBLIC GitHub repository.
2. Delete old website files if necessary.
3. Upload ALL contents of this folder while preserving assets/ and services/.
4. Settings > Pages.
5. Source: Deploy from a branch.
6. Branch: main.
7. Folder: /(root).
8. Do NOT set a Custom domain until the default github.io URL works.
9. Wait for Actions > pages build and deployment to turn green.
10. Open the URL shown in Settings > Pages.

IMPORTANT ABOUT CUSTOM DOMAINS
------------------------------
There is intentionally NO CNAME file in this package.
This prevents an old domain from redirecting the GitHub Pages site.
Only add a custom domain AFTER the default GitHub Pages URL is working.

HTTPS
-----
HTTPS is handled by the hosting provider, not by the website files.
GitHub Pages supports HTTPS for its github.io URL and for correctly configured
custom domains. Netlify, Cloudflare Pages and similar hosts also provide HTTPS.

OTHER HOSTING
-------------
The same folder can be uploaded to:
- GoDaddy/cPanel: put the contents in public_html/
- Netlify: deploy this folder as the publish directory
- Cloudflare Pages: deploy this folder as a static site
- Any static web host that serves index.html

CONTACT FORM
------------
The website is static. WhatsApp links and frontend interactions work normally.
For direct email delivery from the contact form, configure the form endpoint in
config.js to a form backend/service. Never put an SMTP password in frontend JS.


CYBERSECURITY UPDATE
--------------------
This release adds Cybersecurity Services as a full eighth service with EN/FR/DE content and a dedicated services/cybersecurity.html page.
