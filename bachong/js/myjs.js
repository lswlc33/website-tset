function create_img() {
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
    }, 3000);

}
