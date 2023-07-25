const emoji_list = [
    'w(ﾟДﾟ)w',
    '(ノへ￣、)',
    '(￣_,￣ )',
    '(๑•̀ㅂ•́)و✧',
    '(￣ε(#￣)☆╰╮o(￣皿￣///)',
    'Σ( ° △ °|||)︴',
    '(*￣rǒ￣)',
    '╰(￣▽￣)╭',
    'ヾ(≧▽≦*)o',
    'o(*≧▽≦)ツ',
    '（゜▽＾*)',
    '(๑•̀ㅂ•́)و✧',
    '〒▽〒',
    '(ノへ￣、)',
    '╥﹏╥...',
    '(ToT)/~~~',
    '(*￣3￣)╭',
    '(￣o￣) . z Z',
    '(∪｡∪)｡｡｡zzz',
    '（)´д`(）',
    '(￣_,￣ )',
    '( ͡° ͜ʖ ͡°)',
    '(´ｰ∀ｰ`)',
    '┌( ´_ゝ` )┐',
    '（ ￣ー￣）',
    'Ψ(￣∀￣)Ψ',
    '( *⊙~⊙)',
    '(＠￣ー￣＠)',
    'o((⊙﹏⊙))o.',
    '|(*′口`)',
    'Σ( ° △ °|||)︴',
    '…（⊙＿⊙；）…',
]

window.onload = function () {
    change_tab_sheet()
    change_emoji()
    if (isMobileDevice()) {
        // 当前浏览器是手机浏览器
        // hide sidebar
        sidebar = document.getElementById('sidebar')
        sidebar.style.display = 'none'
        // remove marg
        main = document.getElementById('main')
        main.style.margin = '0px'
        main.style.border = 'none'
        main.style.borderRadius = '0px'
        main.style.height = '100vh'
    } else {
        // 当前浏览器不是手机浏览器
        // remove expand_sidebar
        icon = document.getElementsByClassName('floating-menu')
        for (let i = 0; i < icon.length; i++) {
            const c_icon = icon[i];
            c_icon.style.display = "none"
        }
    }
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}



function change_tab(c_div) {
    tabs = document.getElementsByClassName('sidebar_item')
    // 设置checked属性
    for (let index = 0; index < tabs.length; index++) {
        tabs[index].setAttribute('checked', '0')
    }
    c_div.setAttribute('checked', '1')
    change_tab_sheet()
}


function change_tab_sheet() {
    // 更改样式
    tabs = document.getElementsByClassName('sidebar_item')
    for (let index = 0; index < tabs.length; index++) {
        var the_tab = tabs[index];
        var checked = the_tab.getAttribute('checked');

        if (checked == 1) {
            the_tab.style.border = "2px #93abff solid";
            change_tab_page()
        } else {
            the_tab.style.border = "2px rgba(147,171,255,0) solid";
        }
    }
}

function change_tab_page() {
    tabs = document.getElementsByClassName('sidebar_item')

    dict = {
        0: 'home',
        1: 'setting',
        2: 'about',
    }
    for (let index = 0; index < tabs.length; index++) {
        var checked = tabs[index].getAttribute('checked');
        if (checked == 1) {
            page = document.getElementById(dict[index])
            page.style.display = 'inline'
        } else {
            page = document.getElementById(dict[index])
            page.style.display = 'none'
        }
    }
}

function create_setting_box() {
    setting = document.getElementById('roll')
    setting.innerText(`
    <div class="setting_item">
        d
    </div>
    
    `)
}

function change_emoji() {
    man_length = emoji_list.length
    emoji_text = document.getElementById('emoji_text')
    num = Math.floor(Math.random() * (man_length - 0));
    emoji_text.style.opacity = 0

    setTimeout(function () {
        emoji_text.style.opacity = 1
        emoji_text.innerHTML = emoji_list[num]
    }, 200)

}



function expend_sidebar() {
    icon = document.getElementsByClassName('floating-menu')
    sidebar = document.getElementById('sidebar')
    icon = icon[0]
    if (icon.innerText == '⬅') {
        change_expend_text('➡')
        sidebar.style.display = 'none'
    } else {
        change_expend_text('⬅')
        sidebar.style.display = 'inline'
    }
}

function change_expend_text(arr) {
    icon = document.getElementsByClassName('floating-menu')



    for (let i = 0; i < icon.length; i++) {
        const c_icon = icon[i];
        c_icon.innerText = arr
        if (c_icon.innerText == '⬅') {
            c_icon.style.left = '190px'
        } else {
            c_icon.style.left = '40px'
        }
    }
}
