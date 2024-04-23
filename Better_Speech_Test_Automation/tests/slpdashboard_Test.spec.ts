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


        await allure.step("Step_001_Select_Firstdate", async () => {
        });
        await slp_dashboard.near_Capacity_Date_Selection();


        await allure.step("Step_002_Select_Second_date", async () => {
        });
       
        await slp_dashboard.planning_temporary_leave_Selection();

    });


});