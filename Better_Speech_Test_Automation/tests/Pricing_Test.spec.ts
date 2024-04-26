import { test, expect, Page } from '@playwright/test'
import pricingpage from '../pages/Pricing_Page';
import { allure } from "allure-playwright";



test.describe.serial('Pricing_Test_Page_Buttons', () => {

    let pricing_Page: pricingpage;


    test.beforeEach(async ({ page }) => {
        pricing_Page = new pricingpage(page);

        await pricing_Page.navigate();

    });
    test('Testcase_001_Pricing page Login and Get Better Speech Buttons Verification', async ({ page, context }) => {
        await allure.step("Step_001_Verify Buttons on Pricing Page", async () => {
        });
        await pricing_Page.verify_LoginAnd_Get_Better_Speech_Buttons();
    });


    test('Testcase_002_Pricing page Get_Start and Get Better Speech Buttons Verification', async ({ page, context }) => {
        await allure.step("Step_001_Verify Buttons on Pricing Page", async () => {
        });
        await pricing_Page.verify_Get_StartAnd_Get_Better_Speech_Buttons();
    });

    test('Testcase_003_Pricing page Apply_Here and Get Tip Buttons Buttons Verification', async ({ page, context }) => {
        await allure.step("Step_001_Verify Buttons on Pricing Page", async () => {
        });
        await pricing_Page.verify_Apply_HereAnd_Get_Tip_Buttons();
    });

    test('Testcase_004_Pricing page Verification Better_Speech_3_Button', async ({ page, context }) => {
        await allure.step("Step_001_Verify Buttons on Pricing Page", async () => {
        });
        await pricing_Page.verify_Better_Speech_3_Button();
    });

    test('Testcase_005_Pricing page VerificationBetter_Speech_4_Button', async ({ page, context }) => {
        await allure.step("Step_001_Verify Buttons on Pricing Page", async () => {
        });
        await pricing_Page.verify_Better_Speech_4_Button();
    });

});