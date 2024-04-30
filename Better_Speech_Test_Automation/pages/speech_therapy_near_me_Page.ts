import { Page, Locator, Keyboard, PlaywrightTestConfig, chromium, expect } from '@playwright/test'


class speechtherapy {

    page: Page;
    loginBtn: Locator;
    passTextB: Locator;
    emailTextB: Locator;
    userloginBtn: Locator;



    constructor(page: Page) {

        this.page = page;
        this.loginBtn = page.locator('//span[text()="Login"]')
        this.emailTextB = page.locator('//input[@id="input_comp-knr71pbi"]')
        this.passTextB = page.locator('//input[@name="password" and @placeholder="Password"]')
        this.userloginBtn = page.locator('//button[@data-testid ="buttonElement"]/span[text()="Login >"]')

    }
    async navigate() {
        await this.page.goto('/');
        await this.page.waitForTimeout(2000);
    }
    async Login_button() {
        try {
            await this.page.waitForTimeout(2000);
            await this.loginBtn.click();
        }
        catch (error) {
            console.log("Login Button is Not Visible or Clickable", error)
        }
    }
    async fill_Email_Password() {
        try {
            await this.emailTextB.fill("qabetterspeech+testmemberchild@gmail.com");
            await this.passTextB.fill("ChildQA123");
            await this.userloginBtn.click();
        }
        catch (error) {
            console.log("Wrong Email or Password", error)
        }

    }
    async redirect_URL() {
        try {
            await this.page.waitForTimeout(1000);
            await this.page.goto('/' + 'speech-therapy-near-me');
        }
        catch (error) {
            console.log("Invalid Redirection URL", error)
        }
    }
    async Size_Address() {
        try {
            await this.page.waitForSelector("//span[text()='Location:']//following::p[2]");
            const elements = await this.page.$$("//span[text()='Location:']//following::p[2]");
            console.log("Size of Address:", elements.length);
        } catch (error) {
            console.log("Addresses are Not Available", error)
        }
    }
    async Verify_address() {
        try {
            const elements = await this.page.$$("//span[text()='Location:']//following::p[2]");
            for (const element of elements) {
                const postalCode = await element.innerText();
                const regexp = postalCode.match(/([A-Z]{2} \d{5})/);
                if (regexp) {
                    const extractedPostalCode = regexp[0];
                    console.log('Expected Postal Code:', extractedPostalCode);
                    console.log('Actual Postal Code:', postalCode);
                    expect(postalCode).toContain(extractedPostalCode);
                } else {
                    console.log('No postal code found in element:', postalCode);
                }
            }
        } catch (error) {
            console.log("Postal code does not match", error)
        }


    }
    async Write_CSV() {
        try {
            const addresses = await this.page.$$eval('.Zc7IjY', (elements) =>
                elements.map((element) => element.textContent?.trim()).filter(Boolean)
            );

            const csvData = addresses.map((Zc7IjY) => `"${Zc7IjY}"`).join('\n');

            const fs = require('fs');
            fs.writeFileSync('addresses.csv', csvData, 'utf-8');

            console.log('Addresses extracted and saved to addresses.csv');
        }
        catch (error) {
            console.log('CSV file is not created.', error)
        }
    }

}
export default speechtherapy