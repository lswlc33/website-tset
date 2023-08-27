var sidebar_items = document.querySelectorAll('.sidebar_item')
var iframe_link = document.querySelectorAll('iframe')[0]

var iframe_links = [
    'https://cemiuiler.sevtinge.cc/',
    'https://cemiuiler.sevtinge.cc/Download.html',
    'https://cemiuiler.sevtinge.cc/Thank.html',
    'https://cemiuiler.sevtinge.cc/Support.html',
    'https://github.com/Cemiuiler-Development-Team/Cemiuiler',
]

function change_active() {
    var float_line = document.querySelector('#float_line')
    for (let floor = 0; floor < sidebar_items.length; floor++) {
        // 切换高亮
        const sidebar_item = sidebar_items[floor];
        if (this == sidebar_item){
            float_line.style.top = `${100 * floor}%`
            // 切换页面
            if (floor == 4) {
                window.open(iframe_links[floor])
                return
            }
            iframe_link.src = iframe_links[floor]
            return
        }
    }
}

function change_sidebar() {
    var sidebar  = document.getElementById('sidebar')

    if (sidebar.style.width == "4em") {
        sidebar.style.width = "200px"
    }else{
        sidebar.style.width = "4em"
    }
    
}

sidebar_items.forEach(sidebar_item => {
    sidebar_item.addEventListener('click', change_active)
});

sidebar_items.forEach(sidebar_item => {
    sidebar_item.addEventListener('dblclick', change_sidebar)
});



