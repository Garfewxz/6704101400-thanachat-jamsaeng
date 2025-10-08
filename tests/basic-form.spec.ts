// tests/basic-form.spec.ts
import { test, expect } from '@playwright/test'

test('Basic form loads and submits', async ({ page }) => {
  await page.goto('http://localhost:9000') // เปลี่ยนตาม port ที่ Quasar ใช้

  await expect(page.getByLabel('Name')).toBeVisible()
  await page.getByLabel('Name').fill('LBX')
  await page.getByLabel('Email').fill('lbx@example.com')
  await page.getByLabel('Password').fill('123456')
  await page.getByRole('button', { name: 'Submit' }).click()
})
