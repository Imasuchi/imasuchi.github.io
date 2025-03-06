const audioPlayer = document.getElementById('audio-player');
const shuffleBtn = document.getElementById('shuffle-btn');
const nextBtn = document.getElementById('next-btn');
const spinImage = document.getElementById('spin-image');
const previousBtn = document.getElementById('previous-btn');
const songs = [
    { name: "From the Start", src: "songs/From the Start.ogg", img: "records/Austin.gif" },
    { name: "The Bird Song", src: "songs/The Bird Song.ogg", img: "records/Austin.gif" },
    // ... (other songs)
    { name: "Love", src: "songs/Love.ogg", img: "records/Austin.gif" }
];

let currentSongIndex = 0;
let playedSongs = [];
let isShuffleMode = false;

function loadSong(index, autoPlay = false) {
    try {
        console.log('Loading song:', songs[index].name);
        audioPlayer.src = songs[index].src;
        spinImage.src = songs[index].img; 
        updateNowPlaying(); // Update the Now Playing section
        if (autoPlay) {
            audioPlayer.play().catch(error => {
                console.error('Playback error:', error);
                alert('An error occurred while trying to play the audio. Please try again.');
            });
        }
    } catch (error) {
        console.error('Error loading song:', error);
        alert('An error occurred while loading the song. Please check the console for details.');
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

function previousSong() {
    console.log('Previous button clicked');
    if (isShuffleMode) {
        shuffleSong();
    } else {
        currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
        loadSong(currentSongIndex, true); // Load and play the previous song
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
previousBtn.addEventListener('click', previousSong);
audioPlayer.addEventListener('play', startSpinning);
audioPlayer.addEventListener('pause', stopSpinning);
audioPlayer.addEventListener('ended', function() {
    stopSpinning();
    nextSong(); // Automatically play the next song when the current one ends
});

// Load the first song on page load without autoplay
loadSong(currentSongIndex, false); 
updateNowPlaying(); // Set false to prevent autoplay on page load 
