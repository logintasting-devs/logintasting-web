$(document).ready(function(){
    if(window.matchMedia("(max-width: 767px)").matches){    
        $("#conent_hide").hide();
            $("#re").click(function(){ 
            x=$("#re").text();
            
            $("#conent_hide").slideToggle( function(){

                    if(x == "Mehr..."){
                    $("#re").text("weniger...").css({color:"#59A87B"});
                    }
                    else{
                    $("#re").text("Mehr...").css({color:"#004D3E"});
                    }
            });
        });
    }
});