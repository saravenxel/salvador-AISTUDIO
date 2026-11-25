# Salvador Sánchez, Esq. — Netlify site

Static bilingual website (English / Spanish) built with HTML, CSS and vanilla JavaScript.

## Deploy
1. Extract this ZIP.
2. In Netlify, choose **Add new site → Deploy manually**.
3. Drag the extracted `salvador-sanchez-netlify` folder (the folder containing `index.html`) into the deploy area.
4. After the first deploy, open **Forms** in the Netlify site dashboard and confirm form detection is enabled. If Netlify asks to enable form detection, enable it and redeploy.
5. Submit a test inquiry. Netlify Forms will collect submissions in the site dashboard. Configure email notifications under **Site configuration → Notifications → Form submission notifications**.

## Form
The form is named `consultation` and lives on `/contact/`. It includes a spam honeypot and redirects to `/success` after a successful Netlify submission. Netlify Forms works after deployment on Netlify; it will not submit when opening the page as a local file.

## Language
Use the EN / ES controls in the header. The selection is stored in the browser and the URL query parameter is updated (`?lang=en` / `?lang=es`).

## Pages and media
The main navigation leads to `/practice-areas/`, `/attorney/`, and `/contact/`. Each practice area has its own page under `/practice-areas/`. The new pages include labeled slots for future images and videos.

The decorative videos use a Lady Justice clip adapted from [Pexels video 8061667](https://www.pexels.com/video/8061667/) and illustrative footage adapted from [Pexels video 8731304](https://www.pexels.com/video/8731304/). They play once when visible, without audio. The practice-area overview also has an on-demand video with sample narration, captions, and a transcript in English and Spanish. Video files, posters, and caption tracks are served from `assets/`.

## Important before launch
- The remaining original images are referenced from the original `chatgpt.site` host. For a fully self-contained deployment, place the original assets (`criminal.webp`, `immigration.webp`, `civil.webp`, `salvador.webp`) in `assets/` and update the image URLs on the home and practice overview pages.
- Confirm that the attorney approves the translated copy, legal disclaimer, practice-area descriptions, and the form wording before publishing.
- Configure Netlify email notifications and test the form after deployment.
- This is a static-site reconstruction based on the publicly crawlable page content, not an export of the original source code. Some fine visual details, hidden interactions, and the original photographic story/video may differ.
