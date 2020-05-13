function numberCheck(e) {  
    e.target.value = e.target.value.replace(/[^\d.]/g, '')
}

function convert(USD, EUR, RUB) {

    const usd = USD
    const eur = EUR
    const rub = RUB

    let inputBLR = document.querySelector('#blr')
    let inputUSD = document.querySelector('#usd')
    let inputEUR = document.querySelector('#eur')
    let inputRUB = document.querySelector('#rub')

    inputBLR.addEventListener('input',(e)=>{
        numberCheck(e)
        inputUSD.value = (e.target.value / usd).toFixed(2)
        inputEUR.value = (e.target.value / eur).toFixed(2)
        inputRUB.value = (e.target.value / rub * 100).toFixed(2)
    })

    inputUSD.addEventListener('input',(e)=>{
        numberCheck(e)
        inputBLR.value = (e.target.value * usd).toFixed(2)
        inputEUR.value = (usd / eur * e.target.value ).toFixed(2)
        inputRUB.value = (usd / rub * e.target.value *100 ).toFixed(2)
    })

    inputEUR.addEventListener('input',(e)=>{
        numberCheck(e)
        inputBLR.value = (e.target.value * eur).toFixed(2)
        inputUSD.value = (eur / usd * e.target.value ).toFixed(2)
        inputRUB.value = (eur / rub * e.target.value *100 ).toFixed(2)
    })
    inputRUB.addEventListener('input',(e)=>{
        numberCheck(e)
        inputBLR.value = (e.target.value * rub / 100).toFixed(2)
        inputUSD.value = (rub / usd * e.target.value / 100).toFixed(2)
        inputEUR.value = (rub / eur * e.target.value / 100).toFixed(2)
    })
}