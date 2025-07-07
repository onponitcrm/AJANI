function triggerBreak() {
  document.querySelector('.left-hand').classList.add('break');
  document.querySelector('.right-hand').classList.add('break');
  document.querySelector('.shards').classList.add('break');

  const track = document.getElementById('track');
  track.play();
}
