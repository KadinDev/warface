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