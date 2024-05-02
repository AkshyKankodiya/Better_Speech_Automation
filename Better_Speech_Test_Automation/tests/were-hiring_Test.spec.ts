import { test, expect, Page } from '@playwright/test'
import werehiring from '../pages/were-hiring_Page';
import { allure } from 'allure-playwright';


test.describe.serial('speech_therapy_near_me_page', () => {

    let werehiring_page : werehiring;

    test.beforeEach(async ({ page }) => {
        werehiring_page = new werehiring(page);
        await werehiring_page.navigate();

    });
    test('Testcase_001_Were Hiring', async ({ page }) => {
        await allure.step("Step_001_Login with Credentials", async () => {
        });
        await werehiring_page.Fill_Form();
        await werehiring_page.slphire2();
    });
});