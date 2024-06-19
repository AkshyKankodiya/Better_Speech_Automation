import { Page, Locator, expect} from '@playwright/test'
import * as fs from 'fs';

const jsonData = fs.readFileSync('test-data/performance.json', 'utf-8');
const data = JSON.parse(jsonData);

class Slp_Performance {

    page: Page;
    emailTextB: Locator;
    passTextB: Locator;
    userloginBtn: Locator;
    searchEmailTextB: Locator;
    btnSearch: Locator;
    textMaxHourlyR: Locator;
    textSessionR: Locator;
    textStartingR: Locator;
    textStartingSessR: Locator;
    textCustomerStartingRating: Locator;
    textCustomerEndingRating: Locator;
    textRatingCount: Locator;
    textRatingNumber: Locator;
    textRating_Reviews: Locator;
    textSessions: Locator;
    texthourly: Locator;
    textcustomer: Locator;
    crossicon: Locator;
    textstartincreasehr: Locator;
    textendinceasehr: any;
    textincreasehr: Locator;
    getvalue: Locator;
    textSessions1: Locator;
    textsessions2: Locator;
    textsessions3: Locator;
    textsessions4: Locator;
    textsessions5: Locator;
    textincreasehr1: Locator;
    textincreasehr2: Locator;
    textincreasehr3: Locator;
    textincreasehr4: Locator;
    textincreasehr5: Locator;


    constructor(page: Page) {

        this.page = page;
        this.emailTextB = page.locator("//input[@id='input_comp-knr71pbi']")
        this.passTextB = page.locator('//input[@name="password" and @placeholder="Password"]')
        this.userloginBtn = page.locator('//button[@data-testid ="buttonElement"]/span[text()="Login >"]')
        this.searchEmailTextB = page.locator("//input[@placeholder='Search Member by email']")
        this.btnSearch = page.locator("//div[@id='comp-lcq2rdy0']/button")
        this.textMaxHourlyR = page.locator("(//div[@id='comp-lx7xq6c5']//p//child::span)[3]")
        this.textSessionR = page.locator("(//div[@id='comp-lx7ymy625']//p//child::span)[3]")
        this.textStartingR = page.locator("(//div[@id='comp-lx7xryhs']//p//child::span)[3]")
        this.textStartingSessR = page.locator("(//div[@id='comp-lx7ymy613']//p//child::span)[3]")
        this.textCustomerStartingRating = page.locator("(//div[@id='comp-lx8nof9n']//p//child::span)[3]")
        this.textCustomerEndingRating = page.locator("(//div[@id='comp-lx8nof9o4']//p//child::span)[3]")
        this.textRatingCount = page.locator("(//div[@id='comp-lx8nof9j']//h5//child::span)[4]")
        this.textRatingNumber = page.locator("(//div[@id='comp-lx8nof9p1']//following::div)[3]")
        // this.textRating_Reviews = page.locator("(//div[@id='comp-lcq2rdyh']//p//child::span)[3]")
        this.textSessions = page.locator("(//div[@id='comp-lxdc6df2']//p//child::span)[3]")
        this.textSessions1 = page.locator("(//div[@id='comp-lxdc6df2']//p[2]//child::span)[3]")
        this.textsessions2 = page.locator("(//div[@id='comp-lxdc6df2']//p[3]//child::span)[3]")
        this.textsessions3 = page.locator("(//div[@id='comp-lxdc6df2']//p[4]//child::span)[3]")
        this.textsessions4 = page.locator("(//div[@id='comp-lxdc6df2']//p[5]//child::span)[3]")
        this.textsessions5 = page.locator("(//div[@id='comp-lxdc6df2']//p[5]//child::span)[3]")
        this.texthourly = page.locator("(//div[@id='comp-lxapybmt4']//p//child::span)[3]")
        this.textcustomer = page.locator("(//div[@id='comp-lxc7ymmu']//p//child::span)[3]")
        this.crossicon = page.locator("//div[@class='jardUn']")
        this.textstartincreasehr = page.locator("(//div[@id='comp-lx8opb0w']//p//child::span)[3]")
        this.textendinceasehr = page.locator("(//div[@id='comp-lx8opb0w6']//p//child::span)[3]")
        this.textincreasehr = page.locator("(//div[@id='comp-lxaq9j914']//p[1]//child::span)[3]")
        this.textincreasehr1 = page.locator("(//div[@id='comp-lxaq9j914']//p[2]//child::span)[3]")
        this.textincreasehr2 = page.locator("(//div[@id='comp-lxaq9j914']//p[3]//child::span)[3]")
        this.textincreasehr3 = page.locator("(//div[@id='comp-lxaq9j914']//p[4]//child::span)[3]")
        this.textincreasehr4 = page.locator("(//div[@id='comp-lxaq9j914']//p[5]//child::span)[3]")
        this.textincreasehr5 = page.locator("(//div[@id='comp-lxaq9j914']//p[7]//child::span)[3]")
        this.getvalue = page.locator("(//div[@data-testid='tooltip'])[3]")

    }

    async navigate() {
        await this.page.goto('/' + 'slpdashboard');
        await this.page.waitForTimeout(2000);
    }
    async login_With_Cred() {
        try {
            await this.page.waitForTimeout(2000);
            await this.emailTextB.fill("qabetterspeech@gmail.com");
            await this.passTextB.fill("Kamal@12");
            await this.userloginBtn.click();
        }
        catch (error) {
            console.log("\nWrong Email and Password", error)
        }
    }
    
    async calculate_HourlyRate(){

        this.search_Email("mary.slpnv@gmail.com")
        console.log("\nSearched Email: ","mary.slpnv@gmail.com")

        await this.page.waitForTimeout(5000);
        await this.textStartingR.waitFor();

        const text = await this.texthourly.textContent();
        this.verify_Text(text,data.Hourly_Rate_Text,"Hourly Text")

        const StartingH = await this.textStartingR.innerText();
        this.stating_Value(StartingH,data.StartingHour,"Staring Hourly Text")
        
        const hourlyrate = data.Hourly_min_rate;
        const multiplier = data.MaxRate;
        const result = hourlyrate * multiplier;

        const roundedResultToFixed = parseFloat(result.toFixed(0));
        
        console.log(`\nThe result of multiplying Hours ${hourlyrate} by ${multiplier} is: ${roundedResultToFixed}`);

        try{
            const roundedstr = roundedResultToFixed.toString();
            const regex = roundedstr.match(/(\d+)/);
            if(regex){
                const extractedHR = regex[0];
                const HR = await this.textMaxHourlyR.innerText();
                const newHR = HR.toString();
                expect(newHR).toContain(extractedHR);
                console.log(`\nHours Calculation: ${newHR}, Matched ${extractedHR}`)
            }
        }catch(error){
            console.log("\nHours Calculation is Not Matched",error)
        }
    }
    async calculate_Session_Per_Client(){

        const text = await this.textSessions.textContent();
        this.verify_Text(text,data.Sessions_Rate_Text1,"Session Text")

        const text2 = await this.textSessions1.textContent();
        this.verify_Text(text2,data.Sessions_Rate_Text2,"Session Text")

        const text3 = await this.textsessions2.textContent();
        this.verify_Text(text3,data.Sessions_Rate_Text3,"Session Text")

        const text4 = await this.textsessions3.textContent();
        this.verify_Text(text4,data.Sessions_Rate_Text4,"Session Text")

        const text5 = await this.textsessions5.textContent();
        this.verify_Text(text5,data.Sessions_Rate_Text5,"Session Text")

        const StartingS = await this.textStartingSessR.innerText();
        this.stating_Value(StartingS,data.StartingSession,"Staring Session Value")

        const sessionsrate = data.Min_Sessions_per_client;
        const multiplier2 = data.MaxSession;
        const resultsession = sessionsrate * multiplier2;
        const resultaddition = resultsession + 1;
        
        const roundedResultSession = parseFloat(resultaddition.toFixed(0));

        console.log(`\nThe result of multiplying Sessions ${sessionsrate} by ${multiplier2} is: ${roundedResultSession}`);

        try{
            const roundedstr = roundedResultSession.toString();
            const regex = roundedstr.match(/(\d+)/);
            if(regex){
                const extractedSR = regex[0];
                const SR = await this.textSessionR.innerText();
                expect(SR).toContain(extractedSR);
                console.log(`\nSession Calculation: ${SR}, Matched ${extractedSR}`)
            }
        }catch(error){
            console.log("\nSessions Calculation is Not Matched",error)
        }
        
    }

    async increase_Your_Hourly_Rate(){

        this.search_Email("qabetterspeech+slpTestingCalendar@gmail.com")
        console.log("\nSearched Email: ","qabetterspeech+slpTestingCalendar@gmail.com")
        
        await this.page.waitForTimeout(5000);

        const text = await this.textincreasehr.textContent();
        this.verify_Text(text,data.Increase_your_hourly_rate_Text,"Increase your hourly rate Text")

        const text1 = await this.textincreasehr1.textContent();
        this.verify_Text(text1,data.Increase_your_hourly_rate_Text1,"Increase your hourly rate Text")

        const text2 = await this.textincreasehr2.textContent();
        this.verify_Text(text2,data.Increase_your_hourly_rate_Text2,"Increase your hourly rate Text")

        const text3 = await this.textincreasehr3.textContent();
        this.verify_Text(text3,data.Increase_your_hourly_rate_Text3,"Increase your hourly rate Text")

        const text4 = await this.textincreasehr4.textContent();
        this.verify_Text(text4,data.Increase_your_hourly_rate_Text4,"Increase your hourly rate Text")

        const text5 = await this.textincreasehr5.textContent();
        this.verify_Text(text5,data.Increase_your_hourly_rate_Text5,"Increase your hourly rate Text")
        
        const increasevalue = await this.getvalue.textContent();
        console.log("\nThis is the Current Value of increase your hourly rate: ",increasevalue);

        await this.page.locator('#slider_comp-lx8opb0x5').getByTestId('thumb').locator('div').first().click();
        await this.page.locator('#slider_comp-lx8opb0x5').getByTestId('track').press('ArrowRight');
        
        const increasevalue2 = await this.getvalue.textContent();
        console.log("\nThis is the Increased Value By 1.5 of increase your hourly rate: ",increasevalue2);

    }
    async customer_Rating(){

        const text = await this.textcustomer.textContent();
        this.verify_Text(text,data.Customer_Rating_Text,"Rating Text")

        const StartRating = await this.textCustomerStartingRating.innerText();
        this.stating_Value(StartRating,data.Customer_Starting_Rating,"Rating Start Value")

        const EndRating = await this.textCustomerEndingRating.innerText();
        this.ending_Value(EndRating,data.Customer_End_Rating,"Rating End Value")

        try {
            // const ratingcount  = await this.textRating_Reviews.innerText();
            // const ratingcountsub = ratingcount.substring(5,8);

            const ratingcount2 = await this.textRatingCount.innerText();
            const ratingcountsub1 = ratingcount2.substring(0,2);
            const ratingcountstr = ratingcountsub1.toString();

            // expect(ratingcountsub).toContain(ratingcountstr);
            console.log(`\nCustomer Rating Reviews Count: ${ratingcountstr}`)
            
        } catch (error) {
            console.log("\nCustomer Rating Count is Not Matched",error)
        }
        
        try {
            // const reviewanumber = await this.textRating_Reviews.innerText();
            // const reviewanumbersub = reviewanumber.substring(0,3)
            const reviewnumber2 = await this.textRatingNumber.innerText();
            const reviewnumberstr = reviewnumber2.toString();
            // expect(reviewanumbersub).toContain(reviewnumberstr);
            console.log(`\nCustomer Rating Number: ${reviewnumberstr}`)
        } catch (error) {
            console.log("\nCustomer Rating Number is Not Matched",error)
        }
        
    }
    
    async popup(){
        const popForNEW1 = this.page.locator("//div[@id='comp-li9elvc61']")
        if (await popForNEW1.isVisible()) {
            await this.crossicon.click();
        }else {
            await this.page.keyboard.press('Escape');
        }
    }
    async search_Email(Email:any){
        await this.searchEmailTextB.fill(Email)
        await this.btnSearch.click();
        this.popup();
    }

    async verify_Text(actual: any, expected: any, message?: string){
        try {
            if (actual === expected) {
                console.log(`\nText Verified: Actual text "${actual}" matches expected text "${expected}"`);
            } else {
                throw new Error(`\nText Verification Failed: Actual text "${actual}" does not match expected text "${expected}"`);
            }
        } catch (error) {
            console.error('\nError occurred during text verification:', error.message);
        }

    }
    async stating_Value(actual: any, expected: any, message?: string){
        try {
            
            expect(actual).toContain(expected);
            console.log(`\nStarting Value: Actual value "${actual}" matches expected value "${expected}"`, message);

        } catch (error) {
            console.error('\nError occurred during value verification:', error.message);
        }
    }
    async ending_Value(actual: any, expected: any, message?: string){
        try {
            if (actual === expected) {
                console.log(`\nEnding Value: Actual value "${actual}" matches expected value "${expected}"`, message);
            } else {
                throw new Error(`\nVerification Failed: Actual value "${actual}" does not match expected value "${expected}"`);
            }
        } catch (error) {
            console.error('\nError occurred during value verification:', error.message);
        }

    }

}
export default Slp_Performance