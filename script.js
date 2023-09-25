const inputEmail = document.getElementById('email-input');
const labelEmail = document.querySelector('.label-email');
const inputSenha = document.getElementById('senha-input');
const labelSenha = document.querySelector('.label-senha');
const errorMessageEmail = document.querySelector('.error-message-email');
const errorMessageSenha = document.querySelector('.error-message-senha');
const hiddenPassOption = document.querySelector('.hidden-pass');



inputEmail.addEventListener('click', (e) => {
    e.preventDefault();
});

inputEmail.addEventListener('blur', () => {
    if (inputEmail.value.length === 0) {
        inputEmail.style.borderBottom = '2px solid #e87c03';
        errorMessageEmail.style.display = 'block';
        errorMessageEmail.innerHTML = 'Informe um email ou número de telefone válido.';
        errorMessageEmail.style.color = '#e87c03';
    } else if (inputEmail.value.length <= 4) {
        inputEmail.style.borderBottom = '2px solid #e87c03';
        errorMessageEmail.style.display = 'block';
        errorMessageEmail.innerHTML = 'Informe um email válido.';
        errorMessageEmail.style.color = '#e87c03';
    } else {
        inputEmail.style.borderBottom = 'none';
        errorMessageEmail.style.display = 'none';
    }
});

inputEmail.addEventListener('keyup', () => {
    if (inputEmail.value.length === 0) {
        inputEmail.style.borderBottom = '2px solid #e87c03';
        errorMessageEmail.style.display = 'block';
        errorMessageEmail.innerHTML = 'Informe um email ou número de telefone válido.';
        errorMessageEmail.style.color = '#e87c03';
    } else if (inputEmail.value.length <= 4) {
        inputEmail.style.borderBottom = '2px solid #e87c03';
        errorMessageEmail.style.display = 'block';
        errorMessageEmail.innerHTML = 'Informe um email válido.';
        errorMessageEmail.style.color = '#e87c03';
    } else {
        inputEmail.style.borderBottom = 'none';
        errorMessageEmail.style.display = 'none';
    } if (inputEmail.value.length >= 1) {
        labelEmail.classList.add('effect');
    } else {
        labelEmail.classList.remove('effect');
    }
});



inputSenha.addEventListener('click', (e) => {
    e.preventDefault();
})

inputSenha.addEventListener('blur', () => {
    if (inputSenha.value.length < 4) {
        inputSenha.style.borderBottom = '2px solid #e87c03';
        errorMessageSenha.style.display = 'block';
        errorMessageSenha.innerHTML = 'A senha deve ter entre 4 e 60 caracteres.';
        errorMessageSenha.style.color = '#e87c03';
    } else {
        inputSenha.style.borderBottom = 'none';
        errorMessageSenha.style.display = 'none';
    }
});

inputSenha.addEventListener('keyup', () => {
    if (inputSenha.value.length >= 1) {
        labelSenha.classList.add('effectSenha');
    } else {
        labelSenha.classList.remove('effectSenha');
    } if (inputSenha.value.length < 4) {
        inputSenha.style.borderBottom = '2px solid #e87c03';
        errorMessageSenha.style.display = 'block';
        errorMessageSenha.innerHTML = 'A senha deve ter entre 4 e 60 caracteres.';
        errorMessageSenha.style.color = '#e87c03';
    } else {
        inputSenha.style.borderBottom = 'none';
        errorMessageSenha.style.display = 'none';
    }
});

function hiddenPassword() {
    inputSenha.focus();
    hiddenPassOption.classList.toggle('changeType');

    if (inputSenha.type === 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');
    }
}