setInterval(refreshTime, 1000);


function refreshTime() {
    const currentDate = new Date()
    const options = {year: 'numeric', month: 'long', day: 'numeric' };

    document.getElementById("time").innerHTML = currentDate.toLocaleTimeString('en-US', { hour12: false })
    document.getElementById("date").innerHTML = currentDate.toLocaleDateString('de-DE', options)

  }
  
function startStopWatch(){
  const currentTime = new Date()
  document.getElementById("punch-in-time").innerHTML = currentTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit' })
}

function test(){
  const currentTime = new Date()
  document.getElementById("hours-worked").innerHTML = (document.getElementById("punch-in-time").innerHTML) - 3

}
