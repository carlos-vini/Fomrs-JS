const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
let regex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(emailInput.value === ""){
        alert("Por favor, insira um e-mail válido!")
        return
    }
})

form.addEventListener("submit", (password) => {
    password.preventDefault();

    if(regex.test(passwordInput.value)){
        alert("Logado")
        return
    }
    else{
        alert("Insira uma senha válida!")
        return
    }
})