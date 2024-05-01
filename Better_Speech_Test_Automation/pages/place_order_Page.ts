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
    finalPress: any;
    Actualtext: any;
    numberString: string;
    cardNotFoundElm: Locator;
    errorMsg: Locator;
    Expected_ErrorMsg: string;
    ActualErrorMsg: any;
    popForNEW1: Locator;
    popForNEW6: Locator;


    constructor(page: Page) {

        this.page = page;
        this.randomNumber
        this.randomEmail
        this.URLstring2 = "start-now?email="
        this.randomUrl
        this.finalPress
        this.emailTextbox = page.locator("//input[@name='email']")
        this.cardNTextbox = page.locator("//input[@name='cardnumber']")
        this.mm_yyTextbox = page.locator("//input[@name='exp-date']")
        this.CVVTextbox = page.locator("//input[@name='cvc']")
        this.dropdownCountry = page.locator('#collection_comp-lp6rfa42')
        this.dropdownState = page.locator('#collection_comp-lp6rfa4c')
        this.startTher = page.locator("//*[text() ='Start Therapy']")
        this.welcomeText = page.locator("//span[contains(text(),'Welcome to Better Speech!')]")
        this.myChildBTN = page.locator('//span[contains(text(),"My Child")]')
        this.cardEl = page.locator('//div[@id="card-element"]')
        this.CardnumberFrame = this.page.frameLocator("//iframe[@class='wuksD5']").locator("//div[@id='card-element']")
        this.cardNotFoundElm = page.locator("//span[text()='Your card number is incomplete.']")
        this.errorMsg = page.locator("//*[contains(text(),'our card')]")
        this.Expected_ErrorMsg = "Please check your card number and expiration date again."
        this.ActualErrorMsg
        this.popForNEW1 = page.locator('//*[@data-block-level-container="PopupContainer"]')
        this.popForNEW6 = page.locator('//*[@class="betterspeech-exit-closeright-contaier"]')
    }

    async generateRandomEmail(): Promise<string> {
        this.randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
        // Email structure
        this.randomEmail = `qabetterspeech+${this.randomNumber}@gmail.com`;
        this.randomUrl = this.URLstring2 + this.randomEmail;
        return this.randomEmail;
    }

    async typeCardNumber(page: Page, numberString: string) {
        this.finalPress = numberString + Cards_Detail['MM/YY'] + Cards_Detail.CVV
        for (const char of this.finalPress) {
            await page.keyboard.press(char);
        }
    }

    async randomEmail_method() {
        console.log("\nRandom Email:", this.randomEmail);
        const newTabURL = this.page.url();
        console.log('Current URL:', newTabURL);
        await this.emailTextbox.isVisible()
        await this.emailTextbox.waitFor();
        await this.emailTextbox.click();
        await this.emailTextbox.clear();
        await this.page.waitForTimeout(2000);
        await this.emailTextbox.fill(this.randomEmail);

    }

    async selectDropDown() {
        await this.dropdownCountry.waitFor();
        await this.dropdownCountry.selectOption({ value: 'United States' });
       await this.dropdownState.waitFor();
        await this.dropdownState.selectOption({ value: 'Texas' });
        await this.page.waitForTimeout(1000);
    }
    async selectDropDown2() {
        await this.page.waitForTimeout(1000);
        await this.dropdownCountry.waitFor();
        await this.dropdownCountry.selectOption({ value: 'Ireland' });
        // await this.dropdownState.waitFor();
        // await this.dropdownState.selectOption({ value: 'Florida' });
        // await this.page.waitForTimeout(1000);
    }

    async Verify_On_ThankYou() {
        try {
            await this.page.waitForTimeout(1000);
            await this.startTher.waitFor();
            await this.startTher.click();
            await this.welcomeText.waitFor();
            await this.myChildBTN.waitFor();
            await this.myChildBTN.isEnabled();
        } catch (error) {
            console.error('Somthing Wrong on', error)
        }
    }

    async Verify_Error_Text() {
        try {
            await this.page.waitForTimeout(1000);
            await this.startTher.waitFor();
            await this.startTher.click();
            await this.page.waitForTimeout(2000);
            await this.errorMsg.waitFor();
            this.ActualErrorMsg = await this.errorMsg.innerText();
            this.verifyValue(this.ActualErrorMsg, this.Expected_ErrorMsg, "")
            console.log("\nExpected Error:", this.Expected_ErrorMsg);
            console.log("\nActual Error:", this.ActualErrorMsg);
        } catch (error) {
            console.error('Somthing Wrong on', error)
        }


    }



    async navigate() {
        this.generateRandomEmail();
        await this.page.goto('/' + this.randomUrl);
        await this.CardnumberFrame.waitFor();
    }


    async place_Order_With_Valid_Visa() {
        console.log("\nPlace Order With Visa Card");
        await this.navigate();
        await this.page.waitForTimeout(1000);
        await this.randomEmail_method();
        await this.selectDropDown2();

        await this.CardnumberFrame.waitFor();
        await this.CardnumberFrame.isEnabled();
        await this.CardnumberFrame.click();
        await this.page.waitForTimeout(1000);
        await this.typeCardNumber(this.page, Cards_Detail.Valid_Visa);
        await this.Verify_On_ThankYou();

    }

    async place_Order_With_Valid_Mastercard() {
        console.log("\nPlace Order With Mastercard");
        await this.navigate();
        await this.page.waitForTimeout(1000);
        await this.randomEmail_method();
        await this.selectDropDown2();

        await this.CardnumberFrame.waitFor();
        await this.CardnumberFrame.isEnabled();
        await this.CardnumberFrame.click();
        await this.page.waitForTimeout(1000);
        await this.typeCardNumber(this.page, Cards_Detail.Valid_Mastercard);
        await this.Verify_On_ThankYou();

    }

    async place_Order_With_Valid_American_Express() {
        console.log("\nPlace Order With American Express card");
        await this.navigate();
        await this.page.waitForTimeout(1000);
        await this.randomEmail_method();
        await this.selectDropDown2();

        await this.CardnumberFrame.waitFor();
        await this.CardnumberFrame.isEnabled();
        await this.CardnumberFrame.click();
        await this.page.waitForTimeout(1000);
        await this.typeCardNumber(this.page, Cards_Detail.Valid_American_Express);
        await this.Verify_On_ThankYou();

    }

    async place_Order_With_Valid_Discover() {
        console.log("\nPlace Order With Discover card");
        await this.navigate();
        await this.page.waitForTimeout(1000);
        await this.randomEmail_method();
        await this.selectDropDown2();

        await this.CardnumberFrame.waitFor();
        await this.CardnumberFrame.isEnabled();
        await this.CardnumberFrame.click();
        await this.page.waitForTimeout(1000);
        await this.typeCardNumber(this.page, Cards_Detail.Valid_Discover);
        await this.Verify_On_ThankYou();

    }

    async place_Order_With_Invalid_Generic_decline() {
        console.log("\nInvalid Generic decline Card");
        //await this.navigate();
        await this.page.waitForTimeout(1000);
        await this.randomEmail_method();
        await this.page.waitForTimeout(2000);
        await this.selectDropDown2();
        await this.CardnumberFrame.waitFor();
        await this.CardnumberFrame.isEnabled();
        await this.CardnumberFrame.click();
        await this.page.waitForTimeout(1000);
        await this.typeCardNumber(this.page, Cards_Detail.Invalid_Generic_decline);
        await this.Verify_Error_Text();

    }

    async place_Order_With_Insufficient_funds_decline() {
        console.log("\nInvalid Insufficient funds decline Card");
        await this.navigate();
        this.handlePopups();
        await this.page.waitForTimeout(1000);
        await this.randomEmail_method();
        await this.selectDropDown2();
        await this.CardnumberFrame.waitFor();
        await this.CardnumberFrame.isEnabled();
        await this.CardnumberFrame.click();
        await this.page.waitForTimeout(1000);
        await this.typeCardNumber(this.page, Cards_Detail.Invalid_Insufficient_funds_decline);
        await this.Verify_Error_Text();

    }

    async place_Order_With_Invalid_Lost_card_decline() {
        console.log("\nInvalid Lost card decline Card");
        await this.navigate();
        this.handlePopups();
        await this.page.waitForTimeout(1000);
        await this.randomEmail_method();
        await this.selectDropDown2();
        await this.CardnumberFrame.waitFor();
        await this.CardnumberFrame.isEnabled();
        await this.CardnumberFrame.click();
        await this.page.waitForTimeout(1000);
        await this.typeCardNumber(this.page, Cards_Detail.Invalid_Lost_card_decline);
        await this.Verify_Error_Text();

    }

    async place_Order_With_Invalid_Stolen_card_decline() {
        console.log("\nInvalid Stolen card decline Card");
        await this.navigate();
        await this.page.waitForTimeout(1000);
        await this.randomEmail_method();
        await this.selectDropDown2();
        await this.CardnumberFrame.waitFor();
        await this.CardnumberFrame.isEnabled();
        await this.CardnumberFrame.click();
        await this.page.waitForTimeout(1000);
        await this.typeCardNumber(this.page, Cards_Detail.Invalid_Stolen_card_decline);
        await this.Verify_Error_Text();

    }

    async place_Order_With_Invalid_Expired_card_decline() {
        console.log("\nInvalid Expired card decline Card");
        await this.navigate();
        await this.page.waitForTimeout(1000);
        await this.randomEmail_method();
        await this.selectDropDown2();
        await this.CardnumberFrame.waitFor();
        await this.CardnumberFrame.isEnabled();
        await this.CardnumberFrame.click();
        await this.page.waitForTimeout(1000);
        await this.typeCardNumber(this.page, Cards_Detail.Invalid_Expired_card_decline);
        await this.navigate();
        await this.Verify_Error_Text();

    }

    async place_Order_With_Invalid_incorrect_CVC_decline() {
        console.log("\nInvalid incorrect CVC decline Card");
        await this.navigate();
        await this.page.waitForTimeout(1000);
        await this.randomEmail_method();
        await this.selectDropDown2();
        await this.CardnumberFrame.waitFor();
        await this.CardnumberFrame.isEnabled();
        await this.CardnumberFrame.click();
        await this.page.waitForTimeout(1000);
        await this.typeCardNumber(this.page, Cards_Detail.Invalid_incorrect_CVC_decline);
        await this.Verify_Error_Text();

    }

    async place_Order_With_Invalid_Processing_error_decline() {
        console.log("\nInvalid Processing error decline Card");
        await this.navigate();
        await this.page.waitForTimeout(1000);
        await this.randomEmail_method();
        await this.selectDropDown2();
        await this.CardnumberFrame.waitFor();
        await this.CardnumberFrame.isEnabled();
        await this.CardnumberFrame.click();
        await this.page.waitForTimeout(1000);
        await this.typeCardNumber(this.page, Cards_Detail.Invalid_Processing_error_decline);
        await this.Verify_Error_Text();

    }

    async place_Order_With_Invalid_incorrect_number_decline() {
        console.log("\nInvalid incorrect number decline Card");
        await this.navigate();
        await this.page.waitForTimeout(1000);
        await this.randomEmail_method();
        await this.selectDropDown2();
        await this.CardnumberFrame.waitFor();
        await this.CardnumberFrame.isEnabled();
        await this.CardnumberFrame.click();
        await this.page.waitForTimeout(1000);
        await this.typeCardNumber(this.page, Cards_Detail.Invalid_incorrect_number_decline);
        await this.Verify_Error_Text();

    }

    async place_Order_With_Invalid_Exceeding_velocity_limit_decline() {
        console.log("\nInvalid Exceeding velocity limit decline Card");
        await this.navigate();
        await this.page.waitForTimeout(1000);
        await this.randomEmail_method();
        await this.selectDropDown2();
        await this.CardnumberFrame.waitFor();
        await this.CardnumberFrame.isEnabled();
        await this.CardnumberFrame.click();
        await this.page.waitForTimeout(1000);
        await this.typeCardNumber(this.page, Cards_Detail.Invalid_Exceeding_velocity_limit_decline);
        await this.Verify_Error_Text();

    }



    async handlePopups() {
        if (await this.popForNEW1.isVisible() || await this.popForNEW6.isVisible()) {
            if (await this.popForNEW1.isVisible()) {
                await this.page.keyboard.press('Escape');
            } else {
                await this.popForNEW6.click();
            }
        }
    }

    async verifyValue(actual: any, expected: any, message?: string) {
        try {
            if (actual === expected) {
                //console.log(`Verification Passed: Actual value "${actual}" matches expected value "${expected}"`);
            } else {
                const errorMessage = message ? `${message}: ` : '';
                throw new Error(`${errorMessage}Verification Failed: Actual value "${actual}" does not match expected value "${expected}"`);
            }
        } catch (error) {
            console.error('\nError occurred during verification:', error.message);
        }
    }






}
export default placeorderpage