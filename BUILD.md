# Building for Production

## Quick Build Steps

### 1. Build the Production Version

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### 2. Test Production Build Locally

```bash
npm start
```

This starts the production server on `http://localhost:3000`

### 3. Deploy

Choose one of the deployment options below.

---

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy
5. Your site will be live with a URL like `your-project.vercel.app`

**Or use CLI:**
```bash
npm i -g vercel
vercel
```

### Option 2: Netlify

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

**Or use CLI:**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Option 3: Traditional Hosting (VPS/Shared Hosting)

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload these files/folders to your server:
   - `.next` folder
   - `public` folder
   - `package.json`
   - `next.config.js`
   - `node_modules` (or run `npm install --production` on server)

3. Install dependencies on server:
   ```bash
   npm install --production
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Use PM2 for process management (recommended):
   ```bash
   npm install -g pm2
   pm2 start npm --name "southbuild" -- start
   pm2 save
   pm2 startup
   ```

### Option 4: Docker

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t southbuild-invest .
docker run -p 3000:3000 southbuild-invest
```

---

## Pre-Deployment Checklist

- [ ] Test the production build locally (`npm run build && npm start`)
- [ ] Check all images are in the `public` folder
- [ ] Verify environment variables (if any)
- [ ] Test all navigation links
- [ ] Check mobile responsiveness
- [ ] Verify contact form works (if connected to backend)
- [ ] Test on different browsers

---

## Environment Variables

If you need environment variables, create a `.env.local` file:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

For production, set these in your hosting platform's environment variables section.

---

## Build Output

After running `npm run build`, you'll see:
- `.next/` - Optimized production build
- Build size information
- Route information
- Any warnings or errors

---

## Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run lint`
- Ensure all dependencies are installed: `npm install`
- Check Node.js version (should be 18+)

### Images Not Loading
- Verify images are in the `public` folder
- Check image paths in components
- For external images, add domains to `next.config.js`

### Performance Issues
- Run `npm run build` to see bundle size
- Check for large images and optimize them
- Consider using Next.js Image optimization

