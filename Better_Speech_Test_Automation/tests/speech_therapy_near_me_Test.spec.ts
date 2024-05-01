import { test, expect, Page } from '@playwright/test'
import speechtherapy from '../pages/speech_therapy_near_me_Page';
import { allure } from 'allure-playwright';



test.describe.serial('speech_therapy_near_me_page', () => {

    let speech_therapy_near_me_Page: speechtherapy;

    test.beforeEach(async ({ page }) => {
        speech_therapy_near_me_Page = new speechtherapy(page);
        await speech_therapy_near_me_Page.navigate();

    });
    test('Testcase_001_Speech therapy near me', async ({ page }) => {
        await allure.step("Step_001_Login with Credentials", async () => {
        });
        await speech_therapy_near_me_Page.Login_with_Cred();

        await allure.step("Step_002_Verify that all address are from USA", async () => {
        });
        await speech_therapy_near_me_Page.Verify_address();

        await allure.step("Step_003_Store Addresses into CSV file", async () => {
        });
        await speech_therapy_near_me_Page.Write_CSV();
    });
});