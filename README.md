# Potopia E-Commerce Website

## Overview
Potopia is an Egyptian agricultural-tech and consumer goods company operating a zero-waste circular economy. This repository contains the source code for the Potopia Static E-Commerce Website.

## Local Development
Since this is a vanilla HTML/CSS/JS static site, you don't need complex build tools to run it locally.
1. Clone this repository.
2. Open `index.html` in your web browser.
3. For the best experience (to avoid CORS issues with local file fetching if applicable), serve the directory with a local web server (e.g., `npx serve .` or Python's `python -m http.server`).

## Deployment
The project is configured to automatically deploy to GitHub Pages via GitHub Actions.
1. Push your code to the `main` branch.
2. The GitHub Action will run and publish the site.

## Third-Party Services
This site uses the following third-party services which require free accounts and setup:
- **Formspree**: Update the form `action` URLs in the HTML files with your Formspree form ID.
- **Plausible Analytics**: Configured in `assets/js/analytics.js`.
- **Calendly**: Embed configured on the AMP-F Containers page.

## Customization Guide
- **Colors & Branding**: Modifiable in `assets/css/main.css` via CSS variables.
- **Content**: Update the HTML files and JSON data files directly.
- **Images**: Located in `assets/images/`. Recommended to use optimized WebP images with JPEG fallbacks.

## Troubleshooting
- If images don't load, ensure paths are relative correctly.
- If the cart isn't saving, ensure you aren't in incognito mode (which blocks LocalStorage).
