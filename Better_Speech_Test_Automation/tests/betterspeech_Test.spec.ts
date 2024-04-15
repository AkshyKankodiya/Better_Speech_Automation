import { test, expect, Page } from '@playwright/test'
import onboardingPage from '../pages/onboarding_Page';
import { allure } from "allure-playwright";
import betterspeechpage from '../pages/betterspeech_Page';



test.describe.serial('betterspeech_page', () => {

    let betterspeech_Page: betterspeechpage;


    test.beforeEach(async ({ page }) => {
        
        betterspeech_Page = new betterspeechpage(page);
        await betterspeech_Page.navigate();
       // await betterspeech_Page.Login_With_cread();

        

    });
    test('Testcase_001_BetterSpeech_Finance_Test', async ({ page }) => {
        await allure.step("Step_001_Navigate Finance Page and Verify", async () => {
        });
        //await betterspeech_Page.Navigate_To_qna();
        await betterspeech_Page.btnClick_GetBetterSpeech()
        await betterspeech_Page.switchTab1();

        
        
       
    });
});