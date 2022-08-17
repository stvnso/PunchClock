setInterval(refreshTime, 1000);

function refreshTime() {
  const currentDate = new Date()
  const options = {weekday:'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  document.querySelector("#time").innerHTML = currentDate.toLocaleTimeString('en-US', { hour12: false })
  document.querySelector("#date").innerHTML = currentDate.toLocaleDateString('de-DE', options)
  
}

document.querySelector("#btn-punch").addEventListener('click', startStopWatch); //call func without parentheses
function startStopWatch(){
  const currentTime = new Date()
  if (document.getElementById("punch-in-time").innerHTML != "00:00") {
    document.getElementById("punch-in-time").innerHTML = "00:00"
  } else {
    
    document.getElementById("punch-in-time").innerHTML = currentTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit' })
  }
}

document.querySelector("#test-btn").addEventListener("click",test)
function test(){
  const now = new Date()
  const punchInTimeDateObj = Date(new Date().toDateString() + ' ' + document.getElementById("punch-in-time").innerHTML)
  const time = new Date(punchInTimeDateObj)

  const timeDiff = new Date (now.getTime() - time.getTime())
  let bla = timeDiff.toLocaleString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit' })
  alert(bla)

}

