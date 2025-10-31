"use strict";
(function () {

    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('#nav-menu');

    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!expanded));
        menu.hidden = expanded;
        menu.classList.toggle('open', !expanded);
    });

    const modalEl = document.querySelector('.modal');
    //const openEl = document.querySelector('.subscribe');
    const registerEl = document.querySelector('.register-button');
    const closeEl = document.querySelector('.close');

    document.querySelectorAll('.subscribe').forEach(
        node => node.addEventListener('click', () => modalEl.showModal())
    );

    //openEl.addEventListener('click', () => modalEl.showModal());
    closeEl.addEventListener('click', () => modalEl.close());

    const emailEl = document.querySelector('.register__email');
    const confirmEmailEl = document.querySelector('.register__confirm__email');
    const emailError = document.querySelector('.register__email-error');
    const confirmEmailError = document.querySelector('.register__confirm__email-error');


    let isEmailInvalid = false;
    let stringEmail = "";
    emailEl.addEventListener('change', (event) => {
        stringEmail = event.target.value.trim();

        console.log(`The input email is: ${stringEmail}`);

        if (stringEmail === "") {
            isEmailInvalid = true;
            emailError.textContent = "This field is required";
            emailEl.classList.add('register__email--invalid');
        } else if (!stringEmail.includes('@')) {
            isEmailInvalid = true;
            console.log(`Email is Empty! The value is: ${isEmailInvalid}`);
            emailError.textContent = "This field be a valid email address including a @";
            emailEl.classList.add('register__email--invalid');
        } else {
            isEmailInvalid = false;
            emailError.textContent = "";
            emailEl.classList.remove('register__email--invalid');
        }
    });

    let isConfirmEmailInvalid = false;
    confirmEmailEl.addEventListener('change', (event) => {
        const value = event.target.value.trim();
        console.log(`The input email is: ${value}`);

        if (value !== stringEmail) {
            isConfirmEmailInvalid = true;
            console.log(`The input email is: ${stringEmail}`);
            confirmEmailError.textContent = "This field must match the provided email address";
            confirmEmailEl.classList.add('register__email--invalid');
        } else {
            isConfirmEmailInvalid = false;
            confirmEmailError.textContent = "";
            confirmEmailEl.classList.remove('register__email--invalid');
        }
    });


    registerEl.addEventListener('click', (e) => {
        e.preventDefault();
        let isFormInvalid = false;

        if (emailEl.value.trim() === "") {
            emailError.textContent = "This field is required";
            emailEl.classList.add('register__email--invalid');
            isFormInvalid = true;
        }

        if (isEmailInvalid || isConfirmEmailInvalid || isFormInvalid) {
            isFormInvalid = true;
        }

        if (!isFormInvalid) {
            console.log("Form valid — can submit or close dialog");
            modalEl.close();
            formEl.submit();
        }
    });


    //let isFormInvalid = false;
    const formEl = document.querySelector('.register');
    formEl.addEventListener('submit', (event) => {

        let isFormInvalid = false;

        if (emailEl.value.trim() === "") {
            event.preventDefault();
            console.log(`Email is Empty! The value is: ${isEmailInvalid}`);
            emailError.textContent = "This field is required";
            emailEl.classList.add('register__email--invalid');
            isEmailInvalid = true;
        }

        if (confirmEmailEl.value.trim() === "") {
            event.preventDefault();
            console.log(`Email is Empty! The value is: ${isEmailInvalid}`);
            confirmEmailError.textContent = "This field is required";
            confirmEmailEl.classList.add('register__email--invalid');
            isEmailInvalid = true;
        }

        if (!isFormInvalid) {
            emailError.textContent = "";
            confirmEmailError.textContent = "";
        }
    })


})();