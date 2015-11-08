var app = function(){

	$('#solution1-idA, #solution1-idB, #solution1-idC').keyup(function(){
   		$("#solution1-result").text(
   			solution1(
   				$("#solution1-idA").val(),
   				$("#solution1-idB").val(),
   				$("solution1-#idC").val()
   			)
   		);
	});

	$('#solution2-idA, #solution2-idB').keyup(function(){
   		$("#solution2-result").text(
   			solution2(
   				$("#solution2-idA").val(),
   				$("#solution2-idB").val()
   			)
   		);
	});

}

$(document).ready(app);
