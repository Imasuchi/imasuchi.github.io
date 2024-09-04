const audioPlayer = document.getElementById('audio-player');
const prevBtn = document.getElementById('prev-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const nextBtn = document.getElementById('next-btn');
const spinImage = document.getElementById('spin-image');

const songs = [
    { name: "From the Start", src: "From the Start.mp3", img: "from-the-start.png" },
    { name: "The Bird Song", src: "The Bird Song.mp3", img: "the-bird-song.png" },
    { name: "Seventh Heaven", src: "Seventh Heaven.mp3", img: "seventh-heaven.png" },
    { name: "Not Like Us", src: "Not Like Us.mp3", img: "not-like-us.png" },
    { name: "Mimis Delivery Service", src: "Mimis Delivery Service.mp3", img: "mimis-delivery-service.png" },
    { name: "Vacancy!", src: "Vacancy!.mp3", img: "vacancy.jpg" },
    { name: "Pointless relations", src: "Pointless relations.mp3", img: "Pointless-Relations.png" },
    { name: "I WANNA BE", src: "I WANNA BE.mp3", img: "i-wanna-be.jpg" },
    { name: "Come tell me the real way! (feat. Taiketsu)", src: "Come tell me the real way! (feat. Taiketsu).mp3", img: "Come-tell-me-the-real-way!-(feat.-Taiketsu).png" }
];

let currentSongIndex = 0;
let lastSongIndex = null; // To keep track of the last song played
let isShuffleMode = false;

function loadSong(index) {
    console.log('Loading song:', songs[index].name);
    audioPlayer.src = songs[index].src;
    spinImage.src = songs[index].img; // Update the image source
    spinImage.classList.add('spinning'); // Start spinning
    audioPlayer.play().catch(error => console.error('Playback error:', error));
}

function shuffleSong() {
    console.log('Shuffle button clicked');
    isShuffleMode = true;
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === currentSongIndex || randomIndex === lastSongIndex);
    lastSongIndex = currentSongIndex; // Update the last song index
    currentSongIndex = randomIndex;
    loadSong(currentSongIndex);
    audioPlayer.play().catch(error => console.error('Playback error:', error));
}

function prevSong() {
    console.log('Previous button clicked');
    if (isShuffleMode) {
        shuffleSong();
    } else {
        currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
        loadSong(currentSongIndex);
    }
}

function nextSong() {
    console.log('Next button clicked');
    if (isShuffleMode) {
        shuffleSong();
    } else {
        currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
        loadSong(currentSongIndex);
    }
}

function startSpinning() {
    spinImage.classList.add('spinning');
}

function stopSpinning() {
    spinImage.classList.remove('spinning');
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
