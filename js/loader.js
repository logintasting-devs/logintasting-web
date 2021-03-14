window.onload = function(){
    //hide the preloader
    document.querySelector(".fullpage-loader").style.opacity = "0";
    setTimeout(function(){
        document.querySelector(".fullpage-loader").style.display = "none";
    }, 800); 
}