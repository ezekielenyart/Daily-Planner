$("#currentDay").text(moment().format("MMMM Do YYYY"));


// create a row for column labels
// create a for loop to create 8 time block rows
// use $() to create 

function buildRow(hour) {
    var NOW = moment(hour, "H");

    var timeBlock = $("<div>")
    timeBlock.addClass("row time-block")

    var hourEl = $("<div>")
    hourEl.addClass("hour col-1")
    hourEl.text(NOW.format("hA"))

    var description = $("<textarea>")
    description.addClass("description present col-10")

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