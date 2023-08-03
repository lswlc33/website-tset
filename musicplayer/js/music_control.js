var audio = document.getElementById('music');
var music_progress = document.getElementById('music_progress_played');
var played_time = document.getElementById('played_time')
var total_time = document.getElementById('total_time')
var lrc_box = document.getElementById('lrc_box')
var lrc_box_bar = document.getElementById('lrc_box_bar')
var last_index
var current_music


var lrc_file = "[00:00.000] 作词 : RK/WILLIUS/蔡徐坤\n[00:01.000] 作曲 : WILLIUS\n[00:04.592]编曲：WILLIUS\n[00:04.902]\n[00:05.102]只因你太美 baby 只因你太美 baby\n[00:12.136]\n[00:12.839]只因你实在是太美 baby 只因你太美 baby\n[00:21.156]\n[00:22.803]迎面走来的你让我如此蠢蠢欲动\n[00:24.805]这种感觉我从未有\n[00:25.854]Cause I got a crush on you who you\n[00:27.842]\n[00:29.488]你是我的我是你的谁\n[00:31.907]再多一眼看一眼就会爆炸\n[00:34.121]再近一点靠近点快被融化\n[00:36.229]想要把你占为己有baby bae\n[00:38.384]不管走到哪里都会想起的人是你 you you\n[00:41.149]我应该拿你怎样\n[00:43.241]uh 所有人都在看着你\n[00:46.086]我的心总是不安\n[00:48.200]oh 我现在已病入膏肓\n[00:50.204]\n[00:50.568]eh eh 难道真的因为你而疯狂吗\n[00:54.456]我本来不是这种人\n[00:56.934]\n[00:57.167]因你变成奇怪的人\n[00:59.172]\n[00:59.717]第一次呀变成这样的我\n[01:04.504]\n[01:04.973]不管我怎么去否认\n[01:07.362]只因你太美 baby 只因你太美 baby\n[01:15.258]\n[01:15.559]只因你实在是太美 baby 只因你太美 baby\n[01:24.941]\n[01:26.078]闭着眼睛大声对你说爱\n[01:27.776]不要说这个那个 理由多了很奇怪\n[01:29.859]感情 加速 加深 发生\n[01:31.558]像酒精为你沉醉\n[01:32.547]你疯 你笑 你叫 你跳 你闹\n[01:35.758]脑海中一直浮现你的微笑\n[01:37.492]房间里全是你的味道\n[01:38.941]I don't wanna wake up in dream\n[01:41.127]我只想看你这是真心话\n[01:42.844]\n[01:43.137]只因你太美 baby 只因你太美 baby\n[01:51.023]\n[01:51.434]只因你实在是太美 baby 只因你太美 baby\n[02:00.948]oh eh oh 现在确认地告诉我\n[02:03.965]\n[02:04.938]oh eh oh 你到底属于谁\n[02:09.065]\n[02:09.551]oh eh oh 现在确认地告诉我\n[02:13.474]\n[02:14.305]oh eh oh 你到底属于谁 就是现在告诉我\n[02:20.921]\n"
var music_list = [
    {
        title: "只因你太美",
        singer: "全民制作人",
        src: "../res/jntm.mp3",
        lrc: lrc_file,
    },
]


// 初始化音乐信息
function init_music(music) {
    // 加载歌词
    current_music.lrc = read_lrc(music.lrc)
    init_lrc(current_music.lrc)

    // 加载歌曲信息
    var title = document.getElementById('title')
    var singer = document.getElementById('singer')
    title.innerText = music.title
    singer.innerText = music.singer
}

// 把歌词文本格式化为对象
function read_lrc(lrc_file) {
    var lrc_list = lrc_file.split('\n')
    var new_lrc_list = []
    lrc_list.forEach(line => {
        if (line == '') {
            return
        }
        obj = {
            time: format_time(line.split(']')[0].split(']')[0].split('[')[1]),
            lrc: line.split(']')[1]
        }
        new_lrc_list.push(obj)
    });
    return new_lrc_list
}

// 加载歌词到界面
function init_lrc(lrc_list) {
    for (let i = 0; i < lrc_list.length; i++) {
        const element = lrc_list[i];
        var lrc = document.createElement('div')
        lrc.id = 'lrc_line_' + i
        lrc.className = 'lrc_line'
        lrc.innerHTML = lrc_list[i].lrc
        lrc_box.appendChild(lrc)
    }
}

// 播放按钮的点击事件
function play_music() {
    var play = document.getElementById('play')
    if (audio.paused) {
        audio.play();
        play.innerText = '暂停'
    } else {
        audio.pause();
        play.innerText = '播放'
    }
}

// 格式化时间为秒数
function format_time(time) {
    var minute = parseFloat(time.split(':')[0])
    var second = parseFloat(time.split(':')[1])
    var seconds = minute * 60 + second
    return seconds
}

// 格式化时间为`分钟:秒`
function format_time_2(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

// 找到当前播放的音乐的歌词的编号
function find_lrc_index(c_time) {
    for (let I = 0; I < current_music.lrc.length; I++) {
        const time = current_music.lrc[I].time;
        if (time >= c_time) {
            return I - 1
        }
    }
    // 找不到返回最后一个
    return I
}

// 更新进度条
function update_progress(c_time) {
    var all_time = audio.duration
    var progress = c_time / all_time * 100 + "%"
    // 更新进度条进度
    music_progress.style.width = progress
    // 更新进度条时间
    played_time.innerHTML = format_time_2(c_time)
    total_time.innerHTML = format_time_2(all_time)
}

// 更新歌词
function update_lrc_box(c_time) {

    // 获取当前歌词编号
    var index = find_lrc_index(c_time)

    // 如果歌词编号变更
    if (last_index != index) {

        // 取消高亮上一行歌词
        var lsat_select_lrc = document.getElementById('lrc_line_' + (index - 1))
        lsat_select_lrc.className = 'lrc_line'

        // 高亮歌词
        var select_lrc = document.getElementById('lrc_line_' + index)
        select_lrc.className = 'lrc_line_select'

        // 移动歌词到中间
        translatepx = lrc_box_bar.offsetHeight / 2 - (index + 1) * 25
        lrc_box.style.transform = "translateY(" + translatepx + "px)"

        // 更新最后歌词编号
        last_index = index
    }
}

audio.addEventListener("timeupdate", function () {
    var c_time = audio.currentTime

    // 播放进度改变时更新进度条和歌词
    update_progress(c_time)
    update_lrc_box(c_time)
})


onload = function () {
    // 加载第一首
    current_music = music_list[0]

    // 初始化音乐信息
    init_music(current_music)
}
