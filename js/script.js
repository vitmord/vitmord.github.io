const favicon = document.getElementById('favicon')

function slider(imgSrcNumber) {
    document.querySelector('.hero__img').src = `./img/nike_${imgSrcNumber}.png`
    favicon.setAttribute('href', `./img/favicon/favicon_${imgSrcNumber}.ico`)
}

const menu = document.getElementById('menu-icon')
const navbar = document.getElementById('navbar')

menu.addEventListener('click', function () {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('navbar--open')
})

var track = document.getElementById('track')

var controlBtn = document.getElementById('play-pause')

function playPause() {
    if (track.paused) {
        track.play()
        //controlBtn.textContent = "Pause";
        controlBtn.className = 'pause'
    } else {
        track.pause()
        //controlBtn.textContent = "Play";
        controlBtn.className = 'play'
    }
}

controlBtn.addEventListener('click', playPause)
track.addEventListener('ended', function () {
    controlBtn.className = 'play'
})
