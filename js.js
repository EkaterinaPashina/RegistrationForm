const form = document.forms.user;
let inputs = document.querySelectorAll("input");
let selects = document.querySelectorAll("select");

form.addEventListener('submit', function (event) {
    event.preventDefault();
    for (let input of inputs) {
        let inputid = input.id;
        document.getElementById(`${inputid}-error`).innerText = input.validationMessage;
    }
    for (select of selects) {
        let selectid = select.id;
        document.getElementById(`${selectid}-error`).innerText = select.validationMessage;
    }

});