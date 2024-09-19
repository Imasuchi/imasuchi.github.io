const audioPlayer = document.getElementById('audio-player');
const prevBtn = document.getElementById('prev-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const nextBtn = document.getElementById('next-btn');
const spinImage = document.getElementById('spin-image');
const songs = [
    { name: "From the Start", src: "songs/From the Start.ogg", img: "records/Austin.png" },
    { name: "The Bird Song", src: "songs/The Bird Song.ogg", img: "records/Austin.png" },
    { name: "Seventh Heaven", src: "songs/Seventh Heaven.ogg", img: "records/Austin.png" },
    { name: "Not Like Us", src: "songs/Not Like Us.ogg", img: "records/Austin.png" },
    { name: "Mimis Delivery Service", src: "songs/Mimis Delivery Service.ogg", img: "records/Austin.png" },
    { name: "Vacancy!", src: "songs/Vacancy!.ogg", img: "records/Austin.png" },  
    { name: "Pointless relations", src: "songs/Pointless relations.ogg", img: "records/Austin.png" },
    { name: "I WANNA BE", src: "songs/I WANNA BE.ogg", img: "records/Austin.png" },  
    { name: "Come tell me the real way! (feat. Taiketsu)", src: "songs/Come tell me the real way! (feat. Taiketsu).ogg", img: "records/Austin.png" },
    { name: "Cupid's Chokehold - Breakfast in America", src: "songs/Cupid's Chokehold - Breakfast in America.ogg", img: "records/Austin.png" },
    { name: "Mr. Blue Sky", src: "songs/Mr. Blue Sky.ogg", img: "records/Austin.png" },
    { name: "spectacular", src: "songs/spectacular.ogg", img: "records/Austin.png" },
    { name: "Eminem - Houdini (Lyrics)", src: "songs/Eminem - Houdini (Lyrics).ogg", img: "records/Austin.png" }

];
let currentSongIndex = 0;
let playedSongs = [];
let isShuffleMode = false;
  
function loadSong(index, autoPlay = false) {
    console.log('Loading song:', songs[index].name);
    audioPlayer.src = songs[index].src;
    spinImage.src = songs[index].img; // Update the image
    if (autoPlay) {
        audioPlayer.play().catch(error => console.error('Playback error:', error));
    }
}
function shuffleSong() {
    console.log('Shuffle button clicked');
    isShuffleMode = true;
    if (playedSongs.length === songs.length) {
        playedSongs = []; // Reset the list if all songs have been played
    }
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * songs.length);
    } while (playedSongs.includes(randomIndex));
    playedSongs.push(randomIndex);
    currentSongIndex = randomIndex;
    loadSong(currentSongIndex, true); // Load and play the shuffled song
}
function nextSong() {
    console.log('Next button clicked');
    if (isShuffleMode) {
        shuffleSong();
    } else {
        currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
        loadSong(currentSongIndex, true); // Load and play the next song
    }
}
function startSpinning() {
    spinImage.classList.add('spinning');
    spinImage.classList.remove('paused');
}
function stopSpinning() {
    spinImage.classList.remove('spinning');
    spinImage.classList.add('paused');
}
shuffleBtn.addEventListener('click', shuffleSong);
nextBtn.addEventListener('click', nextSong);
audioPlayer.addEventListener('play', startSpinning);
audioPlayer.addEventListener('pause', stopSpinning);
audioPlayer.addEventListener('ended', function() {
    stopSpinning();
    nextSong(); // Automatically play the next song when the current one ends
});
// Load the first song on page load without autoplay
loadSong(currentSongIndex, false); // Set false to prevent autoplay on page load
