var sidebar_items = document.querySelectorAll('.sidebar_item')

function change_active() {
    var float_line = document.querySelector('#float_line')
    for (let floor = 0; floor < sidebar_items.length; floor++) {
        // 切换高亮
        const sidebar_item = sidebar_items[floor];
        if (this == sidebar_item) {
            // 浮标移动
            float_line.style.top = `${100 * floor}%`
            // 页面切换
            var sidebar_expend_box = document.querySelector('#sidebar_expend_box')
            sidebar_expend_box.style.transform= `translate(${-200 * floor}px, 0px)`
            return
        }
    }
}

function change_sidebar_active() {
    var sidebar_expend = document.querySelector('#sidebar_expend')

    if (sidebar_expend.className == 'sidebar_expend') {
        sidebar_expend.className = 'sidebar_expend_active'

    } else {
        sidebar_expend.className = 'sidebar_expend'
    }
}

sidebar_items.forEach(sidebar_item => {
    sidebar_item.addEventListener('click', change_active)
    sidebar_item.addEventListener('dblclick', change_sidebar_active)
});