let score = 0;
let game = false;
let time = 10;

function tap() {
    if (game == false) {
        game = true;
        time = 10;
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
                let cps = score/10
                alert("You got a score of " + score + "\nYour CPS is " + cps)
                game = false;
                document.getElementById("prompt").style.visibility = "visible"
            }
        }, 1000);
    } else {
        score += 1;
        document.getElementById("score").textContent = "Score: " + score
    }
}
