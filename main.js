"use strict";
let modal = document.querySelector('.modal'),
modalOverlay = document.querySelector('.modal-guts')
let closeButton = document.querySelector('#close-button')
let registrButton = document.querySelector(".Registr");
let authButton = document.querySelector(".Auth");

let registrModal = document.querySelector("#RegistrModal");
let authModal = document.querySelector("#AuthModal");

if(closeButton != null){
        closeButton.addEventListener("click", function(){
        modal.classList.toggle("closed");
        modalOverlay.classList.toggle("closed");
    }); 
}
if(registrButton != null){
    registrButton.addEventListener("click", function(){
        modal.classList.toggle("closed");
        console.log(modal);
        modalOverlay.classList.toggle("closed");
    });
}
if(authButton != null){
    authButton.addEventListener("click", function(){
        modal.classList.toggle("closed");
        console.log(modal);
        modalOverlay.classList.toggle("closed");
    });
}
if(registrModal != null){
    registrModal.addEventListener("click", function(){
        let pass = prompt("Введите пароль администратора", );
        if (pass == '123456789'){
            alert("Регистрация прошла успешно")
        }
    })
}
$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header_row').toggleClass('open-menu');
    });
});

let inpSearch = document.querySelector(".search_input");
if(inpSearch != null){
    inpSearch.addEventListener("keyup", function(){
        const cards = document.querySelectorAll(".row__table");
        inpSearch = document.querySelector(".search_input");
        let name = inpSearch.value;
        if(name != null){
            cards.forEach(function(item){
                let cardTitle = item.querySelector(".fio").textContent;
                if(!((cardTitle.toLowerCase()).includes(name.toLowerCase()))){
                    item.classList.add("hidden");
                }else{
                    item.classList.remove("hidden");
                }
            })
        } 
    })
}