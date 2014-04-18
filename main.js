// var daysOfWeek = [{day: 'Sunday'},
// 	{day: 'Monday'},
// 	{day: 'Tuesday'},
// 	{day: 'Wednesday'},
// 	{day: 'Thursday'},
// 	{day: 'Friday'},
// 	{day: 'Saturday'}];




$(document).on('ready', function() {

	// INITIALIZE CALENDAR
	var count = 0;
	var d = new Date(); //Create new date object
	var dateNum = d.getDate(); //get day of the month (from 1-31)
	var dateTime = d.getTime();

  	// ELEMENT CONSTRUCTION
  	// var apptBlock = $('<div class="appt-block">');
  	// var day = $('<div class="day">');
  	// var date = $('<div class="date">');
  	// var appts = $('<div class="appts">');
  	// var apptBtn = $('<button class="appt-btn">');
  	// var input = $('<input type="text" class="input">');

  	// EVENT HANDLERS
  	
  	// Add appointment input box
  	$(document).on('click', '.appt-btn', function(){
  		var input = $('<input type="text" class="input">');

  		// console.log('button clicked');
  		$(this).siblings('.appts').append(input);
  		input.focus();
  	
  	});

  	// On enter 'pin' appointment to appt-block, clear and remove input box.
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

// Temporary n-days load solution
// var dWord = d.getDay();



// IMPURE FUNCTION - depends on global initialize variables
var createWeek = function(){
	for (var i=0; i<7; i++){

	var apptBlock = $('<div class="appt-block">');
	// var day = $('<div class="day">');
	var date = $('<div class="date">');
	var appts = $('<div class="appts">');
	var apptBtn = $('<button class="appt-btn">');

	// day.text((daysOfWeek[d.getDay()]).day); //M-F
	date.text(d.toDateString()); //Mon # Year
	// d.getMonth() + ' ' + d.getDate() + ' ' + d.getFullYear()
	
	$('.container').append(apptBlock);
	apptBlock.append(date).append(appts).append(apptBtn);

	count++;
	var upDate = dateNum + count;
	d.setDate(upDate);
	var upTime = dateTime + (86400000 * count);
	d.setTime(upTime);
	}
}

	while($(document).height() <= $(window).height()){
		createWeek(); //Call function within scrolling event handler
	}


$(document).on('scroll', function(){
	if(($(document).scrollTop() + $(window).height()) >= ($(document).height() * 0.9)){
		createWeek();
		console.log($(document).scrollTop());
		console.log($(window).height());
		console.log($(document).height());
	}
	

});


});