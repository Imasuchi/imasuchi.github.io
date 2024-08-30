const audioPlayer = document.getElementById('audio-player');
const prevBtn = document.getElementById('prev-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const nextBtn = document.getElementById('next-btn');

const songs = [
    { name: "From the Start", src: "songs/From the Start.mp3" },
    { name: "The Bird Song", src: "songs/The Bird Song.mp3" },
    { name: "Seventh Heaven", src: "songs/Seventh Heaven.mp3" },
    { name: "Not Like Us", src: "songs/Not Like Us.mp3" }
];

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

// Load the first song on page load
loadSong(currentSongIndex);
