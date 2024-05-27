import { Page, Locator, Keyboard, PlaywrightTestConfig, chromium, expect } from '@playwright/test'
import * as fs from 'fs';
import * as path from 'path';
import { threadId } from 'worker_threads';


class werehiring {

    page: Page;
    tboxfirstname: Locator;
    tboxlastname: Locator;
    tboxemail: Locator;
    tboxphone: Locator;
    checkboxSchool: Locator;
    checkboxprivatepractice: any;
    dropdownmanu: Locator;
    checkbox3: Locator;
    btnSubmit: Locator;
    dropdownvalue: Locator;
    randomNumber: any;
    randomEmail: any;
    emailsignup: Locator;
    password: Locator;
    btnSubmit2: Locator;
    txtconfirmemail: Locator;
    txtfileName: Locator;
    btnError: Locator;
    


    constructor(page: Page) {

        this.page = page;
        this.tboxfirstname = page.locator("//input[contains(@placeholder,'First Name')]")
        this.tboxlastname = page.locator("//input[contains(@placeholder,'Last Name')]")
        this.tboxemail = page.locator("//input[@name='email']")
        this.tboxphone = page.locator("//input[@name='phone']")
        this.checkboxSchool = page.locator("//input[@value='School']")
        this.checkboxprivatepractice = page.locator("//input[@value='Clinic']")
        this.dropdownmanu = page.locator("//select[@data-testid='select-trigger']")
        // this.dropdownvalue = page.locator("//div[@class='CEK3nk']")
        this.checkbox3 = page.locator("//span[text()='I am able to accept international clients']")
        this.btnSubmit = page.locator("//span[text()='Submit']")
        this.btnError = page.locator("//span[text()='Error, contact support']")
        this.emailsignup = page.locator("//input[@placeholder='Type email you used doing were hiring']")
        this.password = page.locator("//input[@placeholder='Enter your new password']")
        this.btnSubmit2 = page.locator("(//label[contains(text(),'Password')]//following::button)[1]")
        this.randomNumber
        this.randomEmail
        this.txtconfirmemail = page.locator("//h1[text()='Confirm your email']")
        this.txtfileName = page.locator("//div[@data-testid='file-name']")
        
    }
    async navigate() {
        await this.page.goto('/' + 'were-hiring');
        await this.page.waitForTimeout(2000);
        this.generateRandomEmail();
    }
    async generateRandomEmail(): Promise<string> {
        this.randomNumber = Math.floor(10000 + Math.random() * 90000);
        this.randomEmail = `qabetterspeech+${this.randomNumber}@gmail.com`;
        console.log('Random Email:',this.randomEmail);
        return this.randomEmail;
    }
    async Fill_Form(){
        await this.tboxfirstname.fill('Better');
        await this.tboxlastname.fill('QA Test');
        await this.tboxemail.fill(this.randomEmail);
        await this.tboxphone.fill('321564897');
        await this.checkboxSchool.click();
        await this.checkboxprivatepractice.click();
        await this.dropdownmanu.click();
        const dtext = this.page.locator("//div[@id='menuitem-87']")
        await dtext.click();
        await this.page.waitForTimeout(5000);
        await this.checkbox3.click();
    }
    async slphire2(){
        await this.page.goto('/' + 'slphire2');
        await this.emailsignup.fill(this.randomEmail);
        await this.password.fill(this.randomEmail);
        await this.page.waitForTimeout(3000);
        await this.btnSubmit2.click();

        await this.page.waitForTimeout(10000);
        await this.page.waitForSelector("//h1[text()='Confirm your email']")
        await this.txtconfirmemail.isVisible();
        
    }

    
    /* Upload Resume */

    async getRandomFile(dir: string): Promise<string> {
        const files = fs.readdirSync(dir);
        const randomIndex = Math.floor(Math.random() * files.length);
        return path.join(dir, files[randomIndex]);
    }
    async upload_Resume(){
        const projectFolderPath = 'Doc_Resume'; 
        const projectFolder = path.resolve(__dirname,projectFolderPath);
        const randomFile = await this.getRandomFile(projectFolder);

        const fileInputSelector = 'input[type="file"]';
        await this.page.setInputFiles(fileInputSelector, randomFile);

        await this.txtfileName.waitFor();
        const filename =await this.txtfileName.innerText();
        console.log('Uploaded File Name : ',filename)

        await this.btnSubmit.click(); 
        await this.page.waitForTimeout(8000);
    }


    /* Without Upload Resume */

    async without_upload_Resume(){
        
        await this.btnSubmit.click(); 
        await this.btnError.waitFor();
        expect(this.btnError).toBeVisible();
        console.assert(this.btnError.isVisible());

        await this.page.reload();
        await this.page.waitForTimeout(10000);

        await this.Fill_Form();
        await this.upload_Resume();

    }
    
}
export default werehiring