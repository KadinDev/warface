const button_register = document.getElementById('go-for-register');
const button_login = document.getElementById('back-for-login');
const form_login = document.querySelector('.login');
const form_register = document.querySelector('.register');

button_register.addEventListener('click', ()=>{
    form_login.classList.add('active');
    form_register.classList.remove('active');
});

button_login.addEventListener('click', ()=>{
    form_login.classList.remove('active');
    form_register.classList.add('active');
})

/* IMAGE INPUT REGISTER */
function readImage(){
    if (this.files && this.files[0]){
        const file = new FileReader();
        file.onload = function(e) {
            document.getElementById("preview").src = e.target.result;
        };
        file.readAsDataURL(this.files[0]);
    }
}
document.getElementById("img-input").addEventListener('change', readImage, false);
/* END IMAGE INPUT REGISTER */


// VALIDAÇÃO DE EMAIL
const validate = {
    apply( input, func ){
    
        validate.clearError(input);
    
        let results = validate[func](input.value)
        input.value = results.value

        if ( results.error )
    
        validate.displayError(input, results.error)
    },

    displayError(input, error) {
        const div = document.createElement('div');
        div.classList.add('error');
        div.innerHTML = error;

        input.parentNode.appendChild(div);
        input.focus();
    },

    clearError(input) {
        const errorDiv = input.parentNode.querySelector('div');
        if (errorDiv) {
            errorDiv.remove();
        }
    },
    
    isEmail(value) {
        let error = null;

        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!value.match(emailFormat)) {
            error = "invalid email"
        } else {
        } 

        return {
            error,
            value,
        }
    }
}
/* END VALIDATE */


/* MODAL RECOVER PASSWORD */
const active_modal = document.querySelector('#active-modal');
const modal = document.querySelector('.modal');
const close_modal = modal.querySelector('i');

active_modal.addEventListener('click', () => {
    modal.classList.remove('active');
    close_modal.onclick = () => {
        modal.classList.add('active');
    }
})
/* END MODAL */