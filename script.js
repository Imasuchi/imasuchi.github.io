const audioPlayer = document.getElementById('audio-player');
const prevBtn = document.getElementById('prev-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const nextBtn = document.getElementById('next-btn');
const spinImage = document.getElementById('spin-image');

const songs = [
    { name: "From the Start", src: "From the Start.mp3", img: "from-the-start.jpg" },
    { name: "The Bird Song", src: "The Bird Song.mp3", img: "the-bird-song.jpg" },
    { name: "Seventh Heaven", src: "Seventh Heaven.mp3", img: "seventh-heaven.jpg" },
    { name: "Not Like Us", src: "Not Like Us.mp3", img: "not-like-us.jpg" },
    { name: "Mimis Delivery Service", src: "Mimis Delivery Service.mp3", img: "mimis-delivery-service.jpg" },
    { name: "Vacancy!", src: "Vacancy!.mp3", img: "vacancy.jpg" },
    { name: "Pointless relations", src: "Pointless relations.mp3", img: "pointless-relations.jpg" },
    { name: "I WANNA BE", src: "I WANNA BE.mp3", img: "i-wanna-be.jpg" },
    { name: "Come tell me the real way! (feat. Taiketsu)", src "Come tell me the real way! (feat. Taiketsu).mp3", img: "Come-tell-me-the-real-way!-(feat.-Taiketsu).jpg" }
];

let currentSongIndex = 0;
let isShuffleMode = false; // Track whether shuffle mode is active

function loadSong(index) {
    audioPlayer.src = songs[index].src;
    document.getElementById('song-image').src = songs[index].img; // Update the image
    audioPlayer.play().catch(error => console.error('Playback error:', error));
}

function loadSong(index) {
    audioPlayer.src = songs[index].src;
    audioPlayer.play().catch(error => console.error('Playback error:', error));
}

function shuffleSong() {
    isShuffleMode = true; // Activate shuffle mode
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === currentSongIndex);
    currentSongIndex = randomIndex;
    loadSong(currentSongIndex);
}

function prevSong() {
    if (isShuffleMode) {
        shuffleSong();
    } else {
        currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
        loadSong(currentSongIndex);
    }
}

function nextSong() {
    if (isShuffleMode) {
        shuffleSong(); // Shuffle to the next song
    } else {
        currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
        loadSong(currentSongIndex);
    }
}

function startSpinning() {
    spinImage.classList.add('spin');
}

function stopSpinning() {
    spinImage.classList.remove('spin');
}

prevBtn.addEventListener('click', prevSong);
shuffleBtn.addEventListener('click', shuffleSong);
nextBtn.addEventListener('click', nextSong);

audioPlayer.addEventListener('play', startSpinning);
audioPlayer.addEventListener('pause', stopSpinning);
audioPlayer.addEventListener('ended', function() {
    stopSpinning();
    nextSong(); // Automatically play the next song when the current one ends
});

// Load the first song on page load
loadSong(currentSongIndex);
