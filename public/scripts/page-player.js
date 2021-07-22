const open_modal = document.querySelectorAll('.box-card i');
const modal = document.querySelector('.modal-video-user');
const background_modal = document.querySelector('.background-page');
const close_modal = document.querySelector('#closet-modal');

for (let open of open_modal){
    open.addEventListener('click', () => {
        modal.classList.add('active');
        background_modal.classList.add('active');
        const id = open.getAttribute('id');
        modal.querySelector('iframe').src = `https://www.youtube.com/embed/${id}`;
    })

    close_modal.addEventListener('click', ()=>{
        modal.classList.remove('active');
        background_modal.classList.remove('active');
        modal.querySelector('iframe').src = "";
    })

}
