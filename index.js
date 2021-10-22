const puppeteer = require('puppeteer');
require('dotenv').config()

const password = process.env.PASSWORD;
const email = process.env.EMAIL
(async () => {
  //launches browser in slomo to see whats happening 
  const browser = await puppeteer.launch({  headless: false, slowMo: 100, }); // default is true
  //opens new browser
  const page = await browser.newPage();
  //login page url
  await page.goto('https://rev2.force.com/revature/s/');
  //waits for input box
  await page.waitForSelector('.input');
  //targets first input might change
  await page.type('.input', email);
  //target password and inputs pw
  await page.type('input[type="password"]', password);
  //takes screenshot
  await page.screenshot({ path: 'example.png' });
  //logs in
  await page.click('button')
  // needs more setup below

  
  await browser.close();
})();