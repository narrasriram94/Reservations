const { chromium } = require('playwright');

describe('Basic E2E Test', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await chromium.launch();
    });

    afterAll(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('http://localhost:3000'); // Adjust this URL accodingly
    });

    afterEach(async () => {
        await page.close();
    });

    it('should display the search input and button', async () => {
        const input = await page.$('input'); // replace with a more specific selector if necessary
        const button = await page.$('button'); // replace with a more specific selector if necessary

        expect(input).toBeTruthy();
        expect(button).toBeTruthy();
    });

});
