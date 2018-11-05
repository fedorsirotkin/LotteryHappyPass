function IsNumeric(n)
{
    return !isNaN(n);
} 

$(function()
{
    $('#getit').click(function()
	{
        var numLow = $('#lownumber').val();
        var numHigh = $('#highnumber').val();
        var adjustedHigh = (parseFloat(numHigh) - parseFloat(numLow)) + 1;
        var numRand = Math.floor(Math.random()*adjustedHigh) + parseFloat(numLow);
        if ((IsNumeric(numLow)) && (IsNumeric(numHigh)) && (parseFloat(numLow) <= parseFloat(numHigh)) && (numLow != '') && (numHigh != ''))
		{
            $('#randomnumber').text(numRand);
			//textarea считать в array
			var arrayOfLines = $('#fileOutput').val().split('\n');
			var found = 0;
			for (var i = 0; i < arrayOfLines.length; i++)
			{
				if (parseInt(numRand) == (parseInt(arrayOfLines[i])))
				{
					found = 1;
					break;
				}
					
			}
			if (found == 1)
			{
				$('#answer').text('Этот билет выигрышный');
			}
			else
			{
				$('#answer').text('Увы, такого билета нет!');	
			}	
        }
		else
		{
            $('#randomnumber').text('Опаньки... что-то пошло не так!');
			$('#answer').text('');
        }
        return false;
    });
    $('input[type=text]').each(function()
	{
        $(this).data('first-click', true);
    });
    
    $('input[type=text]').focus(function()
	{
       
        if ($(this).data('first-click')) {
            $(this).val('');
            $(this).data('first-click', false);
            $(this).css('color', 'black');
        }
    });
});

function processFiles(files) {
    var file = files[0];
	var reader = new FileReader();
	reader.onload = function (e) {
    // Когда это событие активируется, данные готовы.
    // Вставляем их в страницу в элемент <div>
    var output = document.getElementById('fileOutput');   
    output.textContent = e.target.result;
	};
	reader.readAsText(file);
};
