class Airc {
    constructor() {
        this.is_running = false
        this.curr_tem = 27
        this.best_tem = 27
        this.max_tem = 35
        this.min_tem = 15
        this.curr_mode = 0
        this.mode_list = ["cold", "hot", "clean"]
        this.mode_color = ["blue", "red", "green"]
        this.ui_tem = document.querySelector(".cn_wendu")
        this.ui_power = document.querySelector(".cn_dianyuan")
        this.ui_mode = document.querySelector(".cn_moshi")
        this.ui_air = document.querySelector(".air")

    }
    run_switch() {
        this.is_running = !this.is_running
        if (this.is_running) {
            this.curr_tem = this.best_tem
        } else {
            this.curr_tem = "00"
        }
        this.update()
    }
    mode_switch() {
        if (!this.is_running) return
        this.curr_mode = this.curr_mode + 2 > this.mode_list.length ? 0 : this.curr_mode + 1
        this.update()
    }
    tem_change(is_up) {
        if (!this.is_running) return
        if (is_up) {
            this.curr_tem = Math.min(this.curr_tem + 1, this.max_tem)
        } else {
            this.curr_tem = Math.max(this.curr_tem - 1, this.min_tem)
        }
        this.update()
    }
    update() {
        this.ui_power.style.backgroundColor = this.is_running ? "green" : "white"
        this.ui_mode.style.backgroundColor = this.is_running ? this.mode_color[this.curr_mode] : "white"
        this.ui_tem.innerText = this.curr_tem
        this.ui_air.style.opacity = this.is_running?1:0
    }
}

const ac = new Airc;