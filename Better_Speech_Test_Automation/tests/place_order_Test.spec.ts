import { test, expect, Page } from '@playwright/test'
import { allure } from "allure-playwright";
import placeorderpage from '../pages/place_order_Page';

test.describe.serial('Place_Order', () => {

    
    let placeorder_page: placeorderpage;

    test.beforeEach(async ({ page }) => {
        placeorder_page = new placeorderpage(page);
       
        await placeorder_page.navigate();

    });
    test('Testcase_001_Place_Order_Test', async ({ page,context}) => {



        await allure.step("Step_001_Verify_With_Invalid_Cards", async () => {
        });
        console.log("\nInvalid Cards------------------------------------");
       
        await placeorder_page.place_Order_With_Invalid_Generic_Decline();
        await placeorder_page.place_Order_With_Insufficient_Funds_Decline();
        await placeorder_page.place_Order_With_Invalid_Lost_Card_Decline();
        await placeorder_page.place_Order_With_Invalid_Stolen_Card_Decline();
        await placeorder_page.place_Order_With_Invalid_Incorrect_CVC_Decline();
        await placeorder_page.place_Order_With_Invalid_Processing_Error_Decline();
        await placeorder_page.place_Order_With_Invalid_Incorrect_Number_Decline();
        await placeorder_page.place_Order_With_Invalid_Exceeding_Velocity_Limit_Decline();

        

        await allure.step("Step_002_Verify_With_Valid_Cards", async () => {
        });
        console.log("\nValid Cards------------------------------------");
        await placeorder_page.place_Order_With_Valid_Visa();
        await placeorder_page.place_Order_With_Valid_Mastercard();
        await placeorder_page.place_Order_With_Valid_American_Express();
        await placeorder_page.place_Order_With_Valid_Discover();


    });


});