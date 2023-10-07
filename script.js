const videoPlayer = document.getElementById('videoPlayer');
const videoContainer = document.querySelector('.video-container');

videoPlayer.addEventListener('play', () => {
    console.log('Reproduciendo');
});

videoPlayer.addEventListener('pause', () => {
    console.log('Pausado');
});

videoPlayer.addEventListener('ended', () => {
    console.log('Terminado');
});

videoContainer.addEventListener('click', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
});
