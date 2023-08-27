var sidebar_items = document.querySelectorAll('.sidebar_item')

function change_active() {
    var float_line = document.querySelector('#float_line')
    for (let floor = 0; floor < sidebar_items.length; floor++) {
        // 切换高亮
        const sidebar_item = sidebar_items[floor];
        if (this == sidebar_item){
            float_line.style.top = `${100 * floor}%`
            return
        }
    }
}

sidebar_items.forEach(sidebar_item => {
    sidebar_item.addEventListener('click', change_active)
});



