import { test, expect } from '@playwright/test'

test('Form submission works correctly', async ({ page }) => {
  await page.goto('http://localhost:9000')

  await page.getByLabel('Name').fill('LBX')
  await page.getByLabel('Email').fill('lbx@example.com')
  await page.getByLabel('Password').fill('123456')
  await page.getByRole('button', { name: 'Submit' }).click()

  // ตรวจสอบว่า input ถูกเคลียร์หลัง reset (optional)
  await page.getByRole('button', { name: 'Reset' }).click()
  await expect(page.getByLabel('Name')).toHaveValue('')
})
