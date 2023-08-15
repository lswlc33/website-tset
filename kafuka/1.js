var is_allow_run = 0
var is_setting_open = 0
var kafuka_info = {
    run_speed: 10,
    max_size: 10,
    min_size: 5,
}
var intervalId

// 监听设置项变动
var setting_list = document.querySelectorAll('.item_obj')
setting_list.forEach(setting => {
    setting.addEventListener('change', function () {
        if (setting.value < 5 || setting.value > 10) {
            setting.value = '10'    // 超出处理
        }
        var set = setting.id
        kafuka_info[set] = setting.value
    })
});

// 设置展开收起
function change_size(event) {
    if (event.target.tagName == 'INPUT') {
        return
    }
    var setting = document.getElementById('setting')
    if (setting.className == 'setting') {
        setting.className = 'setting_2'
        is_setting_open = 1
    } else {
        setting.className = 'setting'
        is_setting_open = 0
        interval()
    }
}

// 开关
function change_autogen(event) {
    event.stopPropagation();
    var autogen = document.getElementById('autogen')
    var autogen_div = document.querySelector('#autogen div')
    if (autogen.className == 'switch') {
        autogen.className = 'switch_on'
        autogen_div.className = 'switch_bu_on'
        is_allow_run = 1
    } else {
        autogen.className = 'switch'
        autogen_div.className = 'switch_bu'
        is_allow_run = 0
    }
}

// 动画循环
function interval() {
    clearInterval(intervalId)
    intervalId = setInterval(() => {
        if (is_allow_run != 1 || is_setting_open == 1) {
            return
        }
        creat_kafuka()
    }, 2000 / kafuka_info.run_speed)
}

// 创建kafuka
function creat_kafuka() {
    var kafuka = document.createElement('img')
    var img_size = randomint(kafuka_info.min_size, kafuka_info.max_size)

    kafuka.src = 'img/kafuka.gif'
    kafuka.style.top = '100dvh'
    kafuka.style.left = `calc(${100 * Math.random()}dvh - ${kafuka.offsetHeight / 2}px)`
    kafuka.style.position = 'fixed'
    kafuka.style.height = `${40 * img_size}px`
    kafuka.style.width = `${40 * img_size}px`
    kafuka.style.transition = '2s'
    kafuka.style.pointerEvents = 'none'
    document.body.appendChild(kafuka)

    setTimeout(() => {
        // 上天
        kafuka.style.transform = `translateY(calc(-100dvh - ${40 * img_size}px))`
    }, 10);

    setTimeout(() => {
        // 归西
        document.body.removeChild(kafuka)
    }, 2010);
}

function randomint(a, b) {
    num = Math.floor(Math.random() * (b - a)) + a;
    return num;
}