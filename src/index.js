import MediaPlayer from './js/MediaPlayer.js';

const video = document.querySelector("video");
const btn = document.querySelector("button");

const player = new MediaPlayer({el:video});
btn.onclick = () => player.togglePlay();