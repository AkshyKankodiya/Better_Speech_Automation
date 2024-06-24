import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'
import dropdownoption from '../test-data/form_que_ans.json';
import { text } from 'stream/consumers';


class OnBoardingPage {
  Email: any;
  Password: any;

  page: Page;
  // btnGetBetterSpeech: Locator;
  actualName: string;
  actualEmail: string;
  expectedName: Locator;
  ExpectedFinElm: string;
  // onboardingTab: any;
  // onboardingTabPromise: Promise<Page>;
  btnChild: Locator;
  radioOptions: Locator;
  emailTextBox: Locator;
  btnContinue: Locator;
  checkBoxOption: Locator;
  firstName: Locator;
  selectAge: Locator;
  selectCountry: Locator;
  AdultBtn: Locator;
  myself: Locator;
  selectAdultAge: Locator;




  constructor(page: Page) {

    this.page = page;
    // this.btnGetBetterSpeech = page.locator("(//span[contains(text(),'Get Better Speech')])[1]")
    this.expectedName = page.locator("//h1[contains(@class,'wixui-rich')]")
    this.actualName = "Better speech qa, welcome to Better Speech";
    this.actualEmail = "qabetterspeech@gmail.com";
    this.Email = "qabetterspeech@gmail.com"
    this.Password = "Kamal@12"
    this.ExpectedFinElm = "Financial Aid applied"
    // this.onboardingTabPromise = this.page.waitForEvent('popup'); 
    this.btnChild = page.locator("(//div[@class='MVY5Lo'])[1]//img")
    this.AdultBtn = page.locator("(//div[@class='MVY5Lo'])[2]//img")
    this.selectAge = page.locator("//label[contains(text(),'How old is your child?')]//following::select")
    this.selectCountry = page.locator("//select [@data-testid='select-trigger']")
    this.radioOptions = page.locator("(//div[contains(@class,'option-label') and @data-testid='label'])[1]")
    this.emailTextBox = page.locator("//input[@name='email']")
    this.btnContinue = page.locator("//span[text()='Continue']")
    this.checkBoxOption = page.locator("//span[@class='eW1tpy']")
    this.firstName = page.locator("//label[text()='First name']//following::input[1]")
    this.myself = page.locator("//div[text()='myself']")
    this.selectAdultAge = page.locator("//label[contains(text(),'What is your age?')]//following::select")
  }
  async navigate() {
    await this.page.goto('/' + 'get-started');
    await this.btnChild.waitFor();
    await this.page.waitForTimeout(5000)
  }

  async test_child() {
    await this.navigate();
    await this.btnChild.click();
    while (await this.selectAge.isDisabled()) {
      await this.navigate();
      await this.page.waitForTimeout(3000);
      await this.btnChild.click();
    }
    await this.select_Dropdown();

    const Answer2 = dropdownoption.Question2;
    await this.select_Option(this.radioOptions, Answer2);

    const Answer3 = dropdownoption.Question3;
    await this.select_Option(this.radioOptions, Answer3);

    const Answer4 = dropdownoption.Question4;
    await this.select_Option(this.radioOptions, Answer4);

    const Answer5 = dropdownoption.Question5;
    await this.select_Option(this.radioOptions, Answer5);

    await this.button_Continue();

    const Answer6 = dropdownoption.Question6;
    await this.select_Option(this.radioOptions, Answer6);

    await this.enterEmail_and_Text();

    const Answer8 = dropdownoption.Question8;
    await this.select_Option(this.checkBoxOption, Answer8);

    const Answer9 = dropdownoption.Question9;
    await this.select_Option(this.radioOptions, Answer9);

    await this.button_Continue();

    const Answer10 = dropdownoption.Question10;
    await this.select_Option(this.radioOptions, Answer10);

    await this.button_Continue();

    await this.select_Dropdown();

    await this.button_Continue();

    const Answer12 = dropdownoption.Question12;
    await this.select_Option(this.checkBoxOption, Answer12);

    await this.button_Continue();

    await this.button_Continue();

    await this.enterEmail_and_Text();

    await this.enterEmail_and_Text();

    await this.button_Continue();

  }
  /* -------------------------------------------------------------------------------------------------- */
  async test_Adult(){

    await this.navigate();
    await this.AdultBtn.click();
    while (await this.radioOptions.isDisabled()) {
      await this.navigate();
      await this.page.waitForTimeout(3000);
      await this.AdultBtn.click();
    }

    const Answer1 = dropdownoption.Question14;
    await this.select_Option(this.radioOptions, Answer1);

    await this.select_Dropdown2();

    await this.button_Continue();

    const Answer2 = dropdownoption.Question16;
    await this.select_Option(this.radioOptions, Answer2);

    const Answer3 = dropdownoption.Question17;
    await this.select_Option(this.radioOptions, Answer3);

    const Answer4 = dropdownoption.Question4;
    await this.select_Option(this.radioOptions, Answer4);

    const Answer5 = dropdownoption.Question5;
    await this.select_Option(this.radioOptions, Answer5);

    await this.button_Continue();

    const Answer6 = dropdownoption.Question6;
    await this.select_Option(this.radioOptions, Answer6);

    await this.enterEmail_and_Text();

    await this.button_Continue();

    const Answer7 = dropdownoption.Question18;
    await this.select_Option(this.checkBoxOption, Answer7);

    const Answer8 = dropdownoption.Question10;
    await this.select_Option(this.radioOptions, Answer8);

    await this.button_Continue();

    const Answer9 = dropdownoption.Question19;
    await this.select_Option(this.checkBoxOption, Answer9);

    await this.button_Continue();

    await this.select_Dropdown2();

    const Answer12 = dropdownoption.Question12;
    await this.select_Option(this.checkBoxOption, Answer12);

    await this.button_Continue();

    await this.button_Continue();

    await this.enterEmail_and_Text();

    await this.button_Continue();

    // await this.enterEmail_and_Text();

  }

  async select_Option(question: Locator, optionText: string){
  try {

    const radioButton = this.page.locator(`//div[contains(@class,'option-label') and text()="${optionText}"]`);
    await this.page.waitForTimeout(5000)
    if (await this.radioOptions.isVisible()) {
      // await radioButton.waitFor();
      await this.page.waitForTimeout(3000)
      await radioButton.click();
      console.log("Selected Radio Option:", optionText);
    }
    else {
      await this.page.waitForTimeout(5000)
      const checkBox = this.page.locator(`//span[@class='eW1tpy' and text()='${optionText}']`);
      // await checkBox.waitFor();
      await this.page.waitForTimeout(3000)
      await checkBox.click();
      console.log("Selected Checkbox:", optionText);
      await this.page.waitForTimeout(5000)
      await this.btnContinue.click();
    }
  } catch (error) {

    console.log(`Option ${optionText} (or locator) is not clickable. Skipping.`);

  }
}

  async findVisibleElement(...elements: Locator[]): Promise < Locator | null > {
    for(const element of elements) {
      await this.page.waitForTimeout(5000)
      if (await element.isVisible()) {
        return element;
      }
    }
    return null;
  }

  async button_Continue(){
    const visibleoption1 = await this.findVisibleElement(this.btnContinue);
    await this.page.waitForTimeout(5000);
    if (await this.btnContinue.isVisible()) {
      await this.btnContinue.click();
    }
    return visibleoption1;
  }

  async select_Dropdown(){
    const visibleoption1 = await this.findVisibleElement(this.selectAge, this.selectCountry);
    await this.page.waitForTimeout(5000)
    if (await this.selectAge.isVisible()) {
      await this.selectAge.waitFor();
      await this.selectAge.click();
      const age = this.page.locator(`//div[@class='P6sHUt' and text() = '${dropdownoption.Question1}']`);
      await age.click();
    }else{
      await this.page.waitForTimeout(5000)
      await this.selectCountry.waitFor();
      await this.selectCountry.click();
      const country = this.page.locator(`//div[@class='P6sHUt' and text() = '${dropdownoption.Question11}']`);
      await country.click();
    }
    return visibleoption1;
  }

  async select_Dropdown2(){
    const visibleoption1 = await this.findVisibleElement(this.selectCountry, this.selectAdultAge);
    await this.page.waitForTimeout(5000);
    if(await this.selectAdultAge.isVisible()) {
      while (await this.selectAdultAge.isDisabled()) {
        await this.navigate();
        await this.page.waitForTimeout(5000);
        await this.AdultBtn.click();
        await this.myself.click();
        await this.selectAdultAge.waitFor();
      }
      await this.selectAdultAge.click();
      const Adultage = this.page.locator(`//div[@class='P6sHUt' and text() = '${dropdownoption.Question15}']`);
      await Adultage.click();
    }else{
      await this.page.waitForTimeout(5000)
      await this.selectCountry.isVisible()
      await this.selectCountry.click();
      const country = this.page.locator(`//div[@class='P6sHUt' and text() = '${dropdownoption.Question20}']`);
      await country.click();
    }
    return visibleoption1;
  }

  async enterEmail_and_Text() {
    const visibleoption1 = await this.findVisibleElement(this.emailTextBox, this.firstName);
    await this.page.waitForTimeout(5000);
    if (await this.emailTextBox.isVisible()) {
      await this.emailTextBox.waitFor();
      await this.emailTextBox.click();
      await this.emailTextBox.fill(dropdownoption.Question7);
      await this.page.waitForTimeout(5000)
      await this.btnContinue.isVisible();
      await this.btnContinue.click();
    } else {
      await this.page.waitForTimeout(5000);
      await this.firstName.waitFor();
      await this.firstName.click();
      await this.firstName.fill(dropdownoption.Question13);
      await this.page.waitForTimeout(5000)
      await this.btnContinue.isVisible();
      await this.btnContinue.click();
    }
    return visibleoption1;
  }

  async financial(){
    try {

      await this.page.waitForTimeout(5000);
      const ExpectedName = await this.page.textContent("//h1[contains(@class,'wixui-rich')]");
      expect(this.actualName).toContain(ExpectedName);
      console.log('\nActual Name:', this.actualName)
      console.log('Expected Name:', ExpectedName)
  
      await this.page.mouse.down();
      await this.page.waitForTimeout(1000);
      const btnStartTherapy = this.page.locator("//span[text()='Start Therapy']")
      await btnStartTherapy.isVisible();
      await btnStartTherapy.isEnabled();
  
      const emailInput1 = this.page.locator("//input[@name='email']");
      const emailValue1 = await emailInput1.inputValue();
      expect(this.actualEmail).toContain(emailValue1);
      console.log('\nActual Email:', this.actualEmail)
      console.log('Expected Email:', emailValue1)
  
      const LinkText = this.page.locator("//span[contains(text(),'Not ready or can')]")
      const LinkValue = await LinkText.textContent();
      console.log("\nLink Text:", LinkValue);
      await this.page.waitForTimeout(4000);
      await LinkText.waitFor();
      await LinkText.click();
  
      const stillNot = this.page.locator("//a[text()='Still not ready']")
      await this.page.waitForTimeout(2000);
      await stillNot.click();
  
      const checkEligibility = await this.page.locator("//span[text()='Check Eligibility']")
      await this.page.waitForTimeout(1000);
      await checkEligibility.isEnabled();
      await this.page.waitForTimeout(1000);
      await this.page.goto('/' + 'financialaid');
  
      const popForNEW1 = this.page.locator('//*[@data-block-level-container="PopupContainer"]')
      const popForNEW6 = this.page.locator('//*[@class="betterspeech-exit-closeright-contaier"]')
      async function handlePopups() {
        if (await popForNEW1.isVisible() || await popForNEW6.isVisible()) {
          if (await popForNEW1.isVisible()) {
            await this.page.keyboard.press('Escape');
          } else {
            await popForNEW6.click();
          }
        }
      }
  
      await this.page.waitForTimeout(1000);
      const radioButtons = this.page.locator('//div[contains(text(),"current employment status?")]//following::div[1]//child::label');
      const options = await radioButtons.all();
  
      const randomIndex = Math.floor(Math.random() * options.length);
      const randomOption = options[randomIndex];
      await randomOption.click();
  
      await this.page.waitForTimeout(3000);
      const radioButtons2 = this.page.locator('//div[contains(text(),"status of your spouse?")]//following::div[1]//child::label');
      const options2 = await radioButtons2.all();
      const randomIndex2 = Math.floor(Math.random() * options2.length);
      const randomOption2 = options2[randomIndex2];
      await randomOption2.click();
  
      handlePopups();
  
      await this.page.waitForTimeout(3000);
      const sAnswer3 = this.page.locator("//input[@id='input_comp-kvlozmsg']");
      await sAnswer3.click();
      await sAnswer3.fill("10");
  
      await this.page.waitForTimeout(1000);
      const sAnswer4 = this.page.locator("//input[@id='input_comp-kvlp3tl3']");
  
      await sAnswer4.click();
      await sAnswer4.fill("10");
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);
  
      const sAnswer5 = this.page.locator("//input[@id='input_comp-kvlp5dfp']");
      await sAnswer5.click();
      await sAnswer5.fill("10");
      await this.page.keyboard.press('Tab');
      await this.page.waitForTimeout(1000);
  
      const sAnswer6 = this.page.locator("//input[@id='input_comp-kvlp5ntk']");
      await sAnswer6.click();
      await sAnswer6.fill("10");
      await this.page.waitForTimeout(1000);
  
      handlePopups();
      await this.page.waitForTimeout(1000);
      const radioButtons3 = this.page.locator('//div[contains(text(),"U.S. Armed Forces for purposes other than training?")]//following::div[1]//child::label');
      const options3 = await radioButtons3.all();
  
      const randomIndex3 = Math.floor(Math.random() * options3.length);
      const randomOption3 = options3[randomIndex3];
      await randomOption3.click();
  
      handlePopups();
  
      await this.page.waitForTimeout(1000);
      const radioButtons4 = this.page.locator('//div[contains(text(),"Are you a veteran of the U.S. Armed Forces?")]//following::div[1]//child::label');
      const options4 = await radioButtons4.all();
  
      const randomIndex4 = Math.floor(Math.random() * options4.length);
      const randomOption4 = options4[randomIndex4];
      await randomOption4.click();
  
      handlePopups();
  
      await this.page.waitForTimeout(1000);
      const radioButtons5 = this.page.locator('//div[contains(text(),"7.")]//following::div[1]//child::label');
      const options5 = await radioButtons5.all();
  
      const randomIndex5 = Math.floor(Math.random() * options5.length);
      const randomOption5 = options5[randomIndex5];
      await randomOption5.click();
  
  
      handlePopups();
  
      await this.page.waitForTimeout(1000);
      const sAnswer10 = this.page.locator("//input[@name='email']");
      await sAnswer10.fill(this.Email);
  
      handlePopups();
  
      await this.page.waitForTimeout(1000);
      const ClickCheckOp = this.page.locator("//input[@type='checkbox']");
      await ClickCheckOp.click();
  
      handlePopups();
  
      await this.page.waitForTimeout(1000);
  
      handlePopups();
  
      const ClickEligibility = this.page.locator("//span[contains(text(),'Check Eligibility')]");
      await ClickEligibility.click();
  
      handlePopups();
  
      await this.page.waitForTimeout(7000);
  
      handlePopups();
      await this.page.waitForTimeout(1000);
  
      handlePopups();
      const Test = this.page.locator("//span[text()='Financial Aid applied']");
      await Test.click();
      const TestV = await Test.innerText();
      console.log('\nExpected Financial Element :', this.ExpectedFinElm);
      console.log('Actual Financial Element   :', TestV);
      expect(TestV).toContain(this.ExpectedFinElm);
  
      handlePopups();
      const emailInput = await this.page.locator("//input[@name='email']");
      const emailValue = await emailInput.inputValue();
      console.log('\nExpected Email :', this.Email);
      console.log('Actual Email :', emailValue);
      expect(emailValue).toContain(this.Email);
  
      handlePopups();
      await this.page.waitForTimeout(5000);
  
      handlePopups();
      await this.page.waitForTimeout(5000);
  
      await this.page.close();
      await this.page.close();
  
    } catch(error) {
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
export default OnBoardingPage;