

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