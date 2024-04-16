import { test, expect, Page } from '@playwright/test'
import { allure } from "allure-playwright";
import placeorderpage from '../pages/place_order_Page';

test.describe.serial('Place_Order', () => {

    
    let placeorder_page: placeorderpage;

    test.beforeEach(async ({ page }) => {
        placeorder_page = new placeorderpage(page);
       
        await placeorder_page.navigate();

    });
    test('Testcase_001_Fill_Form_and_Financial', async ({ page,context}) => {
        await allure.step("Step_001_Verify Get Better Speech Page", async () => {
        });
       
        await placeorder_page.place_Order_Valid();

    });
});