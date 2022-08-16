setInterval(refreshTime, 1000);


function refreshTime() {
    const currentDate = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    document.getElementById("time").innerHTML = currentDate.toLocaleTimeString('en-US', { hour12: false })
    document.getElementById("date").innerHTML = currentDate.toLocaleDateString('de-DE', options)

  }
  
function startStopWatch(){
  const currentTime = new Date()
  document.getElementById("punch-in-time").innerHTML = currentTime.toLocaleTimeString('en-US', { hour12: false })
}

function test(){
  const timeWWW = document.getElementById("punch-in-time").innerText
  alert(timeWWW)
  document.getElementById("testput").innerHTML = timeWWW

}

