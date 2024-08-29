const songs = [
    { title: 'From The Start - Good Kid Next door', file: 'audio/From the Start.mp3' },
    { title: 'Seventh Heaven - Inoha', file: 'audio/Seventh Heaven.mp3' },
    { title: 'The Bird Song - Noah Floersch', file: 'audio/The Bird Song.mp3' },
    // Add more songs here
];

const songList = document.getElementById('songList');
const shuffleBtn = document.getElementById('shuffleBtn');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');

function displaySongs(songsArray) {
    songList.innerHTML = '';
    songsArray.forEach(song => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.addEventListener('click', () => {
            playSong(song.file);
        });
        songList.appendChild(li);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function playSong(file) {
    audioSource.src = file;
    audioPlayer.load();  // Reload the audio source
    audioPlayer.play();  // Play the audio
}

shuffleBtn.addEventListener('click', () => {
    const shuffledSongs = shuffleArray([...songs]);
    displaySongs(shuffledSongs);
});

// Initially display the songs
displaySongs(songs);
