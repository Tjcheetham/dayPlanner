// $(this).siblings(".text").val()

// var letterBtn = $("<button>");

// var date = new Date();
// $(".date").innerHTML = date;

var date = new Date();
//document.getElementById("date").innerHTML = date;
// Why won't this work??
     $("#date").text(date);

// var entryInput = $("#text");

$(".save").on("click", function () {
    console.log("clicked");
   var entryInput = $(this).siblings(".text").val().trim();
   var timeSlot = $(this).siblings(".text").attr("id");
   console.log(entryInput);
    localStorage.setItem(timeSlot, entryInput);
});


function checkTime () {
console.log("check time running");
    var currentHour = moment().hours();
    console.log("currentHOur", currentHour);
 

$(".time-slot").each(function () {
    var timeSlot = $(this).children(".text").attr("id");
    var textArea = $(this).children(".text")
   
    console.log("TimeSlot", timeSlot);
    console.log("timeslot loop running")
    console.log(this);

    if (timeSlot < currentHour) {
       textArea.addClass("grey");
    }
    else if (timeSlot == currentHour){
        textArea.removeClass("grey");
        textArea.addClass("red");
    }
    else  {
        textArea.removeClass("grey");
        textArea.removeClass("red");
        textArea.addClass("green");
    }
    

})
   //conditional statements to compare actual time with time on id if greater than time on id it will add class red

   //else add class green
}

$("#9").val(localStorage.getItem('9'));
$("#10").val(localStorage.getItem('10'));
$("#11").val(localStorage.getItem('11'));
$("#12").val(localStorage.getItem('12'));
$("#13").val(localStorage.getItem('13'));
$("#14").val(localStorage.getItem('14'));
$("#15").val(localStorage.getItem('15'));
$("#16").val(localStorage.getItem('16'));
$("#17").val(localStorage.getItem('17'));
checkTime();