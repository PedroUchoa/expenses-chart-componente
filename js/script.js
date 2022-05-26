let jsonObj = [
    { "day": "mon", "amount": 17.45 },
    { "day": "tue", "amount": 34.91 },
    { "day": "wed", "amount": 52.36 },
    { "day": "thu", "amount": 31.07 },
    { "day": "fri", "amount": 23.39 },
    { "day": "sat", "amount": 43.28 },
    { "day": "sun", "amount": 25.48 }]
const monAdd = document.querySelector(".mon-add")
const menuDiv = document.querySelector("#menu")
menuDiv.addEventListener("mouseover", (event) => {
    let value = event.target.parentNode.firstChild.nextSibling
    switch (event.target.id) {
        case "mon-div":
            value.style.backgroundColor = "black"
            value.innerHTML = jsonObj[0].amount
            break;
        case "tue-div":
            value.style.backgroundColor = "black"
            value.innerHTML = jsonObj[1].amount
            break
        case "wed-div":
            value.style.backgroundColor = "black"
            value.innerHTML = jsonObj[2].amount
            break
        case "thu-div":
            value.style.backgroundColor = "black"
            value.innerHTML = jsonObj[3].amount
            break
        case "fri-div":
            value.style.backgroundColor = "black"
            value.innerHTML = jsonObj[4].amount
            break
        case "sat-div":
            value.style.backgroundColor = "black"
            value.innerHTML = jsonObj[5].amount
            break
        case "sun-div":
            value.style.backgroundColor = "black"
            value.innerHTML = jsonObj[6].amount
            break
        default:
            break;
    }
})

menuDiv.addEventListener("mouseout", (event) => {
    let value = event.target.parentNode.firstChild.nextSibling
    const evento = event.target.className
    if (evento == "show" || evento == "wed-show") {
            value.style.backgroundColor = ""
    }
})