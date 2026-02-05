# Deploy Bunifu Capital to Vercel & Connect a Domain

Your app is a **Vite + React** project inside the `my-app` folder. Follow these steps.

---

## Part 1: Deploy to Vercel

### Option A: Deploy with Vercel (Git)

1. **Push your code to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Sign in to Vercel**  
   Go to [vercel.com](https://vercel.com) and sign in with GitHub.

3. **Import the project**
   - Click **Add New…** → **Project**
   - Select your **Bunifu capital** (or the repo that contains it) from the list
   - Click **Import**

4. **Configure the project** (important: app is in `my-app`):
   - **Root Directory:** Click **Edit**, choose `my-app`, then **Continue**
   - **Framework Preset:** Vite (should be auto-detected)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `dist` (Vite default)
   - **Install Command:** `npm install` (default)

5. **Deploy**  
   Click **Deploy**. Vercel will build and give you a URL like `your-project.vercel.app`.

---

### Option B: Deploy with Vercel CLI

1. **Install Vercel CLI** (one time):
   ```bash
   npm i -g vercel
   ```

2. **From the repo root**, run:
   ```bash
   cd "c:\Users\silvy\Bunifu capital"
   vercel
   ```

3. **When prompted:**
   - **Set up and deploy?** Yes
   - **Which scope?** Your account
   - **Link to existing project?** No
   - **Project name?** e.g. `bunifu-capital`
   - **In which directory is your code located?** `./my-app` (type `./my-app`)

4. **Deploy from `my-app` in future** (optional):
   ```bash
   cd my-app
   vercel
   ```
   So the CLI uses `my-app` as the project root.

---

## Part 2: Connect a Custom Domain

1. **Open your project on Vercel**  
   Dashboard → your project (e.g. **bunifu-capital**).

2. **Add the domain**
   - Go to **Settings** → **Domains**
   - Enter your domain (e.g. `bunifu.com` or `www.bunifu.com`)
   - Click **Add**

3. **Configure DNS at your domain registrar**

   Vercel will show you what to add. You’ll do one of the following:

   **For root domain (e.g. `bunifu.com`):**
   - **A record**
     - Name: `@` (or leave blank)
     - Value: `76.76.21.21`
   - **CNAME for www (optional)**  
     - Name: `www`  
     - Value: `cname.vercel-dns.com`

   **For subdomain only (e.g. `app.bunifu.com`):**
   - **CNAME record**
     - Name: `app` (or your subdomain)
     - Value: `cname.vercel-dns.com`

   Use the **exact** values Vercel shows for your project; they can differ.

4. **Wait for DNS**
   - Propagation can take from a few minutes up to 48 hours.
   - In **Domains**, Vercel will show when the domain is verified (checkmark).

5. **HTTPS**
   - Vercel issues SSL automatically. Once the domain is verified, `https://yourdomain.com` will work.

---

## Quick reference

| Setting           | Value        |
|-------------------|-------------|
| Root Directory    | `my-app`    |
| Build Command     | `npm run build` |
| Output Directory  | `dist`      |
| Install Command   | `npm install`   |

---

## Troubleshooting

- **Build fails:** In Vercel, open the latest deployment → **Building** logs. Ensure **Root Directory** is `my-app` so `package.json` and `vite.config.ts` are found.
- **404 on refresh:** Vite + React Router often needs redirects. Add a `vercel.json` in `my-app` (see below) so all routes serve `index.html`.

If you want, we can add the `vercel.json` for you so client-side routing works on Vercel.
