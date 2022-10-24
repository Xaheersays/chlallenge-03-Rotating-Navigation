document.addEventListener("DOMContentLoaded",function(){

    let open_menu = document.getElementById("open");
    let transition_ele  = document.querySelector(".div-rotate");
    let animate = document.querySelectorAll(".common")
    
        //    rotating div
        open_menu.addEventListener("click",function(e){
        e.preventDefault();
        transition_ele.classList.toggle("transition-class");
        // animation for nav
        animate.forEach(function(obj){
            obj.classList.toggle("animation")
        });

    });


});