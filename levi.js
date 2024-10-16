const audioPlayer = document.getElementById('audio-player');
const prevBtn = document.getElementById('prev-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const nextBtn = document.getElementById('next-btn');
const spinImage = document.getElementById('spin-image');
const songs = [
    { name: "", src: "songs/Cupid's Chokehold - Breakfast in America.ogg", img: "records/cupids-chokehold.png" },
    { name: "", src: "songs/Blueberry Faygo.ogg", img: "records/blueberry-fago.png" },
    { name: "", src: "songs/I Need You.ogg", img: "records/christian-gates1.png" },
    { name: "", src: "songs/careless 2.0.ogg", img: "records/careless2.0.png" },
    { name: "", src: "songs/I Won't Beg for You.ogg", img: "records/christian-gates1.png" },
    { name: "", src: "songs/Falling Faster.ogg", img: "records/falling-faster.png" },  
    { name: "", src: "songs/Why Do I Hear Breathing?.ogg", img: "records/christian-gates2.png" },
    { name: "", src: "songs/Pretty Distraction.ogg", img: "records/pretty-distraction.png" },  
    { name: "", src: "songs/mr. sunshine.ogg", img: "records/mrsunshine.png" },
    { name: "", src: "songs/BEHIND.ogg", img: "records/behind.png" },
    { name: "", src: "songs/Never With You Again.ogg", img: "records/christian-gates2.png" },
    { name: "", src: "songs/Thing for Ya.ogg", img: "records/christian-gates2.png" },
    { name: "", src: "songs/Killer.ogg", img: "records/killer.png" },
    { name: "", src: "songs/CRY.ogg", img: "records/cry.png" },
    { name: "", src: "songs/Me, Myself & I.ogg", img: "records/memyselfandi.png" },
    { name: "", src: "songs/Never Be Alright.ogg", img: "records/never-alright.png" },
    { name: "", src: "songs/mental health.ogg", img: "records/tylerhateslife.png" },
    { name: "", src: "songs/in my head.ogg", img: "records/tylerhateslife.png" },
    { name: "", src: "songs/Courtesy Call.ogg", img: "records/courtesy-call.png" },
    { name: "", src: "songs/&.ogg", img: "records/&.png" },
    { name: "", src: "songs/Echo.ogg", img: "records/echo.png" },
    { name: "", src: "songs/Emotion less.ogg", img: "records/emotionless.png" },
    { name: "", src: "songs/Love No One.ogg", img: "records/love-no-one.png" },
    { name: "", src: "songs/Speak Up.ogg", img: "records/speak-up.png" },
    { name: "", src: "songs/GOOD NEWS (Intro).ogg", img: "records/good-news.png" },
    { name: "", src: "songs/LOT OF ME.ogg", img: "records/lot-of-me.png" },
    { name: "", src: "songs/idfc.ogg", img: "records/idfc.png" },
    { name: "", src: "songs/Donald Trump.ogg", img: "records/donald-trump.png" },
    { name: "", src: "songs/Monsters (feat. Demi Lovato and blackbear).ogg", img: "records/monsters.png" },
    { name: "", src: "songs/Take Me Back.ogg", img: "records/christian-gates1.png" },
];
let currentSongIndex = 0;
let playedSongs = [];
let isShuffleMode = false;

function loadSong(index, autoPlay = false) {
    console.log('Loading song:', songs[index].name);
    audioPlayer.src = songs[index].src;
    spinImage.src = songs[index].img; // Update the image
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
loadSong(currentSongIndex, false); // Set false to prevent autoplay on page load
