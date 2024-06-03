import { test, expect, Page } from '@playwright/test'
import { allure } from "allure-playwright";
import submitpage from '../pages/step2_submit_page';
import form_Data from '../test-data/Form_Data.json';

test.describe.serial('Step2_Submit', () => {


    let submit_page: submitpage;

    test.beforeEach(async ({ page }) => {
        submit_page = new submitpage(page);

        await submit_page.navigate();

    });
    test('Testcase_001_Signup_as_my_child', async ({ page, context }) => {
        await submit_page.signup_As_My_Child();
    });

    test('Testcase_002_Signup_as_my_self', async ({ page, context }) => {
        await submit_page.signup_As_My_Self();
    });

    test('Testcase_003_Signup_as_another_adult', async ({ page, context }) => {
        await submit_page.signup_As_Another_Adult();
    });



});