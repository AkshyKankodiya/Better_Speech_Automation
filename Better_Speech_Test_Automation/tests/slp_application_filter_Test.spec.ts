import { test, expect, Page } from '@playwright/test'
import { allure } from 'allure-playwright';
import slp_application_filter from '../pages/slp_application_filter_Page';



test.describe.serial('slp_dashboard_profile', () => {

    let Slp_application_filter: slp_application_filter;

    test.beforeEach(async ({ page }) => {
        Slp_application_filter = new slp_application_filter(page);
        await Slp_application_filter.navigate();

    });
    test('Testcase_001_Verify Slp Application Filter ', async ({ page, context }) => {
        await allure.step("Step_001_Verify Slp Application Filter", async () => {
        });

        await Slp_application_filter.filter_By_Valid_Data();
        await Slp_application_filter.filter_By_Not_DataPresent();

    });
});