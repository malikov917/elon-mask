const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://twitter.com/elonmusk');
    await page.waitForSelector('[data-testid="tweet"]');

    const links = await page.evaluate(() => {
      let elements = Array.from(document.querySelectorAll('[data-testid="tweet"]'));
      let links = elements.map(x => x.querySelectorAll('a')[2].href);
      console.log(links)
      return links;
    });

    console.log(links);

    await browser.close();

  } catch (error) {
    console.log(error)
  }
})();