const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true, args: ['--headless', '--disable-gpu'] });
    console.log('browser opened')
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1200 })
    console.log('new page opened')
    await page.goto('https://twitter.com/elonmusk');
    console.log('site opened');

    await page.waitForSelector('[data-testid="tweet"]');
    const title = await page.title();
    console.info(`The title is: ${title}`);
    console.log('wait For Selector finished')
/* 
    const links = await page.evaluate(() => {
      let elements = Array.from(document.querySelectorAll('[data-testid="tweet"]'));
      let links = elements.map(x => x.querySelectorAll('a')[2].href);
      console.log(links)
      return links;
    });

    console.log(links); */

    await browser.close();

  } catch (error) {
    console.log(error)
  }
})();