// Set the date we're counting down to

// let Holidays = new function(name, date) {
//     this.name = name;
//     this.date = date;
// }

let counter = 0

let upcomingHolidays = [
    { name: "Test Day", date: new Date("May 17, 2021 00:00:00") },
    { name: "Arfah Day", date: new Date("Jul 19, 2021 00:00:00") },
    { name: "Eid Al Adha", date: new Date("Jul 20, 2021 00:00:00") },
    { name: "Eid Al Adha Holiday", date: new Date("Jul 21, 2021 00:00:00") },
    { name: "Eid Al Adha Holiday", date: new Date("Jul 22, 2021 00:00:00") },
    { name: "Hijri New Year's Day", date: new Date("Aug 12, 2021 00:00:00") },
    { name: "Prophet Muhammed's Birthday", date: new Date("Oct 21, 2021 00:00:00") },
    { name: "Commemoration Day", date: new Date("Dec 01, 2021 00:00:00") },
    { name: "National Day", date: new Date("Dec 02, 2021 00:00:00") },
    { name: "National Day Holiday", date: new Date("Dec 03, 2021 00:00:00") },
]



var countDownDate = upcomingHolidays[counter]['date'].getTime()
var countDownName = upcomingHolidays[counter]['name']
var currentTime = new Date().getTime();

var dateDiff = countDownDate - currentTime;

if (dateDiff < 0) {
    counter++
}

countDownDate = upcomingHolidays[counter]['date']
countDownName = upcomingHolidays[counter]['name']

// console.log(countDownName)
// console.log(countDownDate)
// console.log(currentTime)

// var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
// var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("time_left").innerHTML = days + " days " + hours + " hours "
        + minutes + " minutes " + seconds + " seconds ";

    document.getElementById("event_name").innerHTML = countDownName;
    document.getElementById("date").innerHTML = `${countDownDate.toDateString()}`;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time_left").innerHTML = "EXPIRED";
    }
}, 1000);