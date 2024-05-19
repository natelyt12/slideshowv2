let mainAudio = document.getElementById('main')
let ee = document.getElementById('ee')
let infocon = document.getElementById('info-container')
let notes = document.getElementById('notes')

// Image variable
let c1 = document.getElementById('c1')
let c2 = document.getElementById('c2')
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
    }, 4000);
    progInf()
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

// Is a fake load XD:)
function progInf() {
    let prog = document.getElementById('progress-info')
    prog.innerText = 'Waiting...'
    setTimeout(() => {
        prog.innerText = 'Optimizing...'
    }, 4500);
    setTimeout(() => {
        prog.innerText = 'Loading images...'
    }, 5000);
    setTimeout(() => {
        prog.innerText = 'Loading video...'
    }, 11000);
    setTimeout(() => {
        prog.innerText = 'Loading animation...'
    }, 14000);
    setTimeout(() => {
        prog.innerText = 'Optimizing again...'
    }, 15000);
    setTimeout(() => {
        prog.innerText = 'Done'
    }, 16500);
}

document.getElementById('video').addEventListener("click", () => {
    document.getElementsByClassName('image-slideshow')[0].style.transform = 'translate(-50%,-50%) scale(130%)'
})

document.getElementById('info').addEventListener("click", () => {
    var toggle = document.getElementById("info-container");
    toggle.classList.toggle('on');
})

function letsgo() {
    setTimeout(() => {
        notes.style.opacity = '100%'
    }, 2000);
    setTimeout(() => {
        notes.style.opacity = '0%'
    }, 17600);

    // Slide here
    setTimeout(() => {
        notes.style.width = '0%'
        c1.style.width = '100%'
    }, 19000);
    setTimeout(() => {
        c1.style.width = '0%'
        c2.style.width = '100%'
    }, 21000);
    setTimeout(() => {
        c2.style.width = '0%'
        c4.style.width = '100%'
    }, 23000);
    setTimeout(() => {
        c4.style.width = '0%'
        c5.style.width = '100%'
    }, 25000);
    setTimeout(() => {
        c5.style.width = '0%'
        c9.style.width = '100%'
    }, 27000);
    setTimeout(() => {
        c9.style.width = '0%'
        c10.style.width = '100%'
    }, 29000);
    setTimeout(() => {
        c10.style.width = '0%'
        c11.style.width = '100%'
    }, 31000);
    setTimeout(() => {
        c11.style.width = '0%'
        c12.style.width = '100%'
    }, 33000);
    setTimeout(() => {
        c12.style.width = '0%'
        c13.style.width = '100%'
    }, 35000);
    setTimeout(() => {
        c13.style.width = '0%'
        c14.style.width = '100%'
    }, 37000);
    setTimeout(() => {
        c14.style.width = '0%'
        c15.style.width = '100%'
    }, 39000);
}

// 2