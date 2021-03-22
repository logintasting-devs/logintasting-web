document.addEventListener("DOMContentLoaded", e => {
  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let endtime = "Apr 30, 2021 19:00:00",
        countDown = new Date(endtime).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          // If the count down is under 7 days, show seconds
          if (distance < 604800000) {
            document.querySelector(".seconds").style.display = "inline-block";
          }
            // If the count down is finished, show button
          if (distance < 0) {
              clearInterval(x);
              document.querySelector(".date").style.display = "none";
              document.querySelector(".Calendar").style.display = "none";
              document.querySelector(".livestream-button").style.display = "flex";
              clearInterval(x);
          }
        }, 0)
    }());
})
