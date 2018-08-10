//StartUpAnim---------------------------------------
$("nav").css("visibility","hidden");
$("nav").fadeOut();

$("#startButton").on("click",function(){
	$("#curtain").fadeOut(2000, function(){
		$(this).remove();
	});
    $("nav").css("visibility","visible");
    $("nav").fadeIn(1000);
});