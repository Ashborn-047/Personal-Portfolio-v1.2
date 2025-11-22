# Deployment Guide

This guide will help you deploy the Cinematic Portfolio to Vercel.

## Prerequisites

- GitHub account with the repository pushed
- Vercel account (sign up at [vercel.com](https://vercel.com))

## Deploying to Vercel

### Step 1: Import Project

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository: `Ashborn-047/Personal-Portfolio-v1.2`

### Step 2: Configure Project

Vercel should auto-detect the settings, but verify:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 3: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 1-2 minutes)
3. Once deployed, you'll get a production URL like: `https://your-project.vercel.app`

### Step 4: Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to **"Domains"**
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

## Automatic Deployments

Vercel automatically deploys:
- **Production**: Every push to the `main` branch
- **Preview**: Every pull request gets a unique preview URL

## Environment Variables

This project doesn't require any environment variables, but if you add any in the future:

1. Go to project **Settings** → **Environment Variables**
2. Add your variables
3. Redeploy for changes to take effect

## Troubleshooting

### Build Fails

- Check the build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Verify all dependencies are in `package.json`

### 404 Errors on Routes

- Ensure `vercel.json` is present with SPA rewrites
- Check that the output directory is set to `dist`

### Slow Loading

- Run `npm run build` locally and check bundle size
- Consider code splitting if bundles are too large
- Optimize images and assets

## Support

For issues specific to Vercel deployment, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

**Happy Deploying! 🚀**
