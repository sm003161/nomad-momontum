const clock = document.querySelector("h1");

function getTime() {
    const date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
    clock.innerText = `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
    setInterval(getTime, 1000)
}

getTime();