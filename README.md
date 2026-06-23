# Denis Redzic

Personal portfolio site. Founder and AI systems builder.

A fast, single-page static site: voice AI, full-stack engineering, automation, and cloud infrastructure, plus selected production work.

## Stack

- Plain HTML, CSS, and a small amount of vanilla JavaScript
- No build step, no dependencies
- Google Fonts (Inter, Space Grotesk)

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
index.html   markup and copy
style.css    styling and layout
main.js      scroll reveal, mobile nav, dynamic year
founder.png  profile photo
```

## Edit the photo

Drop a square-ish portrait named `founder.png` in this folder. If the file is missing,
the site shows a styled initial instead, so it never breaks.
