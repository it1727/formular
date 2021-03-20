$(function () {

    let Crypto = {
        btc: 0,
        eth: 0,
        doge: 0,
        ltc: 0,
        ada: 0,
        bnb: 0,
        uprava: function(kurz){
            if (kurz.length > 7) {
                kurz = kurz.substr(1).split(',');
                kurz = parseFloat(kurz[0] + kurz[1]);
            }
            else {
                kurz = kurz.substr(1)
            }
            return kurz;
        }
    }


    $.ajax({
        type: "GET",
        url: window.location + "api/coins",
        success: function (result) {
            console.log(result);
            Crypto.btc = Crypto.uprava(result.btc);
            Crypto.eth = Crypto.uprava(result.eth);
            Crypto.doge = Crypto.uprava(result.doge);
            Crypto.ltc = Crypto.uprava(result.ltc);
            Crypto.ada = Crypto.uprava(result.ada);
            Crypto.bnb = Crypto.uprava(result.bnb);
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
