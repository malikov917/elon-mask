const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true, args: ['--headless', '--disable-gpu'] });
    const page = await browser.newPage();
    await page.goto('https://www.marketwatch.com/investing/stock/tsla');
    await page.waitForSelector('.intraday__price');

    const stockPrice = await page.evaluate(() => {
      console.log(document.querySelector('.intraday__price').innerText);
      return document.querySelector('.intraday__price').innerText;
    });

    console.log(stockPrice);

    await browser.close();

  } catch (error) {
    console.log(error)
  }
})();