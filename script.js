let mainAudio = document.getElementById('main')
let ee = document.getElementById('ee')

function start() {
    let startbtn = document.getElementById('start')
    let controlcon = document.getElementById('control')
    let infocon = document.getElementById('info-container')
    startbtn.style.background = 'white'
    startbtn.style.transition = '500ms'
    startbtn.style.color = 'black'
    controlcon.style.transform = 'translateX(-250px)'
    controlcon.style.transition = 'all 1000ms cubic-bezier(0.610, 0.025, 0.870, 0.620)'
    infocon.style.transform = 'translateX(-250px)'
    infocon.style.transition = 'all 1000ms cubic-bezier(0.610, 0.025, 0.870, 0.620)'
    mainAudio.play()
    ee.pause()
}

function video() {
    ee.play()
}

document.getElementById('info').addEventListener("click", () => {
    var toggle = document.getElementById("info-container");
    toggle.classList.toggle('on');
})