
const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body')
}
let intervalId = null

refs.startBtn.addEventListener('click', startBgSwitch)

refs.stopBtn.addEventListener('click', stopBgSwitch)

function swithBgColor() {
    refs.body.style.backgroundColor = getRandomHexColor()
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startBgSwitch() {
    refs.startBtn.setAttribute('disabled', 'disabled')
    intervalId = setInterval(swithBgColor, 1000)
}

function stopBgSwitch() {
    refs.startBtn.removeAttribute('disabled')
    clearInterval(intervalId)
}

