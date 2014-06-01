divCount = 256;
$(document).ready(function () {



appendRows();
color();

});



function appendRows () {
loopRow = setInterval(function () {
countDiv = $("#grid > div").length;


	if (countDiv == divCount) {
		color();
		stopRows();
		return false;
		
}
	$("#grid").append('<div class="square"></div>');
	

}, 1);
 	
};

function stopRows () { 

window.clearInterval(loopRow);

};
function color () {

$("#grid > div").hover(function () {
	$(this).addClass("hover");

});

}

function sqNum () {
num = prompt ("How many squares do you want? (Max 960.)");

if (num < 61) {

	addSquares ();
} else { 

alert("Write a number that is =< 60 !")
}
};
function addCss () {

	$(".squareG").css({"height": pixH, "width": pixW});
}



function addSquares () {
$("#grid").empty();
pixW = 960/num;
pixH = pixW;
loopRow = setInterval(function () {
countSqr = $("#grid > div").length;


	if (countSqr == Math.pow(num, 2)) {
		color();
		stopRows();
		addCss();
		return false;
		
}
	$("#grid").append('<div class="squareG"></div>');
	

	

}, 1);



}










