let mainAudio = document.getElementById('main')
let ee = document.getElementById('ee')
let infocon = document.getElementById('info-container')
let notes = document.getElementById('notes')

// Image variable
let c1 = document.getElementById('c1')
let c2 = document.getElementById('c2')
let c3 = document.getElementById('c3')
let c4 = document.getElementById('c4')
let c5 = document.getElementById('c5')
let c9 = document.getElementById('c9')
let c10 = document.getElementById('c10')
let c11 = document.getElementById('c11')
let c12 = document.getElementById('c12')
let c13 = document.getElementById('c13')
let c14 = document.getElementById('c14')
let c15 = document.getElementById('c15')

function start() {
    let startbtn = document.getElementById('start')
    let controlcon = document.getElementById('control')
    let uwu = document.getElementsByClassName("uwu-con")[0]
    let progress = document.getElementById('progress')
    setTimeout(() => {
        progress.style.width = '100%'
    }, 1000);
    startbtn.style.background = 'white'
    startbtn.style.transition = '500ms'
    startbtn.style.color = 'black'
    controlcon.style.transform = 'translateX(-250px)'
    controlcon.style.transition = 'all 1000ms cubic-bezier(0.610, 0.025, 0.870, 0.620)'
    infocon.style.transform = 'translateX(-250px)'
    infocon.style.transition = 'all 1000ms cubic-bezier(0.610, 0.025, 0.870, 0.620)'
    uwu.style.transform = 'translateX(-300px)'
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
    notes.style.opacity = '100%'
    setTimeout(() => {
        notes.style.opacity = '0%'
    }, 7000);

    setTimeout(() => {
        notes.style.width = '0%'
        c1.style.width = '100%'
    }, 7900);
    setTimeout(() => {
        c1.style.width = '0%'
        c2.style.width = '100%'
    }, 9100);
    setTimeout(() => {
        c2.style.width = '0%'
        c3.style.width = '100%'
    }, 9900);
    setTimeout(() => {
        c3.style.width = '0%'
        c4.style.width = '100%'
    }, 11100);
    setTimeout(() => {
        c4.style.width = '0%'
        c5.style.width = '100%'
    }, 11900);
    setTimeout(() => {
        c5.style.width = '0%'
        c9.style.width = '100%'
    }, 13100);
    setTimeout(() => {
        c9.style.width = '0%'
        c10.style.width = '100%'
    }, 13900);
    setTimeout(() => {
        c10.style.width = '0%'
        c11.style.width = '100%'
    }, 15100);
    setTimeout(() => {
        c11.style.width = '0%'
        c12.style.width = '100%'
    }, 15900);
    setTimeout(() => {
        c12.style.width = '0%'
        c13.style.width = '100%'
    }, 17100);
    setTimeout(() => {
        c13.style.width = '0%'
        c14.style.width = '100%'
    }, 17900);
    setTimeout(() => {
        c14.style.width = '0%'
        c15.style.width = '100%'
    }, 19100);
    setTimeout(() => {
        c15.style.width = '0%'
        c16.style.width = '100%'
    }, 19900);
    setTimeout(() => {
        c16.style.width = '0%'
        c17.style.width = '100%'
    }, 21100);
    setTimeout(() => {
        c17.style.width = '0%'
        c18.style.width = '100%'
    }, 21900);
}

// dài: 12, ngắn: 8