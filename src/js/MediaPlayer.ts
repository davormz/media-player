class MediaPlayer {
    media: HTMLMediaElement;
    pluggins: Array<any>;
    containier: HTMLElement;
    
    constructor(config) {
        this.media = config.el;
        this.pluggins = config.pluggins || [];
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
    }
    
    pause() {
        this.media.pause();
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
    }
    
    unmute() {
        this.media.muted = false;
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