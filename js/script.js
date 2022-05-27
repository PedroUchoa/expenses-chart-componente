let jsonObj = [
    { "day": "mon", "amount": 17.45 },
    { "day": "tue", "amount": 34.91 },
    { "day": "wed", "amount": 52.36 },
    { "day": "thu", "amount": 31.07 },
    { "day": "fri", "amount": 23.39 },
    { "day": "sat", "amount": 43.28 },
    { "day": "sun", "amount": 25.48 }]
const menuDiv = document.querySelector("#menu")
menuDiv.addEventListener("mouseover", (event) => {
    let value = event.target.parentNode.firstChild.nextSibling //Acessando a primeira div do Li
    let aux = event.target.dataset.valor
    if(event.target.hasAttribute('data-valor')){
        value.style.backgroundColor = "black"
        value.innerHTML = jsonObj[aux].amount
    }
})

menuDiv.addEventListener("mouseout", (event) => {
    let value = event.target.parentNode.firstChild.nextSibling
    if (event.target.hasAttribute('data-valor')) {
            value.style.backgroundColor = ""
    }
})