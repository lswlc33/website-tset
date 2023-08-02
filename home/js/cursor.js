function init_cursor() {
    // 隐藏默认光标
    var all = document.querySelectorAll("*")
    all.forEach(element => {
        element.style.cursor = "none"
    });

    // 创建光标
    var cursor = document.createElement('div')
    cursor.id = 'cursor'
    cursor.style.height = '20px'
    cursor.style.width = '20px'
    cursor.style.backgroundColor = 'rgba(255,255,255,0.3)'
    cursor.style.borderRadius = '10px'
    cursor.style.position = 'fixed'
    cursor.style.backdropFilter = 'blur(10px)'
    cursor.style.transition = "transform 0.5s"
    document.body.appendChild(cursor)

    // 缩放动画
    document.addEventListener('mousedown', function () {
        cursor.style.transform = "scale(1.2)"
    })

    document.addEventListener('mouseup', function () {
        cursor.style.transform = "scale(1)"
    })
}

function change_cursor_position(mouseX, mouseY) {
    var cursor = document.getElementById('cursor')
    cursor.style.left = mouseX + 'px'
    cursor.style.top = mouseY + 'px'
}

onload = function () {
    
    init_cursor()
}


document.addEventListener('mousemove', function () {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    console.log(mouseX, mouseY)
    change_cursor_position(mouseX, mouseY);
})


