const audioPlayer = document.getElementById('audio-player');
const songSelect = document.getElementById('song-select');
const songs = [
    { name: 'Song 1', file: 'From the Start.mp3' },
    { name: 'Song 2', file: 'Seventh Heaven.mp3' },
    { name: 'Song 3', file: 'The Bird Song.mp3' }
];

let currentSongIndex = 0;
let shuffledSongs = [...songs];

// Populate the song selection dropdown
function populateSongSelect() {
    songSelect.innerHTML = '<option value="">--Select a Song--</option>'; // Reset dropdown
    songs.forEach((song, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = song.name;
        songSelect.appendChild(option);
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

// Function to play the selected song
function playSelectedSong() {
    const selectedIndex = songSelect.value;
    if (selectedIndex !== '') {
        currentSongIndex = parseInt(selectedIndex);
        audioPlayer.src = songs[currentSongIndex].file;
        audioPlayer.play();
    }
}

// Initialize
populateSongSelect();
audioPlayer.src = songs[currentSongIndex].file;
