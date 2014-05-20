$(document).ready(function(){
    $(".menu-icon").click(toggleMenuView);
});

function toggleMenuView() {
    if($(".nav-bar-expanded").css("display") === "none"){
        $(".nav-bar-expanded").css("display","block");
    } else {
        $(".nav-bar-expanded").css("display","none");
    }
}