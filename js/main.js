$(".fas").click(function(event){
	 if ($(this).hasClass("fa-plus")) {
	 	$(this).removeClass("fa-plus");
	 	$(this).addClass("fa-minus");
	 	$(this).siblings(".answer").show();
	 }else {
	 	$(this).removeClass("fa-minus");
	 	$(this).addClass("fa-plus");
	 	$(this).siblings(".answer").hide();
	 }
});

// $( ".fas" ).on( "click", function( event ) {
// 	cosole.log(event);
// });

function showAnswer(){

}

function hideAnswer(){

}