import { test, expect, Page } from '@playwright/test'
import { allure } from "allure-playwright";
import adultpage from '../pages/adult_page';


test.describe.serial('Adult_Test', () => {


    let Adult_page: adultpage;

    test.beforeEach(async ({ page }) => {
        Adult_page = new adultpage(page);

        await Adult_page.navigate();

    });

    test('Testcase_001_Verify_adult_first_question', async ({ page, context }) => {

        await allure.step("Step_001_", async () => {
        });
        await Adult_page.test_adult_first_question();


    });



    test('Testcase_002_Verify_Adult_Question', async ({ page, context }) => {

        await allure.step("Step_001_", async () => {
        });
        await Adult_page.test_adult_Verification();


    });

    test('Testcase_003_Verify_Adult_payment_option', async ({ page, context }) => {

        await allure.step("Step_001_", async () => {
        });
        await Adult_page.test_how_to_pay_options2();



    });

    test('Testcase_004_Verify_test_adult_With_email', async ({ page, context }) => {

        await allure.step("Step_001_", async () => {
        });
        await Adult_page.test_adult_With_email();



    });

});