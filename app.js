document.addEventListener("DOMContentLoaded", function(){

    var buttons = document.querySelectorAll(".moveBallButton");

    for(var i = 0; i<buttons.length; i++){
        var ballBlue = document.querySelector(".ballBlue");
        var ballRed = document.querySelector(".ballRed");
        var ballYellow = document.querySelector(".ballYellow");
        var ballGreen = document.querySelector(".ballGreen");
        buttons[i].addEventListener("click", function(){
            if(this.style.backgroundColor === "blue"){
                ballBlue.classList.toggle("ballMove");
            }else if(this.style.backgroundColor === "red"){
                ballRed.classList.toggle("ballMove2");
            }else if(this.style.backgroundColor === "yellow"){
                ballYellow.classList.toggle("ballMove3");
            }else if(this.style.backgroundColor === "green"){
                ballGreen.classList.toggle("ballMove4");
            }
        })
    }
})