import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'
import Cards_Detail from '../../Better_Speech_Test_Automation/test-data/Cards_Detail.json';

class placeorderpage {


    page: Page;
    randomNumber: any;
    randomEmail: any;
    URLstring2: string;
    randomUrl: string;
    emailTextbox: Locator;
    dropdownCountry: Locator;
    dropdownState: Locator;
    cardNTextbox: Locator;
    mm_yyTextbox: Locator;
    CVVTextbox: Locator;
    startTher: any;
    welcomeText: Locator;
    myChildBTN: Locator;
    cardEl: Locator;
    CardnumberFrame: Locator;
    mm_yyCardnumberFrame: Locator;
    CvvCardnumberFrame: Locator;

    constructor(page: Page) {

        this.page = page;
        this.randomNumber
        this.randomEmail
        this.URLstring2 = "start-now?email="
        this.randomUrl
        this.emailTextbox = page.locator("//input[@name='email']")
        this.cardNTextbox = page.locator("//input[@name='cardnumber']")
        this.mm_yyTextbox = page.locator("//input[@name='exp-date']")
        this.CVVTextbox = page.locator("//input[@name='cvc']")
        this.dropdownCountry = page.locator('#collection_comp-lp6rfa42')
        this.dropdownState = page.locator('#collection_comp-lp6rfa4c')
        this.startTher=page.locator("//span[text() ='Start Therapy']")
        this.welcomeText=page.locator("//span[contains(text(),'Welcome to Better Speech!')]")
        this.myChildBTN=page.locator('//span[contains(text(),"My Child")]')
        this.cardEl =page.locator('//div[@id="card-element"]')
        this.CardnumberFrame = this.page.frameLocator('//iframe[@class="wuksD5"]').locator("//input[@name='cardnumber']");
        this.mm_yyCardnumberFrame = this.page.frameLocator('//iframe[@class="wuksD5"]').locator("//input[@name='exp-date']");
        this.CvvCardnumberFrame = this.page.frameLocator('//iframe[@class="wuksD5"]').locator("//input[@name='cvc']");
    }

    async generateRandomEmail(): Promise<string> {
        // Generate a random number of 10 digits in length
        this.randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);

        // Email structure
        this.randomEmail = `qabetterspeech+${this.randomNumber}@gmail.com`;
        this.randomUrl = this.URLstring2 + this.randomEmail;
        //console.log(this.randomEmail);
        return this.randomEmail;
    }

    async navigate() {
        this.generateRandomEmail();

        await this.page.goto('/' + this.randomUrl);
    }

    async place_Order_Valid() {
        console.log("\nRandom Email:", this.randomEmail);
        const newTabURL = this.page.url();
        console.log('\nCurrent URL:', newTabURL);
        await this.emailTextbox.click();
        await this.page.waitForTimeout(1000);
        await this.emailTextbox.clear();
        await this.emailTextbox.fill(this.randomEmail);
        await this.page.waitForTimeout(1000);
    
        // await this.CardnumberFrame.fill("4242424242424242");
        // await this.page.waitForTimeout(1000);
        // await this.mm_yyCardnumberFrame.fill(Cards_Detail['MM/YY']);
        // await this.page.waitForTimeout(1000);
        // await this.CvvCardnumberFrame.fill(Cards_Detail.CVV);
        // await this.page.waitForTimeout(1000);
        await this.dropdownCountry.selectOption({ value: 'United States'});
        await this.page.waitForTimeout(1000);
        await this.dropdownState.selectOption({ value: 'Texas'});
        await this.page.waitForTimeout(1000);
        await this.startTher.click();
        await this.page.waitForTimeout(8000);
        await this.welcomeText.isVisible();
    }

}
export default placeorderpage
