function triggerBreak() {
  document.querySelector('.left-hand').classList.add('break');
  document.querySelector('.right-hand').classList.add('break');
  document.querySelector('.cross').classList.add('fade-out');
  document.querySelector('.shards').classList.add('explode');

  const audio = document.getElementById('theme');
  if (audio) {
    audio.play();
  }
}
