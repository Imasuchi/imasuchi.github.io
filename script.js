const audioPlayer = document.getElementById('audio-player');
const prevBtn = document.getElementById('prev-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const nextBtn = document.getElementById('next-btn');

const songs = [
    { name: "Song 1", src: "songs/song1.mp3" },
    { name: "Song 2", src: "songs/song2.mp3" },
    { name: "Song 3", src: "songs/song3.mp3" }
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

// Load the first song
loadSong(currentSongIndex);
