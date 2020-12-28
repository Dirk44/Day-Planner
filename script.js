$(document).ready(function(){
    var day = moment().format('DD');
    var month = moment().format('MMM');
    var year = moment().format('YYYY');
    var hour = moment().format('HH');

    var today = month + day + year;

    var appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    // functions

    function start() {
        $("#currentDay").append(today);
        times()
    };

    function times() {
        var timeBlocks = $(".conntainer");
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
                id: 1
            },
            {
                value: "2PM",
                id: 2
            },
            {
                value: "3PM",
                id: 3
            },
            {
                value: "4PM",
                id: 4
            },
            {
                value: "5PM",
                id: 5
            },
        ]
    }

    for (var i = 0; i < hours.length; i++) {
          ;
        
    }


});