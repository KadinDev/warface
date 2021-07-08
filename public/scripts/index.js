const audio = document.querySelector('audio');
const span_audio = document.querySelector('.box-audio span');

const play = '<i class="fa fa-play-circle"></i>';
const pause = '<i class="fa fa-pause-circle"></i>';

span_audio.innerHTML = play

span_audio.addEventListener('click', ()=>{
    audio.volume = 0.5;
    audio.play();
    
    if (span_audio.innerHTML === play) {
        span_audio.innerHTML = pause;
    } else {
        span_audio.innerHTML = play;
        audio.pause();
    }
    
    span_audio.classList.toggle('active')
})



