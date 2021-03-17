document.addEventListener("DOMContentLoaded", e => {
    // Set the date we're counting down to
    var countDownDate = new Date("4, 30, 2021 19:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

     // If the count down is under 7 days, show seconds
    if (distance < 604800000) {
      document.querySelector(".seconds").style.display = "inline-block";
    }
      // If the count down is finished, show button
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".date").style.display = "none";
        document.querySelector(".livestream-button").style.display = "flex";
    }

    if (navigator.userAgent.indexOf('Safari')) {
      document.querySelector(".date").style.display = "none";
      document.querySelector(".livestream-button").style.display = "flex";
    }

    }, 1000);
})