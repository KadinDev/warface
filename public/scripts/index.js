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

// MODAL CLASSES PLAYERS
const iframe = document.querySelectorAll('.videos-container .iframe');
const video_classesPlayers = document.querySelector('.modal-videos');
const close_videoClassesPlayers = video_classesPlayers.querySelector('i');

for ( let video of iframe ) {
    video.addEventListener('click', () => {
        video_classesPlayers.classList.add('active');
        const title = video.querySelector('h1').innerHTML;
        const about = video.querySelector('p').innerHTML;

        const src = video.getAttribute('id');

        video_classesPlayers.querySelector('h1').innerHTML = title;
        video_classesPlayers.querySelector('p').innerHTML = about;

        video_classesPlayers.querySelector('iframe').src = `https://www.youtube.com/embed/${src}`;
    });

    close_videoClassesPlayers.addEventListener('click', () => {
        video_classesPlayers.classList.remove('active');
        video_classesPlayers.querySelector('iframe').src = "";
    })
}


