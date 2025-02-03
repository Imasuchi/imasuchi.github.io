const audioPlayer = document.getElementById('audio-player');
const prevBtn = document.getElementById('prev-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const nextBtn = document.getElementById('next-btn');
const spinImage = document.getElementById('spin-image');
const songs = [
    { name: "From the Start", src: "songs/From the Start.ogg", img: "records/Josh.gif" },
    { name: "Seventh Heaven", src: "songs/Seventh Heaven.ogg", img: "records/Josh.gif" },
    { name: "Mimis Delivery Service", src: "songs/Mimis Delivery Service.ogg", img: "records/Josh.gif" },
    { name: "Vacancy!", src: "songs/Vacancy!.ogg", img: "records/Josh.gif" },  
    { name: "Pointless relations", src: "songs/Pointless relations.ogg", img: "records/Josh.gif" },
    { name: "I WANNA BE", src: "songs/I WANNA BE.ogg", img: "records/Josh.gif" },  
    { name: "Come tell me the real way! (feat. Taiketsu)", src: "songs/Come tell me the real way! (feat. Taiketsu).ogg", img: "records/Josh.gif" },
    { name: "spectacular", src: "songs/spectacular.ogg", img: "records/Josh.gif" },
    { name: "Trap anthem", src: "songs/Trap Anthem.ogg", img: "records/Josh.gif" },
    { name: "Drowning", src: "songs/Drowning (feat. Kodak Black).ogg", img: "records/Josh.gif" },
    { name: "Hate the other side", src: "songs/Hate the Other Side.ogg", img: "records/Josh.gif" },
    { name: "Hentai Bitch", src: "songs/Hentai Bitch (feat. Kodama Boy & Big Gay).ogg", img: "records/Josh.gif" },
    { name: "Hold up", src: "songs/Hold Up!.ogg", img: "records/Josh.gif" },
    { name: "Honest", src: "songs/HONEST.ogg", img: "records/Josh.gif" },
    { name: "Humans and monsters", src: "songs/Humans and Monsters.ogg", img: "records/Josh.gif" },
    { name: "MILLION DOLLAR BABY", src: "songs/MILLION DOLLAR BABY.ogg", img: "records/Josh.gif" },
    { name: "Mr Money Bags", src: "songs/Mr. Money Bags (feat. Lucian).ogg", img: "records/Josh.gif" },
    { name: "One Eyes willy", src: "songs/One Eyed Willy.ogg", img: "records/Josh.gif" },
    { name: "Stay Strapped", src: "songs/Stay Strapped.ogg", img: "records/Josh.gif" },
    { name: "Virgins Club", src: "songs/Virgins Club.ogg", img: "records/Josh.gif" },
    { name: "WHO WHAT", src: "songs/WHO_ WHAT!.ogg", img: "records/Josh.gif" },
    { name: "Winnebago", src: "songs/Winnebago.ogg", img: "records/Josh.gif" },
    { name: "5% TINT", src: "songs/5% TINT.ogg", img: "records/Josh.gif" },
    { name: "BEFORE THE MORNING", src: "songs/BEFORE THE MORNING.ogg", img: "records/Josh.gif" },
    { name: "Holocaust", src: "songs/Holocaust (feat. WENDIGO & LiL CUBENSiS).ogg", img: "records/Josh.gif" },
    { name: "Hotline", src: "songs/Hotline.ogg", img: "records/Josh.gif" },
    { name: "IM ready", src: "songs/IM Ready (feat. 884Phxbia).ogg", img: "records/Josh.gif" },
    { name: "Lick", src: "songs/Lick!.ogg", img: "records/Josh.gif" },
    { name: "Master Sword", src: "songs/Master Sword.ogg", img: "records/Josh.gif" },
    { name: "Maried to the Bag", src: "songs/Married to the Bag.ogg", img: "records/Josh.gif" },
    { name: "Mathematical Disrespect", src: "songs/MATHEMATICAL DISRESPECT.ogg", img: "records/Josh.gif" },
    { name: "Mexico", src: "songs/Mexico.ogg", img: "records/Josh.gif" },
    { name: "Tampa Bay Bustdown", src: "songs/Tampa Bay Bustdown (feat. Chief Keef & Y2K).ogg", img: "records/Josh.gif" },
    { name: "The Real Slim Shady", src: "songs/The Real Slim Shady.ogg", img: "records/Josh.gif" },
    { name: "Blood On My Jeans", src: "songs/Blood On My Jeans.ogg", img: "records/Josh.gif" },
    { name: "Buy U", src: "songs/Buy U.ogg", img: "records/Josh.gif" },
    { name: "Cheat Codes for Hoes", src: "songs/Cheat Codes for Hoes (feat. TRAQULA).ogg", img: "records/Josh.gif" },
    { name: "Come & Go", src: "songs/Come & Go.ogg", img: "records/Josh.gif" },
    { name: "Femboy Friday", src: "songs/Femboy Friday.ogg", img: "records/Josh.gif" },
    { name: "Fuego", src: "songs/Fuego.ogg", img: "records/Josh.gif" },
    { name: "Giveaway", src: "songs/Giveaway.ogg", img: "records/Josh.gif" },
    { name: "Goosebumps", src: "songs/Goosebumps (Remix).ogg", img: "records/Josh.gif" },
    { name: "Homicide", src: "songs/Homicide (feat. Eminem).ogg", img: "records/Josh.gif" },
    { name: "Killshot", src: "songs/Killshot.ogg", img: "records/Josh.gif" },
    { name: "Anime Thighs", src: "songs/Anime Thighs (feat. wonder).ogg", img: "records/Josh.gif" },
    { name: "Houdini", src: "songs/Eminem - Houdini (Lyrics).ogg", img: "records/Josh.gif" },
    { name: "Banana Pie", src: "songs/Banana Pie.ogg", img: "records/Josh.gif" },
    { name: "Clint Eastwood", src: "songs/Clint Eastwood.ogg", img: "records/Josh.gif" },
    { name: "DARE (Radio Edit)", src: "songs/DARE (Radio Edit).ogg", img: "records/Josh.gif" },
    { name: "Feel Good Inc.", src: "songs/Feel Good Inc..ogg", img: "records/Josh.gif" },
    { name: "Stay Strapped (Not SpongeBob)", src: "songs/Stay Strapped (Not SpongeBob).ogg", img: "records/Josh.gif" }

  

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
