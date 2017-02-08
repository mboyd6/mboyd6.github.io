// check off specific todos by clicking
$("ul").on("click", "li", function() {
// if li is gray
	$(this).toggleClass("completed");
});
//Click on x to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(300, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>");
		$(this).val("");
	}

});

$(".fa-pencil-square-o").click(function(){
	$("input[type='text'").fadeToggle()
});