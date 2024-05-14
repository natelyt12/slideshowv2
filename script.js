let mainAudio = document.getElementById('main')
let ee = document.getElementById('ee')
let infocon = document.getElementById('info-container')

function start() {
    let startbtn = document.getElementById('start')
    let controlcon = document.getElementById('control')
    let uwu = document.getElementsByClassName("uwu-con")[0]
    startbtn.style.background = 'white'
    startbtn.style.transition = '500ms'
    startbtn.style.color = 'black'
    controlcon.style.transform = 'translateX(-250px)'
    controlcon.style.transition = 'all 1000ms cubic-bezier(0.610, 0.025, 0.870, 0.620)'
    infocon.style.transform = 'translateX(-250px)'
    infocon.style.transition = 'all 1000ms cubic-bezier(0.610, 0.025, 0.870, 0.620)'
    uwu.style.transform = 'translateX(-250px)'
    uwu.style.transition = 'all 1000ms cubic-bezier(0.610, 0.025, 0.870, 0.620)'
    mainAudio.play()
    letsgo()
}

document.getElementById('video').addEventListener("click", () => {
    var toggle = document.getElementsByClassName("uwu-con")[0];
    toggle.classList.toggle('on');
})

document.getElementById('info').addEventListener("click", () => {
    var toggle = document.getElementById("info-container");
    toggle.classList.toggle('on');
})

function letsgo() {
    let notes = document.getElementsByClassName('notes')[0]
    notes.style.opacity = '100%'
    setTimeout(() => {
        notes.style.opacity = '0%'
    }, 7000);
}