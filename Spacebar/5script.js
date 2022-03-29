let score = 0;
let game = false;
let time = 5;
let shouldHandleKeyDown = true;

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 32) {
        if (game == false) {
            if (!shouldHandleKeyDown) return;
            shouldHandleKeyDown = false;
            game = true;
            document.getElementById("prompt").style.visibility = "hidden"
            time = 5;
            document.getElementById("time").textContent = "Time Left: " + time
            score = 0;
            document.getElementById("score").textContent = "Score: " + score
            score += 1;
            document.getElementById("score").textContent = "Score: " + score
            inverval_timer = setInterval(function() { 
                time -= 1;
                document.getElementById("time").textContent = "Time Left: " + time
                if (time == 0) {
                    clearInterval(inverval_timer);
                    let cps = score/5
                    alert("You got a score of " + score + "\nYour CPS is " + cps)
                    document.getElementById("past").textContent = "In your last game you got a CPS of " + cps + " and a score of " + score
                    game = false;
                    document.getElementById("prompt").style.visibility = "visible"
                }
            }, 1000);
        } else {
            if (!shouldHandleKeyDown) return;
            shouldHandleKeyDown = false;
            score += 1;
            document.getElementById("score").textContent = "Score: " + score
        }
    }
});

document.addEventListener('keyup', function(event){
    shouldHandleKeyDown = true;
});