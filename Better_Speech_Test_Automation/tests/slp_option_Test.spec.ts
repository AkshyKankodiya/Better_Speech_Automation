import { test, expect, Page } from '@playwright/test'
import slpoptionpage from '../../Better_Speech_Test_Automation/pages/slp_option_page';
import { allure } from 'allure-playwright';



test.describe.serial('slpoption_page', () => {

    let slpoption_page: slpoptionpage;

    test.beforeEach(async ({ page }) => {
        slpoption_page = new slpoptionpage(page);
        await slpoption_page.navigate();

    });
    test('Testcase_001_Check Two Buttons on SLP option', async ({ page, context }) => {
        await allure.step("Step_001_Verify Read more and View Available Hours are works", async () => {
        });
        await slpoption_page.loginWithCred();
    });
});