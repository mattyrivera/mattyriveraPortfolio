//hamburger menu

$(document).ready(function () {
    $(".hamburger").on("click", function () {
        $(".mainNav").removeClass("closed");
        $(".mainNav").addClass("opened");
    })

    $(".close").on("click", function () {
        $(".mainNav").removeClass("opened");
        $(".mainNav").addClass("closed");
    })
})