let player;
let playerContainer = $('.player__wrap');

let eventsInit = () => {
  $('.play').on('click', (e) => {
    const btn = $(e.currentTarget);
    if(playerContainer.hasClass('paused')) {
        playerContainer.removeClass('paused');
        player.pauseVideo();
    }else {
      playerContainer.addClass('paused');
      player.playVideo();
    } 
  })

  $('.playback').click(e => {
    const playBar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    const newButtonPositionPercent = (clickedPosition / playBar.width()) * 100;
    const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;

    $('.range__btn--play').css({
      left: `${newButtonPositionPercent}%`
    })

    player.seekTo(newPlaybackPositionSec);
  })

  $('.volume').on('click', function(){
    let volumeIcon = $('.range__btn--volume');
    if(player.isMuted()){
      player.unMute();
      volumeIcon.css({
        left: '75%'
      })
    }else{
      player.mute();
      volumeIcon.css({
        left: '0%'
      })
    }
  })
};

const formatTime = timeSec => {
  const roundSec = Math.round(timeSec);
  const minutes = addZero(Math.floor(roundSec / 60));
  const seconds = addZero(roundSec - minutes * 60);

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  return `${minutes}:${seconds}`;
}

const onPlayerReady = () => {
  let interval;
  const durationSec = player.getDuration();

  $('.duration__estimated').text(formatTime(durationSec));

  if(typeof interval === 'undefined'){
    clearInterval(interval);
  }

  interval = setInterval(function(){
    const completedSec = player.getCurrentTime();
    const completedPercent = (completedSec / durationSec) * 100;
    $('.range__btn--play').css({
      left: `${completedPercent}%`
    })
    $('.duration__completed').text(formatTime(completedSec));
  }, 1000)
};

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'IxkD07EY-8o',
    events: {
      'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    }
  })
};

eventsInit();