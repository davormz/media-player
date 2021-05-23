function MediaPlayer(config) {
    this.media = config.el
    this.pluggins = config.pluggins || [];

    this._initPluggins();
}

MediaPlayer.prototype._initPluggins = function(){
    this.pluggins.forEach(pluggin => {
        pluggin.run(this);
    });
};

MediaPlayer.prototype.play = function(){
    this.media.play();
};
MediaPlayer.prototype.pause = function(){
    this.media.pause();
};
MediaPlayer.prototype.togglePlay = function(){
    if(this.media.paused){
        this.play();
    }else{
        this.pause();
    }
    
};
MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
};
MediaPlayer.prototype.unmute = function(){
    this.media.muted = false;
};
MediaPlayer.prototype.toggleMute = function(){
    if(this.media.muted){
        this.unmute();
    }else{
        this.mute();
    }
    
};

export default MediaPlayer;