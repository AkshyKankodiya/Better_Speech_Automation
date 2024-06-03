import { test, expect, Page } from '@playwright/test'
import { allure } from 'allure-playwright';
import slpdashboard_profile from '../pages/slp_dashboard_profile_Page';



test.describe.serial('slp_dashboard_profile', () => {

    let Slpdashboard_profile_page: slpdashboard_profile;

    test.beforeEach(async ({ page }) => {
        Slpdashboard_profile_page = new slpdashboard_profile(page);
        await Slpdashboard_profile_page.navigate();

    });
    test('Testcase_001_Verify SLP Dashboard Profile ', async ({ page, context }) => {
        await allure.step("Step_001_Verify SLP Dashboard Profile", async () => {
        });

        await Slpdashboard_profile_page.dash_Profile_Elements();

    });
});