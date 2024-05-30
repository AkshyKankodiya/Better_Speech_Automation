import { Page, Locator, Keyboard, expect, chromium, PlaywrightTestConfig } from '@playwright/test'
import newJson from '../test-data/Adultqa.json'
import * as fs from 'fs';
import { constants } from 'buffer';


const jsonValue: string[] = newJson.questions1;
const jsonValue2: string[] = newJson.questions2;
const jsonValue3: string[] = newJson.questions3;
const jsonValue4: string[] = newJson.questions4;
const jsonValue5: string[] = newJson.questions5;
const jsonValue6: string[] = newJson.questions6;
const jsonValue7: string[] = newJson.questions7;
const jsonValue8: string[] = newJson.questions8;
const jsonValue9: string[] = newJson.questions9;

class AdultPage {
  page: Page;
  fristQ: Locator;
  AdultBtn: Locator;
  myself: Locator;
  allquestions: Locator;
  dropdownqe: Locator;
  yourmother: Locator;
  thankyouQA: Locator;
  questionAll: string;
  selectage: Locator;
  continueBtn: Locator;
  questionAll2: string;
  allquestionsAdult: Locator;
  FirstRadioAdult: Locator;
  firstCheckOption: Locator;
  btnContinue: Locator;
  questionAll3: any;
  questionAll4: any;
  secondRadioAdult: Locator;
  questionAll6: any;
  questionAll7: any;
  paymentPageElm: Locator;
  questionAll9: any;
  EmailTextB: Locator;
  labelTexth2: Locator;

  constructor(page: Page) {

    this.page = page;
    this.fristQ = page.locator('//div[@data-testid="label"]');
    this.AdultBtn = page.locator("(//div[@class='MVY5Lo'])[2]//img")
    this.myself = page.locator("//div[text()='myself']")
    this.allquestions = page.locator("//div[@data-testid='groupLabel']")
    this.dropdownqe = page.locator("//div[@id='comp-lvaxcrxk']/label")
    this.thankyouQA = page.locator("(//h2[contains(@class,'font')]//child::span)[3]")
    this.yourmother = page.locator("//div[text()='your mother']")
    this.questionAll
    this.questionAll2
    this.selectage = page.locator("//select [@data-testid='select-trigger']")
    this.continueBtn = page.locator("//span[text()='Continue']")
    this.allquestionsAdult = page.locator("//div[@data-testid='label']")
    this.FirstRadioAdult = page.locator("(//input[@type='radio']/following::div[@data-testid='label'])[1]")
    this.secondRadioAdult = page.locator("(//input[@type='radio']/following::div[@data-testid='label'])[2]")
    this.firstCheckOption = page.locator("(//span[@class='eW1tpy'])[1]")
    this.btnContinue = page.locator("//span[text()='Continue']")
    this.questionAll3
    this.questionAll4
    this.questionAll6
    this.questionAll7
    this.questionAll9
    this.paymentPageElm = page.locator("//span[text()='Apply for financial aid']")
    this.EmailTextB = page.locator("//input[@name='email']")
    this.labelTexth2 = page.locator("//label[contains(@class,'psSgWb')]")
  }


  async navigate() {

    await this.page.goto('/' + "get-started");
    await this.AdultBtn.waitFor();
    await this.page.waitForTimeout(5000)

  }

  async test_Adult_First_Question() {
    await this.page.waitForTimeout(2000)
    await this.AdultBtn.click();
    await this.myself.waitFor();
    await this.page.waitForTimeout(2000)
    let unmatchedElements: string[] = [];
    const allOption = await this.fristQ.all();
    let counter = 0;
    //await this.page.pause();
    for (const element of allOption) {
      try {
        await this.page.waitForTimeout(3000)
        console.log(await element.isDisabled());
        while (await element.isDisabled()) {
          await this.navigate();
          await this.page.waitForTimeout(2000);
          await this.AdultBtn.click();
          await element.waitFor();
        }

        await element.click();

        console.log("Option is selected", counter + 1)
        await this.page.waitForTimeout(5000);
        let isMatchFound = false;
        for (let j = 0; j < jsonValue.length; j++) {
          await this.get_current_question();
          //console.log(this.questionAll)
          if (this.questionAll.startsWith(jsonValue[j])) {
            console.log("\nMatch found for option:", counter + 1, this.questionAll);
            await this.navigate();
            await this.page.waitForTimeout(2000);
            await this.AdultBtn.click();
            await element.waitFor();
            await this.page.waitForTimeout(2000)
            isMatchFound = true; // Set flag if a match is found
          }

        }
        if (!isMatchFound) {
          // No match found for this element
          unmatchedElements.push(this.questionAll); // Store the unmatched element
          console.error("\nNo match found for option:", counter + 1, this.questionAll);
          await this.navigate();
          await this.page.waitForTimeout(2000);
          await this.AdultBtn.click();
          await element.waitFor();
          await this.page.waitForTimeout(2000);
        }
        counter++;
        if (counter === allOption.length) {
          allOption.length = 0; // Clear the array
          console.log("Array cleared for next task");
        }
      } catch (error) {
        console.error("Error clicking element:", error);
      }
    }
    if (unmatchedElements.length > 0) {
      console.warn("Adult_first_question Unmatched elements:", unmatchedElements);
      // You can perform further actions based on the unmatched elements
    }

  }
  async test_Adult2() {
    let unmatchedElements2: string[] = [];
    try {
      await this.AdultBtn.waitFor();
      await this.page.waitForTimeout(1000);
      await this.AdultBtn.click();
      await this.myself.waitFor();
      await this.page.waitForTimeout(1000)

      while (await this.myself.isDisabled()) {
        await this.navigate();
        await this.page.waitForTimeout(2000);
        await this.AdultBtn.click();
        await this.myself.waitFor();
      }
      await this.myself.waitFor();
      await this.myself.click();
      while (await this.selectage.isDisabled()) {
        await this.navigate();
        await this.page.waitForTimeout(3000);
        await this.AdultBtn.click();
        await this.myself.click();
        await this.selectage.waitFor();
      }
      await this.selectage.click();
      const dropdown = this.page.locator(`//div[@class='P6sHUt' and text() = '${newJson.age}']`);
      // await dropdown.waitFor();
      await dropdown.click();
      await this.page.waitForTimeout(5000);
      let isMatchFound = false;
      for (let j = 0; j < jsonValue.length; j++) {
        await this.get_current_question();
        if (this.questionAll.startsWith(jsonValue[j])) {
          // console.log(" Match", this.questionAll, jsonValue[j]);
          await this.continueBtn.click();
          await this.page.waitForTimeout(3000);
          isMatchFound = true;
          break;
        }

      }
      for (let j = 0; j < jsonValue.length; j++) {
        await this.get_current_question();
        if (this.questionAll.startsWith(jsonValue[j])) {
          // console.log(" Match on Main Qustions", this.questionAll);
        }
      }

      if (!isMatchFound) {
        // No match found for this element
        unmatchedElements2.push(this.questionAll); // Store the unmatched element
        console.error("\nNo match found for option:", this.questionAll);
      }
    } catch (error) {
      console.error("Error clicking element:", error);
    }

    if (unmatchedElements2.length > 0) {
      //console.warn("Unmatched elements:", unmatchedElements2);

    }
  }
  async test_Adult_Verification() {
    await this.test_Adult2();
    await this.page.waitForTimeout(3000);
    let unmatchedElements: string[] = [];
    let unmatchedElements2: string[] = [];
    let unmatchedElements3: string[] = [];
    const allOption = await this.fristQ.all();
    let counter = 0;
    for (const element of allOption) {
      try {
        await this.page.waitForTimeout(2000)
        while (await element.isDisabled()) {
          await this.navigate();
          await this.test_Adult2();
          await element.waitFor();
        }
        await element.waitFor();
        //await this.page.waitForTimeout(2000)
        await element.click();
        console.log("Option is selected", counter + 1)
        let isMatchFound = false;
        let isMatchFound2 = false;
        let isMatchFound3 = false;
        for (let k = 0; k < jsonValue2.length; k++) {
          await this.page.waitForTimeout(3000);
          await this.get_current_question2();
          if (this.questionAll2.startsWith(jsonValue2[k])) {
            console.log("Match found for option:", counter + 1, this.questionAll2);
            isMatchFound = true;
            await this.Select_first_option();
            await this.page.waitForTimeout(3000);
            await this.get_current_Wait();
            for (let m = 0; m < jsonValue3.length; m++) {
              await this.get_current_question3();
              if (this.questionAll3.startsWith(jsonValue3[m])) {
                console.log("\nMatch found for sub option:", counter + 1, this.questionAll3);
                isMatchFound2 = true;
                await this.Select_first_option();
                await this.page.waitForTimeout(3000);
                for (let s = 0; s < jsonValue4.length; s++) {
                  await this.get_current_question4();
                  if (this.questionAll4.startsWith(jsonValue4[s])) {
                    console.log("\nMatch final ", counter + 1, this.questionAll4);
                    await this.navigate();
                    await this.test_Adult2();
                    await element.waitFor();
                    //await this.page.waitForTimeout(2000)
                    isMatchFound3 = true; // Set flag if a match is found
                    break;
                  }
                }
              }
            }

          }

        }
        if (!isMatchFound) {
          unmatchedElements.push(this.questionAll2);
          console.error("\nNo match found for option:", counter + 1, this.questionAll2);
          await this.navigate();
          await this.test_Adult2();
          await element.waitFor();
          await this.page.waitForTimeout(3000);
        }
        if (!isMatchFound2) {
          unmatchedElements2.push(this.questionAll3);
          console.error("\nNo match found for Sub option:", counter + 1, this.questionAll3);
          await this.navigate();
          await this.test_Adult2();
          await element.waitFor();
          await this.page.waitForTimeout(2000);
        }
        if (!isMatchFound3) {
          unmatchedElements3.push(this.questionAll4);
          console.error("\nNo match found Final", counter + 1, this.questionAll4);
          await this.navigate();
          await this.test_Adult2();
          await element.waitFor();
          await this.page.waitForTimeout(2000);
        }

        counter++;
      } catch (error) {
        console.error("Error clicking element:", error);
      }
    }
    if (unmatchedElements.length > 0) {
      console.warn("Adult_Verification 1 Unmatched elements:", unmatchedElements);
      // You can perform further actions based on the unmatched elements
    }
    if (unmatchedElements2.length > 0) {
      console.warn("Adult_Verification 2 Unmatched elements:", unmatchedElements2);
      // You can perform further actions based on the unmatched elements
    }
    if (unmatchedElements3.length > 0) {
      console.warn("Adult_Verification 3 Unmatched elements:", unmatchedElements3);
      // You can perform further actions based on the unmatched elements
    }
  }

  async test_how_to_pay_options() {
    await this.test_Adult2();
    await this.page.waitForTimeout(1000);
    await this.secondRadioAdult.waitFor();
    await this.secondRadioAdult.click();
    await this.btnContinue.waitFor();
    await this.page.waitForTimeout(3000);
    await this.Select_first_option();
    await this.page.waitForTimeout(3000);
    await this.Select_first_option();
    await this.page.waitForTimeout(3000);
    await this.Select_first_option();
    await this.page.waitForTimeout(3000);
    // await this.Select_first_option();
    // await this.page.waitForTimeout(3000);
    let unmatchedElements5: string[] = [];
    let isMatchFound7 = false;
    try {
      for (let h = 0; h < jsonValue6.length; h++) {
        isMatchFound7 = false;
        await this.get_current_question4();
        if (this.questionAll4.startsWith(jsonValue6[h])) {
          console.log("\nMatch ", this.questionAll4);
          await this.Select_first_and_continue();
          await this.page.waitForTimeout(3000);
          isMatchFound7 = true;
        }
        if (!isMatchFound7) {
          unmatchedElements5.push(this.questionAll4);
          await this.Select_first_and_continue();
          await this.page.waitForTimeout(3000);
          console.error("\nNo match found for option:", this.questionAll4);

        }
      }

    }
    catch (error) {
      console.error("Error clicking element:", error);
    }

    if (unmatchedElements5.length > 0) {
      console.warn("How_to_pay_options Unmatched elements:", unmatchedElements5);
      // You can perform further actions based on the unmatched elements
    }


  }
  async test_How_To_Pay_Options2() {
    await this.test_how_to_pay_options();
    await this.page.waitForTimeout(3000);
    for (let x = 0; x < jsonValue8.length; x++) {
      await this.get_current_question4();
      if (this.questionAll4.startsWith(jsonValue8[x])) {
        console.log("\nMatch on Main Pay option Qustions", this.questionAll4);
      }
    }
    let unmatchedElements55: string[] = [];
    const allOption = await this.fristQ.all();
    let counter = 0;
    //await this.page.pause();
    for (const element of allOption) {
      try {
        await this.page.waitForTimeout(3000)
        while (await element.isDisabled()) {
          await this.navigate();
          await this.page.waitForTimeout(2000);
          await this.AdultBtn.click();
          await element.waitFor();
        }

        await element.click();

        console.log("Option is selected", counter + 1)
        await this.page.waitForTimeout(5000);
        let isMatchFound = false;
        for (let o = 0; o < jsonValue7.length; o++) {
          await this.get_current_question6();
          if (this.questionAll6.startsWith(jsonValue7[o])) {
            console.log("\nMatch found for option:", counter + 1, this.questionAll6);
            await this.navigate();
            await this.page.waitForTimeout(2000);
            await this.test_how_to_pay_options();
            await this.page.waitForTimeout(3000);
            isMatchFound = true; // Set flag if a match is found
          }

        }

        if (!isMatchFound) {
          // No match found for this element
          unmatchedElements55.push(this.questionAll); // Store the unmatched element
          console.error("\nNo match found for option:", counter + 1, this.questionAll6);
          await this.navigate();
          await this.page.waitForTimeout(2000);
          await this.test_how_to_pay_options();
          await this.page.waitForTimeout(3000);

        }
        counter++;
      } catch (error) {
        console.error("Error clicking element:", error);
      }
    }
    if (unmatchedElements55.length > 0) {
      console.warn("how_to_pay_options2_Unmatched elements:", unmatchedElements55);
      // You can perform further actions based on the unmatched elements
    }


  }


  async test_adult7() {
    await this.test_How_To_Pay_Options2();
    await this.Select_first_and_continue();
    await this.page.waitForTimeout(4000);
    await this.Select_first_and_continue();
    console.log("ok")
    await this.page.waitForTimeout(2000);
    let unmatchedElements8: string[] = [];
    let isMatchFound9 = false;
    try {
      for (let r = 0; r < jsonValue9.length; r++) {
        isMatchFound9 = false;
        await this.get_current_question7();
        if (this.questionAll7.startsWith.jsonValue9[r]) {
          console.log("\nMatch ", this.questionAll7);
          await this.Select_first_and_continue();
          await this.page.waitForTimeout(3000);
          await this.get_current_Wait();
          isMatchFound9 = true;
        }
        if (!isMatchFound9) {
          unmatchedElements8.push(this.questionAll7);
          await this.Select_first_and_continue();
          await this.page.waitForTimeout(3000);
          await this.get_current_Wait();
          console.error("\nNo match found for option:", this.questionAll7);

        }
      }

    }
    catch (error) {
      console.error("Error clicking element:", error);
    }

    if (unmatchedElements8.length > 0) {
      console.warn("Unmatched elements:", unmatchedElements8);
      // You can perform further actions based on the unmatched elements
    }

  }

  async test_Adult_With_Email() {
    await this.test_Adult2();
    await this.page.waitForTimeout(3000);
    await this.Select_first_option();
    await this.btnContinue.waitFor();
    await this.page.waitForTimeout(3000);
    await this.Select_first_option();
    await this.page.waitForTimeout(3000);
    await this.Select_first_option();
    await this.page.waitForTimeout(3000);
    await this.Select_first_option();
    await this.page.waitForTimeout(3000);
    let unmatchedElements9: string[] = [];
    let isMatchFound10 = false;
    try {
      for (let u = 0; u < jsonValue5.length; u++) {
        isMatchFound10 = false;
        await this.get_current_question9();
        if (this.questionAll9.startsWith(jsonValue5[u])) {
          console.log("\nMatch ", this.questionAll9);
          await this.Select_first_and_continue3();
          await this.Select_first_and_continue2();
          await this.page.waitForTimeout(2000);
          isMatchFound10 = true;
        }
        if (!isMatchFound10) {
          unmatchedElements9.push(this.questionAll9);
          await this.Select_first_and_continue3();
          await this.Select_first_and_continue2();

          await this.page.waitForTimeout(3000);
          console.error("\nNo match found for option:", this.questionAll9);

        }
      }
    }
    catch (error) {
      console.error("Error clicking element:", error);
    }
    if (unmatchedElements9.length > 0) {
      console.warn("Adult_With_email Unmatched elements:", unmatchedElements9);
      // You can perform further actions based on the unmatched elements
    }
    await this.page.waitForTimeout(5000);
    await this.paymentPageElm.waitFor();
    if (await this.paymentPageElm.isVisible()) {
      console.log("You are on payment page")
    }

  }



  async findVisibleElement(...elements: Locator[]): Promise<Locator | null> {
    for (const element of elements) {
      if (await element.isVisible()) {
        //console.log('Visible Element Found:', element);
        return element;
      }
    }
    return null;
  }

  async get_current_question() {
    const visibleElement = await this.findVisibleElement(this.allquestions, this.dropdownqe, this.thankyouQA);
    if (visibleElement) {
      //console.log('Current Question:', visibleElement);
      this.questionAll = await visibleElement.innerText();
    }
    return visibleElement;
  }

  async get_current_question2() {
    const visibleElement2 = await this.findVisibleElement(this.allquestions, this.dropdownqe, this.thankyouQA, this.allquestionsAdult);
    if (visibleElement2) {

      //console.log('Current Question:', visibleElement);
      this.questionAll2 = await visibleElement2.innerText();
    }
    return visibleElement2;
  }

  async get_current_question3() {
    const visibleElement3 = await this.findVisibleElement(this.allquestions, this.dropdownqe, this.thankyouQA, this.allquestionsAdult);
    if (visibleElement3) {
      //console.log('Current Question:', visibleElement);
      this.questionAll3 = await visibleElement3.innerText();
    }
    return visibleElement3;
  }

  async get_current_question4() {
    const visibleElement4 = await this.findVisibleElement(this.allquestions, this.dropdownqe, this.thankyouQA, this.allquestionsAdult);
    if (visibleElement4) {
      //console.log('Current Question:', visibleElement);
      this.questionAll4 = await visibleElement4.innerText();
    }
    return visibleElement4;
  }
  async get_current_question6() {
    const visibleElement6 = await this.findVisibleElement(this.allquestions, this.dropdownqe, this.thankyouQA, this.allquestionsAdult);
    if (visibleElement6) {
      //console.log('Current Question:', visibleElement);
      this.questionAll6 = await visibleElement6.innerText();
    }
    return visibleElement6;
  }

  async get_current_question7() {
    const visibleElement7 = await this.findVisibleElement(this.allquestions, this.dropdownqe, this.thankyouQA, this.allquestionsAdult);
    if (visibleElement7) {
      //console.log('Current Question:', visibleElement);
      this.questionAll7 = await visibleElement7.innerText();
    }
    return visibleElement7;
  }
  async get_current_question9() {
    await this.page.waitForTimeout(3000);
    const visibleElement9 = await this.findVisibleElement(this.allquestions, this.dropdownqe, this.thankyouQA, this.allquestionsAdult, this.labelTexth2);
    if (visibleElement9) {
      //console.log('Current Question:', visibleElement);
      await this.page.waitForTimeout(2000);
      this.questionAll9 = await visibleElement9.innerText();
    }
    return visibleElement9;
  }

  async get_current_Wait() {
    await this.page.waitForTimeout(3000);
    const visibleElement9 = await this.findVisibleElement(this.allquestions, this.dropdownqe, this.thankyouQA, this.allquestionsAdult, this.labelTexth2);
    if (visibleElement9) {
      //console.log('Current Question:', visibleElement);
      await this.page.waitForTimeout(2000);
      await visibleElement9.waitFor();
    }
    return visibleElement9;
  }




  async Select_first_option() {
    const visibleoption = await this.findVisibleElement(this.firstCheckOption, this.FirstRadioAdult);
    if (visibleoption) {
      await visibleoption.click();
      if (await this.btnContinue.isVisible()) {
        await this.btnContinue.click();
      }
    }
    return visibleoption;
  }


  async Select_first_and_continue() {
    const visibleoption = await this.findVisibleElement(this.FirstRadioAdult, this.btnContinue, this.selectage);

    if (await this.selectage.isVisible()) {
      await this.selectage.waitFor();
      await this.selectage.click();
      const dropdown = this.page.locator(`//div[@class='P6sHUt' and text() = '${newJson.state}']`);
      // await dropdown.waitFor();
      await this.page.waitForTimeout(1000);
      await dropdown.click();
      await this.page.waitForTimeout(6000);
    }
    if (visibleoption) {
      await visibleoption.click();
    }

    return visibleoption;
  }

  async Select_first_and_continue2() {
    const visibleoption = await this.findVisibleElement(this.FirstRadioAdult, this.btnContinue, this.selectage, this.EmailTextB);
    if (await this.EmailTextB.isVisible()) {
      await this.EmailTextB.waitFor();
      await this.EmailTextB.click();
      await this.EmailTextB.fill("betterspeech@gmail.com")
      await this.page.waitForTimeout(5000);
    }

    if (await this.FirstRadioAdult.isVisible()) {
      await this.FirstRadioAdult.click();
    }

    if (await this.btnContinue.isVisible()) {
      await this.btnContinue.click();
      await this.page.waitForTimeout(2000);
    }

    return visibleoption;
  }

  async Select_first_and_continue3() {
    const visibleoption = await this.findVisibleElement(this.selectage);

    if (await this.selectage.isVisible()) {
      await this.selectage.waitFor();
      await this.selectage.click();
      const dropdown = this.page.locator(`//div[@class='P6sHUt' and text() = '${newJson.state}']`);
      // await dropdown.waitFor();
      await this.page.waitForTimeout(1000);
      await dropdown.click();
      await this.page.waitForTimeout(1000);

    }


    return visibleoption;
  }



}
export default AdultPage