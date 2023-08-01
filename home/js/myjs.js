

function expand_open() {
    var left = document.getElementById('left')
    var right = document.getElementById('right')

    left.style.display = 'none'
    right.style.display = 'flex'
}

function expand_close() {
    var left = document.getElementById('left')
    var right = document.getElementById('right')

    left.style.display = 'flex'
    right.style.display = 'none'
}

function change_time() {
    var c_time = new Date()
    var clock = document.getElementById('time_box')

    c_time = c_time.getHours() + ":" + c_time.getMinutes() + ":" + c_time.getSeconds()
    clock.innerHTML = c_time
}

setInterval(() => {
    change_time()
}, 1000);