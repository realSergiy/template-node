import { defineConfig } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Test directory
  testDir: './test',

  // Test file patterns to match existing .test.ts and .spec.ts files
  testMatch: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],

  // Run tests in files in parallel
  fullyParallel: true,

  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,

  // Retry on CI only
  retries: process.env.CI ? 2 : 0,

  // Opt out of parallel tests on CI
  workers: process.env.CI ? 1 : undefined,

  // Reporter to use - use 'list' for unit tests instead of 'html'
  reporter: process.env.CI ? 'github' : 'list',

  // Timeout for each test
  timeout: 30_000,

  // Global test timeout
  globalTimeout: 600_000,

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    // baseURL: 'http://127.0.0.1:3000',

    // Collect trace when retrying the failed test
    trace: 'on-first-retry',
  },

  // No browser projects since we're doing unit testing only
  projects: [
    {
      name: 'unit-tests',
      testDir: './test',
      use: {},
    },
  ],

  // No webServer configuration since we're not testing web applications
});
