function refreshTime() {
    const timeDisplay = document.getElementById("time")
    const dateDisplay = document.getElementById("date")
    const currentDate = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    var currentTime = currentDate.toLocaleTimeString('en-US', { hour12: false })
    timeDisplay.textContent = currentTime
    dateDisplay.textContent = currentDate.toLocaleDateString('de-DE', options)


  }
    setInterval(refreshTime, 1000)