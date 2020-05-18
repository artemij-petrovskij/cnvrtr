

function formatNumber(value) {  
    return parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ").replace('.', '.');
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
     
      
        inputUSD.value = formatNumber(e.target.value / usd)
        inputEUR.value = formatNumber(e.target.value / eur)
        inputRUB.value = formatNumber(e.target.value / rub * 100)
    })

    inputUSD.addEventListener('input',(e)=>{
  
        inputBLR.value = formatNumber(e.target.value * usd)
        inputEUR.value = formatNumber(usd / eur * e.target.value )
        inputRUB.value = formatNumber(usd / rub * e.target.value *100 )
    })

    inputEUR.addEventListener('input',(e)=>{
    
        inputBLR.value = formatNumber(e.target.value * eur)
        inputUSD.value = formatNumber(eur / usd * e.target.value )
        inputRUB.value = formatNumber(eur / rub * e.target.value *100 )
    })
    inputRUB.addEventListener('input',(e)=>{

        inputBLR.value = formatNumber(e.target.value * rub / 100)
        inputUSD.value = formatNumber(rub / usd * e.target.value / 100)
        inputEUR.value = formatNumber(rub / eur * e.target.value / 100)
    })
}