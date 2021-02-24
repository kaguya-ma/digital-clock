function digitalWatch() {
  let date = new Date()
  let hours = date.getHours().toString()
  if (hours.length === 1) {
    hours = `0${hours}`
  }
  let minutes = date.getMinutes().toString()
  if (minutes.length === 1) {
    minutes = `0${minutes}`
  }
  let seconds = date.getSeconds().toString()
  if (seconds.length === 1) {
    seconds = `0${seconds}`
  }

  document.querySelector("#hours").innerHTML=hours;
  document.querySelector("#minutes").innerHTML=minutes;
  document.querySelector("#seconds").innerHTML=seconds;

}

setInterval(digitalWatch, 1000)