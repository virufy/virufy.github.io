import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/en/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Virufy: Developing Cutting Edge AI Technology in Healthcare/);
});

test('redirect to the Cough Data Coleection form', async ({ page }) => {
  await page.goto('http://localhost:3000/en/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Share your cough' }).click();


  // Expects page to have a еуче щт еру зфпу.
  await expect(page.getByText(/Cough Data Collection Study/)).toBeVisible();
});
