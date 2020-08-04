var hairHealth = document.getElementById("hair-health");

function videoClick() {
    if (hairHealth.paused)
        hairHealth.play();
    else
        hairHealth.pause();
}