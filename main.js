let modal = document.querySelector('.modal'),
modalOverlay = document.querySelector('.modal-guts')
let closeButton = document.querySelector('#close-button')
let registrButton = document.querySelector(".Registr");
let authButton = document.querySelector(".Auth");

let registrModal = document.querySelector("#RegistrModal");
let authModal = document.querySelector("#AuthModal");

closeButton.addEventListener("click", function(){
 modal.classList.toggle("closed");
 console.log(modal);
 modalOverlay.classList.toggle("closed");
}); 

registrButton.addEventListener("click", function(){
 modal.classList.toggle("closed");
 console.log(modal);
 modalOverlay.classList.toggle("closed");
});
authButton.addEventListener("click", function(){
    modal.classList.toggle("closed");
    console.log(modal);
    modalOverlay.classList.toggle("closed");
});
registrModal.addEventListener("click", function(){
    let pass = prompt("Введите пароль администратора", );
    if (pass == '123456789'){
        alert("Регистрация прошла успешно")
    }
})