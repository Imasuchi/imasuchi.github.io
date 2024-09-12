const audioPlayer = document.getElementById('audio-player');
const prevBtn = document.getElementById('prev-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const nextBtn = document.getElementById('next-btn');
const spinImage = document.getElementById('spin-image');
const songs = [
    { name: "Tennessee Whiskey (Official Audio)", src: "songs/Chris Stapleton - Tennessee Whiskey (Official Audio).ogg", img: "records/Tennessee-whiskey.png" },
    { name: "Craig Morgan - Almost Home (2020 – Remaster) [Official Audio]", src: "songs/Craig Morgan - Almost Home (2020 – Remaster) [Official Audio].ogg", img: "records/Almost-home.png" },
    { name: "Blackstreet - No Diggity (Official Music Video) ft. Dr. Dre, Queen Pen", src: "songs/Blackstreet - No Diggity (Official Music Video) ft. Dr. Dre, Queen Pen.ogg", img: "records/No-diggity.png" },
    { name: "Eminem - Houdini (Lyrics)", src: "songs/Eminem - Houdini (Lyrics).ogg", img: "records/Houdini.png" },
    { name: "Hooked On A Feeling", src: "songs/Hooked On A Feeling.ogg", img: "records/Hooked-on-a-feeling.png" },
    { name: "Looking Glass - Brandy (You're a Fine Girl) (Official Audio)", src: "songs/Looking Glass - Brandy (You're a Fine Girl) (Official Audio).ogg", img: "records/Brandy.png" },  
    { name: "Paint Me A Birmingham", src: "songs/Paint Me A Birmingham.ogg", img: "records/Paint-me-a-brimingham.png" },
    { name: "Spirit In The Sky - Norman Greenbaum (Official Lyric Video)", src: "songs/Spirit In The Sky - Norman Greenbaum (Official Lyric Video).ogg", img: "records/Spirit-in-the-sky.png" },
    { name: "Old Time Rock & Roll", src: "songs/Old Time Rock & Roll.ogg", img: "records/Oldtime.png" },
    { name: "Moonage Daydream (2012 Remaster)", src: "songs/Moonage Daydream (2012 Remaster).ogg", img: "records/moonage.png" },
    { name: "The Ballad Of Buster Scruggs Soundtrack - _When A Cowboy Trades His Spurs For Wings_", src: "songs/The Ballad Of Buster Scruggs Soundtrack - _When A Cowboy Trades His Spurs For Wings_.ogg", img: "records/Whenacowboytradeshisspurs.png" },
    { name: "Jelly Roll - Save Me (with Lainey Wilson) [Official Audio]", src: "songs/Jelly Roll - Save Me (with Lainey Wilson) [Official Audio].ogg", img: "records/saveme.png" },
    { name: "Mr. Blue Sky", src: "songs/Mr. Blue Sky.ogg", img: "records/mrbluesky.png" },
    { name: "Fleetwood Mac - The Chain (Official Audio)", src: "songs/Fleetwood Mac - The Chain (Official Audio).ogg", img: "records/thechain.png" },
    { name: "Father And Son", src: "songs/Father And Son.ogg", img: "records/fatherandson.png" },
    { name: "Natalie Taylor - Surrender (Lyrics)", src: "songs/Natalie Taylor - Surrender (Lyrics).ogg", img: "records/surrender.png" },
    { name: "No Sleep Till Brooklyn", src: "songs/No Sleep Till Brooklyn.ogg", img: "records/nosleep.png" },
    { name: "Florence + The Machine - Dog Days Are Over (2010 Version) (Official Music Video)", src: "songs/Florence + The Machine - Dog Days Are Over (2010 Version) (Official Music Video).ogg", img: "records/dogdays.png" },
    { name: "Reba McEntire - Fancy (Official Music Video)", src: "songs/Reba McEntire - Fancy (Official Music Video).ogg", img: "records/fancy.png" },
    { name: "Don't Take It Away- Conway Twitty", src: "songs/Don't Take It Away- Conway Twitty.ogg", img: "records/donttakeit.png" },
    { name: "Conway Twitty's _That's My Job_", src: "songs/Conway Twitty's _That's My Job_.ogg", img: "records/myjob.png" }

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
