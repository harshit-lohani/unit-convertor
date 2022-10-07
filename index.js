/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204



window.onload=function(){


    const convertBtn = document.getElementById("convert-btn")
    const inputEl = document.getElementById("input-el")


    inputEl.addEventListener("click", function() {
        inputEl.select()
    })

    convertBtn.addEventListener("click", function() {

        const input = Number(inputEl.value)
        
        const resFeet = (input*meterToFeet).toFixed(3)
        const resMeter = (input/meterToFeet).toFixed(3)
    
        const resGallon = (input*literToGallon).toFixed(3)
        const resLiter = (input/literToGallon).toFixed(3)
    
        const resPound = (input*kilogramToPound).toFixed(3)
        const resKilogram = (input/kilogramToPound).toFixed(3)
    
        resultMF = `${input} meters = ${resFeet} feet | ${input} feet = ${resMeter} meters`
        resultLG = `${input} liters = ${resGallon} gallons | ${input} gallons = ${resLiter} liters`
        resultKP = `${input} kilos = ${resPound} pounds | ${input} pounds = ${resKilogram} kilos`
    
        document.getElementById("mf-el").innerText = resultMF
        document.getElementById("lg-el").innerText = resultLG
        document.getElementById("kp-el").innerText = resultKP
    })
}



