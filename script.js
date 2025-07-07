function triggerBreak() {
  document.querySelector(".shards").style.display = "block";

  const audio = document.getElementById("introAudio");
  if (audio) {
    audio.play();
  }
}
