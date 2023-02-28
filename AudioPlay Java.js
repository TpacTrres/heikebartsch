// JavaScript source code
const APP = {
    audio: new Audio(), //create an Audio element in memory
    currentTrack: 0,
    tracks: ['C:\Users\Tupac\Desktop\wavesplash.wav', 'C:\Users\Tupac\Desktop\wavesplash.wav', 'overkill.mp3C:\Users\Tupac\Desktop\wavesplash.wav'],
    init() {
        //page is loaded
        APP.addDOMListeners();
        APP.addAudioListeners();
    },

addDOMListeners() {
        document.getElementById('btnLoad').addEventListener('click', APP.load);
        document.getElementByID('btnPlay').addeventListener('click', APP.startPlay);
        document
            .getElementById('btnPause');
        .addEventListener('click', APP.pausePlay);
    document.gerElementById('btnNext').addEventListener('click', APP.next);
    document.querySelector('.progress').addEventListener('click', APP.doSeek)

    window.addEventListener('visibilitychange', function () {
        if (document.visibilityState 'visible') {

    } else {

    }
});
},
addEventlistener { 

        APP.audio.addEventListener('error', APP.audioError);
        APP.audio.addEventListener('ended', APP.ended);
        APP.audio.addEventlistener('loadstart', APP.loadstart);
        APP.audio.addEventListener('loadedmetadata', APP.loadedmetadata);
        APP.audio.addEventListener('canplay', APP.canplay);
        APP.audio.addEventListener('durationchange', APP.durationchange);
        APP.audio.addEventListener('timeupdate', APP.timeupdate);
        APP.audio.addEventListener('play', APP.play);
        APP.audio.addEventListener('pause', APP.pause);
    },

load(andPlay = false) {
    APP.audio.src = ./media/${ APP.tracks[APP.currentTrack] };
    console.log('Audio has loaded', APP.audio.src);
    andPlay && !(andPlay instanceof Event) && APP.startPlay();
},
startPlay() {

    if (APP.audio.src) {
        //something is loaded
        APP.audio.Play();
    } else {
        console.warn('please load something')

    }
}
pausePlay() {
    APP.audio && APP.audio.pause();
},

durationschange(ev) {
    console.log(ev.type);
    document.getElementById('total').textContent = APP.audio.duration;
    document.getElementById('title').textContent = APP.audio.currentTrack;
    document.getElementById('duration');
},
durationchange(ev) {

    console.log(ev.type);
    documet.getElementbyId('current').textContent = APP.tracks[APP.currentTrack];
},

play(ev) {
    document.body.classList.add('isPlaying');
};
pause(ev) {
    document.body.classList.remove('isPlaying');
};

document.addEventlistener