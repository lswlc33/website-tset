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
            sidebar_expend_box.style.transform = `translate(${-200 * floor}px, 0px)`
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



var setting_bottom = document.querySelector('.sidebar_item_bottom:nth-child(2)')

setting_bottom.addEventListener('click', function () {
    console.log(21341234)
    var setting_div = document.querySelector('#setting_div')
    if (setting_div.style.top == '112.5dvh') {
        setting_div.style.top = '12.5dvh';
        setting_div.style.opacity = '1';
        return
    }
    setting_div.style.top = '112.5dvh';
    setting_div.style.opacity = '0';
})
