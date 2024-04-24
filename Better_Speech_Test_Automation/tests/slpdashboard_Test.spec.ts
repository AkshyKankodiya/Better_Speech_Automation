import { test, expect, Page } from '@playwright/test'
import { allure } from "allure-playwright";
import slpdashboard from '../pages/slpdashboard_Page';

test.describe.serial('SLP_Dashboard', () => {

    
    let slp_dashboard: slpdashboard;

    test.beforeEach(async ({ page }) => {
        slp_dashboard = new slpdashboard(page);
       
        await slp_dashboard.navigate();

    });
    test('Testcase_001_Select_Dates', async ({ page,context}) => {


        await allure.step("Step_001_Verify_Dates", async () => {
        });
        await slp_dashboard.check_Valid_date();
        await slp_dashboard.check_Disabled_date();
        
        await allure.step("Step_002_submit_Request", async () => {
        });
       
        await slp_dashboard.submit_Request_for_near_capacity();
        await slp_dashboard.submit_Request_for_temporary_leave();


    });


});