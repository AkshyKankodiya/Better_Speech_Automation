import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'
import Cards_Detail from '../test-data/Cards_Detail.json';
import form_Data from '../test-data/Form_Data.json';

class submitpage {


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
    caregiver_First_NameTextB: Locator;
    caregiver_Last_NametextB: Locator;
    passwordTextB: Locator;
    Confirm_passwordTextB: Locator;
    patient_First_NameTextB: Locator;
    patient_Last_NameTextB: Locator;
    CalanderTap: Locator;
    CurruntYear: Locator;
    total_year: Locator;
    Dateselect: Locator;
    Mibile_TextB: Locator;
    address_TextB: Locator;
    Langauge_TextB: Locator;
    Message_TextB: Locator;
    Next_step2Btn: Locator;
    yearText: any;
    ActualElemnt1: Locator;
    Expected_Thank_you: string;


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
        this.caregiver_First_NameTextB = page.locator('//input[contains(@id,"lktv2w1m")]')
        this.caregiver_Last_NametextB = page.locator('//input[contains(@id,"lktv2w23")]')
        this.passwordTextB = page.locator('//input[contains(@id,"lkrjotic")]')
        this.Confirm_passwordTextB = page.locator('//input[contains(@id,"lkrjpkqg")]')
        this.patient_First_NameTextB = page.locator('//input[contains(@id,"lkrin6jg")]')
        this.patient_Last_NameTextB = page.locator('//input[contains(@id,"lkrin6jo3")]')
        this.CalanderTap = page.locator('//div[@class="EYZRr3"]')
        this.CurruntYear = page.locator('//button[@data-testid="currentYear"]')
        this.total_year = page.locator('//div[@data-testid="years"]//ul//li//span')
        this.Dateselect = page.locator('(//table[@data-testid="month"]//tbody//tr//td//button//span)[2]')
        this.Mibile_TextB = page.locator('//input[contains(@id,"lkrin6kl2")]')
        this.address_TextB = page.locator('//input[contains(@id,"lkrin6kp3")]')
        this.Langauge_TextB = page.locator('//input[@id="input_comp-lkrin6kw1"]')
        this.Message_TextB = page.locator('//textarea[contains(@id,"lkrin6kz")]')
        this.Next_step2Btn = page.locator('//span[contains(text(),"Next to step 2 >>")]')
        this.ActualElemnt1 = page.locator('//span[contains(text(),"Step 2")]')
        this.Expected_Thank_you = "Step 2";
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
        await this.page.waitForTimeout(2000);
    }
    async selectDropDown2() {
        await this.page.waitForTimeout(2000);
        await this.dropdownCountry.waitFor();
        await this.dropdownCountry.selectOption({ value: 'India' });
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



    async navigate() {
        this.generateRandomEmail();
        await this.page.goto('/' + this.randomUrl);
        await this.CardnumberFrame.waitFor();
    }


    async place_Order_With_Valid_Visa() {
        console.log("\nPlace Order With Visa Card");
        await this.page.waitForTimeout(1000);
        this.handlePopups();
        await this.randomEmail_method();
        await this.page.waitForTimeout(2000);
        await this.selectDropDown2();
        await this.page.waitForTimeout(1000);
        await this.CardnumberFrame.waitFor();
        await this.CardnumberFrame.isEnabled();
        await this.CardnumberFrame.click();
        await this.typeCardNumber(this.page, Cards_Detail.Valid_Visa);
        this.handlePopups();
        await this.Verify_On_ThankYou();
        this.handlePopups();
    }
    async Filling_Form(value: String) {
        this.handlePopups();
        if (await value === form_Data['My Child']) {
            console.log('My Child Button Is Selected')
            await this.myChildBTN.click();
            await this.caregiver_First_NameTextB.waitFor();
            await this.caregiver_First_NameTextB.fill(form_Data.Caregiver_First_Name)
            await this.caregiver_Last_NametextB.fill(form_Data.Caregiver_Last_Name)
            await this.passwordTextB.waitFor();
            await this.passwordTextB.fill(form_Data.Password)
            await this.Confirm_passwordTextB.fill(form_Data.Password)
            await this.patient_First_NameTextB.waitFor();
            await this.patient_First_NameTextB.fill(form_Data.Patient_First_Name)
            await this.patient_Last_NameTextB.fill(form_Data.Patient_Last_Name)
            await this.CalanderTap.waitFor();
            await this.CalanderTap.click();
            await this.CurruntYear.waitFor();
            await this.CurruntYear.click();
            await this.Select_Year();
            await this.Dateselect.waitFor();
            await this.Dateselect.click();
            await this.Mibile_TextB.waitFor();
            await this.Mibile_TextB.fill(form_Data.Phone);
            await this.address_TextB.waitFor();
            await this.address_TextB.fill(form_Data.Patient_Address);
            await this.page.keyboard.press('Tab');
            await this.Langauge_TextB.waitFor();
            await this.Langauge_TextB.fill(form_Data.Language);
            await this.Message_TextB.waitFor();
            await this.Message_TextB.fill(form_Data.Message)
            await this.Next_step2Btn.waitFor();
            await this.Next_step2Btn.click();
            await this.ActualElemnt1.waitFor();
            const ActualMessage = await this.ActualElemnt1.textContent();
            //expect(ActualMessage).toBe(this.Expected_Thank_you);
            console.log(ActualMessage)

        }


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

    async Select_Year() {

        for (let i = 0; i < await this.total_year.count(); i++) {
            const YearText = await this.total_year.nth(i).textContent();

            if (YearText === form_Data.Patient_Date_of_Birth_Year) {
                await this.total_year.nth(i).click();

            }
        }
    }
}
export default submitpage