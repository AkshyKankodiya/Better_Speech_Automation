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
  onboardingTab: any;
  onboardingTabPromise: Promise<Page>;



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
    this.onboardingTabPromise = this.page.waitForEvent('popup');
    // this.onboardingTab = this.onboardingTabPromise;
  }
  async navigate() {
    await this.page.goto('/');
  }
  async btnClick_GetBetterSpeech() {
    
    this.checkForPopupOrElement();
    await this.btnGetBetterSpeech.click();
    this.checkForPopupOrElement();
  }

  async switchTab() {
    try {


      // const onboardingTabPromise = this.page.waitForEvent('popup'); 
      const onboardingTab = await this.onboardingTabPromise;
      // this.onboardingTabPromise;
      // this.onboardingTab;
      await onboardingTab.waitForLoadState('domcontentloaded');


      await this.page.waitForTimeout(1000);
      const Answare1 = onboardingTab.locator("//div[contains(text(),'Child')]");
      await Answare1.click();

      await this.page.waitForTimeout(1000);
      const input = onboardingTab.locator("//input[@placeholder='Type or select an option']");
      await input.click();

      await this.page.waitForTimeout(1000);
      const Answare2 = onboardingTab.locator("//li[@data-qa-index='10']");
      await Answare2.click();

      const btnContinue = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue.click();

      await this.page.waitForTimeout(1000);
      const Answare3 = onboardingTab.locator("//div[contains(text(),'limited vocabulary or trouble expressing thoughts')]");
      await Answare3.click();

      await this.page.waitForTimeout(1000);
      const Answare4 = onboardingTab.locator("//div[contains(text(),'None of the above')]");
      await Answare4.click();

      await this.page.waitForTimeout(1000);
      const Answare5 = onboardingTab.locator("//div[text()='2']");
      await Answare5.click();

      await this.page.waitForTimeout(1000);
      const Answare6 = onboardingTab.locator("//div[text()='Yes']");
      await Answare6.click();

      const btnContinue1 = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue1.click();

      await this.page.waitForTimeout(1000);
      const Answare7 = onboardingTab.locator("//div[contains(text(),'I can share the report')]");
      await Answare7.click();

      await this.page.waitForTimeout(1000);
      const Answare8 = onboardingTab.locator("//div[text()='Yes']");
      await Answare8.click();

      await this.page.waitForTimeout(1000);
      const Answare9 = onboardingTab.locator("//div[text()='History of hospitalizations']");
      await Answare9.click();

      const btnOK = onboardingTab.locator("(//span[text()='OK'])[2]")
      await btnOK.click();

      await this.page.waitForTimeout(1000);
      const Answare10 = onboardingTab.locator("//div[text()='Use baby signs']");
      await Answare10.click();

      const btnOK1 = onboardingTab.locator("(//span[text()='OK'])[2]")
      await btnOK1.click();

      await this.page.waitForTimeout(1000);
      const Answare11 = onboardingTab.locator("//div[text()='Make eye contact']");
      await Answare11.click();

      const btnOK2 = onboardingTab.locator("(//span[text()='OK'])[2]")
      await btnOK2.click();

      const btnContinue2 = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue2.click();

      await this.page.waitForTimeout(1000);
      const Answare12 = onboardingTab.locator("//div[text()='Making sounds/grunting']");
      await Answare12.click();

      const btnOK3 = onboardingTab.locator("(//span[text()='OK'])[1]")
      await btnOK3.click();

      await this.page.waitForTimeout(1000);
      const Answare13 = onboardingTab.locator("//div[text()='Sometimes']");
      await Answare13.click();

      const btnOK9 = onboardingTab.locator("(//span[text()='OK'])[2]")
      await btnOK9.click();

      const btnContinue3 = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue3.click();

      await this.page.waitForTimeout(1000);
      const Answare14 = onboardingTab.locator("//div[text()='None of the above']");
      await Answare14.click();

      const btnOK4 = onboardingTab.locator("(//span[text()='OK'])[1]")
      await btnOK4.click();

      await this.page.waitForTimeout(1000);
      const Answare15 = onboardingTab.locator("//div[text()='Not sure']");
      await Answare15.click();

      const btnOK10 = onboardingTab.locator("(//span[text()='OK'])[2]")
      await btnOK10.click();

      const btnContinue4 = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue4.click();

      await this.page.waitForTimeout(1000);
      const Answare16 = onboardingTab.locator("//div[contains(text(),'I plan to use the Financial Aid')]");
      await Answare16.click();

      const btnOK11 = onboardingTab.locator("(//span[text()='OK'])[1]")
      await btnOK11.click();

      const btnContinue5 = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue5.click();

      await this.page.waitForTimeout(1000);
      const Answare17 = onboardingTab.locator("//div[text()='Weekend']");
      await Answare17.click();

      const btnOK5 = onboardingTab.locator("(//span[text()='OK'])[1]")
      await btnOK5.click();

      const btnContinue6 = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue6.click();

      await this.page.waitForTimeout(1000);
      const Answare18 = onboardingTab.locator("//textarea[@placeholder='Type your answer here...']");
      await Answare18.fill("Better Speech QA");

      const btnOK6 = onboardingTab.locator("(//span[text()='OK'])[1]")
      await btnOK6.click();

      const btnContinue7 = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue7.click();

      await this.page.waitForTimeout(1000);
      const Answare19 = onboardingTab.locator("(//input[@placeholder='Jane'])[1]");
      await Answare19.fill("Better Test QA");

      const btnOK7 = onboardingTab.locator("(//span[text()='OK'])[1]")
      await btnOK7.click();

      await this.page.waitForTimeout(1000);
      const Answare20 = onboardingTab.locator("(//input[@placeholder='Jane'])[2]");
      await Answare20.fill("Rahul");

      const btnOK8 = onboardingTab.locator("(//span[text()='OK'])[2]")
      await btnOK8.click();

      const btnContinue8 = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue8.click();

      await this.page.waitForTimeout(1000);
      const Answare21 = onboardingTab.locator("//input[@type='email']");
      await Answare21.fill("qabetterspeech@gmail.com");

      await this.page.waitForTimeout(1000);
      const btnSubmit = onboardingTab.locator("//span[text()='Submit']")
      await btnSubmit.click();

      await this.page.waitForTimeout(5000);
      const ExpectedName = await onboardingTab.textContent("//h1[contains(@class,'wixui-rich')]");
      expect(this.actualName).toContain(ExpectedName);
      console.log('\nActual Name:', this.actualName)
      console.log('Expected Name:', ExpectedName)

      await onboardingTab.mouse.down();
      await onboardingTab.waitForTimeout(1000);
      const btnStartTherapy = await onboardingTab.locator("//span[text()='Start Therapy']")
      await btnStartTherapy.isVisible();
      await btnStartTherapy.isEnabled();

      const emailInput1 = await onboardingTab.locator("//input[@name='email']");
      const emailValue1 = await emailInput1.inputValue();
      expect(this.actualEmail).toContain(emailValue1);
      console.log('\nActual Email:', this.actualEmail)
      console.log('Expected Email:', emailValue1)

      const LinkText = await onboardingTab.locator("//span[contains(text(),'Not ready or can')]")
      const LinkValue = await LinkText.textContent();
      console.log("\nLink Text:", LinkValue);
      // await LinkText.isVisible();
      // await LinkText.isEnabled();
      await LinkText.click();

      const stillNot = onboardingTab.locator("//a[text()='Still not ready']")
      await this.page.waitForTimeout(2000);
      await stillNot.click();

      const checkEligibility = await onboardingTab.locator("//span[text()='Check Eligibility']")
      await this.page.waitForTimeout(1000);
      //await checkEligibility.click();
      //await checkEligibility.isVisible();
      await checkEligibility.isEnabled();
      await this.page.waitForTimeout(1000);

      await onboardingTab.goto('/' + 'financialaid');

      const popForNEW1 = onboardingTab.locator('//*[@data-block-level-container="PopupContainer"]')
      const popForNEW6 = onboardingTab.locator('//*[@class="betterspeech-exit-closeright-contaier"]')
      async function handlePopups() {
        if (await popForNEW1.isVisible() || await popForNEW6.isVisible()) {
          if (await popForNEW1.isVisible()) {
            await onboardingTab.keyboard.press('Escape');
          } else {
            await popForNEW6.click();
          }
        }
      }


      await this.page.waitForTimeout(1000);
      const radioButtons = onboardingTab.locator('//div[contains(text(),"current employment status?")]//following::div[1]//child::label');
      const options = await radioButtons.all();
      //console.log(options);
      // Select a random option
      const randomIndex = Math.floor(Math.random() * options.length);
      const randomOption = options[randomIndex];
      // Click the randomly selected option
      //await this.page.waitForTimeout(1000);
      await randomOption.click();

      // await this.page.waitForTimeout(1000);
      // const sAnsware1 = onboardingTab.locator("(//div[contains(@class,'input-selection')])[1]");
      // await sAnsware1.click();
      // await onboardingTab.keyboard.press('Tab');

      await this.page.waitForTimeout(1000);
      const radioButtons2 = onboardingTab.locator('//div[contains(text(),"status of your spouse?")]//following::div[1]//child::label');
      const options2 = await radioButtons2.all();
      const randomIndex2 = Math.floor(Math.random() * options2.length);
      const randomOption2 = options2[randomIndex2];
      //await this.page.waitForTimeout(1000);
      await randomOption2.click();

      // if (await popForNEW1.isVisible()) {
      //   await onboardingTab.keyboard.press('Escape');
      // }

      handlePopups();
          
      // await this.page.waitForTimeout(1000);
      // const sAnsware2 = onboardingTab.locator("(//div[contains(text(),'Unemployed')])[2]");
      // await sAnsware2.click();
      // //await onboardingTab.keyboard.press('Tab');

      await this.page.waitForTimeout(1000);
      const sAnsware3 = onboardingTab.locator("//input[@id='input_comp-kvlozmsg']");
      await sAnsware3.click();
      await sAnsware3.fill("10");

      //await onboardingTab.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);
      const sAnsware4 = onboardingTab.locator("//input[@id='input_comp-kvlp3tl3']");

      await sAnsware4.click();
      await sAnsware4.fill("10");
      await onboardingTab.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);

      const sAnsware5 = onboardingTab.locator("//input[@id='input_comp-kvlp5dfp']");
      await sAnsware5.click();
      await sAnsware5.fill("10");
      await onboardingTab.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);

      const sAnsware6 = onboardingTab.locator("//input[@id='input_comp-kvlp5ntk']");
      await sAnsware6.click();
      await sAnsware6.fill("10");
      await this.page.waitForTimeout(1000);
      //await this.page.waitForTimeout(1000);
      //await onboardingTab.keyboard.press('Tab');

      // const sAnsware7 = onboardingTab.locator("(//div[text()='Yes'])[1]");
      // await sAnsware7.click();
      // //await onboardingTab.keyboard.press('Tab');
      // await this.page.waitForTimeout(1000);

      // if (await popForNEW1.isVisible()) {
      //   await onboardingTab.keyboard.press('Escape');
      // }
      handlePopups();
      await this.page.waitForTimeout(1000);
      const radioButtons3 = onboardingTab.locator('//div[contains(text(),"U.S. Armed Forces for purposes other than training?")]//following::div[1]//child::label');
      const options3 = await radioButtons3.all();
      //console.log(options3);
      const randomIndex3 = Math.floor(Math.random() * options3.length);
      const randomOption3 = options3[randomIndex3];

      //await this.page.waitForTimeout(1000);
      await randomOption3.click();

      handlePopups();

      // if (await popForNEW1.isVisible()) {
      //   await onboardingTab.keyboard.press('Escape');
      // }

      // const sAnsware8 = onboardingTab.locator("(//div[text()='Yes'])[2]");
      // await sAnsware8.click();
      // //await onboardingTab.keyboard.press('Tab');
      // await this.page.waitForTimeout(1000);

      // if (await popForNEW1.isVisible()) {
      //   await onboardingTab.keyboard.press('Escape');
      // }
      handlePopups();

      await this.page.waitForTimeout(1000);
      const radioButtons4 = onboardingTab.locator('//div[contains(text(),"Are you a veteran of the U.S. Armed Forces?")]//following::div[1]//child::label');
      const options4 = await radioButtons4.all();
      //console.log(options4);
      const randomIndex4 = Math.floor(Math.random() * options4.length);
      const randomOption4 = options4[randomIndex4];
      //await this.page.waitForTimeout(1000);
      await randomOption4.click();


      // if (await popForNEW1.isVisible()) {
      //   await onboardingTab.keyboard.press('Escape');
      // }

      handlePopups();

      // const sAnsware9 = onboardingTab.locator("(//div[text()='Yes'])[3]");
      // await sAnsware9.click();

      await this.page.waitForTimeout(1000);
      const radioButtons5 = onboardingTab.locator('//div[contains(text(),"7.")]//following::div[1]//child::label');
      const options5 = await radioButtons5.all();
      //console.log(options5);
      const randomIndex5 = Math.floor(Math.random() * options5.length);
      const randomOption5 = options5[randomIndex5];
      //await this.page.waitForTimeout(1000);
      await randomOption5.click();


      handlePopups();
      // if (await popForNEW1.isVisible()) {
      //   await onboardingTab.keyboard.press('Escape');
      // }
      await this.page.waitForTimeout(1000);
      const sAnsware10 = onboardingTab.locator("//input[@name='email']");
      await sAnsware10.fill(this.Email);

      handlePopups();

      // if (await popForNEW1.isVisible()) {
      //   await onboardingTab.keyboard.press('Escape');
      // }
      await this.page.waitForTimeout(1000);
      const ClickCheckOp = onboardingTab.locator("//input[@type='checkbox']");
      await ClickCheckOp.click();

      // if (await popForNEW1.isVisible()) {
      //   await onboardingTab.keyboard.press('Escape');
      // }

      handlePopups();

      await this.page.waitForTimeout(1000);

      // if (await popForNEW1.isVisible()) {
      //   await onboardingTab.keyboard.press('Escape');
      // }
      handlePopups();

      const ClickEligibility = onboardingTab.locator("//span[contains(text(),'Check Eligibility')]");
      await ClickEligibility.click();

      // if (await popForNEW1.isVisible()) {
      //   await onboardingTab.keyboard.press('Escape');
      // }

      handlePopups();

      await this.page.waitForTimeout(7000);


      // if (await popForNEW1.isVisible()) {
      //   await onboardingTab.keyboard.press('Escape');
      // }
      handlePopups();
      await this.page.waitForTimeout(1000);

      // if (await popForNEW1.isVisible()) {
      //   await onboardingTab.keyboard.press('Escape');
      // }
      handlePopups();
      const Test = onboardingTab.locator("//span[text()='Financial Aid applied']");
      await Test.click();
      const TestV = await Test.innerText();
      console.log('\nExpected Financial Element :', this.ExpectedFinElm);
      console.log('Actual Financial Element   :', TestV);
      expect(TestV).toContain(this.ExpectedFinElm);


      // if (await popForNEW1.isVisible()) {
      //   await onboardingTab.keyboard.press('Escape');
      // }
      handlePopups();
      const emailInput = await onboardingTab.locator("//input[@name='email']");
      const emailValue = await emailInput.inputValue();
      console.log('\nExpected Email :', this.Email);
      console.log('Actual Email :', emailValue);
      expect(emailValue).toContain(this.Email);

      // if (await popForNEW1.isVisible()) {
      //   await onboardingTab.keyboard.press('Escape');
      // }
      handlePopups();
      await this.page.waitForTimeout(5000);

      // if (await popForNEW1.isVisible()) {
      //   await onboardingTab.keyboard.press('Escape');
      // }

      handlePopups();
      await this.page.waitForTimeout(5000);

      await onboardingTab.close();
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

