import MediaPlayer from './js/MediaPlayer';
import AutoPlay from './js/pluggins/AutoPlay';
import AutoPause from './js/pluggins/AutoPause';

const video = document.querySelector("video");
const btnPlay: HTMLElement = document.querySelector(".video-player__play");
const btnMute: HTMLElement = document.querySelector(".video-player__mute");

const player = new MediaPlayer({
    el:video,
    pluggins: [
        new AutoPlay(),
        new AutoPause()
    ]
});
btnPlay.onclick = () => player.togglePlay();
btnMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .catch(error => {
        console.error(error.message);
    })
}