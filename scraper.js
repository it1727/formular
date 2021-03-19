const puppeteer = require('puppeteer');
const scrapeProduct = async function (url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el0] = await page.$x('//*[@id="__next"]/div[1]/div[2]/div/div[1]/div/div[2]/div[3]/div/table/tbody/tr[1]/td[5]/div/a')
    const txt0 = await el0.getProperty('textContent');
    const btc = await txt0.jsonValue();

    const [el1] = await page.$x('//*[@id="__next"]/div[1]/div[2]/div/div[1]/div/div[2]/div[3]/div/table/tbody/tr[2]/td[5]/div/a')
    const txt1 = await el1.getProperty('textContent');
    const eth = await txt1.jsonValue();

    const [el2] = await page.$x('//*[@id="__next"]/div[1]/div[2]/div/div[1]/div/div[2]/div[3]/div/table/tbody/tr[17]/td[5]/div/a')
    const txt2 = await el2.getProperty('textContent');
    const doge = await txt2.jsonValue();

    const [el3] = await page.$x('//*[@id="__next"]/div[1]/div[2]/div/div[1]/div/div[2]/div[3]/div/table/tbody/tr[9]/td[5]/div/a')
    const txt3 = await el3.getProperty('textContent');
    const ltc = await txt3.jsonValue();

    const [el4] = await page.$x('//*[@id="__next"]/div[1]/div[2]/div/div[1]/div/div[2]/div[3]/div/table/tbody/tr[3]/td[5]/div/a')
    const txt4 = await el4.getProperty('textContent');
    const ada = await txt4.jsonValue();

    const [el5] = await page.$x('//*[@id="__next"]/div[1]/div[2]/div/div[1]/div/div[2]/div[3]/div/table/tbody/tr[4]/td[5]/div/a')
    const txt5 = await el5.getProperty('textContent');
    const bnb = await txt5.jsonValue();

    browser.close();
    return {btc, eth, doge, ltc, ada, bnb};
};


exports.scrapeProduct = scrapeProduct;
