function create_img_left() {
    var img = document.createElement('img')
    var left = window.innerWidth + 'px'
    var top = Math.random() * (window.innerHeight - 280) + 'px'

    img.src = "img/go_left.gif"

    img.style.position = `fixed`;
    img.style.left = left
    img.style.transition = 'left 2s'
    img.style.top = top

    document.body.appendChild(img)
    setTimeout(() => {
        img.style.left = "-280px"
    }, 100);

    setTimeout(() => {
        document.body.removeChild(img)
    }, 2000);

}

function create_img_right() {
    var img = document.createElement('img')
    var left = window.innerWidth + 'px'
    var top = Math.random() * (window.innerHeight - 280) + 'px'

    img.src = "img/go_right.gif"
    img.style.position = `fixed`;
    img.style.left = "-280px"
    img.style.transition = 'left 2s'
    img.style.top = top

    document.body.appendChild(img)
    setTimeout(() => {
        img.style.left = left
    }, 100);

    setTimeout(() => {
        document.body.removeChild(img)
    }, 2000);

}

function create_img() {
    var num = Math.random()
    if (num >= 0.5) {
        create_img_right()
    } else {
        create_img_left()
    }

}
