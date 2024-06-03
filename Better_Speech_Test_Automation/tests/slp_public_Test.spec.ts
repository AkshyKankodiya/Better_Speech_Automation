import { test, expect, Page } from '@playwright/test'
import slpoptionpage from '../pages/slp_public_page';
import { allure } from 'allure-playwright';
import slppublic from '../pages/slp_public_page';



test.describe.serial('slp_public_page', () => {

    let slppublc_page: slppublic;

    test.beforeEach(async ({ page }) => {
        slppublc_page = new slppublic(page);
        await slppublc_page.navigate();

    });
    test('Testcase_001_Verify SLP Public ', async ({ page, context }) => {
        await allure.step("Step_001_Verify SLP Public", async () => {
        });
        await slppublc_page.verify_Elem_Without_Login();
        await slppublc_page.verify_Elem_With_Login()
    });
});