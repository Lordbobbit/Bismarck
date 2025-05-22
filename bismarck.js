const imageCount = 12;
let manfred = new Audio("asdf.mp3");
const basePath = "images/";

function play() {
    manfred.play();
}   
    let counter = 0;
    const myBody = document.createElement("body");
    const image = document.createElement("img");
    myBody.appendChild(image);
    image.onclick = play;
setInterval(() => {
    image.src = basePath + (++counter) + ".jpg";
    manfred.volume = (1.0 / imageCount) * (counter);
    if(counter >= imageCount) {
        counter = 0;
    }
}, 500);


document.body = myBody;

