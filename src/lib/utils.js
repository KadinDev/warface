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

        if (!value.match(emailFormat))
        error = "Email inválido"

        return {
            error,
            value,
        }
    }
}