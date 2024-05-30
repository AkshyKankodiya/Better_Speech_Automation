import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium, ElementHandle } from '@playwright/test'

class slpdashboard_profile {

  page: Page;
  slpStringUrl: string;
  emailTextBox: Locator;
  passTextBox: Locator;
  emailLogin: string;
  passLogin: string;
  loginBTN: Locator;
  elemOfDas: Locator;
  changeStatusBTN: Locator;
  alldateDay: Locator;
  nextMonthBtn: Locator;

  Date_Thankyou: Locator;
  searchtextbox: Locator;
  searchemail: string;
  searchBTN: Locator;
  profile_imge_Elem: Locator;
  reviews_text_elem: Locator;
  Sustain_Percentage: Locator;
  today: any;
  todayFormatted: any;
  calanderBTN1: Locator;
  calanderBTN2: Locator;
  calander1DateElm: Locator;
  calander2DateElm: Locator;
  CalnderTable: Locator;
  CalnderTable1: Locator;
  ToolCalanderBTN: Locator;
  ToolboxBTN: Locator;
  ToolZoomBTN: Locator;
  ToolsectionLabel: Locator;
  Incoming_messagesLabel: Locator;
  MessageIn: Locator;
  PatientsLabel: Locator;
  PatientsEmailText: Locator;
  Patients_Count: Locator;
  YourPayroll_lable: Locator;
  NameDr: Locator;
  expirance_of_Dr: Locator;
  contactEmail: Locator;
  visibleElements: string[] = [];
  notVisibleElements: string[] = [];





  constructor(page: Page) {
    this.page = page;
    this.slpStringUrl = 'slpdashboard'
    this.emailTextBox = page.locator("//input[@name='email']")
    this.passTextBox = page.locator("//input[@name='password']")
    this.emailLogin = "qabetterspeech@gmail.com"
    this.passLogin = "Kamal@12"
    this.searchemail = "cls.nlsen+SLPTestProfile2@gmail.com"

    this.loginBTN = page.locator("//*[text()='Login >']")
    this.elemOfDas = page.locator("//*[contains(text(),'This is your Dashboard')]")
    this.searchtextbox = page.locator("//input[@placeholder='Search Member by email']")
    this.searchBTN = page.locator("(//button[@data-testid='buttonElement']//span[text()='Search'])[1]")
    this.profile_imge_Elem = page.locator("(//div[@class='mGoGm2']//img)[1]")
    this.reviews_text_elem = page.locator("//span[contains(text(),'reviews')]")
    this.Sustain_Percentage = page.locator("(//span[contains(text(),'%')])[2]")
    this.calanderBTN1 = page.locator("(//button[@aria-label='Open calendar'])[1]")
    this.calander1DateElm = page.locator("//span[normalize-space()='1']")
    this.calanderBTN2 = page.locator("(//button[@aria-label='Open calendar'])[2]")
    this.calander2DateElm = page.locator("//span[normalize-space()='2']")
    this.CalnderTable1 = page.locator("//div[@id='calendar']")
    this.CalnderTable = page.frameLocator("(//iframe[@name='htmlComp-iframe'])[1]").locator(this.CalnderTable1)
    this.ToolCalanderBTN = page.locator("//span[text()='Calendar']")
    this.ToolZoomBTN = page.locator("//span[text()='Zoom']")
    this.ToolboxBTN = page.locator("//span[text()='Toolbox']")
    this.ToolsectionLabel = page.locator("//span[text()='Tools:']")
    this.Incoming_messagesLabel = page.locator("//span[contains(text(),'Incoming messages')]")
    this.MessageIn = page.locator("(//table[@class='mtQJtX'])[2]//tbody/tr")
    this.PatientsLabel = page.locator("//span[contains(text(),'Patients')]")
    this.PatientsEmailText = page.locator("//input[contains(@name,'enter-patient')]")
    this.Patients_Count = page.locator("//div[@class='VM7gjN']//div[@class='Zc7IjY']")
    this.YourPayroll_lable = page.locator("//span[contains(text(),'Your Payrolls')]")
    this.NameDr = page.locator('//div[@id="comp-lcq2re021"]/p/span/span/span/span')
    this.expirance_of_Dr = page.locator('//div[@id="comp-lcq2re043"]/p/span')
    this.contactEmail = page.locator("//span[contains(text(),'To change your information')]/span/span/a")

    this.visibleElements
    this.notVisibleElements

    this.today
    this.todayFormatted
  }
  async navigate() {
    await this.page.goto('/' + this.slpStringUrl);
    await this.emailTextBox.waitFor();
    await this.emailTextBox.fill(this.emailLogin)
    await this.passTextBox.waitFor();
    await this.passTextBox.fill(this.passLogin)
    await this.loginBTN.waitFor();
    await this.loginBTN.click();
    await this.page.waitForTimeout(1000)

  }
  async dash_Profile_Elements() {


    await this.searchtextbox.waitFor();
    await this.searchtextbox.fill(this.searchemail);
    await this.searchBTN.click();
    await this.page.waitForTimeout(3000)
    await this.profile_imge_Elem.waitFor();
    async function printElements(elements: string[]) {
      for (const element of elements) {
        console.log(element);
      }
    }

    await this.verifyElmPresent(this.page, this.profile_imge_Elem, "Profile image");
    await this.verifyElmPresent(this.page, this.reviews_text_elem, "Reviews");
    await this.verifyElmPresent(this.page, this.Sustain_Percentage, "Sustain Percentage %");
    await this.verifyElmPresent(this.page, this.calanderBTN1, "Calander button 1");
    await this.calanderBTN1.click();
    await this.verifyElmPresent(this.page, this.calander1DateElm, "Calander 1 Date1 ");
    await this.calanderBTN2.click();
    await this.verifyElmPresent(this.page, this.calanderBTN2, "Calander button 2");
    await this.verifyElmPresent(this.page, this.calander2DateElm, "Calander 2 Date2 ");
    await this.calanderBTN2.click();
    await this.verifyElmPresent(this.page, this.Incoming_messagesLabel, "Incoming messages Label");
    const inBoxmessages = await this.MessageIn.count();
    
    this.today = new Date();
    this.todayFormatted = this.today.toLocaleDateString('en-GB');
    const timeFormatted = this.today.toLocaleTimeString('en-GB');
    const displayedTimeZone = await this.getDisplayedTimeZone(this.page);
    // Assert the expected time zone (Asia/Calcutta with the actual zone)
    expect(displayedTimeZone).toBe('Asia/Calcutta');
    
    await this.verifyElmPresent(this.page, this.CalnderTable, "Calander Table ");
    await this.verifyElmPresent(this.page, this.PatientsLabel, "Patients Label");

    await this.verifyElmPresent(this.page, this.PatientsEmailText, "Patients Email Text box");
    const totalP = await this.Patients_Count.count();
    
    await this.verifyElmPresent(this.page, this.YourPayroll_lable, "Your Payroll lable");
    await this.verifyElmPresent(this.page, this.NameDr, "Name of DR.");
    await this.verifyElmPresent(this.page, this.expirance_of_Dr, "Experience od DR.");
    await this.verifyElmPresent(this.page, this.contactEmail, "Contact us Email");

    console.log("Following Elements are visible");
    console.log("==============================================");
    await printElements(this.visibleElements);
    console.log("Total Messages in inbox ", inBoxmessages);
    console.log("Total Patients Count ", totalP);
    console.log("Currunt time zone ", this.todayFormatted, timeFormatted, displayedTimeZone);
    console.log("\nNot Visible Elements Count:",this.notVisibleElements.length)
    console.log("Following Elements are Not Visible");
    console.log("==============================================");
    await printElements(this.notVisibleElements);
  }

  async getDisplayedTimeZone(page) {
    // Use Intl.DateTimeFormat to access the browser's time zone information
    const timeZone = await page.evaluate(() => {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    });

    return timeZone;
  }


  async iselementClickable(page: Page, Element: Locator): Promise<boolean> {
    try {
      // Check if the button is visible and enabled (adjusted for clarity)
      const isVisible = await Element.isVisible();
      return isVisible;
    } catch (error) {
      //console.error(`Element is not Present: ${error.message}`, + Element);
      return false; // Assume not clickable if an error occurs
    }
  }



  // Assuming you have arrays to store visible and not visible elements
  async verifyElmPresent(page: Page, Element: Locator, ElmName: string) {

    try {
      const isVisible = await this.iselementClickable(page, Element);
      if (isVisible) {
        // console.log(`Element is Visible "${await Element.textContent()}" ` + ElmName);
        this.visibleElements.push(ElmName);
        return true;
      } else {
        // console.error(`Element "${Element}" "${ElmName}" is not visible`);
        this.notVisibleElements.push(ElmName);
        return false;
      }
    } catch (error) {
      console.error(`Error verifying element "${Element}": ${error.message}`);
      return false;
    }


  }

}
export default slpdashboard_profile