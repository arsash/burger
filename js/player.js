let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '405',
    width: '660',
    videoId: 'oqeW9YMHweo',
    events: {
      // 'onReady': onPlayerReady,
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