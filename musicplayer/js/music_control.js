var audio = document.getElementById('music');
var music_progress = document.getElementById('music_progress_played');
var played_time = document.getElementById('played_time')
var total_time = document.getElementById('total_time')
var lrc_box = document.getElementById('lrc_box')

var lrc_file = "[00:00.000] 作词 : RK/WILLIUS/蔡徐坤\n[00:01.000] 作曲 : WILLIUS\n[00:04.592]编曲：WILLIUS\n[00:04.902]\n[00:05.102]只因你太美 baby 只因你太美 baby\n[00:12.136]\n[00:12.839]只因你实在是太美 baby 只因你太美 baby\n[00:21.156]\n[00:22.803]迎面走来的你让我如此蠢蠢欲动\n[00:24.805]这种感觉我从未有\n[00:25.854]Cause I got a crush on you who you\n[00:27.842]\n[00:29.488]你是我的我是你的谁\n[00:31.907]再多一眼看一眼就会爆炸\n[00:34.121]再近一点靠近点快被融化\n[00:36.229]想要把你占为己有baby bae\n[00:38.384]不管走到哪里都会想起的人是你 you you\n[00:41.149]我应该拿你怎样\n[00:43.241]uh 所有人都在看着你\n[00:46.086]我的心总是不安\n[00:48.200]oh 我现在已病入膏肓\n[00:50.204]\n[00:50.568]eh eh 难道真的因为你而疯狂吗\n[00:54.456]我本来不是这种人\n[00:56.934]\n[00:57.167]因你变成奇怪的人\n[00:59.172]\n[00:59.717]第一次呀变成这样的我\n[01:04.504]\n[01:04.973]不管我怎么去否认\n[01:07.362]只因你太美 baby 只因你太美 baby\n[01:15.258]\n[01:15.559]只因你实在是太美 baby 只因你太美 baby\n[01:24.941]\n[01:26.078]闭着眼睛大声对你说爱\n[01:27.776]不要说这个那个 理由多了很奇怪\n[01:29.859]感情 加速 加深 发生\n[01:31.558]像酒精为你沉醉\n[01:32.547]你疯 你笑 你叫 你跳 你闹\n[01:35.758]脑海中一直浮现你的微笑\n[01:37.492]房间里全是你的味道\n[01:38.941]I don't wanna wake up in dream\n[01:41.127]我只想看你这是真心话\n[01:42.844]\n[01:43.137]只因你太美 baby 只因你太美 baby\n[01:51.023]\n[01:51.434]只因你实在是太美 baby 只因你太美 baby\n[02:00.948]oh eh oh 现在确认地告诉我\n[02:03.965]\n[02:04.938]oh eh oh 你到底属于谁\n[02:09.065]\n[02:09.551]oh eh oh 现在确认地告诉我\n[02:13.474]\n[02:14.305]oh eh oh 你到底属于谁 就是现在告诉我\n[02:20.921]\n"
var music_list = [
    {
        title: "只因你太美",
        singer: "全民制作人",
        src: "../res/jntm.mp3",
        lrc: lrc_file,
    },
]


function init_lrc(lrc_file) {
    var lrc_list = read_lrc(lrc_file)

    for (let i = 0; i < lrc_list.length; i++) {
        const element = lrc_list[i];
        var lrc = document.createElement('div')
        lrc.id = 'lrc_line_' + i
        lrc.className = 'lrc_line'
        lrc.innerHTML = lrc_list[i].lrc
        lrc_box.appendChild(lrc)
    }
}




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

var last_index

audio.addEventListener("timeupdate", function () {
    var all_time = audio.duration
    var c_time = audio.currentTime
    var progress = c_time / all_time * 100 + "%"
    music_progress.style.width = progress

    played_time.innerHTML = format_time_2(c_time)
    total_time.innerHTML = format_time_2(all_time)

    var index = find_lrc_index(lrc_list)

    if (last_index != index) {
        var select_lrc = document.getElementById('lrc_line_' + index)

        select_lrc.className = 'lrc_line_select'
        var lsat_select_lrc = document.getElementById('lrc_line_' + (index - 1))
        lsat_select_lrc.className = 'lrc_line'
        last_index = index
    }
})


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
function format_time(time) {
    minute = parseFloat(time.split(':')[0])
    second = parseFloat(time.split(':')[1])
    seconds = minute * 60 + second
    return seconds
}

function format_time_2(time) {
    const minutes = Math.floor(time / 60); // 计算分钟数
    const seconds = Math.floor(time % 60); // 计算秒数

    const formattedMinutes = String(minutes).padStart(2, '0'); // 补零使分钟数为两位数
    const formattedSeconds = String(seconds).padStart(2, '0'); // 补零使秒数为两位数

    return `${formattedMinutes}:${formattedSeconds}`;
}


function find_lrc_index(lrc_list) {
    var lrc_list = lrc_list
    var c_time = audio.currentTime

    for (let I = 0; I < lrc_list.length; I++) {
        const time = lrc_list[I].time;
        if (time >= c_time) {
            // document.getElementById('lrc_box').innerHTML = lrc_list[I - 1].lrc
            return I - 1
        }
    }

    return I

}

init_lrc(lrc_file)
