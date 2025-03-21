import puppeteer from 'puppeteer';

describe('show/hide event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 250, 
        timeout: 0
    });
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.waitForSelector('.event');
  });

  afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event.details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined();
  });
  
  test('User can collapse an event to hide details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event.details');
    expect(eventDetails).toBeNull();
  });
});

describe('Filter events by city.', () => {
  let browser;
  let page;
  let eventListItems;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 50, 
    });
    page = await browser.newPage();
    await page.goto('http://localhost:5173/');
    await page.waitForSelector('.event');
    eventListItems = await page.$$('.event');
  });

  afterAll(async () => {
    if (browser) {
      await browser.close();
    }
  });

  test('When user hasn’t searched for a city, show upcoming events from all cities.', async () => {
    expect(eventListItems.length).toBe(32);
  });

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.type('.city', 'Berlin');
    const suggestionListItems = await page.$$('.suggestions li');
    expect(suggestionListItems.length).toBe(2);
  });

  test('User can select a city from the suggested list', async () => {
    for (let i = 0; i < 6; i++) {
      await page.keyboard.press('Backspace');
    }
    await page.type('.city', 'Berlin');
    const suggestionText = await page.$eval('.suggestions li:first-child', el => el.textContent);
    await page.click('.suggestions li:first-child');
    const citySearchInputValue = await page.$eval('.city', el => el.value);
    expect(citySearchInputValue).toBe(suggestionText);
  });
});