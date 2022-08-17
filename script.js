setInterval(refreshTime, 1000);

document.querySelector("#btn").addEventListener('click', startStopWatch())


function refreshTime() {
    const currentDate = new Date()
    const options = {year: 'numeric', month: 'long', day: 'numeric' };

    document.querySelector("#time").innerHTML = currentDate.toLocaleTimeString('en-US', { hour12: false })
    document.querySelector("#date").innerHTML = currentDate.toLocaleDateString('de-DE', options)

  }
  
function startStopWatch(){
  const currentTime = new Date()
  document.getElementById("punch-in-time").innerHTML = currentTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit' })
}

function test(){
  const punchInTime = new Date(document.getElementById("punch-in-time").innerHTML)
  const bla = Date.parse(document.getElementById("punch-in-time").innerHTML)
  alert(bla)
  alert(document.getElementById("punch-in-time").innerHTML)
  alert(punchInTime)
  document.getElementById("hours-worked").innerHTML = punchInTime.toLocaleTimeString()

}

