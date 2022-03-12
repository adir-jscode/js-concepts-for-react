const addToLocalStorage = () => {
    const inputName = document.getElementById('name-input');
    const nameValue = inputName.value;
    console.log(nameValue);

    const inputEmail = document.getElementById('email-input');
    const emailValue = inputEmail.value;
    console.log(emailValue);

    if (nameValue && emailValue) {
        localStorage.setItem(nameValue, emailValue);
    }
    inputName.value = '';
    inputEmail.value = '';
}