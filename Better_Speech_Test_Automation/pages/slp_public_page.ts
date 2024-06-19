import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium } from '@playwright/test'

class SlpPublic {

  page: Page;
  emailTextB: Locator;
  passTextB: Locator;
  userloginBtn: Locator;
  passwordtxtbox: Locator;
  btnGo: Locator;
  btnReadmore: Locator;
  btnReadless: Locator;
  btnViewhours: Locator;
  txtNoEvent: Locator;
  aboutMetitle: Locator;
  cirtiFicationtitle: Locator;
  btnloginOption: Locator;
  Licensedmetitle: Locator;
  Reviews_title: Locator;
  AboutSpeechTherapy_title: Locator;
  how_to_improve_title: Locator;
  how_do_Compare_title: Locator;
  profileimge: Locator;
  profilename: Locator;
  emailTextBox: Locator;
  emailLogin: string;
  passLogin: string;
  LoginElm: Locator;
  btnLogoutOption: Locator;
  listedProducts: Locator;
  mapElem: Locator;
  therapyBTN1: Locator;
  therapyBTN2: Locator;
  HOWITWORKS: Locator;
  videoHowitWorks: Locator;
  getbetterBTN: Locator;
  pricingTable: Locator;
  Footer: Locator;

  constructor(page: Page) {

    this.page = page;

    this.profilename = page.locator("(//h1//span/span)[1]")
    this.profileimge = page.locator("(//div[@data-testid ='linkElement'])[2]//img")
    this.aboutMetitle = page.locator("//span[text()='About Me:']")
    this.cirtiFicationtitle = page.locator("//span[text()='Certification:']")
    this.btnloginOption = page.locator("//span[text()='Login']")
    this.Licensedmetitle = page.locator("//span[text()='Licensed in States:']")
    this.Reviews_title = page.locator("//span[contains(text(),'Reviews For')]")
    this.AboutSpeechTherapy_title = page.locator("//span[contains(text(),'About Speech Therapy')]")
    this.how_to_improve_title = page.locator("//span[contains(text(),'How to Improve Your Speech')]")
    this.how_do_Compare_title = page.locator("//span[contains(text(),'How Do We Compare to Others?')]")
    this.userloginBtn = page.locator('//button[@data-testid ="buttonElement"]/span[text()="Login >"]')
    this.emailTextBox = page.locator("//input[@placeholder='Email']")
    this.passwordtxtbox = page.locator("//input[@placeholder='Password']")
    this.LoginElm = page.locator("//span[contains(text(),'Welcome to our Speech Practice')]")
    this.btnLogoutOption = page.locator("//span[text()='Logout']")
    this.listedProducts = page.locator("//div[@class='VM7gjN']//div[@role='listitem']")
    this.mapElem = page.locator("//div[@id='map_canvas']")
    this.therapyBTN1 = page.locator("(//span[contains(text(),'Start Speech Therapy')])[1]")
    this.therapyBTN2 = page.locator("(//span[contains(text(),'Start Speech Therapy')])[2]")
    this.getbetterBTN = page.locator("(//span[contains(text(),'Get Better Speech')])[2]")
    this.HOWITWORKS = page.locator("//span[contains(text(),'HOW IT WORKS')]")
    this.videoHowitWorks = page.locator("//img[@alt='Better Speech']")
    this.pricingTable = page.locator("//div[@id='comp-lt51vsl22']")
    this.Footer = page.locator("//footer[@id='SITE_FOOTER']")




    this.emailLogin = "qabetterspeech@gmail.com"
    this.passLogin = "Kamal@12"


  }

  async navigate() {
    await this.page.goto('/' + 'slp/kara-roberts');
    await this.page.waitForTimeout(3000);
    await this.profileimge.waitFor();

  }
  async verify_Elem_Without_Login() {
    await this.page.waitForTimeout(1000);

    await this.verify_Element(this.page, this.profileimge, "Profile Image");
    await this.verify_Element(this.page, this.profilename, "Profile Name");
    await this.verify_Element(this.page, this.aboutMetitle, "About Me Title");
    await this.verify_Element(this.page, this.cirtiFicationtitle, "Certification Title");
    await this.verify_Element(this.page, this.Licensedmetitle, "Licensed in States Title");
    await this.verify_Element(this.page, this.mapElem, "MAP Section");
    await this.verify_Element(this.page, this.Reviews_title, "Review Title");
    await this.verify_Element(this.page, this.AboutSpeechTherapy_title, "About Speech Therapy Title");
    await this.verify_Element(this.page, this.HOWITWORKS, "HOW IT WORKS Title ");
    await this.verify_Element(this.page, this.how_to_improve_title, "How to Improve Your Speech  Title ");
    await this.verify_Element(this.page, this.how_do_Compare_title, "How Do We Compare to Others? Title");
    await this.verify_Element(this.page, this.videoHowitWorks, "HOW IT WORKS VIDEO");
    await this.verify_Element(this.page, this.getbetterBTN, "Get Better Speech Button  ");
    await this.verify_Element(this.page, this.therapyBTN1, "Start Speech Therapy Button 1 ");
    await this.verify_Element(this.page, this.therapyBTN2, "Start Speech Therapy Button 2 ");
    await this.verify_Element(this.page, this.pricingTable, "Pricing Table ");
    await this.verify_Element(this.page, this.Footer, "Footer");

  }

  async verify_Elem_With_Login() {
    await this.navigate();
    await this.page.waitForTimeout(3000);
    await this.btnloginOption.waitFor();
    await this.btnloginOption.click();
    await this.page.waitForTimeout(1000);
    await this.emailTextBox.waitFor();
    await this.emailTextBox.fill(this.emailLogin)
    await this.passwordtxtbox.waitFor();
    await this.passwordtxtbox.fill(this.passLogin)
    await this.userloginBtn.waitFor();
    await this.userloginBtn.click();
    await this.page.waitForTimeout(5000)
    await this.checkForPopupOrElement();
    await this.btnLogoutOption.waitFor();
    await this.checkForPopupOrElement();
    await this.LoginElm.waitFor();
    await this.checkForPopupOrElement();
    const loginUrl = this.page.url();
    console.log("\nUrl after Login :", loginUrl)
    await this.checkForPopupOrElement();
    await this.verify_Element(this.page, this.btnLogoutOption, "Logout Button");
    await this.verify_Element(this.page, this.LoginElm, "Login Element :Welcome to our Speech Practice Library");
    await this.page.waitForTimeout(3000)
    await this.checkForPopupOrElement();
    const ProductCount = await this.listedProducts.count();
    console.log("Listed total product count:", ProductCount)
    await this.checkForPopupOrElement();
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


  async verify_Element2(page: Page, elements: Locator, nameElm: String): Promise<boolean> {
    try {
      const isVisible = await elements.isVisible();

      return isVisible

    } catch (error) {
      console.log('Element', elements, '(or locator) is not visible.');
      return true // Assume not clickable if an error occurs
    }
  }




  async verify_Element(page: Page, elements: Locator, nameElm: String) {
    try {
      const isVisible = await elements.isVisible();
      if (isVisible) {
        const ProfileN = await elements.textContent();
        console.log(`\nelement Present:`, nameElm);
        // console.log("Text in Element is:", ProfileN);
        return true
      }
    } catch (error) {
      console.log('Element', elements, '(or locator) is not visible.');
      return false;
    }


  }


}
export default SlpPublic