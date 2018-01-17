var count = 1;
setTimeout(demo, 500)
setTimeout(demo, 700)
setTimeout(demo, 900)
setTimeout(reset, 2000)

setTimeout(demo, 2500)
setTimeout(demo, 2750)
setTimeout(demo, 3050)

var mousein = false

function demo() {
    if(mousein) return
    document.getElementById('demo' + count++ ).classList.toggle('hover')
}

function demo2() {
    if(mousein) return
    document.getElementById('demo' + count++ ).classList.toggle('hover')
}