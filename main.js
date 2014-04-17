var daysOfWeek = [{day: 'Sunday'},
	{day: 'Monday'},
	{day: 'Tuesday'},
	{day: 'Wednesday'},
	{day: 'Thursday'},
	{day: 'Friday'},
	{day: 'Saturday'}];

$(document).on('ready', function() {

  	// ELEMENT CONSTRUCTION
  	var apptBlock = $('<div class="appt-block">');
  	var day = $('<div class="day">');
  	var date = $('<div class="date">');
  	var appts = $('<div class="appts">');
  	var apptBtn = $('<button class="appt-btn">');
  	var input = $('<input type="text" class="input">');

  	// EVENT HANDLERS
  	

  	$(document).on('click', '.appt-btn', function(){
  		// var input = $('<input type="text" class="input">');

  		// console.log('button clicked');
  		$(this).siblings('.appts').append(input);
  		input.focus();
  	
  	});


  	$(document).on('keydown', '.input', function(e){

  		if(($(this).val() !== '') && (e.keyCode === 13)){
  			var appt = $('<p class="appt">');
  			// console.log($(this).val());
  			$(this).closest('.appts').append(appt);
  			appt.text($(this).val());
  			$(this).val('');
  			$(this).remove();
  		}

  	});


// MAIN
var count = 0;
for (var i=0; i<7; i++){

	apptBlock = $('<div class="appt-block">');
	day = $('<div class="day">');
	date = $('<div class="date">');
	appts = $('<div class="appts">');
	apptBtn = $('<button class="appt-btn">');

	
	var d = new Date(); //Create new date object
	var dateNum = (d.getDate())+count; //get day of the month (from 1-31)
	console.log('a', dateNum);
	var dWord = (d.getDay()) + count;
	// var dayWord = daysOfWeek[(d.getDay())+/*count*/].day; //get day of the week (from 0-6) and pull day property from dayOfWeek array
	console.log('c', dayWord);

	if(count > 6){
		d.setDay(0);
	// 	console.log('b', d.getDay());
	// 	count = 0;
		var dayWord = daysOfWeek[/*(d.getDay())+ */count].day; //get day of the week (from 0-6) and pull day property from dayOfWeek array

		// var dayWord = daysOfWeek[(d.getDay())+count].day;
	}
	else{
		var dayWord = daysOfWeek[/*(d.getDay())+ */count].day; //get day of the week (from 0-6) and pull day property from dayOfWeek array

	}

	day.text(dayWord);
	date.text(dateNum);

	$('.container').append(apptBlock);
	apptBlock.append(day).append(date).append(appts).append(apptBtn);

	count++;
}

// var d = new Date(); //Create new date object
// var dateNum = d.getDate(); //get day of the month (from 1-31)
// var dayWord = daysOfWeek[d.getDay()].day; //get day of the week (from 0-6) and pull day property from dayOfWeek array

// day.text(dayWord);
// date.text(dateNum);



});