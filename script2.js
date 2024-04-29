var btn = document.querySelector(".btn");
var remark = document.querySelector(".remark");
var guessedAnimal = document.getElementById("guessed-animal").value;
var scoreCount = document.querySelector(".score-count");
var score = document.querySelector(".score");
var count = document.querySelector(".count");

remark.classList.add("hide");

var scoreCount = document.querySelector(".score-count");
var scoreValue = document.querySelector(".score");
var countValue = document.querySelector(".count");

var count = 0;
var score = 0;

scoreValue.innerHTML = score;
countValue.innerHTML = count;

btn.addEventListener("click", (e)=>{

    e.preventDefault();

    var guessedAnimal = document.getElementById("guessed-animal").value;

    var remark = document.querySelector(".remark");
    var remarkStm = document.querySelector(".remark-stm");
    var animalName = document.querySelector(".animal-name");
    var animalImg = document.querySelector(".animal-img");

    let animals = [
        "Lion",
            "Cheetah",
                "Grizzly Bear",
                    "Sun Bear", 
                        "Fire Ant",
                            "Poison Dart Frog"
    ];

    if (guessedAnimal == "") {
        setTimeout(()=>{
            remark.classList.remove("hide");
            remarkStm.innerHTML = "Please guess an animal";
            remark.style.backgroundColor = "red";

            setInterval(() => {
                remark.classList.add("hide");
            }, 2000);
        }, 200);
    } else {
        remark.classList.remove("hide");
        var indexNumber = Math.round(Math.random() * (animals.length -1));
        animalName.innerHTML = animals[indexNumber];
        guessedAnimal = guessedAnimal.toUpperCase();
        count++
        countValue.innerHTML = count;
        if ((animalName.innerHTML.toUpperCase()) == guessedAnimal) {
            remarkStm.innerHTML = "Congratulations! You got it right";
            remark.style.backgroundColor = "green";
            remark.style.color = "white";
            score++
            scoreValue.innerHTML = score;
            clear();
        } else {
        remarkStm.innerHTML = "Try again..."
        remark.style.backgroundColor = "red";
        remark.style.color = "white";
        clear();
        };
        animalImg.src = "images/"+animals[indexNumber]+".jpg";
    }

});

function clear() {
    document.getElementById("guessed-animal").value = "";
    console.log("cleared");
    // guessedCar = " "
}