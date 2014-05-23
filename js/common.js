$(document).ready(function(){
    $(".menu").on('tap',toggleMenu);
    setLinks();
});

function toggleMenu() {
    $(".nav-bar-expanded").toggle();
}

function setInactive(index,ele) {
    if(!$(ele).hasClass("inactive")) {
        $(ele).addClass("inactive");
    }
}

function setLinks() {

    $(".event-details").on("tap",function(){
        $.each($(".content>div"),setInactive);
        $("header .heading").text("June 21-23, 2014");
        $("#event-details").removeClass("inactive");
    })

    $("#mi-quotes").on("tap",function(){
        toggleMenu();
        $.each($(".content>div"),setInactive);
        $("header .heading").text("Quotes");
        $("#quotes").removeClass("inactive");
    })

    $("#mi-answers").on("tap",function(){
        toggleMenu();
        $.each($(".content>div"),setInactive);
        $("header .heading").text("Answers");
        $("#answers").removeClass("inactive");
    })

    $("#mi-events").on("tap",function(){
        toggleMenu();
        $.each($(".content>div"),setInactive);
        $("header .heading").text("Events");
        $("#events").removeClass("inactive");
    })  

    $("#mi-images").on("tap",function(){
        toggleMenu();
        $.each($(".content>div"),setInactive);
        $("header .heading").text("Images");
        $("#images").removeClass("inactive");
    })

    $("#mi-about").on("tap",function(){
        toggleMenu();
        $.each($(".content>div"),setInactive);
        $("header .heading").text("About");
        $("#about").removeClass("inactive");
    })

    $("#mi-contact").on("tap",function(){
        toggleMenu();
        $.each($(".content>div"),setInactive);
        $("header .heading").text("Contact");
        $("#contact").removeClass("inactive");
    })

    $("#mi-profile").on("tap",function(){
        toggleMenu();
        $.each($(".content>div"),setInactive);
        $("header .heading").text("My Profile");
        $("#profile").removeClass("inactive");
    })

}