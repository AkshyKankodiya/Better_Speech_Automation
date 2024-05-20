import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'
import dropdownoption from '../../Better_Speech_Test_Automation/form_que_ans.json';


class onboardingPage {
  Email: any;
  Password: any;

  page: Page;
  btnGetBetterSpeech: Locator;
  actualName: string;
  actualEmail: string;
  expectedName: Locator;
  ExpectedFinElm: string;
  onboardingTab: any;
  onboardingTabPromise: Promise<Page>;




  constructor(page: Page) {

    this.page = page;
    this.btnGetBetterSpeech = page.locator("(//span[contains(text(),'Get Better Speech')])[1]")
    this.expectedName = page.locator("//h1[contains(@class,'wixui-rich')]")
    this.actualName = "Rahul, welcome to Better Speech";
    this.actualEmail = "qabetterspeech@gmail.com";
    this.Email = "qabetterspeech@gmail.com"
    this.Password = "Kamal@12"
    this.ExpectedFinElm = "Financial Aid applied"
    this.onboardingTabPromise = this.page.waitForEvent('popup'); 
    
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

      const onboardingTab = await this.onboardingTabPromise;
      await onboardingTab.waitForLoadState('domcontentloaded');
  

      await this.page.waitForTimeout(1000);

      const Answer1 = onboardingTab.locator('//div[@data-qa="choice"]', { hasText : dropdownoption.Question1});
      await Answer1.click();

      await this.page.waitForTimeout(1000);
      const input = onboardingTab.locator("(//*[contains(@aria-controls,'dropdown')])[1]");
      await input.click();

      await this.page.waitForTimeout(1000);
      const Answer2 = onboardingTab.locator("//*[@role='option']",{ hasText : dropdownoption.Question2});
      await Answer2.click();

      const btnContinue = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue.click();

      await this.page.waitForTimeout(1000);
      const Answer3 = onboardingTab.locator("(//div[@data-qa='choice-list'])[1]/div",{ hasText : dropdownoption.Question3});
      await Answer3.click();

      await this.page.waitForTimeout(1000);
      const Answer4 = onboardingTab.locator("(//div[@data-qa='choice-list'])[2]/div",{ hasText : dropdownoption.Question4});
      await Answer4.click();

      await this.page.waitForTimeout(1000);
      const Answer5 = onboardingTab.locator("//div[@data-qa='opinion-scale-step']",{ hasText : dropdownoption.Question5});
      await Answer5.click();

      await this.page.waitForTimeout(1000);
      const Answer6 = onboardingTab.locator("(//div[@data-qa='choice-list'])[1]/div",{ hasText : dropdownoption.Question6});
      await Answer6.click();

      const btnContinue1 = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue1.click();

      await this.page.waitForTimeout(1000);
      const Answer7 = onboardingTab.locator("(//div[@data-qa='choice-list'])[1]/div",{ hasText : dropdownoption.Question7});
      await Answer7.click();

      await this.page.waitForTimeout(1000);
      const Answer8 = onboardingTab.locator("(//div[@data-qa='choice-list'])[2]/div",{ hasText : dropdownoption.Question8});
      await Answer8.click();

      await this.page.waitForTimeout(1000);
      const Answer9 = onboardingTab.locator("(//div[@data-qa='choice-list'])[2]/div",{ hasText : dropdownoption.Question9});
      await Answer9.click();

      const btnOK = onboardingTab.locator("(//span[contains(@class,'ButtonTextWrapper')]//child::span)[2]")
      await btnOK.click();

      await this.page.waitForTimeout(1000);
      const Answer10 = onboardingTab.locator("(//div[@data-qa='choice-list'])[2]/div",{ hasText : dropdownoption.Question10});
      await Answer10.click();

      const btnOK1 = onboardingTab.locator("(//span[contains(@class,'ButtonTextWrapper')]//child::span)[2]")
      await btnOK1.click();

      await this.page.waitForTimeout(1000);
      const Answer11 = onboardingTab.locator("(//div[@data-qa='choice-list'])[2]/div",{ hasText : dropdownoption.Question11});
      await Answer11.click();

      const btnOK2 = onboardingTab.locator("(//span[contains(@class,'ButtonTextWrapper')]//child::span)[2]")
      await btnOK2.click();

      const btnContinue2 = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue2.click();

      await this.page.waitForTimeout(1000);
      const Answer12 = onboardingTab.locator("(//div[@data-qa='choice-list'])[1]/div",{ hasText : dropdownoption.Question12});
      await Answer12.click();

      const btnOK3 = onboardingTab.locator("(//span[contains(@class,'ButtonTextWrapper')]//child::span)[2]")
      await btnOK3.click();

      await this.page.waitForTimeout(1000);
      const Answer13 = onboardingTab.locator("(//div[@data-qa='choice-list'])[2]/div",{ hasText : dropdownoption.Question13});
      await Answer13.click();

      // const btnOK9 = onboardingTab.locator("//button[contains(@data-qa,'ok-button-visible')]")
      // await btnOK9.click();

      const btnContinue3 = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue3.click();

      await this.page.waitForTimeout(1000);
      const Answer14 = onboardingTab.locator("(//div[@data-qa='choice-list'])[1]/div",{ hasText : dropdownoption.Question14});
      await Answer14.click();

      const btnOK4 = onboardingTab.locator("(//span[contains(@class,'ButtonTextWrapper')]//child::span)[2]")
      await btnOK4.click();

      await this.page.waitForTimeout(1000);
      const Answer15 = onboardingTab.locator("(//div[@data-qa='choice-list'])[2]/div",{ hasText : dropdownoption.Question15});
      await Answer15.click();

      // const btnOK10 = onboardingTab.locator("(//span[text()='OK'])[2]")
      // await btnOK10.click();

      const btnContinue4 = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue4.click();

      await this.page.waitForTimeout(1000);
      const Answer16 = onboardingTab.locator("(//div[@data-qa='choice-list'])[1]/div",{ hasText : dropdownoption.Question16});
      await Answer16.click();

      // const btnOK11 = onboardingTab.locator("(//span[text()='OK'])[1]")
      // await btnOK11.click();

      const btnContinue5 = onboardingTab.locator("(//span[text()='Continue'])[1]");
      await btnContinue5.click();

      await this.page.waitForTimeout(1000);
      const Answer17 = onboardingTab.locator("(//div[@data-qa='choice-list'])[1]/div",{ hasText : dropdownoption.Question17});
      await Answer17.click();

      const btnOK5 = onboardingTab.locator("(//span[contains(@class,'ButtonTextWrapper')]//child::span)[2]")
      await btnOK5.click();

      const btnContinue6 = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue6.click();

      await this.page.waitForTimeout(1000);
      const Answer18 = onboardingTab.locator("//textarea[@placeholder='Type your answer here...']");
      await Answer18.fill(dropdownoption.Question18);

      const btnOK6 = onboardingTab.locator("(//span[contains(@class,'ButtonTextWrapper')]//child::span)[2]")
      await btnOK6.click();

      const btnContinue7 = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue7.click();

      await this.page.waitForTimeout(1000);
      const Answer19 = onboardingTab.locator("(//input[@placeholder='Jane'])[1]");
      await Answer19.fill(dropdownoption.Question19);

      const btnOK7 = onboardingTab.locator("(//span[contains(@class,'ButtonTextWrapper')]//child::span)[2]")
      await btnOK7.click();

      await this.page.waitForTimeout(1000);
      const Answer20 = onboardingTab.locator("(//input[@placeholder='Jane'])[2]");
      await Answer20.fill(dropdownoption.Question20);

      const btnOK8 = onboardingTab.locator("(//span[contains(@class,'ButtonTextWrapper')]//child::span)[2]")
      await btnOK8.click();

      const btnContinue8 = onboardingTab.locator("//span[text()='Continue']");
      await btnContinue8.click();

      await this.page.waitForTimeout(1000);
      const Answer21 = onboardingTab.locator("//input[@type='email']");
      await Answer21.fill(dropdownoption.Question21);

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
      await this.page.waitForTimeout(4000);
      await LinkText.waitFor();
      await LinkText.click();
      
      const stillNot = onboardingTab.locator("//a[text()='Still not ready']")
      await this.page.waitForTimeout(2000);
      await stillNot.click();
       
      const checkEligibility = await onboardingTab.locator("//span[text()='Check Eligibility']")
      await this.page.waitForTimeout(1000);
      await checkEligibility.isEnabled();
      await this.page.waitForTimeout(1000);
      await onboardingTab.goto('/'+'financialaid');

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

      const randomIndex = Math.floor(Math.random() * options.length);
      const randomOption = options[randomIndex];
      await randomOption.click();

      await this.page.waitForTimeout(3000);
      const radioButtons2 = onboardingTab.locator('//div[contains(text(),"status of your spouse?")]//following::div[1]//child::label');
      const options2 = await radioButtons2.all();
      const randomIndex2 = Math.floor(Math.random() * options2.length);
      const randomOption2 = options2[randomIndex2];
      await randomOption2.click();

      handlePopups();

      await this.page.waitForTimeout(3000);
      const sAnswer3 = onboardingTab.locator("//input[@id='input_comp-kvlozmsg']");
      await sAnswer3.click();
      await sAnswer3.fill("10");
      
      await this.page.waitForTimeout(1000);
      const sAnswer4 = onboardingTab.locator("//input[@id='input_comp-kvlp3tl3']");

      await sAnswer4.click();
      await sAnswer4.fill("10");
      await onboardingTab.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);

      const sAnswer5 = onboardingTab.locator("//input[@id='input_comp-kvlp5dfp']");
      await sAnswer5.click();
      await sAnswer5.fill("10");
      await onboardingTab.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);

      const sAnswer6 = onboardingTab.locator("//input[@id='input_comp-kvlp5ntk']");
      await sAnswer6.click();
      await sAnswer6.fill("10");
      await this.page.waitForTimeout(1000);

      handlePopups();
      await this.page.waitForTimeout(1000);
      const radioButtons3 = onboardingTab.locator('//div[contains(text(),"U.S. Armed Forces for purposes other than training?")]//following::div[1]//child::label');
      const options3 = await radioButtons3.all();

      const randomIndex3 = Math.floor(Math.random() * options3.length);
      const randomOption3 = options3[randomIndex3];
      await randomOption3.click();

      handlePopups();

      await this.page.waitForTimeout(1000);
      const radioButtons4 = onboardingTab.locator('//div[contains(text(),"Are you a veteran of the U.S. Armed Forces?")]//following::div[1]//child::label');
      const options4 = await radioButtons4.all();
  
      const randomIndex4 = Math.floor(Math.random() * options4.length);
      const randomOption4 = options4[randomIndex4];
      await randomOption4.click();

      handlePopups();

      await this.page.waitForTimeout(1000);
      const radioButtons5 = onboardingTab.locator('//div[contains(text(),"7.")]//following::div[1]//child::label');
      const options5 = await radioButtons5.all();
  
      const randomIndex5 = Math.floor(Math.random() * options5.length);
      const randomOption5 = options5[randomIndex5];
      await randomOption5.click();


      handlePopups();
    
      await this.page.waitForTimeout(1000);
      const sAnswer10 = onboardingTab.locator("//input[@name='email']");
      await sAnswer10.fill(this.Email);

      handlePopups();

      await this.page.waitForTimeout(1000);
      const ClickCheckOp = onboardingTab.locator("//input[@type='checkbox']");
      await ClickCheckOp.click();

      handlePopups();

      await this.page.waitForTimeout(1000);

      handlePopups();

      const ClickEligibility = onboardingTab.locator("//span[contains(text(),'Check Eligibility')]");
      await ClickEligibility.click();

      handlePopups();

      await this.page.waitForTimeout(7000);

      handlePopups();
      await this.page.waitForTimeout(1000);

      handlePopups();
      const Test = onboardingTab.locator("//span[text()='Financial Aid applied']");
      await Test.click();
      const TestV = await Test.innerText();
      console.log('\nExpected Financial Element :', this.ExpectedFinElm);
      console.log('Actual Financial Element   :', TestV);
      expect(TestV).toContain(this.ExpectedFinElm);

      handlePopups();
      const emailInput = await onboardingTab.locator("//input[@name='email']");
      const emailValue = await emailInput.inputValue();
      console.log('\nExpected Email :', this.Email);
      console.log('Actual Email :', emailValue);
      expect(emailValue).toContain(this.Email);

      handlePopups();
      await this.page.waitForTimeout(5000);

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