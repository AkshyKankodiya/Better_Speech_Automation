import { test, expect, Page } from '@playwright/test'
import onboardingPage from '../pages/onboarding_Page';
import betterspeechpage from '../pages/betterspeech_Page';
import { allure } from "allure-playwright";
import { on } from 'events';



test.describe.serial('onboarding_Page', () => {

    let onboarding_Page: onboardingPage;
    let betterspeech_Page: betterspeechpage;

    test.beforeEach(async ({ page }) => {
        onboarding_Page = new onboardingPage(page);
        betterspeech_Page = new betterspeechpage(page);
        await onboarding_Page.navigate();

    });
    test('Testcase_001_Fill_Form_and_Financial', async ({ page,context}) => {
        await allure.step("Step_001_Verify Get Better Speech Page", async () => {
        });
        await onboarding_Page.btnClick_GetBetterSpeech();
        await onboarding_Page.switchTab();
    });
});