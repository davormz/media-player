class AutoPause{
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

    intersectionObserverHandler(entries) {
        const entry = entries[0];
        if(this.isVisible(entry)){
            this.player.play();
        } else{
            this.player.pause();
        }
    }

    isVisible(entry){
        return entry && entry.intersectionRatio >= this.threshold;
    }

    visibilityChangeHandler(){
        const visible = document.visibilityState === 'visible';
        if(visible){
            this.player.play();
        } else{
            this.player.pause();
        }
    }
}

export default AutoPause;