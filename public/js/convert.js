

function formatNumber(value) {
    return parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ").replace('.', '.');
}

function ifNotNum(e) {  
   return e.target.value = e.target.value.replace(/[^\d,]/g, '');
}

function convert(USD, EUR, RUB, PLN) {

    const usd = USD
    const eur = EUR
    const rub = RUB
    const pln = PLN

    let inputBLR = document.querySelector('#blr')
    let inputUSD = document.querySelector('#usd')
    let inputEUR = document.querySelector('#eur')
    let inputRUB = document.querySelector('#rub')
    let inputPLN = document.querySelector('#pln')


    inputBLR.addEventListener('input', (e) => {
        ifNotNum(e)
        inputUSD.value = formatNumber(e.target.value / usd)
        inputEUR.value = formatNumber(e.target.value / eur)
        inputRUB.value = formatNumber(e.target.value / rub * 100)
        inputPLN.value = formatNumber(e.target.value / pln * 10)
    })

    inputUSD.addEventListener('input', (e) => {
        ifNotNum(e)
        inputBLR.value = formatNumber(e.target.value * usd)
        inputEUR.value = formatNumber(usd / eur * e.target.value)
        inputRUB.value = formatNumber(usd / rub * e.target.value * 100)
        inputPLN.value = formatNumber(usd / pln * e.target.value * 10)

    })

    inputEUR.addEventListener('input', (e) => {
        ifNotNum(e)
        inputBLR.value = formatNumber(e.target.value * eur)
        inputUSD.value = formatNumber(eur / usd * e.target.value)
        inputRUB.value = formatNumber(eur / rub * e.target.value * 100)
        inputPLN.value = formatNumber(eur / pln * e.target.value * 10)

    })

    inputRUB.addEventListener('input', (e) => {
        ifNotNum(e)
        inputBLR.value = formatNumber(e.target.value * rub / 100)
        inputUSD.value = formatNumber(rub / usd * e.target.value / 100)
        inputEUR.value = formatNumber(rub / eur * e.target.value / 100)
        inputPLN.value = formatNumber(rub / pln * e.target.value / 100 *10)

    })

    inputPLN.addEventListener('input', (e) => {
        ifNotNum(e)
        inputBLR.value = formatNumber(e.target.value * pln / 10)
        inputUSD.value = formatNumber(pln / usd * e.target.value / 10)
        inputEUR.value = formatNumber(pln / eur * e.target.value / 10)
        inputRUB.value = formatNumber(pln / rub * e.target.value * 10)
    })
}