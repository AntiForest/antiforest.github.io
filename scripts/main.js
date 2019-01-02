var clickTracker = document.getElementById('click-tracker');
var numClicks = 0;
function setTopHeader() {
    clickTracker.textContent = "Num Clicks: " + numClicks;
}

setTopHeader();
clickTracker.onclick = function() {
    numClicks++;
    setTopHeader();
}
