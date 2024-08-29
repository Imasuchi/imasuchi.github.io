const audioPlayer = document.getElementById('audioPlayer');
const songList = document.getElementById('songList');
const shuffleBtn = document.getElementById('shuffleBtn');

const songs = [
    { name: 'From the Start', file: 'audio/From the Start.mp3' },
    { name: 'Seventh Heaven', file: 'audio/Seventh Heaven.mp3' },
    { name: 'The Bird Song', file: 'audio/The Bird Song.mp3' },
    { name: 'Mimis Delivery Service', file: 'audio/Mimis Delivery Service.mp3' },
    { name: 'Not Like Us', file: 'audio/Not Like Us.mp3' }
];

let currentSongIndex = 0;
let shuffledSongs = [...songs];

// Populate the song list
function populateSongList() {
    songList.innerHTML = ''; // Clear any existing buttons
    shuffledSongs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.name;
        li.onclick = () => playSong(index);
        songList.appendChild(li);
    });
}

// Function to play a selected song
function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = shuffledSongs[currentSongIndex].file;
    audioPlayer.play();
}

// Function to shuffle the songs
function shuffleSongs() {
    shuffledSongs = [...songs];
    for (let i = shuffledSongs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j], shuffledSongs[i]];
    }
    currentSongIndex = 0;
    populateSongList(); // Repopulate list with shuffled order
    playSong(currentSongIndex);
}

// Handle song ending
audioPlayer.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % shuffledSongs.length;
    playSong(currentSongIndex);
});

// Initialize the player
document.addEventListener('DOMContentLoaded', () => {
    populateSongList();
    shuffleBtn.addEventListener('click', shuffleSongs);
    audioPlayer.src = shuffledSongs[currentSongIndex].file;
});
