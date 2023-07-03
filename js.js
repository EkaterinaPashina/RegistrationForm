const password = document.getElementById('password');
const passwordRepeat = document.getElementById('passwordRepeat');

function checkPasswords() {
    if (!password.value === passwordRepeat.value) {
        document.getElementById("passwordRepeat-error").innerText = "Пароли не совпадают.";
    } else {
        document.getElementById("passwordRepeat-error").innerText = '';
    }
};

const form = document.forms.user;
const arrayForms = Array.from(form.elements);
arrayForms.forEach((element) => {
    const parent = element.parentNode;
    const errorDiv = parent.querySelector('.error-message');
    errorDiv.innerHTML += element.validationMessage;

    element.addEventListener('change', () => {
        let validity = element.validity;
        if (validity.valueMissing) {
            document.getElementById(`${element.id}-error`).innerText = element.validationMessage;
        } else {
            document.getElementById(`${element.id}-error`).innerText = '';
        }

        if (validity.patternMismatch) {
            document.getElementById(`${element.id}-error`).innerText = element.validationMessage;
        } else {
            document.getElementById(`${element.id}-error`).innerText = '';
        }

        if (validity.rangeOverflow) {
            document.getElementById(`${element.id}-error`).innerText = element.validationMessage;
        } else {
            document.getElementById(`${element.id}-error`).innerText = '';
        }

        if (validity.rangeUnderflow) {
            document.getElementById(`${element.id}-error`).innerText = element.validationMessage;
        } else {
            document.getElementById(`${element.id}-error`).innerText = '';
        }

        if (validity.tooLong) {
            document.getElementById(`${element.id}-error`).innerText = element.validationMessage;
        } else {
            document.getElementById(`${element.id}-error`).innerText = '';
        }

        if (validity.tooShort) {
            document.getElementById(`${element.id}-error`).innerText = element.validationMessage;
        } else {
            document.getElementById(`${element.id}-error`).innerText = '';
        }
        if (form.elements.email.getAttribute('type') === "email") {
            const mailFormat = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
            if (form.elements.email.value === "") {
                document.getElementById("email-error").innerText = 'Заполните это поле.';
            } else
            if (!mailFormat.test(form.elements.email.value)) {
                document.getElementById("email-error").innerText = 'Введите email в правильном формате';
            } else {
                document.getElementById("email-error").innerHTML = '';
            }
        }
        if (form.elements.email.getAttribute('type') === "number") {
            console.log(form.elements.age.value);
            if (form.elements.age.value === "") {
                document.getElementById("email-error").innerText = 'Заполните это поле.';
            } else if (Number(form.elements.age.value) < 1) {
                document.getElementById("email-error").innerText = 'Введите значение больше 1';
            } else {
                document.getElementById("email-error").innerHTML = '';
            }
        }
    })
    if (element.validity) {
        console.log(element.value);
    }
});

form.addEventListener('input', (event) => {
    checkPasswords();
});