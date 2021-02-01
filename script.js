

$(document).ready(function () {
    var day = moment().format('DD');
    var month = moment().format('MMM');
    var year = moment().format('YYYY');
    var hour = moment().format('HH');

    var today = month + "  " + day + ", " + year;

    var appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    // functions

    function start() {
        $("#currentDay").append(today);
        times()
    };

    function times() {

        var timeBlocks = $(".container");
        var hours = [
            {
                value: "8AM",
                id: 8
            },
            {
                value: "9AM",
                id: 9
            },
            {
                value: "10AM",
                id: 10
            },
            {
                value: "11AM",
                id: 11
            },
            {
                value: "12PM",
                id: 12
            },
            {
                value: "1PM",
                id: 13
            },
            {
                value: "2PM",
                id: 14
            },
            {
                value: "3PM",
                id: 15
            },
            {
                value: "4PM",
                id: 16
            },
            {
                value: "5PM",
                id: 17
            },
        ];
        console.log(hours, "yippee!");

        // var textSpace = $(this).siblings('.description').val();
        // var time = $(this).parent().attr('id');

        //      localStorage.setItem(time, textSpace);


        $.each(hours, function (i, item) {


            //  variables to create DOM elements
            var divRow = $("<div>").attr("class", "row").attr("id", item.id);
            var divTime = $("<div>").attr("class", "col-2 text-center").text(item.value);
            var textAreaCol = $("<textarea>").attr("class", "col-8 description").attr("id", item.id + "TextArea");
            var saveBtnCol = $("<button>").attr("class", "col-2 saveBtn").attr("id", item.id + "saveBtn").html("<i class=\"far fa-save\"></i>");

            //  Append elements
            divRow.append(divTime);
            divRow.append(textAreaCol);
            divRow.append(saveBtnCol);

            if (item.id < hour) {
                divRow.attr("class", "row time-block past");
            }

            else if (item.id > hour) {
                divRow.attr("class", "row time-block future");
            }

            else {
                divRow.attr("class", "row time-block present")
            };

            timeBlocks.append(divRow);

            $.each(appointments, function (index, value) {
                $("#" + value.time + "TextArea").text(value.text);
            });
        });

    };






    // function handleClick() {







    $(document).on("click", ".saveBtn", function (event) {
        var id = $(this).attr("id");
        id = id.replace("saveBtn", "");
        var description = $("#" + id + "TextArea").val();

        appointments.push({
            time: id,
            text: description
        });

        localStorage.setItem("appointments", JSON.stringify(appointments));

        console.log("click");
    });

    start();

    console.log(start, "yippee!");

});