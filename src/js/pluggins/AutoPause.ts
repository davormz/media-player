import MediaPlayer from "../MediaPlayer";

class AutoPause{
    private threshold: number;
    private player: MediaPlayer;

    constructor(){
        this.threshold = 0.25;
        this.intersectionObserverHandler = this.intersectionObserverHandler.bind(this);
        this.visibilityChangeHandler = this.visibilityChangeHandler.bind(this);
    }
    run(player){
        this.player = player;
        const observer = new IntersectionObserver(this.intersectionObserverHandler, {
            threshold: this.threshold
        });

        observer.observe(this.player.media);

        document.addEventListener('visibilitychange', this.visibilityChangeHandler);
    }

    private intersectionObserverHandler(entries: IntersectionObserverEntry[]) {
        const entry = entries[0];
        if(this.isVisible(entry)){
            this.player.play();
        } else{
            this.player.pause();
        }
    }

    private isVisible(entry){
        return entry && entry.intersectionRatio >= this.threshold;
    }

    private visibilityChangeHandler(){
        const visible = document.visibilityState === 'visible';
        if(visible){
            this.player.play();
        } else{
            this.player.pause();
        }
    }
}

export default AutoPause;