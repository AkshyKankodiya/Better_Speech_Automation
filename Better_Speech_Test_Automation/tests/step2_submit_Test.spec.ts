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
    test('Testcase_001_Place_Order_Fill_Form', async ({ page, context }) => {
        await submit_page.place_Order_With_Valid_Visa();
        await submit_page.Filling_Form(form_Data['My Child']);
    });


});