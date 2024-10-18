function enableSound() {
    var video = document.getElementById('video-background');
    video.muted = false;
    video.play();
    document.getElementById('notification').style.display = 'none';
}
