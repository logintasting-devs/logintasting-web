document.addEventListener("DOMContentLoaded", e => {
    // Set the date we're counting down to
    var countDownDate = new Date("10/26/2020 12:29:29").getTime();

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
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

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

    }, 1000);
})
