

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Get the current time
let currentTime = new Date();
// Loop through each hour slot
$('[id^=hour]').each(function() {
  // Get the hour represented by this slot
  let hour = parseInt($(this).attr('id').split('-')[1]);
  console.log(hour)
 // Set the background color based on whether the slot is in the past, present, or future
  if (hour < currentTime.getHours()) {
    $(this).addClass('past');
  } else if (hour === currentTime.getHours()) {
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  }
});

var saveBtn = $('.btn')
console.log(saveBtn)
saveBtn.on('click', function (event) {
event.preventDefault();
//this is the button
var getValue = $(this).siblings("textarea").val();
var getHour = $(this).parent().attr("id");
console.log(getHour)
//var input = $('.description').val()
//console.log(input);

 // console.log($('#input').val());

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

 localStorage.setItem(getHour, getValue);

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  
});

$(document).ready(function() {
  // get the current date and time and format it
  var formattedDate = dayjs().format('dddd, MMMM, d');
  // set the formatted date and time as the content of the time tag
  $('#currentDay').text(formattedDate);
});
