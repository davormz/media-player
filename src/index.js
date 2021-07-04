import MediaPlayer from './js/MediaPlayer.js';
import AutoPlay from './js/pluggins/AutoPlay.js';
import AutoPause from './js/pluggins/AutoPause.js';

const video = document.querySelector("video");
const btnPlay = document.querySelector(".video-player__play");
const btnMute = document.querySelector(".video-player__mute");

const player = new MediaPlayer({
    el:video,
    pluggins: [
        new AutoPlay(),
        new AutoPause()
    ]
});
btnPlay.onclick = () => player.togglePlay();
btnMute.onclick = () => player.toggleMute();