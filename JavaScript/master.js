let emailInput = document.querySelector("input[type=text]")
let submitBtn = document.querySelector("input[type=submit]")


let emailRegExp = /[\w-\.]+@[\w-]+\.[\w-]{2,4}/ig

submitBtn.addEventListener("click" , (e) => {
    if (emailInput.value === "") {
        e.preventDefault()
        emailInput.classList.add("error")
        emailInput.parentElement.classList.add("error")
    }
    if (emailInput.value.match(emailRegExp) === null) {
        e.preventDefault()
        emailInput.classList.add("error")
        emailInput.parentElement.classList.add("error")
    }
})