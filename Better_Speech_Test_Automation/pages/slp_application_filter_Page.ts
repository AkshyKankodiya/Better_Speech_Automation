import { Page, Locator, Keyboard, expect, PlaywrightTestConfig, chromium, ElementHandle } from '@playwright/test'

class slp_application_filter {

  page: Page;
  slpStringUrl: string;
  emailTextBox: Locator;
  passTextBox: Locator;
  emailLogin: string;
  passLogin: string;
  loginBTN: Locator;
  Date_Thankyou: Locator;
  today: any;
  todayFormatted: any;
  calanderBTN1: Locator;
  calanderBTN2: Locator;
  calander1DateElm: Locator;
  calander2DateElm: Locator;
  slpDashElm: Locator;
  dropdownTerritory: Locator;
  dropdownStatus: Locator;
  searchBtn: Locator;
  dropdownTerritoryValue1: Locator;
  dropdownStatusvalue1: Locator;
  alldateDay: Locator;
  nextMonthBtn: Locator;
  filterResultEmail: Locator;
  counter: Number;
  filterResultName: Locator;
  noDataFound: Locator;
  preMonthBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.slpStringUrl = 'slp-applications'
    this.emailTextBox = page.locator("//input[@name='email']")
    this.passTextBox = page.locator("//input[@name='password']")
    this.emailLogin = "qabetterspeech@gmail.com"
    this.passLogin = "Kamal@12"
    this.loginBTN = page.locator("//*[text()='Login >']")
    this.calanderBTN1 = page.locator("(//button[@aria-label='Open calendar'])[1]")
    this.calander1DateElm = page.locator("//span[normalize-space()='1']")
    this.calanderBTN2 = page.locator("(//button[@aria-label='Open calendar'])[2]")
    this.calander2DateElm = page.locator("//span[normalize-space()='30']")
    this.slpDashElm = page.locator("//span[contains(text(),'SLP Applications')]")
    this.dropdownStatus = page.locator('#comp-lwq4sotg3')
    this.dropdownStatusvalue1 = page.locator("//div[text()='All']")
    this.dropdownTerritory = page.locator('#comp-lwq4sotp')
    this.dropdownTerritoryValue1 = page.locator("//div[contains(text(),'California')]")
    this.searchBtn = page.locator("//span[text()='SEARCH']")
    this.alldateDay = page.locator("//div[contains(@class, 'wixui-date-picker__calendar')]//tbody//tr//td//button")
    this.nextMonthBtn = page.locator("//button[@data-testid='nextMonth']")
    this.preMonthBtn = page.locator("//button[@data-testid='prevMonth']")
    this.filterResultEmail = page.locator("//div[contains(text(),'@')]")
    this.filterResultName = page.locator("//tbody/tr/td[2]")
    this.noDataFound = page.locator("//h6[text()='No Data Found']")
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
    await this.slpDashElm.waitFor();

  }
  async filter_By_Valid_Data() {
    console.log("\n-------Apply Filter on Data present ");
    await this.dropdownTerritory.waitFor();
    await this.dropdownTerritory.click();
    await this.page.getByTestId('designable_list').getByText('California').click();
    console.log("\nSelect Territory:- California");
    await this.dropdownStatus.waitFor();
    await this.dropdownStatus.click();
    await this.page.getByTestId('designable_list').getByText('All').click();
    console.log("\nSelect Status:- All");
    await this.calanderBTN1.click();
    await this.preMonthBtn.click();
    await this.checkAndInteractWithDates(this.page)
    // await this.page.getByRole('button',{ name: '1', exact: true }).click();
    await this.calanderBTN2.click();
    await this.page.getByRole('button', { name: '30' }).click();
    // await this.calander2DateElm.click();
    await this.searchBtn.click();
    await this.page.waitForTimeout(5000)
    console.log("\nTotal Number of filtered result ", await this.filterResultEmail.count());
    console.log("\nName-----------");
    for (const element of await this.filterResultName.all()) {
      const nameText = await element.textContent();
      console.log(nameText);
    }
    console.log("\nEmail-------------");
    for (const element of await this.filterResultEmail.all()) {
      const emailText = await element.textContent();
      console.log(emailText);
    }

  }
  async filter_By_Not_DataPresent() {
    console.log("\n-------Apply Filter for Not Data present ");
    await this.page.reload();
    await this.page.waitForTimeout(8000)
    await this.slpDashElm.waitFor();
    await this.dropdownTerritory.waitFor();
    await this.dropdownTerritory.click();
    await this.page.getByTestId('designable_list').getByText('Canada').click();
    console.log("\nSelect Territory:- Canada");
    await this.dropdownStatus.waitFor();
    await this.dropdownStatus.click();
    await this.page.getByTestId('designable_list').getByText('Candidate', { exact: true }).click();
    console.log("\nSelect Status:- Candidate");

    await this.calanderBTN1.click();
    await this.checkAndInteractWithDates(this.page)
    // await this.page.getByRole('button',{ name: '1', exact: true }).click();
    await this.calanderBTN2.click();
    await this.page.getByRole('button', { name: '30' }).click();
    // await this.calander2DateElm.click();
    await this.searchBtn.click();
    await this.page.waitForTimeout(5000)
    if (await this.noDataFound.isVisible()) {
      await expect(this.noDataFound).toBeVisible();
      console.log("\nNo Data Found");
    } else {
      console.log("\nData is present ");
    }

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
          //console.log(`\nDate "${dateText}" is Selected`);
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


}
export default slp_application_filter