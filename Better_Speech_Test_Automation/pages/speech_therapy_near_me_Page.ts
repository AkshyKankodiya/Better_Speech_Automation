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
    async Login_With_cread() {
        await this.page.waitForTimeout(2000);
        await this.loginBtn.click();
        await this.emailTextB.fill("qabetterspeech+testmemberchild@gmail.com");
        await this.passTextB.fill("ChildQA123");
        await this.userloginBtn.click();
        await this.page.waitForTimeout(1000);
        await this.page.goto('/' + 'speech-therapy-near-me');
    }
    async Verify_address() {

        await this.page.waitForSelector("//span[text()='Location:']//following::p[2]");
        const elements = await this.page.$$("//span[text()='Location:']//following::p[2]");
        console.log("Size of Address:", elements.length);

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

    }
    async Write_CSV() {
        const addresses = await this.page.$$eval('.Zc7IjY', (elements) =>
            elements.map((element) => element.textContent?.trim()).filter(Boolean)
        );

        const csvData = addresses.map((Zc7IjY) => `"${Zc7IjY}"`).join('\n');

        const fs = require('fs');
        fs.writeFileSync('addresses.csv', csvData, 'utf-8');

        console.log('Addresses extracted and saved to addresses.csv');
    }

}
export default speechtherapy