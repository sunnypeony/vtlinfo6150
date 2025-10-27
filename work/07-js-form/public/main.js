"use strict";
(function () {

    let isNameElInvalid = false;
    const nameEl = document.querySelector('.register__name');
    nameEl.addEventListener('blur', (event) => {
        if (event.target.value === "") {
            isNameElInvalid = true;
            console.log(`Name is Empty! The value is: ${isNameElInvalid}`);
            document.querySelector('.register__name-error').innerText = "Sorry!You must input you name!";
            document.querySelector('.register__name-label').classList.add('register__name-label--invalid');
        } else {
            isNameElInvalid = false;
            document.querySelector('.register__name-error').innerText = "";
            document.querySelector('.register__name-label').classList.remove('register__name-label--invalid');
        }
    });

    nameEl.addEventListener('input', (event) => {
        document.querySelector('.register__name-input').innerText = `Your input name is: ${event.target.value}`;
        //event.preventDefault();//prevent the error message from appearing
    });

    let stringEmail = "";
    let isEmailInvalid = false;
    const emailEl = document.querySelector('.register__email');
    emailEl.addEventListener('blur', (event) => {
        stringEmail = event.target.value;
        console.log(`The input email is: ${stringEmail}`);
        if (event.target.value === "") {
            isEmailInvalid = true;
            console.log(`Email is Empty! The value is: ${isEmailInvalid}`);
            document.querySelector('.register__email-error').innerText = "Sorry!You must input you email!";
            document.querySelector('.register__email-label').classList.add('register__email-label--invalid');
        } else {
            isEmailInvalid = false;
            document.querySelector('.register__email-error').innerText = "";
            document.querySelector('.register__email-label').classList.remove('register__email-label--invalid');
        }
    });

    emailEl.addEventListener('input', (event) => {
        document.querySelector('.register__email-input').innerText = `Your input email is: ${event.target.value}`;
        //event.preventDefault();//prevent the error message from appearing
    });

    let stringConfrimEmail = "";
    let isConfirmPassed = true;
    const confirm_emailEl = document.querySelector('.register__confirm_email');
    confirm_emailEl.addEventListener('blur', (event) => {
        stringConfrimEmail = event.target.value;
        console.log(`The confirmed email is: ${stringConfrimEmail}`);
        if (stringConfrimEmail !== stringEmail) {
            console.log(`Oops! The email should be consistent! Please check your input!`);
            isConfirmPassed = false;
            document.querySelector('.register__confirm_email-error').innerText = "Sorry! Your confirmed email should be consistent with email!";
            document.querySelector('.register__confirm_email-label').classList.add('register__cinfirm_email-label--invalid');
        } else {
            isConfirmPassed = true;
            document.querySelector('.register__confirm_email-error').innerText = "";
            document.querySelector('.register__confirm_email-label').classList.remove('register__confirm_email-label--invalid');

        }
    })

    confirm_emailEl.addEventListener('input', (event) => {
        document.querySelector('.register__confirm_email-input').innerText = `Your confirm email is: ${event.target.value}`;
        //event.preventDefault();//prevent the error message from appearing
    });

    let isFormInvalid = false;
    const formEl = document.querySelector('.register');
    formEl.addEventListener('submit', (event) => {
        document.querySelectorAll('.register__name, .register__email').forEach(
            node => {
                if (node.value === "") {
                    isFormInvalid = true;
                    console.log("Please fill in the required fileds before submit!");
                    event.preventDefault();
                } else {
                    isFormInvalid = false;
                }
            }
        );

        document.querySelectorAll('.register__name-error, .register__email-error').forEach(
            node => node.innerText = ""
        );
        document.querySelectorAll('.register__name-label--invalid').forEach(
            node => node.classList.remove('register__name-label--invalid')
        );


        if (isNameElInvalid || isEmailInvalid || !isConfirmPassed) {
            isFormInvalid = true;
            console.log(`Form is Invalid! the value is: ${isFormInvalid}`);
            console.log(`The Name empty value is: ${isNameElInvalid}; The Email empty value is: ${isEmailInvalid}; the confirm email status: ${isConfirmPassed}`);
        }
        if (isFormInvalid) {
            console.log("Oops! Please check you input!!!");
            event.preventDefault();//prevent the submit
        } else {
            console.log("Congrats! Your input are all right! Let's submit!");

        }

    })

})();