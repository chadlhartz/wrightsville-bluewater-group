# Deployment Instructions

## Build the Website

```bash
npm run build
```

This creates a production-ready build in the `dist/` folder with:
- `index.html` - Main HTML file
- `favicon.svg` - Website icon
- `assets/` - Optimized CSS and JavaScript files

## Deploy to S3

Use the provided upload script to deploy to S3:

```bash
node upload-website.js wrightsville-bluewater ./dist
```

### What the script does:

1. Validates the subdomain and folder path
2. Checks if the S3 bucket exists
3. Creates customer folder structure if needed
4. Uploads/syncs all files to S3
5. Outputs the public URL

### Example Output:

```
🚀 Customer Website Deployment Tool

Configuration:
  Subdomain: wrightsville-bluewater
  Local Path: /Users/chadhartz/Development/wrightsville-bluewater-group/dist
  S3 Bucket: fetchpoint-websites
  AWS Region: us-east-1

✅ Files uploaded successfully

🎉 Deployment Complete!

Public URL: https://sites.fetchpointai.com/wrightsville-bluewater
S3 Path: s3://fetchpoint-websites/customers/wrightsville-bluewater/website/

Note: CloudFront may take a few minutes to update the cache.
```

## Prerequisites

- AWS CLI installed and configured
- AWS credentials with S3 access permissions
- Access to the `fetchpoint-websites` bucket

## Testing Locally

Before deploying, test the production build locally:

```bash
npm run preview
```

This starts a local server at `http://localhost:4173` to preview the built website.

## Troubleshooting

### Build Errors

If the build fails:
1. Delete `node_modules/` and run `npm install` again
2. Check for syntax errors in the code
3. Ensure all dependencies are installed

### Upload Errors

If upload fails:
- Verify AWS CLI is installed: `aws --version`
- Check AWS credentials: `aws sts get-caller-identity`
- Verify bucket access: `aws s3 ls s3://fetchpoint-websites`

## Website URLs

After deployment, the website will be available at:

**Production URL:** https://sites.fetchpointai.com/wrightsville-bluewater

## Content Updates

To update the website:

1. Make changes to the React source files
2. Test locally with `npm run dev`
3. Build: `npm run build`
4. Deploy: `node upload-website.cjs wrightsvillebluewatergroup ./dist`

The upload script uses `--delete` flag, so files removed locally will be removed from S3.

