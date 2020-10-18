const body = document.querySelector("body");

const amount = "7";

function bringImg(random) {
    const image = new Image();
    image.src = `src/animals_${random + 1}.jpg`;
    image.classList.add = random + 1;
    body.prepend(image);
    image.addEventListener("loadend", () => {
        console.log("finished");
        image.style.visibility = 'visible';
    });
}

function numbersGenerate() {
    const random = Math.floor(Math.random() * amount);
    return random;
}

function init() {
    const randomNumber = numbersGenerate();
    bringImg(randomNumber);

}

init();