const playBtn = document.getElementById('play-toggle');
const playIcon = document.getElementById('play-icon');
const albumArt = document.querySelector('.album-art');
const progressBar = document.getElementById('progress');

let isPlaying = false;

playBtn.addEventListener('click', () => {
    if (!isPlaying) {
        // Switch to Pause
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
        albumArt.classList.add('playing');
        isPlaying = true;
    } else {
        // Switch to Play
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        albumArt.classList.remove('playing');
        isPlaying = false;
    }
});

// Smooth Progress bar interaction
progressBar.addEventListener('input', (e) => {
    const value = e.target.value;
    progressBar.style.background = `linear-gradient(to right, #ff4d5a ${value}%, rgba(255, 255, 255, 0.1) ${value}%)`;
});