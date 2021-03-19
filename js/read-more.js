$("#conent_hide").hide();
	$("#re").click(function(){ 
	x=$("#re").text();
	
	$("#conent_hide").slideToggle( function(){

			if(x == "Mehr..."){
			$("#re").text("weniger...").css({color:"#004D3E"});
			}
			else{
			$("#re").text("Mehr...").css({color:"#59A87B"});
			}
	});
	});