// $(this).siblings(".text").val()

// var letterBtn = $("<button>");

// var date = new Date();
// $(".date").innerHTML = date;

var date = new Date();
document.getElementById("date").innerHTML = date;

// var entryInput = document.$("#text");

$(".save").on("click", function () {
    console.log("clicked");
   var entryInput = $(this).siblings(".text").val()
    localStorage.setItem("entryInput", input.val());
});