const $ball = document.getElementById("ball")
const $team1score = document.getElementById("score-team1")
const $team1wickets = document.getElementById("wickets-team1")
const $team2score = document.getElementById("score-team2")
const $team2wickets = document.getElementById("wickets-team2")                                                                                                                                                      
const resetbutton = document.getElementById("reset")
const strikebutton = document.getElementById("strike")

const strikeAudio = new Audio("https://i1.faceprep.in/prograd-junior/bat%2Bhit%2Bball.mp3");
const finishedAudio = new Audio("https://i1.faceprep.in/prograd-junior/Ball%2BHit%2BCheer.mp3");

var team1score = 0
var team2score = 0
var team1wickets = 0
var team2wickets = 0
var turn = 1
var ballsfaced = 0

function finished() {
    finishedAudio.play();
    if (team1score > team2score) alert("IND wins");
    if (team2score > team1score) alert("PAK wins");
    if (team2score == team1score) alert("It is another superover!");
}

resetbutton.onclick = () => {window.location.reload()
}

const outcomes = [0,1,2,3,4,5,6,"W"]

strikebutton.onclick = () => {
    strikeAudio.play();
    ballsfaced++;
    if (turn == 1) {
        var score = outcomes[Math.floor(Math.random() * outcomes.length)]
        console.log(score)
        if (score === "W"){
            team1wickets++
            $team1wickets.innerText = team1wickets
            document.querySelector(`#team1-superover .ball:nth-child(${ballsfaced})`).innerHTML = score
        }
        else{
            team1score += score
            $team1score.innerText = team1score
            document.querySelector(`#team1-superover .ball:nth-child(${ballsfaced})`).innerHTML = score        
        }
        if(ballsfaced == 6 || team1wickets == 2) {
            turn = 2
            ballsfaced = 1
        }
    }
        
    if (turn == 2) {
            var score = outcomes[Math.floor(Math.random() * outcomes.length)]
            if (score === "W"){
                team2wickets++
                $team2wickets.innerText = team2wickets
                document.querySelector(`#team2-superover .ball:nth-child(${ballsfaced})`).innerHTML = score
            }
            else {
                team2score += score
                $team2score.innerText = team2score
                document.querySelector(`#team2-superover .ball:nth-child(${ballsfaced})`).innerHTML = score
            }
            console.log(ballsfaced)
            console.log(score)
            if(ballsfaced == 6 || team2wickets == 2 || team2score>team1score) {
            turn = 3
            finishedAudio.play()
            finished()
        }
    }
}
