// Wraps all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering html elements
$(document).ready(function () {
  //code to display the current date in the header of the page.

  var displayDate = document.querySelector("#currentDay");
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");

  displayDate.textContent = currentDate;

  //save tasks to local storage and display in the hour area

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

  //HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
});
