# Mariam Sherif — Portfolio

A static, dependency-free portfolio site (HTML, CSS and a little JavaScript). No build step.

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `portfolio`, or `mariamsherif.github.io` for a root URL).
2. Upload **everything in this folder** (including the hidden `.nojekyll` file) so `index.html` sits at the top level of the repo.
3. In the repo go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose branch `main` and folder `/ (root)`, then **Save**.
5. After a minute your site is live at `https://<username>.github.io/<repo-name>/`.

## Edit the content

- Text and links: `index.html`
- Colors, fonts and layout: `assets/css/style.css` (colors are at the top under `:root`)
- Images: `assets/img/` (WebP, already optimized)
- Facebook links are labelled "Facebook page 1/2/3" in the **Accounts managed** section. Rename them in `index.html`.

## Files

```
index.html
assets/css/style.css
assets/js/main.js
assets/img/*.webp
.nojekyll
```
