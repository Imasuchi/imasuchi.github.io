const audioPlayer = document.getElementById('audio-player');
const songList = document.getElementById('song-list'); // Reference to the song list container
const songs = [
    { name: 'From the Start', file: 'From the Start.mp3' },
    { name: 'Seventh Heaven', file: 'Seventh Heaven.mp3' },
    { name: 'The Bird Song', file: 'The Bird Song.mp3' },
    { name: 'Mimis Delivery Service', file: 'Mimis Delivery Service.mp3' }
    { name: 'Not like us', file: 'Not Like Us.mp3' }
];

let currentSongIndex = 0;
let shuffledSongs = [...songs];

// Populate the song list with buttons
function populateSongList() {
    songList.innerHTML = ''; // Clear any existing buttons
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = song.name;
        button.onclick = () => playSong(index); // Set up button click handler
        li.appendChild(button);
        songList.appendChild(li);
    });
}

// Function to play the next song in the shuffled list
function playNext() {
    if (shuffledSongs.length === 0) return;

    currentSongIndex = (currentSongIndex + 1) % shuffledSongs.length;
    audioPlayer.src = shuffledSongs[currentSongIndex].file;
    audioPlayer.play();
}

// Function to shuffle the songs
function shuffle() {
    for (let i = shuffledSongs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j], shuffledSongs[i]];
    }
    currentSongIndex = 0;
    audioPlayer.src = shuffledSongs[currentSongIndex].file;
    audioPlayer.play();
}

// Function to play a selected song
function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = songs[currentSongIndex].file;
    audioPlayer.play();
}

// Handle the audio ending
audioPlayer.addEventListener('ended', playNext);

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateSongList();
    audioPlayer.src = songs[currentSongIndex].file;
    // Optionally play the initial song
    // audioPlayer.play();
});
