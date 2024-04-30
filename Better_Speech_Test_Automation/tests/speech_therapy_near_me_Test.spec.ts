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
        await allure.step("Step_001_Verify that all address are from USA", async () => {
        });
        await speech_therapy_near_me_Page.Login_button();
        await speech_therapy_near_me_Page.fill_Email_Password();
        await speech_therapy_near_me_Page.redirect_URL();
        await speech_therapy_near_me_Page.Size_Address();
        await speech_therapy_near_me_Page.Verify_address();
        await speech_therapy_near_me_Page.Write_CSV();
    });
});