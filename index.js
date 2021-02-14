const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox', '--headless', '--disable-gpu'] });
    console.log('browser opened')

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    console.log('new page opened')

    await page.goto('https://twitter.com/Twitter', { waitUntil: 'networkidle2' });

    const results = await page.$$eval('article div[lang]', (tweets) => tweets.map((tweet) => tweet.textContent));
    console.log(results);

    console.log('wait For Selector finished')
/* 
    const browser = await puppeteer.launch({ headless: true, args: ['--headless', '--disable-gpu'] });
    console.log('browser opened')
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1200 })
    console.log('new page opened')
    await page.goto('https://twitter.com/elonmusk');
    console.log('site opened');

    await page.waitForSelector('[data-testid="tweet"]');

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