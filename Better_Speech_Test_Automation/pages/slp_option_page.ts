import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'

class slpoption {

  page: Page;
  loginBtn: Locator;
  emailTextB: Locator;
  passTextB: Locator;
  userloginBtn: Locator;
  passwordtxtbox: Locator;
  btnGo: Locator;
  btnReadmore: Locator;
  btnReadless: Locator;
  btnViewhours: Locator;
  txtNoEvent: Locator;

  constructor(page: Page) {

    this.page = page;
    this.loginBtn = page.locator('//span[text()="Login"]')
    this.emailTextB = page.locator('//input[@id="input_comp-knr71pbi"]')
    this.passTextB = page.locator('//input[@name="password" and @placeholder="Password"]')
    this.userloginBtn = page.locator('//button[@data-testid ="buttonElement"]/span[text()="Login >"]')
    this.passwordtxtbox = page.locator("//input[@placeholder='Password']")
    this.btnGo = page.locator("//button[text()='Go']")
    this.btnReadmore = page.locator("//button[text()='Read More']")
    this.btnReadless = page.locator("//button[text()='Read Less']")
    this.btnViewhours = page.locator("//span[text()='View Available Hours']")
    this.txtNoEvent = page.locator("//div[text()='No events to display']")

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
    await this.page.goto('/' + 'slp-options');
    await this.page.waitForTimeout(3000);
    // await this.passwordtxtbox.waitFor();
    // await this.passwordtxtbox.fill('Qatest')
    // await this.btnGo.click();
    // await this.page.waitForTimeout(13000);
    // await this.btnReadmore.click();
    // await this.btnReadless.isVisible();
    // await this.btnViewhours.click();
    // await this.page.waitForTimeout(5000);
    // await this.txtNoEvent.isVisible();
  }
}
export default slpoption