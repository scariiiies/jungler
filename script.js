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
const buttonno = document.getElementById("buttonno")
const buttonyes = document.getElementById("buttonyes")
const meme1 = document.getElementById("memes1")
const meme2 = document.getElementById("memes2")
const meme3 = document.getElementById("memes3")
const boom = document.getElementById("boom")
const added = document.getElementById("added")

function fadeouting(){
    quitBtn.classList.add("animate__animated", "animate__bounceOut", "none")
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
    setTimeout(() => {
 buttonno.classList.add("show", "animate__animated", "animate__wobble")
 buttonyes.classList.add("show", "animate__animated", "animate__wobble")
}, 1000)


})

let clickCount = 0

function moveButton(event){
            event.preventDefault(); 

            clickCount ++

            if (clickCount >= 3){
               meme1.classList.add("show", "animate__animated", "animate__rollIn");

               setTimeout(() => {
               meme1.classList.add("animate__animated", "animate__rollOut")
               },2000)
            }


            if (clickCount >= 5){
               meme2.classList.add("show", "animate__animated", "animate__rotateIn");

               setTimeout(() => {
               meme2.classList.add("animate__animated", "animate__rollOut")
               },2000)
            }

            if (clickCount >= 8){
               meme3.classList.add("show", "animate__animated", "animate__rotateIn");

               setTimeout(() => {
               meme3.classList.add("animate__animated", "animate__rollOut")
               },2000)
            }



            const maxX = 300 - buttonno.offsetWidth;
            const maxY = 300 - buttonno.offsetHeight;

            const randomX = Math.max(0, Math.random() * maxX);
            const randomY = Math.max(0, Math.random() * maxY);

            buttonno.style.transform = 'none'; 
            
            buttonno.style.left = `${randomY}px`;
            buttonno.style.top = `${randomX}px`;
        }

        buttonno.addEventListener('touchstart', moveButton);
        
        buttonno.addEventListener('click', moveButton);

function yesButton(event) {
            boom.classList.add("show");

            setTimeout(() => {
            window.location.href="plans.html"
            }, 200);
}

function Plusbtn(){
    alert('Upgrade unsuccessful')

    setTimeout(() => {
        alert('Reason: user already owns this plan.')
    }, 200);
}

function ProButton(){
    addy.classList.add("show")

    setTimeout(() => {
        addy.classList.add("wow")
    }, 1200);

}

function quitid(){
    addy.classList.remove("show")
}