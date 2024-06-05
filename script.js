// Wraps all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering html elements
$(document).ready(function () {
  //code to display the current date in the header of the page.

  var displayDate = document.querySelector("#currentDay");
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");

  displayDate.textContent = currentDate;

  //lets user save their inputs and display for each hour
  // listener for click events on the save button.
  $(".saveBtn").on("click", function () {
    var input = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    //use the id in the containing time-block as a key to save the user input in local storage.
    localStorage.setItem(hour, input);
  });
  console.log(localStorage);

  //code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  function showSavedInput() {
    $(".time-block").each(function () {
      var blockTime = $(this).attr("id");
      $(this).children(".description").val(localStorage.getItem(blockTime));
    });
  }
  showSavedInput();

  //function to apply the past, present, or future class to each time block by comparing the id to the current hour
  function timeTracker() {
    //get current hour
    var timeCurrent = dayjs().hour();

    //loop over time blocks
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

      //check time and add past present future classes as needed
      if (timeBlock < timeCurrent) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (timeBlock > timeCurrent) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
    });
  }

  timeTracker();

  //
});
