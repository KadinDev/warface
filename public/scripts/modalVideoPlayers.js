const open_modal = document.querySelectorAll('.iframe i');
const modal_video = document.querySelector('.modal-players');
const close_modal = modal_video.querySelector('i');


for (let open of open_modal){
    open.addEventListener('click', ()=> {
        modal_video.classList.add('active');
        const src = open.getAttribute('id');
        modal_video.querySelector('iframe').src = `https://www.youtube.com/embed/${src}`;
    })

    close_modal.addEventListener('click', ()=>{
        modal_video.classList.remove('active');
        modal_video.querySelector('iframe').src = "";
    })
}