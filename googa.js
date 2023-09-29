const PotatoDog = document.getElementById('PotatoDog');
const mud = document.getElementById('mud');
const mud1 = document.getElementById('mud1');
const mud2 = document.getElementById('mud2');
const questions = ["(3n+2)(n+3). Simplify it!", 
                    "If radius of a circle is 9yd then what is the Area? Use pi 3.14",
                    "From a point on the ground 47 feet from the foot of a tree, the angle of elevation of the top of the tree is 35°. Find the height of the tree to the nearest foot.",
                    "Find the derivative of 5n^2.",
                    "n^2+5n-24. Find n."]
let answer;
let random2;
let random = Math.floor(Math.random() * 5);
let counter = 0;

newquestionstart();
document.getElementById("submit").onclick = function() {
    answer = document.getElementById('input').value;
    checkanswer();
}

function potatowalk() {
    if(counter == 0) {
        PotatoDog.classList.add('potatowalk');
        counter = counter+1;
    }
    else if(counter == 1) {
        PotatoDog.classList.add('potatowalk2');
        counter = counter+1;
    }
    else{
        PotatoDog.classList.add('potatowalk3');
    }
    
}
function newquestionstart() {
    document.getElementById('prompt').innerHTML = questions[random]
}
function newquestion() {
    randomquestion();
    document.getElementById('prompt').innerHTML = questions[random]
}

function randomquestion() {
        random = Math.floor(Math.random() * 5);
}

function wrong() {
    document.getElementById('wrong').innerHTML = "Sorry that's wrong. Please try again!"
    setTimeout(()=>{
        document.getElementById('wrong').innerHTML = ""
    },2000)

}

function checkanswer() {
     if(random == 0){
        if(answer == "3n^2+11n+6") {
            console.log("That's Right!")
            potatowalk();
            newquestion();
        }
        else {
            wrong();
        }
    }
    else if(random == 1){
        if(answer == "254.34") {
            console.log("That's Right!")
            potatowalk();
            newquestion();
        }
        else {
            wrong();
        }
    }
    else if(random == 2){
        if(answer == "33") {
            console.log("That's Right!")
            potatowalk();
            newquestion();
        }
        else {
            wrong();
        }
    }
    else if(random == 3){
        if(answer == "10n") {
            console.log("That's Right!")
            potatowalk();
            newquestion();
        }
        else {
            wrong();
        }
    }
    else if(random == 4){
        if(answer == "3,-8") {
            console.log("That's Right!")
            potatowalk();
            newquestion();
        }
        else {
            wrong();
        }
    };
}
setInterval(()=>{
    const mudTop = parseInt(window.getComputedStyle(mud)
    .getPropertyValue('top'));
    const mud1Top = parseInt(window.getComputedStyle(mud1)
    .getPropertyValue('top'));
    const mud2Top = parseInt(window.getComputedStyle(mud2)
    .getPropertyValue('top'));
    const PotatoDogLeft = parseInt(window.getComputedStyle(PotatoDog)
    .getPropertyValue('left'));
    console.log(mud1Top)
    if(mudTop > 664) {
        mud.style.visibility = "hidden";
    }
    if(mud1Top > 500) {
        mud1.style.visibility = "hidden";
    }
    if(mud2Top > 400) {
        mud2.style.visibility = "hidden";
    }
    if(mudTop > 600 && mudTop < 664 && PotatoDogLeft < 200) {
        alert("Game Over!")
        location.reload
    };
    if(mud1Top > 400 && mud1Top < 500 && PotatoDogLeft < 350) {
        alert("Game Over!")
        location.reload
    };
    if(mud2Top > 300 && mud2Top < 400 && PotatoDogLeft < 700) {
        alert("Game Over!")
        location.reload
    };
    if(PotatoDogLeft == 810) {
        alert("POTATO VICTORY")
        window.location.href = "https://shattereddisk.github.io/rickroll/rickroll.mp4"
    }

},50)
