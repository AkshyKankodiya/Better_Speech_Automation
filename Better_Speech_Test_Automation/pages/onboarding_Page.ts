import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'


class onboardingPage {
  Email: any;
  Password: any;

  page: Page;
  btnGetBetterSpeech: Locator;
  Answare1: Locator;
  inputbox: Locator;
  Answare2: Locator;
  btnOK: Locator;
  btnContinue: Locator;
  Answare3: Locator;
  Answare4: Locator;
  Answare5: Locator;
  Answare6: Locator;
  Answare7: Locator;
  Answare8: Locator;
  Answare9: Locator;
  Answare10: Locator;
  Answare11: Locator;
  Answare12: Locator;
  Answare13: Locator;
  Answare14: Locator;
  Answare15: Locator;
  Answare16: Locator;
  Answare17: Locator;
  textarea: Locator;
  inputbox1: Locator;
  inputbox2: Locator;
  inputEmail: Locator;
  btnSubmit: Locator;
  btnStartTherapy: Locator;
  linktext: Locator;
  actualName: string;
  actualEmail: string;
  expectedName: Locator;
  expectedEmail: Locator;
  ExpectedEmail: String;
  stillNotLink: Locator;
  checkEligibilityBtn: Locator;
  ExpectedFinElm: string;
  newPage1: any;



  constructor(page: Page) {

    this.page = page;
    this.btnGetBetterSpeech = page.locator("(//span[contains(text(),'Get Better Speech')])[1]")
    this.Answare1 = page.locator("//div[contains(text(),'Child')]")
    this.inputbox = page.locator("//input[@placeholder='Type or select an option']")
    this.Answare2 = page.locator("//li[@data-qa-index='10']")
    this.btnOK = page.locator("(//span[text()='OK'])[2]")
    this.btnContinue = page.locator("//span[text()='Continue']")
    this.Answare3 = page.locator("//div[contains(text(),'limited vocabulary or trouble expressing thoughts')]")
    this.Answare4 = page.locator("//div[contains(text(),'None of the above')]")
    this.Answare5 = page.locator("//div[text()='2']")
    this.Answare6 = page.locator("//div[text()='Yes']")
    this.Answare7 = page.locator("//div[contains(text(),'I can share the report')]")
    this.Answare8 = page.locator("//div[text()='Yes']")
    this.Answare9 = page.locator("//div[text()='History of hospitalizations']")
    this.Answare10 = page.locator("//div[text()='Use baby signs']")
    this.Answare11 = page.locator("//div[text()='Make eye contact']")
    this.Answare12 = page.locator("//div[text()='Making sounds/grunting']")
    this.Answare13 = page.locator("//div[text()='Sometimes']")
    this.Answare14 = page.locator("//div[text()='None of the above']")
    this.Answare15 = page.locator("//div[text()='Not sure']")
    this.Answare16 = page.locator("//div[contains(text(),'I plan to use the Financial Aid')]")
    this.Answare17 = page.locator("//div[text()='Weekend']")
    this.textarea = page.locator("//textarea[@placeholder='Type your answer here...']")
    this.inputbox1 = page.locator("(//input[@placeholder='Jane'])[1]")
    this.inputbox2 = page.locator("(//input[@placeholder='Jane'])[2]")
    this.inputEmail = page.locator("//input[@type='email']")
    this.btnSubmit = page.locator("//span[text()='Submit']")
    this.btnStartTherapy = page.locator("//span[text()='Start Therapy']")
    this.linktext = page.locator("//span[contains(text(),'Not ready or can')]")
    this.stillNotLink = page.locator('//a[text()="Still not ready"]')
    this.checkEligibilityBtn = page.locator('//span[text()="Check Eligibility"]')
    this.expectedName = page.locator("//h1[contains(@class,'wixui-rich')]")
    this.actualName = "Rahul, welcome to Better Speech";
    this.actualEmail = "qabetterspeech@gmail.com";
    this.Email = "qabetterspeech@gmail.com"
    this.Password = "Kamal@12"
    this.ExpectedFinElm = "Financial Aid applied"
    this.newPage1

  }
  async navigate() {
    await this.page.goto('/');
  }
  async btnClick_GetBetterSpeech() {

    await this.btnGetBetterSpeech.click();
  }

  async switchTab() {
    try {

      const newPagePromise1 = this.page.waitForEvent('popup'); 
      const newPage1 = await newPagePromise1;

      await newPage1.waitForLoadState('domcontentloaded');

      await this.page.waitForTimeout(1000);
      const Answare1 = newPage1.locator("//div[contains(text(),'Child')]");
      await Answare1.click();

      await this.page.waitForTimeout(1000);
      const input = newPage1.locator("//input[@placeholder='Type or select an option']");
      await input.click();

      await this.page.waitForTimeout(1000);
      const Answare2 = newPage1.locator("//li[@data-qa-index='10']");
      await Answare2.click();

      const btnContinue = newPage1.locator("//span[text()='Continue']");
      await btnContinue.click();

      await this.page.waitForTimeout(1000);
      const Answare3 = newPage1.locator("//div[contains(text(),'limited vocabulary or trouble expressing thoughts')]");
      await Answare3.click();

      await this.page.waitForTimeout(1000);
      const Answare4 = newPage1.locator("//div[contains(text(),'None of the above')]");
      await Answare4.click();

      await this.page.waitForTimeout(1000);
      const Answare5 = newPage1.locator("//div[text()='2']");
      await Answare5.click();

      await this.page.waitForTimeout(1000);
      const Answare6 = newPage1.locator("//div[text()='Yes']");
      await Answare6.click();

      const btnContinue1 = newPage1.locator("//span[text()='Continue']");
      await btnContinue1.click();

      await this.page.waitForTimeout(1000);
      const Answare7 = newPage1.locator("//div[contains(text(),'I can share the report')]");
      await Answare7.click();

      await this.page.waitForTimeout(1000);
      const Answare8 = newPage1.locator("//div[text()='Yes']");
      await Answare8.click();

      await this.page.waitForTimeout(1000);
      const Answare9 = newPage1.locator("//div[text()='History of hospitalizations']");
      await Answare9.click();

      const btnOK = newPage1.locator("(//span[text()='OK'])[2]")
      await btnOK.click();

      await this.page.waitForTimeout(1000);
      const Answare10 = newPage1.locator("//div[text()='Use baby signs']");
      await Answare10.click();

      const btnOK1 = newPage1.locator("(//span[text()='OK'])[2]")
      await btnOK1.click();

      await this.page.waitForTimeout(1000);
      const Answare11 = newPage1.locator("//div[text()='Make eye contact']");
      await Answare11.click();

      const btnOK2 = newPage1.locator("(//span[text()='OK'])[2]")
      await btnOK2.click();

      const btnContinue2 = newPage1.locator("//span[text()='Continue']");
      await btnContinue2.click();

      await this.page.waitForTimeout(1000);
      const Answare12 = newPage1.locator("//div[text()='Making sounds/grunting']");
      await Answare12.click();

      const btnOK3 = newPage1.locator("(//span[text()='OK'])[1]")
      await btnOK3.click();

      await this.page.waitForTimeout(1000);
      const Answare13 = newPage1.locator("//div[text()='Sometimes']");
      await Answare13.click();

      const btnOK9 = newPage1.locator("(//span[text()='OK'])[2]")
      await btnOK9.click();

      const btnContinue3 = newPage1.locator("//span[text()='Continue']");
      await btnContinue3.click();

      await this.page.waitForTimeout(1000);
      const Answare14 = newPage1.locator("//div[text()='None of the above']");
      await Answare14.click();

      const btnOK4 = newPage1.locator("(//span[text()='OK'])[1]")
      await btnOK4.click();

      await this.page.waitForTimeout(1000);
      const Answare15 = newPage1.locator("//div[text()='Not sure']");
      await Answare15.click();

      const btnOK10 = newPage1.locator("(//span[text()='OK'])[2]")
      await btnOK10.click();

      const btnContinue4 = newPage1.locator("//span[text()='Continue']");
      await btnContinue4.click();

      await this.page.waitForTimeout(1000);
      const Answare16 = newPage1.locator("//div[contains(text(),'I plan to use the Financial Aid')]");
      await Answare16.click();

      const btnOK11 = newPage1.locator("(//span[text()='OK'])[1]")
      await btnOK11.click();

      const btnContinue5 = newPage1.locator("//span[text()='Continue']");
      await btnContinue5.click();

      await this.page.waitForTimeout(1000);
      const Answare17 = newPage1.locator("//div[text()='Weekend']");
      await Answare17.click();

      const btnOK5 = newPage1.locator("(//span[text()='OK'])[1]")
      await btnOK5.click();

      const btnContinue6 = newPage1.locator("//span[text()='Continue']");
      await btnContinue6.click();

      await this.page.waitForTimeout(1000);
      const Answare18 = newPage1.locator("//textarea[@placeholder='Type your answer here...']");
      await Answare18.fill("Better Speech QA");

      const btnOK6 = newPage1.locator("(//span[text()='OK'])[1]")
      await btnOK6.click();

      const btnContinue7 = newPage1.locator("//span[text()='Continue']");
      await btnContinue7.click();

      await this.page.waitForTimeout(1000);
      const Answare19 = newPage1.locator("(//input[@placeholder='Jane'])[1]");
      await Answare19.fill("Better Test QA");

      const btnOK7 = newPage1.locator("(//span[text()='OK'])[1]")
      await btnOK7.click();

      await this.page.waitForTimeout(1000);
      const Answare20 = newPage1.locator("(//input[@placeholder='Jane'])[2]");
      await Answare20.fill("Rahul");

      const btnOK8 = newPage1.locator("(//span[text()='OK'])[2]")
      await btnOK8.click();

      const btnContinue8 = newPage1.locator("//span[text()='Continue']");
      await btnContinue8.click();

      await this.page.waitForTimeout(1000);
      const Answare21 = newPage1.locator("//input[@type='email']");
      await Answare21.fill("qabetterspeech@gmail.com");

      await this.page.waitForTimeout(1000);
      const btnSubmit = newPage1.locator("//span[text()='Submit']")
      await btnSubmit.click();

      await this.page.waitForTimeout(5000);
      const ExpectedName = await newPage1.textContent("//h1[contains(@class,'wixui-rich')]");
      expect(this.actualName).toContain(ExpectedName);
      console.log('\nActual Name:', this.actualName)
      console.log('Expected Name:', ExpectedName)

      await newPage1.mouse.down();
      await newPage1.waitForTimeout(1000);
      const btnStartTherapy = await newPage1.locator("//span[text()='Start Therapy']")
      await btnStartTherapy.isVisible();
      await btnStartTherapy.isEnabled();

      const emailInput1 = await newPage1.locator("//input[@name='email']");
      const emailValue1 = await emailInput1.inputValue();
      expect(this.actualEmail).toContain(emailValue1);
      console.log('\nActual Email:', this.actualEmail)
      console.log('Expected Email:', emailValue1)

      const LinkText = await newPage1.locator("//span[contains(text(),'Not ready or can')]")
      const LinkValue = await LinkText.textContent();
      console.log("\nLink Text:", LinkValue);
      // await LinkText.isVisible();
      // await LinkText.isEnabled();
      await LinkText.click();
      
      const stillNot = newPage1.locator("//a[text()='Still not ready']")
      await this.page.waitForTimeout(2000);
      await stillNot.click();
       
      const checkEligibility = await newPage1.locator("//span[text()='Check Eligibility']")
      await this.page.waitForTimeout(1000);
      //await checkEligibility.click();
      //await checkEligibility.isVisible();
      await checkEligibility.isEnabled();
      await this.page.waitForTimeout(1000);
      await newPage1.goto('https://www.betterspeech.com/financialaid');

      const popForNEW1 = newPage1.locator('//*[@data-block-level-container="PopupContainer"]')
      await this.page.waitForTimeout(1000);
      const sAnsware1 = newPage1.locator("(//div[contains(@class,'input-selection')])[1]");
      await sAnsware1.click();
      //await newPage1.keyboard.press('Tab');
      
      await this.page.waitForTimeout(1000);
      const sAnsware2 = newPage1.locator("(//div[contains(text(),'Unemployed')])[2]");
      await sAnsware2.click();
      //await newPage1.keyboard.press('Tab');
      
      await this.page.waitForTimeout(1000);
      const sAnsware3 = newPage1.locator("//input[@id='input_comp-kvlozmsg']");
      await sAnsware3.click();
      await sAnsware3.fill("10");
      
      //await newPage1.keyboard.press('Tab');

      const sAnsware4 = newPage1.locator("//input[@id='input_comp-kvlp3tl3']");

      await sAnsware4.click();
      await sAnsware4.fill("10");
      await newPage1.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);

      const sAnsware5 = newPage1.locator("//input[@id='input_comp-kvlp5dfp']");
      await sAnsware5.click();
      await sAnsware5.fill("10");
      await newPage1.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);

      const sAnsware6 = newPage1.locator("//input[@id='input_comp-kvlp5ntk']");
      await sAnsware6.click();
      await sAnsware6.fill("10");
      await newPage1.keyboard.press('Tab');
      //await this.page.waitForTimeout(1000);

      const sAnsware7 = newPage1.locator("(//div[text()='Yes'])[1]");
      await sAnsware7.click();
      //await newPage1.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);

      const sAnsware8 = newPage1.locator("(//div[text()='Yes'])[2]");
      await sAnsware8.click();
      //await newPage1.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);

      const sAnsware9 = newPage1.locator("(//div[text()='Yes'])[3]");
      await sAnsware9.click();
      
      await this.page.waitForTimeout(1000);
      if (await popForNEW1.isVisible()) {
        await newPage1.keyboard.press('Escape');
      }

      const sAnsware10 = newPage1.locator("//input[@name='email']");
      await sAnsware10.fill(this.Email);
      await this.page.waitForTimeout(1000);
      if (await popForNEW1.isVisible()) {
        await newPage1.keyboard.press('Escape');
      }
      const ClickCheckOp = newPage1.locator("//input[@type='checkbox']");
      await ClickCheckOp.click();
      
      if (await popForNEW1.isVisible()) {
        await newPage1.keyboard.press('Escape');
      }

      const ClickEligibility = newPage1.locator("//span[contains(text(),'Check Eligibility')]");
      await ClickEligibility.click();

      if (await popForNEW1.isVisible()) {
        await newPage1.keyboard.press('Escape');
      }

      await this.page.waitForTimeout(7000);

      if (await popForNEW1.isVisible()) {
        await newPage1.keyboard.press('Escape');
      }
      
      await this.checkForPopupOrElement();

      if (await popForNEW1.isVisible()) {
        await newPage1.keyboard.press('Escape');
      }

      if (await popForNEW1.isVisible()) {
        await newPage1.keyboard.press('Escape');
      }
      await this.page.waitForTimeout(1000);

      const Test = newPage1.locator("//span[text()='Financial Aid applied']");
      await Test.click();
      const TestV = await Test.innerText();
      console.log('\nExpected Financial Element :', this.ExpectedFinElm);
      console.log('Actual Financial Element   :', TestV);
      expect(TestV).toContain(this.ExpectedFinElm);


      if (await popForNEW1.isVisible()) {
        await newPage1.keyboard.press('Escape');
      }
      
      const emailInput = await newPage1.locator("//input[@name='email']");
      const emailValue = await emailInput.inputValue();
      console.log('\nExpected Email :', this.Email);
      console.log('Actual Email :', emailValue);
      expect(emailValue).toContain(this.Email);

       if (await popForNEW1.isVisible()) {
        await newPage1.keyboard.press('Escape');
      }

       await this.page.waitForTimeout(5000);

       if (await popForNEW1.isVisible()) {
        await newPage1.keyboard.press('Escape');
      }
      await this.page.waitForTimeout(5000);

    await newPage1.close();
    await this.page.close();

    } catch (error) {
      console.error('Error while switching tabs:', error);
    }
} 

async checkForPopupOrElement() {
  const popupOrElement = await this.page.$('//*[@data-block-level-container="PopupContainer"]'); // Replace '.popup-class' with your actual selector
  const popupOrElement2 = await this.page.$('//div[@class="betterspeech-exit-bg"]');
  const popupOrElement3 = await this.page.$('//*[@id="comp-ltdty6zv"]');
  const popupOrElement4 = await this.page.$('//*[@data-testid="popupCloseIconButtonRoot"]');
  const popupOrElement5 = await this.page.$('//*[@class="betterspeech-exit-closeright-contaier"]');

  if (popupOrElement3?.isVisible() || popupOrElement?.isVisible() || popupOrElement2?.isVisible() || popupOrElement4?.isVisible() || popupOrElement5?.isVisible()) {
    {
      
      if (popupOrElement5?.isVisible() || popupOrElement4?.isVisible()) {
  
        await (popupOrElement5?.isVisible() ? popupOrElement4 : popupOrElement5)?.click();
      }
      await this.page.keyboard.press('Escape');
    } 
  }
}
}
export default onboardingPage;