$(function(){
    /* Objekt v JS*/
    let Energie = {
        /* Atributy objektu */
        prikon: 100,
        jednotka: 'W',
        cena: 4.10,
        hodiny: 24,
        doba: 'den',
        /* Metody objektu */
        hodinyZaRok: function() {
            return this.hodiny * (this.doba == 'den' ? 365 : 365/7);
        },
        spotrebaZaRok: function() {
           return (this.prikon 
           * (this.jednotka == 'W' ? 0.001 : 1) 
           * this.hodinyZaRok()).toFixed(2);
        },
        naklady: function() {
            return Math.ceil(this.spotrebaZaRok() * this.cena);
        }
    }
    
    /* Test */
    Energie.prikon = 40;
    Energie.hodiny = 10;
    console.log(Energie.hodinyZaRok());
    console.log(Energie.spotrebaZaRok());
    console.log(Energie.naklady());
  
    /* Reakce na událost kliknutí na checkbox */
    $('#prumerna').on('click', function(){
        if (this.checked) {
            $('#cena').val('4.10');
            $('#cena').prop('disabled', true);
        } else {
            $('#cena').val('0.00');
            $('#cena').prop('disabled', false);
        }
    });

    /* Reakce na událost kliknutí na tlačítko Výpočet */
    $('#vypocet').on('click', function(){
        Energie.prikon = $('#prikon').val();
        Energie.hodiny = $('#hodiny').val();
        Energie.cena = $('#cena').val();
        Energie.jednotka = $('#jednotka').val();
        Energie.doba = $('#den').prop('checked') ? 'den' : 'tyden';
        let vystup = `Spotřeba elektřiny za rok = ${Energie.spotrebaZaRok()} kWh, náklady = ${Energie.naklady()} Kč`;
        $('#vysledek').html(vystup);
    });

    /* Alternativní řešení pouze pomocí JS */
    /* document.getElementById('vypocet').addEventListener('click', function(){
        Energie.prikon = document.getElementById('prikon').value;
        Energie.hodiny = document.getElementById('hodiny').value;
        Energie.cena = document.getElementById('cena').value;
        Energie.jednotka = document.getElementById('jednotka').value;
        Energie.doba = document.getElementById('den').checked ? 'den' : 'tyden';
        let vystup = `Spotřeba elektřiny za rok = ${Energie.spotrebaZaRok()} kWh, náklady = ${Energie.naklady()} Kč`;
        document.getElementById('vysledek').innerHTML = vystup;
    }); */

});




/*console.log("funguje")
const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el0] = await page.$x('//*[@id="__next"]/div[1]/div[2]/div/div[1]/div/div[2]/div[3]/div/table/tbody/tr[1]/td[5]/div/a')
    const txt0 = await el0.getProperty('textContent');
    const btc = await txt0.jsonValue();

    const [el1] = await page.$x('//*[@id="__next"]/div[1]/div[2]/div/div[1]/div/div[2]/div[3]/div/table/tbody/tr[2]/td[5]/div/a')
    const txt1 = await el1.getProperty('textContent');
    const eth = await txt1.jsonValue();

    const [el2] = await page.$x('//*[@id="__next"]/div[1]/div[2]/div/div[1]/div/div[2]/div[3]/div/table/tbody/tr[15]/td[5]/div/a')
    const txt2 = await el2.getProperty('textContent');
    const doge = await txt2.jsonValue();

    const [el3] = await page.$x('//*[@id="__next"]/div[1]/div[2]/div/div[1]/div/div[2]/div[3]/div/table/tbody/tr[9]/td[5]/div/a')
    const txt3 = await el3.getProperty('textContent');
    const ltc = await txt3.jsonValue();

    const [el4] = await page.$x('//*[@id="__next"]/div[1]/div[2]/div/div[1]/div/div[2]/div[3]/div/table/tbody/tr[5]/td[5]/div/a')
    const txt4 = await el4.getProperty('textContent');
    const ada = await txt4.jsonValue();

    const [el5] = await page.$x('//*[@id="__next"]/div[1]/div[2]/div/div[1]/div/div[2]/div[3]/div/table/tbody/tr[3]/td[5]/div/a')
    const txt5 = await el5.getProperty('textContent');
    const bnb = await txt5.jsonValue();

    console.log("funguje2");
    console.log({btc, eth, doge, ltc, ada, bnb});
    browser.close();
}

scrapeProduct('https://coinmarketcap.com/all/views/all');
console.log("funguje3")
console.log(puppeteer.btc);
*/
