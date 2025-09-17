#!/usr/bin/env node
import { existsSync } from 'node:fs';

// Yarn-only enforcement. Allow if user agent clearly indicates Yarn.
const ua = process.env.npm_config_user_agent || '';

const isYarn = /yarn\//.test(ua);
if (!isYarn) {
  console.error('✖ Package manager blocked. Use Yarn: yarn install');
  process.exit(1);
}

// Block pnpm / bun explicitly (defensive; above already catches)
if (/pnpm\//.test(ua) || /bun\//.test(ua)) {
  console.error('✖ Unsupported package manager. Use Yarn.');
  process.exit(1);
}

if (!existsSync('yarn.lock')) {
  console.log('ℹ️  Generating yarn.lock...');
}
