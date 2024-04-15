import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'
import { url } from 'inspector';

class betterspeechpage {

  Email: any;
  Password: any;


  page: Page;
  loginBtn: Locator;
  emailTextB: Locator;
  passTextB: Locator;
  userloginBtn: Locator;
  pricingMenu: Locator;
  monthlyGet: Locator;
  notReadyLink: Locator;
  stillNotLink: Locator;
  checkEligibilityBtn: Locator;
  radioBtn1: Locator;
  radioBtn2: Locator;
  radioBtn3: Locator;
  radioBtn4: Locator;
  radioBtn5: Locator;
  textBox1: Locator;
  textBox2: Locator;
  textBox3: Locator;
  textBox4: Locator;
  emailTextbox: Locator;
  checkBox: Locator;
  CheckEligBTN: Locator;
  FinanceElem: Locator;
  emailTextB2: Locator;
  newPagePromise: any;
  newPage: any;
  ExpectedFinElm: string;

  //POPElem: Locator;




  constructor(page: Page) {

    this.page = page;
    this.loginBtn = page.locator('//span[text()="Login"]')
    this.emailTextB = page.locator('//input[@id="input_comp-knr71pbi"]')
    this.passTextB = page.locator('//input[@name="password" and @placeholder="Password"]')
    this.userloginBtn = page.locator('//button[@data-testid ="buttonElement"]/span[text()="Login >"]')
    this.pricingMenu = page.locator('//p[text()="Pricing"]')
    this.monthlyGet = page.locator('//span[text()="Get Started"]')
    this.notReadyLink = page.locator('//span[contains(text(),"Not ready or can")]')
    this.stillNotLink = page.locator('//a[text()="Still not ready"]')
    this.checkEligibilityBtn = page.locator('//span[text()="Check Eligibility"]')
    this.radioBtn1 = page.locator('(//input[@value="Unemployed"])[1]')
    this.radioBtn2 = page.locator('(//input[@value="Unemployed"])[2]')
    this.radioBtn3 = page.locator('(//div[text()="Yes"])[1]')
    this.radioBtn4 = page.locator('(//div[text()="Yes"])[2]')
    this.radioBtn5 = page.locator('(//div[text()="Yes"])[3]')
    this.textBox1 = page.locator('//input[@id="input_comp-kvlozmsg"]')
    this.textBox2 = page.locator('//input[@id="input_comp-kvlp3tl3"]')
    this.textBox3 = page.locator('//input[@id="input_comp-kvlp5dfp"]')
    this.textBox4 = page.locator('//input[@id="input_comp-kvlp5ntk"]')
    this.emailTextB2 = page.locator('//input[@name="email"]')
    this.CheckEligBTN = page.locator('//span[text()="Check Eligibility >"]')
    this.checkBox = page.locator('//input[@type="checkbox"]')
    this.FinanceElem = page.locator('//span[text()="Financial Aid applied"]')

    //this.POPElem = page.locator('//div[@data-testid="container-bg"]')
    this.newPagePromise = this.page.waitForEvent("popup")
    this.newPage
    this.Email = "qabetterspeech@gmail.com"
    this.Password = "Kamal@12"
    this.ExpectedFinElm = "Financial Aid applied"




  }


  async navigate() {
    await this.page.goto('/');
    await this.page.waitForTimeout(2000);

  }
  async Login_With_cread() {
    await this.checkForPopupOrElement();
    await this.loginBtn.click();
    await this.emailTextB.fill(this.Email);
    await this.passTextB.fill(this.Password);
    await this.userloginBtn.click();
    await this.checkForPopupOrElement();
  }

  async Navigate_To_qna() {
    await this.checkForPopupOrElement();
    await this.page.waitForTimeout(2000);
    await this.pricingMenu.click();
    await this.page.waitForTimeout(3000);
    await this.checkForPopupOrElement();

    await this.monthlyGet.click();
    await this.checkForPopupOrElement();
    await this.page.waitForTimeout(2000);
    await this.notReadyLink.click();
    await this.page.waitForTimeout(1000);
    await this.stillNotLink.click();
    await this.page.waitForTimeout(1000);
    await this.checkEligibilityBtn.click();
    await this.page.waitForTimeout(1000);


  }
  async switchTab1() {
    try {
      this.newPage = await this.newPagePromise;
      await this.newPage.waitForLoadState('domcontentloaded');
      const newTabURL = this.newPage.url();
      console.log('URL of new tab:', newTabURL);
      const popForNEW1 = this.newPage.locator('//*[@data-block-level-container="PopupContainer"]')
      console.log(" ");


      const Answare1 = this.newPage.locator("(//div[contains(@class,'input-selection')])[1]");
      await Answare1.click();
      //await this.newPage.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);

      const Answare2 = this.newPage.locator("(//div[contains(text(),'Unemployed')])[2]");
      await Answare2.click();
      //await this.newPage.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);

      const Answare3 = this.newPage.locator("//input[@id='input_comp-kvlozmsg']");
      await Answare3.click();
      await Answare3.fill("10");
      await this.page.waitForTimeout(1000);
      //await this.newPage.keyboard.press('Tab');

      const Answare4 = this.newPage.locator("//input[@id='input_comp-kvlp3tl3']");

      await Answare4.click();
      await Answare4.fill("10");
      await this.newPage.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);

      const Answare5 = this.newPage.locator("//input[@id='input_comp-kvlp5dfp']");
      await Answare5.click();
      await Answare5.fill("10");
      await this.newPage.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);

      const Answare6 = this.newPage.locator("//input[@id='input_comp-kvlp5ntk']");
      await Answare6.click();
      await Answare6.fill("10");
      await this.newPage.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);

      const Answare7 = this.newPage.locator("(//div[text()='Yes'])[1]");
      await Answare7.click();
      //await this.newPage.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);

      const Answare8 = this.newPage.locator("(//div[text()='Yes'])[2]");
      await Answare8.click();
      //await this.newPage.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);

      const Answare9 = this.newPage.locator("(//div[text()='Yes'])[3]");
      await Answare9.click();
      //await this.newPage.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);


      const Answare10 = this.newPage.locator("//input[@name='email']");
      await Answare10.fill(this.Email);
      await this.page.waitForTimeout(1000);
      const ClickCheckOp = this.newPage.locator("//input[@type='checkbox']");
      await ClickCheckOp.click();
      if (popForNEW1.isVisible()) {
        await this.newPage.keyboard.press('Escape');
        //console.log('Closed the Pop by Escape');
      }

      const ClickEligibility = this.newPage.locator("//span[contains(text(),'Check Eligibility')]");
      await ClickEligibility.click();

      await this.page.waitForTimeout(7000);

      await this.checkForPopupOrElement();

      if (popForNEW1.isVisible()) {
        await this.newPage.keyboard.press('Escape');
        //console.log('Closed the Pop by Escape');
      }

      const newTabURL2 = this.newPage.url();
      console.log('URL 2 of new tab:', newTabURL2);
      console.log(' ');

      if (popForNEW1.isVisible()) {
        await this.newPage.keyboard.press('Escape');
        //console.log('Closed the Pop by Escape');
      }

      await this.page.waitForTimeout(1000);

      const Test = this.newPage.locator("//span[text()='Financial Aid applied']");
      await Test.click();
      const TestV = await Test.innerText();
      console.log('Expected Financial Element :', this.ExpectedFinElm);
      console.log('Actual Financial Element   :', TestV);
      expect(TestV).toContain(this.ExpectedFinElm);
      console.log(' ');




      const emailInput = await this.newPage.locator("//input[@name='email']");
      const emailValue = await emailInput.inputValue();
      console.log('Expected Email :', this.Email);
      console.log('Actual Email :', emailValue);
      expect(emailValue).toContain(this.Email);

      console.log(' ');

    } catch (error) {
      console.error('Error while switching tabs:', error);
    }
  }

  async checkForPopupOrElement() {
    // Check if the popup or element appears
    const popupOrElement = await this.page.$('//*[@data-block-level-container="PopupContainer"]'); // Replace '.popup-class' with your actual selector
    const popupOrElement2 = await this.page.$('//div[@class="betterspeech-exit-bg"]');
    const popupOrElement3 = await this.page.$('//*[@id="comp-ltdty6zv"]');
    const popupOrElement4 = await this.page.$('//*[@data-testid="popupCloseIconButtonRoot"]');
    const popupOrElement5 = await this.page.$('//*[@class="betterspeech-exit-closeright-contaier"]');



    if (popupOrElement3?.isVisible() || popupOrElement?.isVisible() || popupOrElement2?.isVisible() || popupOrElement4?.isVisible() || popupOrElement5?.isVisible()) {
      {
        // Determine which popup or element to click based on specific conditions
        if (popupOrElement5?.isVisible() || popupOrElement4?.isVisible()) {
          // Click on popupOrElement4 or popupOrElement5 based on conditions
          await (popupOrElement5?.isVisible() ? popupOrElement4 : popupOrElement5)?.click();
        }
        // Press Escape key
        await this.page.keyboard.press('Escape');
      } 
     

    }





  }
  }
export default betterspeechpage


