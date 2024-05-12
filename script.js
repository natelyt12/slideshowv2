function start() {
    let startbtn = document.getElementById('start')
    let controlcon = document.getElementById('control')
    startbtn.style.background = 'white'
    startbtn.style.transition = '500ms'
    startbtn.style.color = 'black'
    controlcon.style.transform = 'translateX(-210px)'
    controlcon.style.transition = 'all 1000ms cubic-bezier(0.610, 0.025, 0.870, 0.620)'
}

document.getElementById('info').addEventListener("click", () => {
    var toggle = document.getElementById("info-container");
    toggle.classList.toggle('on');
})