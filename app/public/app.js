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
	if (newFriend.name === "" ){
		alert("Please enter your name.  We need to know who you are to find you a match.");
		return;
	}
	if (newFriend.photo === ""){
		alert("Please give us a photo link.  We really need to know what you look like to find you a good coding buddy!");
		return;
	}

	//make sure all questions are answered
	for (var i = 0; i < newFriend.scores.length; i++) {
		if (newFriend.scores[i] === null) {
			alert("Please fill in question " + (i + 1));
			return;
		}
	};
	//post new friend data, get match data back and insert into modal
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


