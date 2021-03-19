$(function () {

    let Crypto = {
        btc: 0,
        eth: 0,
        doge: 0,
        ltc: 0,
        ada: 0,
        bnb: 0,
    }


    $.ajax({
        type: "GET",
        url: window.location + "api/coins",
        success: function (result) {
            console.log(result);
            if (result.btc.length > 7) {
                Crypto.btc = result.btc.substr(1).split(',');
                Crypto.btc = parseFloat(Crypto.btc[0] + Crypto.btc[1]);
            }
            else {
                Crypto.btc = result.btc.substr(1)
            }
            console.log(Crypto.btc);
            if (result.eth.length > 7) {
                Crypto.eth = result.eth.substr(1).split(',');
                Crypto.eth = parseFloat(Crypto.eth[0] + Crypto.eth[1]);
            }
            else {
                Crypto.eth = result.eth.substr(1)
            }
            console.log(Crypto.eth);
            if (result.doge.length > 7) {
                Crypto.doge = result.doge.substr(1).split(',');
                Crypto.doge = parseFloat(Crypto.doge[0] + Crypto.doge[1]);
            }
            else {
                Crypto.doge = result.doge.substr(1)
            }
            console.log(Crypto.doge);
            if (result.ltc.length > 7) {
                Crypto.ltc = result.ltc.substr(1).split(',');
                Crypto.ltc = parseFloat(Crypto.ltc[0] + Crypto.ltc[1]);
            }
            else {
                Crypto.ltc = result.ltc.substr(1)
            }
            console.log(Crypto.ltc);
            if (result.ada.length > 7) {
                Crypto.ada = result.ada.substr(1).split(',');
                Crypto.ada = parseFloat(Crypto.ada[0] + Crypto.ada[1]);
            }
            else {
                Crypto.ada = result.ada.substr(1)
            }
            console.log(Crypto.ada);
            if (result.bnb.length > 7) {
                Crypto.bnb = result.bnb.substr(1).split(',');
                Crypto.bnb = parseFloat(Crypto.bnb[0] + Crypto.bnb[1]);
            }
            else {
                Crypto.bnb = result.bnb.substr(1)
            }
            console.log(Crypto.bnb);
        },
        error: function (e) {
            console.log("ERROR: ", e);
        }
    });

    $('#vypocet').on('click', function () {
        let vystup = "Vaše portfolio má hodnotu = " + (Crypto.btc * $("#pBTC").val() + Crypto.eth * $("#pETH").val() + Crypto.doge * $("#pDOGE").val() + Crypto.ltc * $("#pLTC").val() + Crypto.ada * $("#pADA").val() + Crypto.bnb * $("#pBNB").val()) + " $";
        $('#vysledek').html(vystup);
    });

})
