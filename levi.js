const audioPlayer = document.getElementById('audio-player');
const prevBtn = document.getElementById('prev-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const nextBtn = document.getElementById('next-btn');
const spinImage = document.getElementById('spin-image');
const songs = [
    { name: "", src: "songs/Cupid's Chokehold - Breakfast in America.ogg", img: "records/cupids-chokehold.png" },
    { name: "", src: "songs/Blueberry Faygo.mp3", img: "records/blueberry-fago.png" },
    { name: "", src: "songs/I Need You.mp3", img: "records/christian-gates1.png" },
    { name: "", src: "songs/careless 2.0.mp3", img: "records/careless2.0.png" },
    { name: "", src: "songs/I Won't Beg for You.mp3", img: "records/christian-gates1.png" },
    { name: "", src: "songs/Falling Faster.mp3", img: "records/falling-faster.png" },  
    { name: "", src: "songs/Why Do I Hear Breathing?.mp3", img: "records/christian-gates2.png" },
    { name: "", src: "songs/Pretty Distraction.mp3", img: "records/pretty-distraction.png" },  
    { name: "", src: "songs/mr. sunshine.mp3", img: "records/mrsunshine.png" },
    { name: "", src: "songs/BEHIND.mp3", img: "records/behind.png" },
    { name: "", src: "songs/Never With You Again.mp3", img: "records/christian-gates2.png" },
    { name: "", src: "songs/Thing for Ya.mp3", img: "records/christian-gates2.png" },
    { name: "", src: "songs/Killer.mp3", img: "records/killer.png" },
    { name: "", src: "songs/CRY.mp3", img: "records/cry.png" },
    { name: "", src: "songs/Me, Myself & I.mp3", img: "records/memyselfandi.png" },
    { name: "", src: "songs/Never Be Alright.mp3", img: "records/never-alright.png" },
    { name: "", src: "songs/mental health.mp3", img: "records/tylerhateslife.png" },
    { name: "", src: "songs/in my head.mp3", img: "records/tylerhateslife.png" },
    { name: "", src: "songs/Courtesy Call.mp3", img: "records/courtesy-call.png" },
    { name: "", src: "songs/&.mp3", img: "records/&.png" },
    { name: "", src: "songs/Echo.mp3", img: "records/echo.png" },
    { name: "", src: "songs/Emotion less.mp3", img: "records/emotionless.png" },
    { name: "", src: "songs/Love No One.mp3", img: "records/love-no-one.png" },
    { name: "", src: "songs/Speak Up.mp3", img: "records/speak-up.png" },
    { name: "", src: "songs/GOOD NEWS (Intro).mp3", img: "records/good-news.png" },
    { name: "", src: "songs/LOT OF ME.mp3", img: "records/lot-of-me.png" },
    { name: "", src: "songs/idfc.mp3", img: "records/idfc.png" },
    { name: "", src: "songs/Donald Trump.mp3", img: "records/donald-trump.png" },
    { name: "", src: "songs/Monsters (feat. Demi Lovato and blackbear).mp3", img: "records/monsters.png" },
    { name: "", src: "songs/Take Me Back.mp3", img: "records/christian-gates1.png" },
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
