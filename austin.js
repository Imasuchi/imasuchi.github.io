const audioPlayer = document.getElementById('audio-player');
const shuffleBtn = document.getElementById('shuffle-btn');
const nextBtn = document.getElementById('next-btn');
const spinImage = document.getElementById('spin-image');
const songs = [
{ name: "From the Start", src: "songs/From the Start.ogg", img: "records/Austin.gif" }, 
{ name: "The Bird Song", src: "songs/The Bird Song.ogg", img: "records/Austin.gif" }, 
{ name: "Seventh Heaven", src: "songs/Seventh Heaven.ogg", img: "records/Austin.gif" },
{ name: "Not Like Us", src: "songs/Not Like Us.ogg", img: "records/Austin.gif" }, 
{ name: "Mimis Delivery Service", src: "songs/Mimis Delivery Service.ogg", img: "records/Austin.gif" }, 
{ name: "Vacancy!", src: "songs/Vacancy!.ogg", img: "records/Austin.gif" }, 
{ name: "Pointless relations", src: "songs/Pointless relations.ogg", img: "records/Austin.gif" }, 
{ name: "I WANNA BE", src: "songs/I WANNA BE.ogg", img: "records/Austin.gif" }, 
{ name: "Come tell me the real way! (feat. Taiketsu)", src: "songs/Come tell me the real way! (feat. Taiketsu).ogg", img: "records/Austin.gif" }, 
{ name: "Cupid's Chokehold - Breakfast in America", src: "songs/Cupid's Chokehold - Breakfast in America.ogg", img: "records/Austin.gif" }, 
{ name: "Mr. Blue Sky", src: "songs/Mr. Blue Sky.ogg", img: "records/Austin.gif" }, { name: "spectacular", src: "songs/spectacular.ogg", img: "records/Austin.gif" }, 
{ name: "Eminem - Houdini (Lyrics)", src: "songs/Eminem - Houdini (Lyrics).ogg", img: "records/Austin.gif" }, 
{ name: "505", src: "songs/505.ogg", img: "records/Austin.gif" }, 
{ name: "Be Wherever You are", src: "songs/Be Wherever You Are (feat. Zach Callison).ogg", img: "records/Austin.gif" }, 
{ name: "Boy For The Weekend", src: "songs/Boy For the Weekend.ogg", img: "records/Austin.gif" }, 
{ name: "Animals", src: "songs/Animals.ogg", img: "records/Austin.gif" }, 
{ name: "As It Was", src: "songs/As It Was.ogg", img: "records/Austin.gif" }, 
{ name: "Beautiful Things", src: "songs/Beautiful Things.ogg", img: "records/Austin.gif" }, 
{ name: "Cycles", src: "songs/Cycles.ogg", img: "records/Austin.gif" }, 
{ name: "Maried to the Bag", src: "songs/Married to the Bag.ogg", img: "records/Austin.gif" }, 
{ name: "T.N.T.", src: "songs/T.N.T..ogg", img: "records/Austin.gif" }, 
{ name: "Valentine", src: "songs/Valentine.ogg", img: "records/Austin.gif" }, 
{ name: "Wrong Side of the Bed", src: "songs/Wrong Side of the Bed.ogg", img: "records/Austin.gif" }, 
{ name: "Genocide", src: "songs/Genocide.ogg", img: "records/Austin.gif" },
{ name: "Holocaust", src: "songs/Holocaust (feat. WENDIGO & LiL CUBENSiS).ogg", img: "records/Austin.gif" },
{ name: "Banana Pie", src: "songs/Banana Pie.ogg", img: "records/Austin.gif" },
{ name: "My name is", src: "songs/My name is.ogg", img: "records/Austin.gif" },
{ name: "Brittle Bones Nicky", src: "songs/Brittle Bones Nicky.ogg", img: "records/Austin.gif" },
{ name: "Brittle Bones Nicky 2", src: "songs/Brittle Bones Nicky 2.ogg", img: "records/Austin.gif" },
{ name: "Brittle Bones Nicky 3", src: "songs/Brittle Bones Nicky 3.ogg", img: "records/Austin.gif" },
{ name: "Rockstar", src: "songs/Rockstar.ogg", img: "records/Austin.gif" },
{ name: "Smells Like Teen Spirit", src: "songs/Smells Like Teen Spirit.ogg", img: "records/Austin.gif" },
{ name: "I Can See Clearly", src: "songs/I Can See Clearly.ogg", img: "records/Austin.gif" },
{ name: "Creep", src: "songs/Creep.ogg", img: "records/Austin.gif" },
{ name: "American Idiot", src: "songs/American Idiot.ogg", img: "records/Austin.gif" },
{ name: "Brain Stew", src: "songs/Brain Stew.ogg", img: "records/Austin.gif" },
{ name: "BEFORE THE MORNING", src: "songs/BEFORE THE MORNING.ogg", img: "records/Austin.gif" },
{ name: "Clint Eastwood", src: "songs/Clint Eastwood.ogg", img: "records/Austin.gif" },
{ name: "DARE (Radio Edit)", src: "songs/DARE (Radio Edit).ogg", img: "records/Austin.gif" },
{ name: "Feel Good Inc.", src: "songs/Feel Good Inc..ogg", img: "records/Austin.gif" },
{ name: "Copacabana (At the Copa)", src: "songs/Copacabana (At the Copa).ogg", img: "records/Austin.gif" },
{ name: "Blind", src: "songs/Blind.ogg", img: "records/Austin.gif" },
{ name: "Too Sweet", src: "songs/Too Sweet.ogg", img: "records/Austin.gif" },
{ name: "Bye Bye Bye", src: "songs/Bye Bye Bye.ogg", img: "records/Austin.gif" },
{ name: "Buddy Holly", src: "songs/Buddy Holly.ogg", img: "records/Austin.gif" },
{ name: "GOSSIP", src: "songs/GOSSIP (feat. Tom Morello).ogg", img: "records/Austin.gif" },
{ name: "Tadow", src: "songs/Tadow.ogg", img: "records/Austin.gif" },
{ name: "Come as You are", src: "songs/Come as you are (online-audio-converter.com).ogg", img: "records/Austin.gif" },
{ name: "Faster car"", src: "songs/ Faster car.ogg", img: "records/Austin.gif" }
   
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
