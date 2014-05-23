$(document).ready(function(){
    $(".menu").on('tap',toggleMenuView);
    $(".nav>li").on('tap',function(){
            toggleMenuView();
            showPage(this);
        });
});

function toggleMenuView() {
    if($(".nav-bar-expanded").css("display") === "none"){
        $(".nav-bar-expanded").css("display","block");
    } else {
        $(".nav-bar-expanded").css("display","none");
    }
}

function showPage(mi) {
    $.each($(".content>div"),setInactive);
    switch(mi.id) {
        case 'mi-quotes': 
            $("header .heading").text("Quotes");
            $("#quotes").removeClass("inactive");
            break;
        case 'mi-answers': 
            $("header .heading").text("Answers");
            $("#answers").removeClass("inactive");
            break;
        case 'mi-events': 
            $("header .heading").text("Events");
            $("#events").removeClass("inactive");
            break;
        case 'mi-images': 
            $("header .heading").text("Images");
            $("#images").removeClass("inactive");
            break;
        case 'mi-about': 
            $("header .heading").text("About");
            $("#about").removeClass("inactive");
            break;
        case 'mi-contact': 
            $("header .heading").text("Contact");
            $("#contact").removeClass("inactive");
            break;
        case 'mi-profile': 
            $("header .heading").text("My Profile");
            $("#profile").removeClass("inactive");
            break;
    }
}

function setInactive(index,ele) {
    if(!$(ele).hasClass("inactive")) {
        $(ele).addClass("inactive");
    }
}