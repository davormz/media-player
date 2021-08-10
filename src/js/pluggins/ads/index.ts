import MediaPlayer from './../../MediaPlayer';
import Ads, { Ad } from './Ads';

const adTime:number = 10000;

class AdsPlugging{
    private player:MediaPlayer;
    private media:HTMLMediaElement;
    private ads: Ads;
    private currentAd: Ad;
    private adsContainer:HTMLElement;

    constructor(){
        this.ads = Ads.getInstance();
        this.adsContainer = document.createElement('div');
        this.timeUpdateHandler = this.timeUpdateHandler.bind(this);
    }

    run(player:MediaPlayer){
        this.player = player;
        this.player.containier.appendChild(this.adsContainer);
        this.media = player.media;
        this.media.addEventListener('timeupdate', this.timeUpdateHandler);
    }

    private timeUpdateHandler(){
        const currentTime = Math.floor(this.media.currentTime);

        if(currentTime % 30 ===0){
            this.renderAd();
        }
    }

    private renderAd(){
        if(this.currentAd){
            return;
        }
        const ad = this.ads.getAd();
        this.currentAd = ad;
        this.adsContainer.innerHTML = ` <div class="ads">
                <a  class="ads__link" href="${this.currentAd.url}" target="_blank">
                    <img class="ads__img" src="${this.currentAd.imageUrl}" />
                    <div class="ads__info">
                    <h5 class="ads__title">${this.currentAd.title}</h5>
                    <p class="ads__body">${this.currentAd.body}</p>
                    </div>
                </a>
            </div>`;

        setTimeout(() => {
            this.currentAd = null;
            this.adsContainer.innerHTML = '';
        }, adTime);
    }
}

export default AdsPlugging;