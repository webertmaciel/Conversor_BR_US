let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";
function converter1(){
    let input = document.getElementById("valor");
    let valor = input.value;
    console.log(valor);
    fetch(url).then((res) => {
    return res.json()
    }).then((data) => {
        let rate1 = data.USDBRL.ask;
        console.log(rate1);
        let resultado1 = `${valor} DOLARES = ${(rate1 * valor)} em reais`; 
        document.getElementById("resultado1").innerHTML = resultado1;
        
    });
    fetch(url).then((res) => {
        return res.json()
        }).then((data) => {
            let rate2 = data.EURBRL.ask;
            console.log(rate2);
            let resultado2 = `${valor} EURO = ${(rate2 * valor)} em reais`; 
            document.getElementById("resultado2").innerHTML = resultado2;
            
        });
    fetch(url).then((res) => {
    return res.json()
    }).then((data) => {
        let rate3 = data.BTCBRL.ask;
        console.log(rate3);
        let resultado3 = `${valor} BITCOINS = ${(rate3 * valor)} em reais`; 
        document.getElementById("resultado3").innerHTML = resultado3;
        
    });
}
