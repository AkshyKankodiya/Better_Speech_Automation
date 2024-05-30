import { test, expect, Page } from '@playwright/test'
import werehiring from '../pages/were-hiring_Page';
import { allure } from 'allure-playwright';


test.describe.serial('speech_therapy_near_me_page', () => {

    let werehiring_page : werehiring;

    test.beforeEach(async ({ page,isMobile }) => {
        werehiring_page = new werehiring(page,isMobile);
        await werehiring_page.navigate();

    });
    test('Testcase_001_Were Hiring', async ({ page }) => {
        await allure.step("Step_001_Upload Documents", async () => {
        });
        await werehiring_page.fill_Form();
        await page.waitForTimeout(3000);
        await werehiring_page.upload_Resume();
        await page.waitForTimeout(3000);
        await werehiring_page.slpHire2();
    });

   test('Testcase_002_Were Hiring', async ({ page }) => {
        await allure.step("Step_001_Without Upload Documents", async () => {
        });
        await werehiring_page.fill_Form();
        await page.waitForTimeout(3000);
        await werehiring_page.without_Upload_Resume();
        await page.waitForTimeout(3000);
        await werehiring_page.slpHire2();
    }); 
});