//initialize modal
$(document).ready(function(){
	$(".modal").modal();
});

$("#submit").on("click", function(event){
	event.preventDefault();

	var newFriend = {
		name: $("#name").val().trim(),
		photo: $("#photo").val().trim(),
		scores: [
			$("#question1").val(), 
			$("#question2").val(), 
			$("#question3").val(), 
			$("#question4").val(), 
			$("#question5").val(), 
			$("#question6").val(), 
			$("#question7").val(), 
			$("#question8").val(), 
			$("#question9").val(), 
			$("#question10").val()
		]
	};

	// for (var i = 0; newFriend.scores.length; )

	$.post("/api/friends", newFriend, function(data){
		$("#matchName").html(data.name);
		$("#matchPhoto").attr("src", data.photo);
		$("#modalResult").modal("open");
	});

	//clear form 
	$("#name").val("");
	$("#photo").val("");
	$("#question1").val(""), 
	$("#question2").val(""), 
	$("#question3").val(""), 
	$("#question4").val(""), 
	$("#question5").val(""), 
	$("#question6").val(""), 
	$("#question7").val(""), 
	$("#question8").val(""), 
	$("#question9").val(""), 
	$("#question10").val("")

})


