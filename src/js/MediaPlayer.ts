const play_icon: string = 'play_circle';
const pause_icon: string = 'pause';
const mute_icon: string = 'volume_off';
const unmute_icon: string = 'volume_up';

class MediaPlayer {
    media: HTMLMediaElement;
    pluggins: Array<any>;
    containier: HTMLElement;
    playButton: HTMLElement;
    muteButton: HTMLElement;

    
    constructor(config) {
        this.media = config.el;
        this.pluggins = config.pluggins || [];
        this.playButton = config.playButton;
        this.muteButton = config.muteButton;
        this.initPlayer();
        this.initPluggins();
    }

    private initPlayer(){
        this.containier = document.createElement('div');
        this.containier.style.position = 'relative';
        this.media.parentNode.insertBefore(this.containier, this.media);
        this.containier.appendChild(this.media);
    }
    
    private initPluggins() {
        this.pluggins.forEach(pluggin => {
            pluggin.run(this);
        });
    }
    
    play() {
        this.media.play();
        this.playButton.innerText = play_icon;
    }
    
    pause() {
        this.media.pause();
        this.playButton.innerText = pause_icon;
    }
    
    togglePlay() {
        if (this.media.paused) {
            this.play();
        } else {
            this.pause();
        }

    }
    
    mute() {
        this.media.muted = true;
        this.muteButton.innerText = mute_icon;
    }
    
    unmute() {
        this.media.muted = false;
        this.muteButton.innerText = unmute_icon;
    }
    
    toggleMute() {
        if (this.media.muted) {
            this.unmute();
        } else {
            this.mute();
        }

    }
}



export default MediaPlayer;