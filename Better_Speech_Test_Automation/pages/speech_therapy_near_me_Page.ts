import { Page, Locator, Keyboard, PlaywrightTestConfig, chromium, expect } from '@playwright/test'


class speechtherapy {

    page: Page;
    loginBtn: Locator;
    passTextB: Locator;
    emailTextB: Locator;
    userloginBtn: Locator;
    add1: string;
    add2: string;
    add3: string;
    add4: string;
    add5: string;
    add6: string;





    constructor(page: Page) {

        this.page = page;
        this.loginBtn = page.locator('//span[text()="Login"]')
        this.emailTextB = page.locator('//input[@id="input_comp-knr71pbi"]')
        this.passTextB = page.locator('//input[@name="password" and @placeholder="Password"]')
        this.userloginBtn = page.locator('//button[@data-testid ="buttonElement"]/span[text()="Login >"]')
        this.add1 = "VA 20147";
        this.add2 = "TX 78232";
        this.add3 = "WA 98122";
        this.add4 = "WI 53714";
        this.add5 = "WA 98660";
        this.add6 = "WA 98407";

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

        await this.page.waitForTimeout(10000);

        await this.page.waitForSelector("//div[contains(@id,'comp-kzi5n3rs') and @class='VgO9Yg']");
        const elements = await this.page.$$("//div[contains(@id,'comp-kzi5n3rs') and @class='VgO9Yg']");
        console.log("length of address:", elements.length);

        const Location1 = this.page.locator("//span[text()='Better Speech']//following::span[1]");
        const Postalcode = await Location1.innerText();
        const regexp = /([A-Z]{2} \d{5})/;
        const Address1 = Postalcode.match(regexp)
        console.log('Expected postal code:', this.add1);
        console.log('Actual postal code:', Address1);
        expect(Address1).toContain(this.add1);

        const Location2 = this.page.locator("//span[contains(text(),'Regent Care Center of San Antonio')]//following::p[1]");
        const Postalcode2 = await Location2.innerText();
        const Address2 = Postalcode2.match(regexp)
        console.log('Expected postal code:', this.add2);
        console.log('Actual postal code:', Address2);
        expect(Address2).toContain(this.add2);

        const Location3 = this.page.locator("//span[contains(text(),'Hearing, Speech & Deaf Center')]//following::p[1]");
        const Postalcode3 = await Location3.innerText();
        const Address3 = Postalcode3.match(regexp)
        console.log('Expected postal code:', this.add3);
        console.log('Actual postal code:', Address3);
        expect(Address3).toContain(this.add3);

        const Location4 = this.page.locator("//span[contains(text(),'Madison Speech Therapy')]//following::p[1]");
        const Postalcode4 = await Location4.innerText();
        const Address4 = Postalcode4.match(regexp)
        console.log('Expected postal code:', this.add4);
        console.log('Actual postal code:', Address4);
        expect(Address4).toContain(this.add4);

        const Location5 = this.page.locator("//span[contains(text(),'Thrive Therapy & Social Center')]//following::p[1]");
        const Postalcode5 = await Location5.innerText();
        const Address5 = Postalcode5.match(regexp)
        console.log('Expected postal code:', this.add5);
        console.log('Actual postal code:', Address5);
        expect(Address5).toContain(this.add5);

        const Location6 = this.page.locator("//span[contains(text(),'CHI Franciscan Rehabilitation Hospital')]//following::p[1]");
        const Postalcode6 = await Location6.innerText();
        const Address6 = Postalcode6.match(regexp)
        console.log('Expected postal code:', this.add6);
        console.log('Actual postal code:', Address6);
        expect(Address6).toContain(this.add6);

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