const audioPlayer = document.getElementById('audio-player');
const prevBtn = document.getElementById('prev-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const nextBtn = document.getElementById('next-btn');
const spinImage = document.getElementById('spin-image');
const songs = [
    { name: "Cupid's Chokehold - Breakfast in America", src: "songs/Cupid's Chokehold - Breakfast in America.ogg", img: "records/Levi.png" },
    { name: "Blueberry Faygo", src: "songs/Blueberry Faygo.ogg", img: "records/Levi.png" },
    { name: "I Need You", src: "songs/I Need You.ogg", img: "records/Levi.png" },
    { name: "careless 2.0", src: "songs/careless 2.0.ogg", img: "records/Levi.png" },
    { name: "I Won't Beg for You", src: "songs/I Won't Beg for You.ogg", img: "records/Levi.png" },
    { name: "Falling Faster", src: "songs/Falling Faster.ogg", img: "records/Levi.png" },  
    { name: "Why Do I Hear Breathing?", src: "songs/Why Do I Hear Breathing?_.ogg", img: "records/Levi.png" },
    { name: "Pretty Distraction", src: "songs/Pretty Distraction.ogg", img: "records/Levi.png" },  
    { name: "mr. sunshine", src: "songs/mr. sunshine.ogg", img: "records/Levi.png" },
    { name: "BEHIND", src: "songs/BEHIND.ogg", img: "records/Levi.png" },
    { name: "Never With You Again", src: "songs/Never With You Again.ogg", img: "records/Levi.png" },
    { name: "Thing for Ya", src: "songs/Thing for Ya.ogg", img: "records/Levi.png" },
    { name: "Killer", src: "songs/Killer.ogg", img: "records/Levi.png" },
    { name: "CRY", src: "songs/CRY.ogg", img: "records/Levi.png" },
    { name: "Me, Myself & I", src: "songs/Me, Myself & I.ogg", img: "records/Levi.png" },
    { name: "Never Be Alright", src: "songs/Never Be Alright.ogg", img: "records/Levi.png" },
    { name: "mental health", src: "songs/mental health.ogg", img: "records/Levi.png" },
    { name: "in my head", src: "songs/in my head.ogg", img: "records/Levi.png" },
    { name: "Courtesy Call", src: "songs/Courtesy Call.ogg", img: "records/Levi.png" },
    { name: "&", src: "songs/&.ogg", img: "records/Levi.png" },
    { name: "Echo", src: "songs/Echo.ogg", img: "records/Levi.png" },
    { name: "Emotion less", src: "songs/Emotion less.ogg", img: "records/Levi.png" },
    { name: "Love No One", src: "songs/Love No One.ogg", img: "records/Levi.png" },
    { name: "Speak Up", src: "songs/Speak Up.ogg", img: "records/Levi.png" },
    { name: "GOOD NEWS (Intro)", src: "songs/GOOD NEWS (Intro).ogg", img: "records/Levi.png" },
    { name: "LOT OF ME", src: "songs/LOT OF ME.ogg", img: "records/Levi.png" },
    { name: "idfc", src: "songs/idfc.ogg", img: "records/Levi.png" },
    { name: "Donald Trump", src: "songs/Donald Trump.ogg", img: "records/Levi.png" },
    { name: "Monsters (feat. Demi Lovato and blackbear)", src: "songs/Monsters (feat. Demi Lovato and blackbear).ogg", img: "records/Levi.png" },
    { name: "Take Me Back", src: "songs/Take Me Back.ogg", img: "records/Levi.png" }
];
let currentSongIndex = 0;
let playedSongs = [];
let isShuffleMode = false;

function loadSong(index, autoPlay = false) {
    console.log('Loading song:', songs[index].name);
    audioPlayer.src = songs[index].src;
    spinImage.src = songs[index].img; 
    updateNowPlaying(); // Update the Now Playing section
    if (autoPlay) {
        audioPlayer.play().catch(error => console.error('Playback error:', error));
    }
}

function updateNowPlaying() {
    document.getElementById("song-title").innerText = songs[currentSongIndex].name;
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
loadSong(currentSongIndex, false); 
updateNowPlaying(); // Set false to prevent autoplay on page load
