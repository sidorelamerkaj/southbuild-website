# Deploy Static Files Directly to Cloudflare Pages

## Option 1: Upload via Cloudflare Dashboard (Easiest)

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Go to Cloudflare Dashboard:**
   - Navigate to **Pages** → **Create a project**
   - Choose **"Upload assets"** (not "Connect to Git")

3. **Upload the `out` folder:**
   - Select the entire `out` folder
   - Upload it
   - Your site will be live immediately!

## Option 2: Using Wrangler CLI

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Build locally:**
   ```bash
   npm run build
   ```

4. **Deploy the `out` folder:**
   ```bash
   wrangler pages deploy out --project-name=southbuild-invest
   ```

## Option 3: Using Cloudflare Pages API

You can also use the Cloudflare API to upload the `out` folder programmatically.

---

## Important Notes

- Build the project locally first: `npm run build`
- Upload the entire `out` folder contents
- No build configuration needed in Cloudflare
- Faster deployments since no build step required
- You'll need to rebuild and re-upload when you make changes

---

## Quick Deploy Script

Create a `deploy.bat` (Windows) or `deploy.sh` (Mac/Linux) file:

**Windows (deploy.bat):**
```batch
@echo off
echo Building project...
call npm run build
echo Deploying to Cloudflare Pages...
wrangler pages deploy out --project-name=southbuild-invest
echo Done!
```

**Mac/Linux (deploy.sh):**
```bash
#!/bin/bash
echo "Building project..."
npm run build
echo "Deploying to Cloudflare Pages..."
wrangler pages deploy out --project-name=southbuild-invest
echo "Done!"
```

Then just run:
- Windows: `deploy.bat`
- Mac/Linux: `./deploy.sh`

