import { test, expect, Page } from '@playwright/test'
import slpperformance from '../pages/slpdashboard_performance_page';
import { allure } from 'allure-playwright';



test.describe.serial('Slpdashboard Performance ', () => {

    let slpperformance_page : slpperformance;

    test.beforeEach(async ({ page }) => {

        slpperformance_page = new slpperformance(page);
        await slpperformance_page.navigate();
    });
    
    test('Testcase_001_Performance', async ({ page }) => {
    await allure.step("Step_001_Verify Calculation", async () => {
    });
    await slpperformance_page.login_With_Cred();
    await slpperformance_page.calculate_HourlyRate();
    await slpperformance_page.calculate_Session_Per_Client();
    await slpperformance_page.customer_Rating();
    await allure.step("Step_002_Verify Calculation", async () => {
    });
    // await page.waitForTimeout(5000);
    await slpperformance_page.increase_Your_Hourly_Rate();
    });
});