import { test, expect, Page } from '@playwright/test'
import { allure } from "allure-playwright";
import slpdashboard from '../pages/slpdashboard_Page';

test.describe.serial('SLP_Dashboard', () => {

    
    let slp_dashboard: slpdashboard;

    test.beforeEach(async ({ page , isMobile}) => {
        slp_dashboard = new slpdashboard(page,isMobile);
       
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

        await slp_dashboard.Email_Read();

    });


});
// Working on Mobile and Desktop
//Use Below Command for Authantication gmail and also for token genration 
//node node_modules/gmail-tester/init.js credentials.json token.json testqa2606@gmail.com