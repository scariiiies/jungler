const startBtn = document.getElementById("startBtn")

setTimeout(() => {
 startBtn.classList.add("show")
}, 4000)

const quitBtn = document.getElementById("quitBtn")

setTimeout(() => {
 quitBtn.classList.add("show")
}, 4000)

function quitbutton(){
    alert("wdym u wanna quit lol")
}

const intro = document.getElementById("intro")
const fish = document.getElementById("fih")
const namecontain = document.getElementById("naming-container")
const fishform = document.getElementById("fish-form")
const fishInput = document.getElementById("fish-name-input")
const responseMsg = document.getElementById("response-msg")

function fadeouting(){
    quitBtn.classList.add("animate__animated", "animate__bounceOut")
    startBtn.classList.add("animate__animated", "animate__bounceOut")
    intro.classList.add("animate__animated", "animate__bounceOut")
    fish.classList.add("show", "animate__animated", "animate__rubberBand")
    fishform.classList.add("show", "animate__animated", "animate__rubberBand")
    namecontain.classList.add("show", "animate__animated", "animate__rubberBand")
}

fishform.addEventListener("submit", (event) => {
    event.preventDefault();

    const weirdnamelol = fishInput.value.trim();

    if (weirdnamelol) {
        responseMsg.textContent = `"${weirdnamelol}"....... r u sure lol`;
        responseMsg.classList.add("show", "animate__animated", "animate__jackInTheBox");
        fishform.classList.add("animate__animated", "animate__backOutUp");
        fish.classList.add("animate__animated", "animate__backOutUp");


    }
})
