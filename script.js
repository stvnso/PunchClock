const punchInTime = document.querySelector('#punch-in-time').innerHTML;
const workedTime = document.querySelector('#hours-worked').innerHTML;

const btn_punch = document.querySelector("#btn-punch");

setInterval(refreshTime, 1000);

function refreshTime() {
  const currentDate = new Date()
  const options = {weekday:'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.querySelector("#time").innerHTML = currentDate.toLocaleTimeString('de-DE', { hour12: false })
  document.querySelector("#date").innerHTML = currentDate.toLocaleDateString('de-DE', options)
}

btn_punch.addEventListener('click', function(){ 
  const currentTime = new Date()
  if (document.getElementById("punch-in-time").innerHTML != "00:00") {
    document.getElementById("punch-in-time").innerHTML = "00:00"
  } else {
    document.getElementById("punch-in-time").innerHTML = currentTime.toLocaleTimeString('de-DE', { hour12: false, hour: '2-digit', minute:'2-digit' })
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

document.querySelector("#tst").addEventListener("click", function () {
  const table = document.querySelector("#atd-table");
  let row = table.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);

  const options = {day:'numeric', month: 'numeric',year: 'numeric' };
  const now = new Date()
  cell1.innerHTML = now.toLocaleDateString('de-DE', options);
  cell2.innerHTML = document.querySelector('#punch-in-time').innerHTML;
  cell3.innerHTML = now.toLocaleTimeString('de-DE', { hour12: false, hour: '2-digit', minute:'2-digit'});
  cell4.innerHTML = "Cell 2";
  cell5.innerHTML = "Cell 2";
});


