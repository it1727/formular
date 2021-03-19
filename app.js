const express = require('express');
const scraper = require('./scraper');
const app = express()
const port = 3000

app.use(express.static('public'));
app.get('/api/coins', (req, res) => {
    scraper.scrapeProduct('https://coinmarketcap.com/all/views/all')
    .then(function(result) {
       res.send(result);
    }); 
});


app.listen(port, () => console.info(`Listening on port ${port}`));