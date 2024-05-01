import { Page, Locator, Keyboard, test, expect, PlaywrightTestConfig, chromium } from '@playwright/test'


class slpdashboard {

  page: Page;
  btnChangeStatus: Locator;
  radioimnearingcapacity: Locator;
  radioimplanningtempleave: Locator;
  crossIcon: Locator;
  selectDate1: Locator;
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
  dateText: any;
  selectDate2: Locator;
  alldateDay2: Locator;
  selectDate3: Locator;
  selectDate4: Locator;
  submittLeaveBTN: Locator;
  verifyElem: Locator;
  today: any;
  futureDate_DISABLED_20: any;
  futureDate_DISABLED_19: any;
  futureDate_ENABLED: any;
  todayFormatted: any;
  Future_DesabledDate20: any;
  futureDateFormatted: any;
  Future_DesabledDate19: any;
  Expected_Date: any;
  TodayFormatted_dig: any;
  dateText2: any;
  futureDateFormatted_dig: any;
  isMob: any;
  closeCalander: Locator;
  Date_Thankyou : Locator;







  constructor(page: Page,isMob:any) {
    this.page = page;
    this.isMob =isMob;
    this.btnChangeStatus = page.locator("//span[text()='Change status']")
    this.radioimnearingcapacity = page.locator("//div[contains(text(),'nearing capacity')]")
    this.radioimplanningtempleave = page.locator("//div[contains(text(),'planning a temporary leave')]")
    this.crossIcon = page.locator("//div[@class='jardUn']")
    this.selectDate1 = page.locator("(//label[contains(text(),'think you are at capacity')]//following::button)[1]")
    this.selectDate2 = page.locator("(//label[contains(text(),'think you are at capacity')]//following::button)[2]")
    this.alldateDay = page.locator("//div[contains(@class, 'wixui-date-picker__calendar')]//tbody//tr//td//button")
    this.alldateDay2 = page.locator("//div[contains(@class, 'wixui-date-picker__calendar')]//tbody//tr//td//button")
    this.slpStringUrl = 'slpdashboard'
    this.emailTextBox = page.locator("//input[@name='email']")
    this.passTextBox = page.locator("//input[@name='password']")
    this.emailLogin = "qabetterspeech+slpTestingCalendar@gmail.com"
    this.passLogin = "Kamal@12"
    this.loginBTN = page.locator("//*[text()='Login >']")
    this.elemOfDas = page.locator("//*[contains(text(),'This is your Dashboard')]")
    this.changeStatusBTN = page.locator("//*[contains(text(),'Change status')]")
    this.nextMonthBtn = page.locator("//button[@data-testid='nextMonth']")
    this.selectDate3 = page.locator("(//label[contains(text(),'you be on leave')]//following::button)[1]")
    this.selectDate4 = page.locator("(//label[contains(text(),'you be on leave')]//following::button)[2]")
    this.submittLeaveBTN = page.locator("//span[contains(text(),'Request status change')]")
    this.verifyElem = page.locator("//span[contains(text(),'Your timezone')]")
    this.closeCalander = page.locator("//div[@class='pBk9_M']")
    this.Date_Thankyou = page.locator("//span[contains(text(),'Thank you for requesting')]")
    this.today
    this.futureDate_DISABLED_20 
    this.futureDate_DISABLED_19 
    this.futureDate_ENABLED 
    this.todayFormatted
    this.Future_DesabledDate20 
    this.futureDateFormatted 
    this.Future_DesabledDate19 
    this.Expected_Date
    this.TodayFormatted_dig
    this.dateText2
    this.futureDateFormatted_dig
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
  async check_Disabled_date() {
    await this.page.waitForTimeout(1000)
    await this.elemOfDas.waitFor();
    await this.page.evaluate(() => {
      window.scrollTo(0, document.documentElement.scrollHeight);
    });
    await this.changeStatusBTN.waitFor();
    await this.changeStatusBTN.click();
    await this.radioimnearingcapacity.waitFor();
    await this.radioimnearingcapacity.click();
    await this.selectDate1.click();
    await this.check_Disabled_Dates_in_Month(this.page);
    if(this.isMob){
      await this.closeCalander.click();
    }
    else
    {
    await this.selectDate1.click();
    }
  }

  async check_Valid_date() {
    if(this.isMob){
      await this.page.waitForTimeout(2000);
      await this.page.reload();
    }
    console.log("\n-------------Check Valid Date in month");
    await this.page.waitForTimeout(1000)
    await this.elemOfDas.waitFor();
    await this.dateVerification();
    
  }

  async submit_Request_for_near_capacity() {
    console.log("\n-------------I'm nearing capacity");
    await this.selectDate1.click();
    await this.checkAndInteractWithDates(this.page);
    await this.page.waitForTimeout(1000)
    await this.selectDate2.click();

    await this.checkAndInteractWithDates2(this.page)
    await this.page.waitForTimeout(1000)
    await this.submittLeaveBTN.waitFor();
    await this.submittLeaveBTN.click();
    await this.verifyElem.waitFor();
    await this.page.waitForTimeout(1000)

  }

  async submit_Request_for_temporary_leave() {
    console.log("\n-------------I'm planning a temporary leave");
    await this.Date_Thankyou.waitFor();
    await this.page.reload();
    await this.changeStatusBTN.waitFor();
    await this.changeStatusBTN.click();
    await this.radioimplanningtempleave.waitFor();
    await this.radioimplanningtempleave.click();
    await this.selectDate3.click();

    await this.checkAndInteractWithDates(this.page);
    await this.page.waitForTimeout(1000)
    await this.selectDate4.click();

    await this.page.waitForTimeout(1000)
    await this.checkAndInteractWithDates2(this.page)
    await this.page.waitForTimeout(1000)
    await this.submittLeaveBTN.waitFor();
    await this.submittLeaveBTN.click();
    await this.Date_Thankyou.waitFor();
    await this.page.waitForTimeout(1000)

  }

  async dateVerification(){
    this.today = new Date();
    this.futureDate_DISABLED_20 = new Date(this.today.getTime() + (20 * 24 * 60 * 60 * 1000));
    this.futureDate_DISABLED_19 = new Date(this.today.getTime() + (19 * 24 * 60 * 60 * 1000));
    this.futureDate_ENABLED = new Date(this.today.getTime() + (21 * 24 * 60 * 60 * 1000));
    this.todayFormatted = this.today.toLocaleDateString('en-GB');
    this.futureDateFormatted =this.futureDate_ENABLED.toLocaleDateString('en-GB')
    this.Future_DesabledDate19 = this.futureDate_DISABLED_19.toLocaleDateString('en-GB');
    console.log("\nCurrunt Date :", this.todayFormatted);
    this.Future_DesabledDate20 = this.futureDate_DISABLED_20.toLocaleDateString('en-GB');
    console.log("\nLast 2 Disabled Date: 19th and 20th day after the currunt date ", this.Future_DesabledDate19, "And ", this.Future_DesabledDate20);
    console.log("\nEnabled Date: 21st day after the currunt date", this.futureDateFormatted);
    this.Expected_Date = this.futureDateFormatted.substring(0, 2);
    this.TodayFormatted_dig= this.todayFormatted.substring(0, 2);
    this.futureDateFormatted_dig =this.futureDateFormatted.substring(0, 2);
  }


  async checkAndInteractWithDates(page: Page) {
    let anyDateEnabled = false;

    do {
      this.alldateDay = page.locator('//div[contains(@class, "wixui-date-picker__calendar")]//tbody//tr//td//button'); // Adjust selector as needed

      for (const dateCell of await this.alldateDay.all()) {
        const dateText = await dateCell.textContent();
        const isEnabled = await dateCell.isDisabled() === false;

        if (isEnabled) {
          anyDateEnabled = true;
          console.log(`\nDate "${dateText}" is enabled. Clicking it.`);
          await dateCell.click();
          //expect(this.Expected_Date).toBe(dateText);
          break;

        } else {
          //console.log(`Date "${dateText}" is disabled.`);
        }
      }

      if (!anyDateEnabled) {
        //console.log('No enabled dates found in current month. Clicking next month button.');
        await this.nextMonthBtn.click();
        anyDateEnabled = false;
      }

    } while (!anyDateEnabled);
  }


  async checkAndInteractWithDates2(page: Page) {
    let enabledDateCount = 0;

    do {
      this.alldateDay2 = page.locator('//div[contains(@class, "wixui-date-picker__calendar")]//tbody//tr//td//button'); // Adjust selector as needed

      for (const dateCell of await this.alldateDay2.all()) {
        const dateText = await dateCell.textContent();
        const isEnabled = await dateCell.isDisabled() === false;

        if (isEnabled) {
          enabledDateCount++;

          if (enabledDateCount === 3) {
            console.log(`\nClicking the too date: "${dateText}"`);
            await dateCell.click();
            break;
          }
        }
      }

      if (enabledDateCount === 0) {
        //console.log('No enabled dates found in current month. Clicking next month button.');
        await this.nextMonthBtn.click();
        enabledDateCount = 0;
      }

    } while (enabledDateCount < 3);
  }



  async check_Disabled_Dates_in_Month(page: Page) {
    let anyDateEnabled = false;
    
    do {
      this.alldateDay = page.locator('//div[contains(@class, "wixui-date-picker__calendar")]//tbody//tr//td//button'); // Adjust selector as needed
          
      for (const dateCell of await this.alldateDay.all()) {
        const dateText = await dateCell.textContent();
        const isEnabled = await dateCell.isDisabled() === false;

        if (isEnabled) {
          anyDateEnabled = true;
          console.log(`\nValid Enabled Date is"${dateText}" `);
          break;

        } else {
          //console.log(`Date "${dateText}" is disabled.`);
        }
      }

      if (!anyDateEnabled) {
        console.log('No enabled dates found in current month. Clicking next month button.');
        await this.nextMonthBtn.click();
        anyDateEnabled = false;
      }

    } while (!anyDateEnabled);
  }


}
export default slpdashboard;