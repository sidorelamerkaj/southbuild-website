# Deploying to Cloudflare Pages

## Build for Cloudflare Pages

### Step 1: Build the Static Site

```bash
npm run build
```

This will create an `out` folder with all the static files ready for Cloudflare Pages.

### Step 2: Deploy to Cloudflare Pages

#### Option A: Using Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** → **Create a project**
3. Choose **Upload assets**
4. Upload the entire `out` folder
5. Your site will be live!

#### Option B: Using Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy the out folder
wrangler pages deploy out --project-name=southbuild-invest
```

#### Option C: Connect Git Repository

1. Push your code to GitHub/GitLab/Bitbucket
2. In Cloudflare Dashboard → Pages → Create a project
3. Connect your repository
4. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `/` (leave as is)
5. Deploy!

### Step 3: Custom Domain (Optional)

1. In Cloudflare Pages project settings
2. Go to **Custom domains**
3. Add your domain
4. Update DNS records as instructed

---

## Important Notes

- The build creates an `out` folder (not `.next`)
- All images must be in the `public` folder
- Images are unoptimized for static export
- The site is fully static (no server-side features)

---

## Build Output

After running `npm run build`, you'll see:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    5.2 kB         85 kB
└ ○ /projects                            4.8 kB         84 kB
└ ○ /projects/luxury-residential-complex 6.1 kB         86 kB
```

The `out` folder contains all static files ready for deployment.

