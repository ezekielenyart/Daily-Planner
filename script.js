// Set the time to appear first in Day, Month, Date

$("#currentDay").text(moment().format("dddd MMMM Do"));

// Create variables for dynamically spawn the table

var timeBlock = $("<div>")
var hourEl = $("<div>")
var description = $("<textarea>")
var saveBtn = $("<button>")
var saveIcon = $("<i>")
// set variable to receive the data from local storage in an object
var retrievedData = JSON.parse(localStorage.getItem("saved Data")) || {};


// create a function to build the table dynamically every time the page refreshes
function buildRow(hour) {
    var NOW = moment(hour, "H");
    var action = retrievedData[hour]
    var timeBlock = $("<div>")
    timeBlock.addClass("row  time-block")
    timeBlock.attr("data-hour", hour)

    var hourEl = $("<div>")
    hourEl.addClass("hour col-1")
    hourEl.text(NOW.format("hA"))

    var description = $("<textarea>")
    description.addClass("description col-10")
        if (moment().valueOf == NOW.value)
        description.addClass("present")
         else if (moment().valueOf > NOW.value)
        description.addClass("past");
        else {
        description.addClass("future")
        }
    description.val(action)
   
    var saveBtn = $("<button>")
    saveBtn.addClass("saveBtn col-1")

    var saveIcon = $("<i>")
    saveIcon.addClass("fas fa-save")

    saveBtn.append(saveIcon)
    timeBlock.append(hourEl, description, saveBtn)
    $(".container").append(timeBlock)


    

}

for (var i = 9; i <= 17; i++) {
    buildRow(i)
}
// var current = moment()
// if (current === moment()){
//     description.addClass("present");

// }else if (current.isAfter(moment()))
//     descripting.addClass("past")


$("button").on("click", function(){

    var bigButt = $(this).parent()
    var buttAtt = bigButt.attr("data-hour")
    var buttSoFind = bigButt.find("textarea").val()

    retrievedData[buttAtt] = buttSoFind
    
    localStorage.setItem("saved Data",JSON.stringify(retrievedData))
    console.log(typeof(retrievedData))




})
console.log(typeof(retrievedData))


