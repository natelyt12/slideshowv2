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
let c16 = document.getElementById('c16')
let c17 = document.getElementById('c17')
let c18 = document.getElementById('c18')
let c19 = document.getElementById('c19')
let c20 = document.getElementById('c20')
let c22 = document.getElementById('c22')
let c23 = document.getElementById('c23')
let c24 = document.getElementById('c24')
let c25 = document.getElementById('c25')
let c26 = document.getElementById('c26')
let c27 = document.getElementById('c27')
let c28 = document.getElementById('c28')
let c29 = document.getElementById('c29')


function start() {
    let startbtn = document.getElementById('start')
    let controlcon = document.getElementById('control')
    let progress = document.getElementById('progress')
    let loader = document.getElementsByClassName('loader')[0]
    setTimeout(() => {
        progress.style.width = '100%'
    }, 4000);
    progInf()
    startbtn.style.background = 'white'
    startbtn.style.transition = '500ms'
    startbtn.style.color = 'black'
    loader.style.opacity = '1'
    controlcon.style.transform = 'translateX(-250px)'
    controlcon.style.transition = 'all 1000ms cubic-bezier(0.610, 0.025, 0.870, 0.620)'
    infocon.style.transform = 'translateX(-250px)'
    infocon.style.transition = 'all 1000ms cubic-bezier(0.610, 0.025, 0.870, 0.620)'
    mainAudio.play()
    letsgo()
}

// Is a fake load XD:)
function progInf() {
    let prog = document.getElementById('progress-info')
    prog.innerText = 'Waiting...'
    setTimeout(() => {
        prog.innerText = 'Optimizing?...'
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
        prog.innerText = 'Optimizing...'
    }, 15000);
    setTimeout(() => {
        prog.innerText = 'Done!'
    }, 16500);
}

document.getElementById('scale').addEventListener("click", () => {
    document.getElementsByClassName('image-slideshow')[0].style.transform = 'translate(-50%,-50%) scale(130%)'
})
document.getElementById('Noscale').addEventListener("click", () => {
    document.getElementsByClassName('image-slideshow')[0].style.transform = 'translate(-50%,-50%) scale(100%)'
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
    }, 23080);

    setTimeout(() => {
        c4.style.width = '0%'
        c5.style.width = '100%'
    }, 25160);

    setTimeout(() => {
        c5.style.width = '0%'
        c9.style.width = '100%'
    }, 27240);

    setTimeout(() => {
        c9.style.width = '0%'
        c10.style.width = '100%'
    }, 29320);

    setTimeout(() => {
        c10.style.width = '0%'
        c11.style.width = '100%'
    }, 31400);

    setTimeout(() => {
        c11.style.width = '0%'
        c12.style.width = '100%'
    }, 33480);

    setTimeout(() => {
        c12.style.width = '0%'
        c13.style.width = '100%'
    }, 35560);

    setTimeout(() => {
        c13.style.width = '0%'
        c14.style.width = '100%'
    }, 37640);

    setTimeout(() => {
        c14.style.width = '0%'
        c15.style.width = '100%'
    }, 39720);

    setTimeout(() => {
        c15.style.width = '0%'
        c16.style.width = '100%'
    }, 41800);

    setTimeout(() => {
        c16.style.width = '0%'
        c17.style.width = '100%'
    }, 43880);

    setTimeout(() => {
        c17.style.width = '0%'
        c18.style.width = '100%'
    }, 45960);

    setTimeout(() => {
        c18.style.width = '0%'
        c19.style.width = '100%'
    }, 48040);

    setTimeout(() => {
        c19.style.width = '0%'
        c20.style.width = '100%'
    }, 50120);

    setTimeout(() => {
        c20.style.width = '0%'
        c22.style.width = '100%'
    }, 52200);

    setTimeout(() => {
        c22.style.width = '0%'
        c23.style.width = '100%'
    }, 54280);

    setTimeout(() => {
        c23.style.width = '0%'
        c24.style.width = '100%'
    }, 56360);

    setTimeout(() => {
        c24.style.width = '0%'
        c25.style.width = '100%'
    }, 56360);

    setTimeout(() => {
        c25.style.width = '0%'
        c26.style.width = '100%'
    }, 58440);

    setTimeout(() => {
        c26.style.width = '0%'
        c27.style.width = '100%'
    }, 60520);

    setTimeout(() => {
        c27.style.width = '0%'
        c28.style.width = '100%'
    }, 62600);

    setTimeout(() => {
        c28.style.width = '0%'
        c29.style.width = '100%'
    }, 64.68);

}

// 2.08