// "use strict";
//home
let left = $("#navItems").outerWidth()
$("#cornerNav").css("left", `-${left}px`);

$(".leftIcon ,#navItems i").click(function () {
    if ($("#cornerNav").css("left") == `-${left}px`) {

        $("#cornerNav").animate({ left: `0px` }, 1000)
        $("#textHome").animate({ marginLeft: `${left}px` }, 1000)
    }
    else {
        $("#cornerNav").animate({ left: `-${left}px` }, 1000)
        $("#textHome").animate({ marginLeft: `0px` }, 1000)
    }

})

//details
$(".singer").click(function () {
    $(this).siblings().slideToggle()
    $(this).parent().siblings().find(".singerBody").slideUp()
})

//duration
setInterval(timerDown, 1000);

function timerDown() {
    let myDate = new Date();
    let eventDate = new Date(2022, 7, 10) /* 2022/8/10 */
    let restOfDays = eventDate.getDate() - myDate.getDate() - 1;//"-1" because if  is Date(2022, 5, 24) and my day is(2022Y,5M,23D,23H), restOfDays will equal "1" and it must be "0"
    let restOfHours = 24 - myDate.getHours() - 1 //"-1" because if the time is (10:59) ,method getHours() will return 10
    let restOfMinutes = 60 - myDate.getMinutes() - 1 //"-1" because if the time is (10:10:59) ,method getMinutes() will return 10
    let restOfSeconds = 60 - myDate.getSeconds() - 1 //"-1" because if the seconds are (60) ,method getHours() will return 60
    if (eventDate.getMonth() > myDate.getMonth()) {
        let numberOfMonth = eventDate.getMonth() - myDate.getMonth()
        restOfDays = 30 - myDate.getDate() - 1 + eventDate.getDate() + (numberOfMonth - 1) * 30
    }
    restOfDays = (restOfDays < 10) ? "0" + restOfDays : restOfDays;
    restOfHours = (restOfHours < 10) ? "0" + restOfHours : restOfHours;
    restOfMinutes = (restOfMinutes < 10) ? "0" + restOfMinutes : restOfMinutes;
    restOfSeconds = (restOfSeconds < 10) ? "0" + restOfSeconds : restOfSeconds;

    $("#days").find("p").html(`${restOfDays} D`)
    $("#hours").find("p").html(`${restOfHours} h`)
    $("#minutes").find("p").html(`${restOfMinutes} m`)
    $("#seconds").find("p").html(`${restOfSeconds} s`)
}

// contact
$("textarea").keyup(function () {
    let maxNum = 100;
    let message = $("textarea").val()
    let charReamining = maxNum - message.length;
    $(".contactForm span").html(charReamining)
})

$("#navItems a").click(function () {
    let sectionID = $(this).attr("href");
    let top = $(sectionID).offset().top
    if (top > $("#home").offset().top) {
        $("#navItems").css({ "position": "fixed" })
    }
    $("html , body").animate({
        scrollTop: top
    }, 500);
})
