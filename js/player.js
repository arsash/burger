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
};

// $('duration__completed').text.player.getCurrentTime();

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
    $('.duration__completed').text(formatTime(completedSec));
  }, 1000)
};

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'oqeW9YMHweo',
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