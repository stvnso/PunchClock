function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const currentDate = new Date();
    var currentTime = currentDate.toLocaleTimeString();
    timeDisplay.textContent = currentTime;
  }
    setInterval(refreshTime, 1000);