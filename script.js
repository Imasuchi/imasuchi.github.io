const audioPlayer = document.getElementById('audio-player');
const prevBtn = document.getElementById('prev-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const nextBtn = document.getElementById('next-btn');

const songs = [
    { name: "From the Start", src: "From the Start.mp3" },
    { name: "The Bird Song", src: "The Bird Song.mp3" },
    { name: "Seventh Heaven", src: "Seventh Heaven.mp3" },
    { name: "Not Like Us", src: "Not Like Us.mp3" }
];

const controlsDiv = document.querySelector('.controls');

// If the shuffle button is missing, recreate and append it
if (!document.getElementById('shuffle-btn')) {
    const shuffleBtn = document.createElement('button');
    shuffleBtn.id = 'shuffle-btn';
    shuffleBtn.textContent = 'Shuffle';
    controlsDiv.appendChild(shuffleBtn);
}

let currentSongIndex = 0;

function loadSong(index) {
    audioPlayer.src = songs[index].src;
    audioPlayer.play();
}

function shuffleSong() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === currentSongIndex);
    currentSongIndex = randomIndex;
    loadSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
    loadSong(currentSongIndex);
}

function nextSong() {
    currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
    loadSong(currentSongIndex);
}

prevBtn.addEventListener('click', prevSong);
shuffleBtn.addEventListener('click', shuffleSong);
nextBtn.addEventListener('click', nextSong);
