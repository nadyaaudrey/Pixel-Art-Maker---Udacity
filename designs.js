// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
// Your code goes here!
	var canvas = $('#pixelCanvas');
	var height = $('#inputHeight').val();
	var weight = $('#inputWeight').val();

	canvas.children().remove();

	for(var i=0; i<height; i++){
		canvas.append('<tr></tr>');
	}

	rows=$('tr');

	for(var j=0; j<weight; j++){
		rows.append('<td></td>');
	}
	
	square = canvas.find('td');

	square.click(function() {
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

var submit = $('input[type="submit"]');
submit.click(function(e){
	e.preventDefault();
	makeGrid();
});
