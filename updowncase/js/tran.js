var all_up_list = [
    [
        // 上标数字
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹', '⁰']
    ],
    [
        // 上标小写字母
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        ['ᵃ', 'ᵇ', 'ᶜ', 'ᵈ', 'ᵉ', 'ᶠ', 'ᵍ', 'ʰ', 'ⁱ', 'ʲ', 'ᵏ', 'ˡ', 'ᵐ', 'ⁿ', 'ᵒ', 'ᵖ', 'ʳ', 'ˢ', 'ᵗ', 'ᵘ', 'ᵛ', 'ʷ', 'ˣ', 'ʸ', 'ᶻ']
    ],
    [
        // 上标大写字母
        ['A', 'B', 'C', 'D', 'E', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'T', 'U', 'V', 'W'],
        ['ᴬ', 'ᴮ', 'ᒼ', 'ᴰ', 'ᴱ', 'ᴳ', 'ᴴ', 'ᴵ', 'ᴶ', 'ᴷ', 'ᴸ', 'ᴹ', 'ᴺ', 'ᴼ', 'ᴾ', 'ᴼ', 'ᴿ', 'ᵀ', 'ᵁ', 'ⱽ', 'ᵂ']
    ],

]


var all_down_list = [
    [
        // 下标数字
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉', '₀']
    ],
    [
        // 下标小写字母
        ['a', 'e', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x'],
        ['ₐ', 'ₑ', 'ₕ', 'ᵢ', 'ⱼ', 'ₖ', 'ₗ', 'ₘ', 'ₙ', 'ₒ', 'ₚ', 'ᵣ', 'ₛ', 'ₜ', 'ᵤ', 'ᵥ', 'ₓ']
    ]
]

var type = 0

function trans(string) {
    if (type) {
        for (let i = 0; i < all_down_list.length; i++) {
            let each_list = all_down_list[i];
            if (each_list[0].includes(string)) {
                let index = each_list[0].indexOf(string);
                return each_list[1][index];
            }
        }
    } else {
        for (let i = 0; i < all_up_list.length; i++) {
            let each_list = all_up_list[i];
            if (each_list[0].includes(string)) {
                let index = each_list[0].indexOf(string);
                return each_list[1][index];
            }
        }
    }
    return string
}

var input = document.querySelector('#input')
var output = document.querySelector('#output')

input.addEventListener('change', () => {
    set_output()
})

function set_output() {
    let result = ''
    for (i of input.value) {
        result += trans(String(i))
    }
    output.value = result
}

function copy() {
    output.select()
    document.execCommand('copy')
    showToast('成功!', '复制成功')
}

function change_type(b) {
    type = b
    set_output()
    showToast('成功!', '切换成功')
}