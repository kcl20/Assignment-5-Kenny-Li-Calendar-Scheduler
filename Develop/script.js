// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // FOR loop to create the time blocks for standard working hours

  var container = $(".container-fluid");
  var savedEvents = [];

  for(var i = 9; i < 18; i++) {

  // time in 12 hour format
    if (i > 12) {
      var hour = i - 12;
      var ampm = "pm"; }
      else if (i === 12) {
        var hour = i;
        var ampm = "pm";
      }
      else {
        var hour = i;
        var ampm = "am";
      }

  // create the time block
    var newTimeBlock = document.createElement("div");
    var newTimeBlockElement = document.createElement("div");
    var newTextArea = document.createElement("textarea");
    var newButton = document.createElement("button");
    var newImage = document.createElement("i");
    newTimeBlockElement.textContent = hour + " " + ampm;
    container.append(newTimeBlock);
    newTimeBlock.append(newTimeBlockElement);
    newTimeBlockElement.after(newTextArea);
    newTextArea.after(newButton);
    newButton.append(newImage);
    var currentHour = dayjs().format('H');

  // console.log(i);
  // console.log(currentHour)
  // set attributes
    if (i < currentHour) {
      newTimeBlock.className += "row time-block past";
    } else if (i == currentHour) {
      newTimeBlock.className += "row time-block present";
    } else if (i > currentHour) {
      newTimeBlock.className += "row time-block future";
    }
    newTimeBlock.setAttribute("id", "hour-" + i);
    newTimeBlockElement.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
    newTextArea.setAttribute("class", "col-8 col-md-10 description");
    newTextArea.setAttribute("rows", "3");
    newButton.setAttribute("class", "btn saveBtn col-2 col-md-1");
    newButton.setAttribute("area-label", "save");
    newButton.setAttribute("id", i);
    newImage.setAttribute("class", "fas fa-save");
    newImage.setAttribute("area-hidden", "true");

    newButton.addEventListener("click", function(event){
      //  event.preventDefault();
        var hourClicked = event.target;
        var event_time = hourClicked.getAttribute("id");
        var event_text = hourClicked.previousSibling.value;
        var event_entry = {
          time: event_time,
          text: event_text
        }
        savedEvents.push(event_entry);
        localStorage.setItem("savedEvents", JSON.stringify(event_entry));
        // console.log(hourClicked);
        // console.log(event_time);
        // console.log(event_text);
        // console.log(event_entry);
      })

  }




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?



  // TODO: Add code to display the current date in the header of the page.
  var currentDate = dayjs().format('MMMM D, YYYY');
  $('#currentDay').text(currentDate);

  var currentHour = dayjs().format('H');
  console.log(currentHour);

});










// var events = [];

// // function to check localstorage for saved data and display it in the text area
// function init() {
// var storedEvents = JSON.parse(localStorage.getItem("Events"));

// if (storedEvents !== null) {
//   events = storedEvents;
// }

// renderEvents();
// for(var i = 9; i < 18; i++) {
//   // var event = localStorage.getItem("hour-" + i);
//   // $("#hour-" + i + " textarea").val(event);
// }




// function renderEvents() {
//   for (var i = 0; i < events.length; i++) {
//     // var event = events[i];
//     // var eventText = event.text;
//     // var eventTime = event.time;
//     // var eventTextArea = document.getElementById(eventTime);
//     // eventTextArea.value = eventText;
//   }

// }

// // call init function to retrieve data from local storage and render it to the page
// init();