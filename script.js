
const btn_punch = document.querySelector("#btn-punch");

setInterval(refreshTime, 1000);

function refreshTime() {
  const currentDate = new Date()
  const options = {weekday:'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.querySelector("#time").innerHTML = currentDate.toLocaleTimeString('en-US', { hour12: false })
  document.querySelector("#date").innerHTML = currentDate.toLocaleDateString('de-DE', options)
}

btn_punch.addEventListener('click', function(){ 
  const currentTime = new Date()
  if (document.getElementById("punch-in-time").innerHTML != "00:00") {
    document.getElementById("punch-in-time").innerHTML = "00:00"
  } else {
    document.getElementById("punch-in-time").innerHTML = currentTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit' })
    setInterval(countWorkedTime,1000);
  }
})


function countWorkedTime(){
  const now = new Date()
  let date = now.getFullYear() + "-" + (now.getMonth()+1) + "-" +  now.getDate()
  let punchInTime = document.querySelector("#punch-in-time").innerHTML +":00"
  let punchFullDate = new Date(date +" " + punchInTime)

  let timeDiff = now - punchFullDate
  let hours = Math.floor(timeDiff/1000/60/60)
  timeDiff -= hours * 1000 * 60 * 60;
  let minutes = Math.floor(timeDiff / 1000 / 60);
  let workedTime =  ((hours <= 9 ? "0" : "") + hours) + ":" + ((minutes <= 9 ? "0" : "") + minutes)
  document.querySelector("#hours-worked").innerHTML = workedTime
}


