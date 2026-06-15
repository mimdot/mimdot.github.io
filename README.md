# mimdot.github.io

Personal academic website of **Mohammad Reza Nasirzadeh**, astrophysicist.

Live at: **https://mimdot.github.io**

---

## Deploy in 5 steps

### 1. Create the GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Set **Repository name** to `mimdot.github.io` (must match your username exactly)
3. Set visibility to **Public**
4. Do **not** initialise with a README — you'll push the files yourself
5. Click **Create repository**

### 2. Push the site files

```bash
cd /path/to/mimdot.github.io   # navigate to the project folder

git init
git add .
git commit -m "Initial site deploy"
git branch -M main
git remote add origin https://github.com/mimdot/mimdot.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to the repository → **Settings** → **Pages** (left sidebar)
2. Under **Source**, select **Deploy from a branch**
3. Choose branch: `main`, folder: `/ (root)`
4. Click **Save**

Your site will be live at `https://mimdot.github.io` within ~60 seconds.

---

## Replace placeholder content

| Item | What to do |
|------|-----------|
| **Profile photo** | Copy your photo to `assets/images/profile.jpg` |
| **CV PDF** | Copy your CV to `assets/cv.pdf` |
| **ORCID** | Search `[YOUR_ORCID]` in `index.html` and replace with your iD (e.g. `0000-0001-2345-6789`) |
| **Google Scholar** | Search `scholar.google.com` in `index.html` and replace with your profile URL |
| **Publications** | Find the `pub-list` section and add/edit entries following the existing format |
| **Talks** | Find the `talk-list` section and add/edit entries |
| **Essays & Translations** | Find the `writings-list` sections and add/edit entries |
| **Gallery photos** | Replace `picsum.photos` URLs with local images in `assets/images/gallery/` |
| **Formspree** | See step below |

---

## Set up the contact form (Formspree)

1. Go to [formspree.io](https://formspree.io) and sign up free
2. Create a new form, copy the **Endpoint ID** (looks like `xabc1234`)
3. In `index.html`, replace `YOUR_FORMSPREE_ID` with your ID:
   ```html
   <form action="https://formspree.io/f/xabc1234" method="POST">
   ```
4. Formspree free plan allows 50 submissions/month — sufficient for an academic contact form

---

## Making updates

After any change, commit and push:

```bash
git add .
git commit -m "Update publications"
git push
```

GitHub Pages rebuilds automatically within ~30 seconds.

---

## File structure

```
mimdot.github.io/
├── index.html              ← entire site (single-page)
├── assets/
│   ├── css/
│   │   └── style.css       ← all styles
│   ├── js/
│   │   └── main.js         ← nav toggle only
│   └── images/
│       ├── profile.jpg     ← YOUR PHOTO HERE
│       └── gallery/        ← YOUR GALLERY PHOTOS HERE
└── assets/cv.pdf           ← YOUR CV PDF HERE
```

---

Built with plain HTML/CSS — no build step, no dependencies, no Node.js required.
