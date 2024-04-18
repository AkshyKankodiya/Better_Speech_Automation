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
       
        await placeorder_page.place_Order_With_Invalid_Generic_decline();
        await placeorder_page.place_Order_With_Insufficient_funds_decline();
        await placeorder_page.place_Order_With_Invalid_Exceeding_velocity_limit_decline();
        await placeorder_page.place_Order_With_Invalid_Expired_card_decline();
        await placeorder_page.place_Order_With_Invalid_Lost_card_decline();
        await placeorder_page.place_Order_With_Invalid_Stolen_card_decline();
        await placeorder_page.place_Order_With_Invalid_incorrect_number_decline();
        await placeorder_page.place_Order_With_Invalid_Processing_error_decline();
        await placeorder_page.place_Order_With_Invalid_incorrect_CVC_decline();

        

        await allure.step("Step_002_Verify_With_Valid_Cards", async () => {
        });
        console.log("\nValid Cards------------------------------------");
        await placeorder_page.place_Order_With_Valid_Visa();
        await placeorder_page.place_Order_With_Valid_Mastercard();
        await placeorder_page.place_Order_With_Valid_American_Express();
        await placeorder_page.place_Order_With_Valid_Discover();


    });


});