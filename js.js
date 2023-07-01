const form = document.forms.user;

function checkCheckbox() {
    const manCB = document.getElementById("man");
    const womanCB = document.getElementById("woman");
    if (!manCB.checked && !womanCB.checked) {
        document.getElementById("sex-error").innerText = "Выберите ваш пол.";
    } else {
        console.log(user[3].value);
    }
};

const select = document.querySelector('select');

function checkSelect() {
    if (select.value === "") {
        document.getElementById("profession-error").innerText = "Выберите вашу профессию.";
    } else {
        console.log(select.value);
    }
};

const age = document.getElementById('age');

function checkAge() {
    if (age.value.length === 0) {
        document.getElementById("age-error").innerText = "Введите ваш возраст.";
    } else if (age.value > 100) {
        document.getElementById("age-error").innerText = "Вы указали слишком большой возраст.";
    }
};

const password = document.getElementById('password');
const passwordRepeat = document.getElementById('passwordRepeat');

function checkPasswords() {
    if (password.value === passwordRepeat.value) {
        console.log(password.value);
    } else {
        document.getElementById("passwordRepeat-error").innerText = "Пароли не совпадают.";
    }
}

let inputs = document.querySelectorAll(".errored-message");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    checkCheckbox();
    checkSelect();
    checkAge();

    for (let input of inputs) {
        let inputId = input.id;
        document.getElementById(`${inputId}-error`).innerText = input.validationMessage;
        console.log(input.value);
    }
    checkPasswords();
});