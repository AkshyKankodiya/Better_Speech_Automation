import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'


class PricingPage {
    page: Page;
    randomUrl: string;
    BettrtSpeechBtn_1: Locator;
    LoginBtn: Locator;
    BettrtSpeechBtn_2: Locator;
    Get_startBtn_1: Locator;
    Apply_Here_Btn_1: Locator;
    BettrtSpeechBtn_3: Locator;
    Get_TipBtn: Locator;
    BettrtSpeechBtn_4: Locator;
    button: Locator;
    closeTab: any;
    closeTabPromise: Promise<Page>;
    Email: string;
    emailTextB: Locator;
    btnChild: Locator;

    constructor(page: Page) {

        this.page = page;
        this.randomUrl = "pricing"
        this.LoginBtn = page.locator('//span[contains(text(),"Login")]')
        this.BettrtSpeechBtn_1 = page.locator("//div[@id='comp-kitqo06w']//span")
        this.BettrtSpeechBtn_2 = page.locator("//div[@class='comp-l81n3huu']//span[contains(text(),'Get Better Speech')]")
        this.Get_startBtn_1 = page.locator("//div[@id='comp-l808bzcz4']//span[contains(text(),'Get Started')]")
        this.Apply_Here_Btn_1 = page.locator("//div[@id='comp-l80kb1qy']//span[contains(text(),'Apply Here')]")
        this.BettrtSpeechBtn_3 = page.locator("//div[@id='comp-l81p7qqy']//span[contains(text(),'Get Better Speech')]")
        this.Get_TipBtn = page.locator("//div[@id='comp-l83d68nb']//span[contains(text(),'Get Tips')]")
        this.BettrtSpeechBtn_4 = page.locator("//div[@id='comp-kitqqz0q']//span[contains(text(),'Get Better Speech')]")
        this.closeTabPromise = this.page.waitForEvent('popup');
        this.emailTextB = page.locator("//input[@name='email']")
        this.Email = "qabetterspeech@gmail.com"
        this.btnChild = page.locator("(//a[@class='MVY5Lo'])[1]//img")
    }
    async navigate() {

        await this.page.goto('/' + this.randomUrl);
        await this.BettrtSpeechBtn_4.waitFor();
    }

    async verify_LoginAnd_Get_Better_Speech_Buttons() {

        await this.clickButtonWithout404(this.page, this.LoginBtn);
        await this.page.waitForTimeout(2000);
        await this.clickButtonWithout404(this.page, this.BettrtSpeechBtn_1);
        await this.btnChild.waitFor();
        await this.clickButtonWithout404(this.page, this.btnChild);
        await this.page.waitForTimeout(2000);
        await this.switchTab();

    }

    async verify_Get_StartAnd_Get_Better_Speech_Buttons() {

        await this.page.waitForTimeout(2000);
        await this.clickButtonWithout404(this.page, this.BettrtSpeechBtn_2);
        await this.switchTab();
        await this.page.waitForTimeout(2000);
        await this.clickButtonWithout404(this.page, this.Get_startBtn_1);
        await this.navigate();
        await this.page.close();

    }

    async verify_Apply_HereAnd_Get_Tip_Buttons() {

        await this.clickButtonWithout404(this.page, this.Apply_Here_Btn_1);
        await this.switchTab();
        await this.page.waitForTimeout(2000);
        await this.emailTextB.waitFor();
        await this.emailTextB.fill(this.Email)
        await this.page.waitForTimeout(2000);
        await this.clickButtonWithout404(this.page, this.Get_TipBtn);
        await this.page.close();

    }

    async verify_Better_Speech_3_Button() {
        
        await this.clickButtonWithout404(this.page, this.BettrtSpeechBtn_3);
        await this.page.waitForTimeout(2000);
        await this.switchTab();
    }

    async verify_Better_Speech_4_Button() {

        await this.page.waitForTimeout(2000);
        await this.clickButtonWithout404(this.page, this.BettrtSpeechBtn_4);
        await this.btnChild.waitFor();
        await this.clickButtonWithout404(this.page, this.btnChild);
        await this.page.waitForTimeout(2000);
        await this.switchTab();
    }

    async switchTab() {

        const closeTab = await this.closeTabPromise;
        await closeTab.waitForLoadState('domcontentloaded');
        await closeTab.close();

    }

    async isButtonClickable(page: Page, buttonLocator: Locator): Promise<boolean> {
        try {
            // Check if the button is visible and enabled (adjusted for clarity)
            const isVisible = await buttonLocator.isVisible();
            const isEnabled = await buttonLocator.isEnabled();
            return isVisible && isEnabled;
        } catch (error) {
            console.error(`Error checking button clickability: ${error.message}`);
            return false; // Assume not clickable if an error occurs
        }
    }

    async clickButtonWithout404(page: Page, buttonLocator: Locator) {
        try {
            const isClickable = await this.isButtonClickable(page, buttonLocator);
            if (isClickable) {
                await buttonLocator.click();
                console.log(`Clicked on Button "${await buttonLocator.textContent()}" `);
                const response = await buttonLocator.evaluate((btn: any) => fetch(btn.href || btn.formAction));
                return response.ok;
            }
        } catch (error) {
            console.log(`Button "${await buttonLocator.textContent()}" (or locator) is not clickable. Skipping.`);
            return false;
        }
        await this.navigate();
        

    }


} export default PricingPage