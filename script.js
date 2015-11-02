var app = function(){

	$('#idA, #idB, #idC').keyup(function(){
   		$("#result").text(
   			solution1(
   				$("#idA").val(),
   				$("#idB").val(),
   				$("#idC").val()
   			)
   		);
	});

}

$(document).ready(app);
