document.addEventListener("DOMContentLoaded",function(){

    let open_menu = document.getElementById("open");
    let transition_ele  = document.querySelector(".parent-container");
    console.log(transition_ele);
    console.log(open_menu);
    open_menu.addEventListener("click",function(e){
        e.preventDefault();
        transition_ele.classList.toggle("transition-class");


    
    });







});