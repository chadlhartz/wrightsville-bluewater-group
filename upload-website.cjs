#!/usr/bin/env node

/**
 * Deploy a website to S3 for a specific customer subdomain
 *
 * Usage:
 *   node deploy-website.js <subdomain> <folder-path>
 *
 * Example:
 *   node deploy-website.js my-customer ./dist
 *   node deploy-website.js testcustomer /Users/chad/websites/testcustomer
 *
 * Environment variables:
 *   - PROJECT_NAME (default: fetchpoint)
 *   - AWS_REGION (default: us-east-1)
 *
 * Requirements:
 *   - AWS CLI must be installed and configured
 *   - Proper AWS credentials with S3 access
 *
 * This script:
 * 1. Validates inputs
 * 2. Checks if S3 folder exists for the subdomain
 * 3. Creates the folder structure if it doesn't exist
 * 4. Uploads/syncs the website files to S3
 * 5. Outputs the public URL
 */

const { execSync } = require('child_process');
const { existsSync, statSync } = require('fs');
const path = require('path');

// Configuration
const PROJECT_NAME = process.env.PROJECT_NAME || 'fetchpoint';
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
const BUCKET_NAME = `${PROJECT_NAME}-websites`;

/**
 * Execute a shell command and return output
 */
function exec(command, options = {}) {
  try {
    return execSync(command, {
      encoding: 'utf8',
      stdio: options.silent ? 'pipe' : 'inherit',
      ...options,
    });
  } catch (error) {
    if (options.ignoreError) {
      return null;
    }
    throw error;
  }
}

/**
 * Check if AWS CLI is installed
 */
function checkAwsCli() {
  try {
    exec('aws --version', { silent: true });
    return true;
  } catch (error) {
    console.error('❌ AWS CLI is not installed or not in PATH');
    console.error('   Please install it: https://aws.amazon.com/cli/');
    process.exit(1);
  }
}

/**
 * Check if S3 bucket exists
 */
function checkBucket() {
  console.log(`Checking if bucket ${BUCKET_NAME} exists...`);
  try {
    exec(`aws s3 ls s3://${BUCKET_NAME} --region ${AWS_REGION}`, {
      silent: true,
    });
    console.log('✅ Bucket exists\n');
    return true;
  } catch (error) {
    console.error(`❌ Bucket ${BUCKET_NAME} does not exist or is not accessible`);
    console.error('   Please create it using Terraform first');
    process.exit(1);
  }
}

/**
 * Check if customer folder exists in S3
 */
function checkCustomerFolder(subdomain) {
  const folderPath = `customers/${subdomain}/website/`;
  console.log(`Checking if folder exists: ${folderPath}`);

  try {
    const output = exec(
      `aws s3 ls s3://${BUCKET_NAME}/${folderPath} --region ${AWS_REGION}`,
      { silent: true, ignoreError: true },
    );
    return output !== null;
  } catch (error) {
    return false;
  }
}

/**
 * Create customer folder in S3
 */
function createCustomerFolder(subdomain) {
  const folderPath = `customers/${subdomain}/website/`;
  console.log(`Creating folder: ${folderPath}`);

  try {
    // Create a .keep file to establish the folder structure
    const keepContent = 'This file maintains the folder structure for customer websites.';
    exec(
      `echo "${keepContent}" | aws s3 cp - s3://${BUCKET_NAME}/${folderPath}.keep --region ${AWS_REGION}`,
      { silent: true },
    );
    console.log('✅ Folder created\n');
    return true;
  } catch (error) {
    console.error('❌ Failed to create folder:', error.message);
    process.exit(1);
  }
}

/**
 * Upload website files to S3
 */
function uploadWebsite(subdomain, localPath) {
  const s3Path = `s3://${BUCKET_NAME}/customers/${subdomain}/website/`;
  console.log(`Uploading files from ${localPath} to ${s3Path}...`);

  try {
    // Use aws s3 sync to upload files
    // --delete removes files from S3 that don't exist locally
    exec(
      `aws s3 sync "${localPath}" ${s3Path} --region ${AWS_REGION} --delete`,
    );
    console.log('\n✅ Files uploaded successfully\n');
    return true;
  } catch (error) {
    console.error('❌ Failed to upload files:', error.message);
    process.exit(1);
  }
}

/**
 * Main function
 */
function main() {
  console.log('🚀 Customer Website Deployment Tool\n');

  // Parse arguments
  const args = process.argv.slice(2);
  if (args.length !== 2) {
    console.error('Usage: node deploy-website.js <subdomain> <folder-path>');
    console.error('\nExample:');
    console.error('  node deploy-website.js my-customer ./dist');
    console.error('  node deploy-website.js testcustomer /Users/chad/websites/testcustomer');
    process.exit(1);
  }

  const [subdomain, localPath] = args;

  // Validate subdomain
  if (!/^[a-z0-9-]+$/.test(subdomain)) {
    console.error('❌ Invalid subdomain format');
    console.error('   Subdomain must contain only lowercase letters, numbers, and hyphens');
    process.exit(1);
  }

  // Validate local path
  const absolutePath = path.resolve(localPath);
  if (!existsSync(absolutePath)) {
    console.error(`❌ Folder does not exist: ${absolutePath}`);
    process.exit(1);
  }

  if (!statSync(absolutePath).isDirectory()) {
    console.error(`❌ Path is not a directory: ${absolutePath}`);
    process.exit(1);
  }

  console.log('Configuration:');
  console.log(`  Subdomain: ${subdomain}`);
  console.log(`  Local Path: ${absolutePath}`);
  console.log(`  S3 Bucket: ${BUCKET_NAME}`);
  console.log(`  AWS Region: ${AWS_REGION}\n`);

  // Check prerequisites
  checkAwsCli();
  checkBucket();

  // Check if customer folder exists, create if not
  const folderExists = checkCustomerFolder(subdomain);
  if (!folderExists) {
    console.log('Folder does not exist, creating...');
    createCustomerFolder(subdomain);
  } else {
    console.log('✅ Folder exists\n');
  }

  // Upload website files
  uploadWebsite(subdomain, absolutePath);

  // Output success message with URL
  const publicUrl = `https://${subdomain}.sites.fetchpointai.com`;
  console.log('🎉 Deployment Complete!\n');
  console.log(`Public URL: ${publicUrl}`);
  console.log(`S3 Path: s3://${BUCKET_NAME}/customers/${subdomain}/website/\n`);
  console.log('Note: CloudFront may take a few minutes to update the cache.');
}

// Run the script
main();
