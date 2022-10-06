var blueCar = document.querySelector("#bluecar");
var raceCar = document.querySelector("#race-car");
var result = document.querySelector("#result");
const score = document.querySelector("#score");
var game = document.querySelector("#game");
var counter = 0;
var sound = document.querySelector("#sound");
var restart = document.querySelector("button")

blueCar.addEventListener("animationiteration",function(){
    var random = ((Math.floor(Math.random() * 3)) *130);
    blueCar.style.left = random + "px";
    counter++

})

window.addEventListener("keydown",function(e){
   if(e.keyCode == "39"){
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
    sound.play();
   }

    if(raceCarLeft < 260){
        raceCar.style.left = (raceCarLeft + 130) + "px";

    }

    if(e.keyCode == "37"){
        sound.play();
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));

        if(raceCarLeft > 0 ){
            raceCar.style.left = (raceCarLeft - 130) + "px";
    
        }
    }

    if(e.keyCode === 13){
        location.reload()
    }
    // console.log(e.keyCode)
       
})



setInterval(function gameover(){

    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"));
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));

    if((blueCarLeft === raceCarLeft) && (blueCarTop > 250) && (blueCarTop < 450 ) ){
        
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score : ${counter}`;
        counter = 0;

    }

},10)



