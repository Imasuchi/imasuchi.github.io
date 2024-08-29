const audioPlayer = document.getElementById('audio-player');
const songs = [
    'From the Start.mp3',
    'Seventh Heaven.mp3',
    'The Bird Song.mp3'
];
let currentSongIndex = 0;
let shuffledSongs = [...songs];

function playNext() {
    if (shuffledSongs.length === 0) return;
    
    currentSongIndex = (currentSongIndex + 1) % shuffledSongs.length;
    audioPlayer.src = shuffledSongs[currentSongIndex];
    audioPlayer.play();
}

function shuffle() {
    shuffledSongs = [...songs].sort(() => Math.random() - 0.5);
    currentSongIndex = 0;
    audioPlayer.src = shuffledSongs[currentSongIndex];
    audioPlayer.play();
}

// Initialize with the first song
audioPlayer.src = shuffledSongs[currentSongIndex];
