// 顶栏显示与隐藏
window.addEventListener('scroll', () => {
    let header = document.querySelector('#header');
    if (window.scrollY === 0) {
        header.classList.add('bg_hide');
    } else {
        header.classList.remove('bg_hide');
    }
});


// 侧边栏展开
document.querySelector("#header_sidebar").addEventListener("click", () => {
    let sidebar = document.querySelector("#sidebar");
    let sidebar_blur_bg = document.querySelector("#sidebar_blur_bg");
    sidebar.classList.add('sidebar_show');
    sidebar_blur_bg.classList.add('sidebar_blur_bg_show');
})

// 侧边栏收起
function sidebar_blur_bg_hide() {
    let sidebar = document.querySelector("#sidebar");
    let sidebar_blur_bg = document.querySelector("#sidebar_blur_bg");
    sidebar.classList.remove('sidebar_show');
    sidebar_blur_bg.classList.remove('sidebar_blur_bg_show');
}

document.querySelector("#sidebar_blur_bg").addEventListener("click", () => {
    sidebar_blur_bg_hide()
})

function show_select(div, select_css, callback = null) {
    let elements = Array.from(div.children);
    elements.forEach(element => {
        element.addEventListener('click', () => {
            elements.forEach(element => element.classList.remove(select_css));
            element.classList.add(select_css);
            if (callback) { callback() }
        });
    });
    console.log(elements)
    elements[0].click();
}

// 添加搜索引擎
search_index_url.forEach(function (searchEngine) {
    let search_type_item = document.createElement('div');
    search_type_item.classList.add('search_type_item');
    search_type_item.textContent = searchEngine[0];
    document.getElementById('search_type').appendChild(search_type_item);
});
show_select(document.querySelector("#search_type"), 'search_type_item_on');

// 添加搜索跳转事件
var searchBox = document.querySelector('.search_box');
searchBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        let searchText = searchBox.value;
        let searchIndex = Array.from(
            document.querySelector('.search_type_item_on').parentElement.children)
            .indexOf(document.querySelector('.search_type_item_on'));
        window.open(search_index_url[searchIndex][1] + searchText,
            (show_in_new_page) ? '_blank' : '_self'
        );
    }
});



function createCards(data) {
    let content_main = document.querySelector("#content_main");

    data.forEach((data) => {
        let new_card = document.createElement('div');
        let new_card_title = document.createElement('div');
        let new_tabs = document.createElement('div');
        let new_tab_sites = document.createElement('div');

        new_card_title.classList.add('card_title');
        new_tabs.classList.add('tabs');
        new_card.classList.add('card');
        new_tab_sites.classList.add('tab_sites');

        new_card_title.innerText = data.name;

        let tabs = data.tab;
        tabs.forEach((tab) => {
            let tab_item = document.createElement('div');
            tab_item.classList.add('tab_item');
            tab_item.innerHTML = tab.name;
            new_tabs.appendChild(tab_item);

            let new_tab_sites_group = document.createElement('div')
            new_tab_sites_group.classList.add('new_tab_sites_group')

            let sites = tab.site;
            sites.forEach((site) => {
                let new_site = document.createElement('div');
                new_site.classList.add('tab_site_box');

                new_site.addEventListener('click', () => {
                    window.open(site.url,
                        (show_in_new_page) ? '_blank' : '_self'
                    );
                });

                new_site.innerHTML = `
          <div class="tab_site">
            <div class="tab_site_title">${site.title}</div>
            <div class="tab_site_desc">${site.desc}</div>
          </div>`;

                new_tab_sites_group.appendChild(new_site);
            });
            new_tab_sites.appendChild(new_tab_sites_group)
        });

        new_card.appendChild(new_card_title);
        new_card.appendChild(new_tabs);
        show_select(new_tabs, 'tab_item_on');
        new_card.appendChild(new_tab_sites);
        content_main.appendChild(new_card);
    });
}

function createSidebarItems(data) {
    let sidebar_main = document.querySelector("#sidebar_main");

    data.forEach((data) => {
        let new_sidebar_item = document.createElement('div');
        let new_sidebar_item_title = document.createElement('div');
        let new_sidebar_item_more = document.createElement('div');

        new_sidebar_item_title.classList.add('sidebar_item_title');
        new_sidebar_item_more.classList.add('sidebar_item_more');
        new_sidebar_item.classList.add('sidebar_item');

        let new_sidebar_item_title_icon = document.createElement('div');
        let new_sidebar_item_title_text = document.createElement('div');
        let new_sidebar_item_title_more = document.createElement('div');

        new_sidebar_item_title_icon.classList.add('sidebar_item_title_icon');
        new_sidebar_item_title_text.classList.add('sidebar_item_title_text');
        new_sidebar_item_title_more.classList.add('sidebar_item_title_more');

        // new_sidebar_item_title_icon.innerText = '😔';
        new_sidebar_item_title_text.innerText = data.name;
        new_sidebar_item_title_more.innerText = '▼';

        new_sidebar_item_title.appendChild(new_sidebar_item_title_icon);
        new_sidebar_item_title.appendChild(new_sidebar_item_title_text);
        new_sidebar_item_title.appendChild(new_sidebar_item_title_more);

        let tabs = data.tab;
        tabs.forEach((tab) => {
            let sidebar_item_more_item = document.createElement('div');
            sidebar_item_more_item.classList.add('sidebar_item_more_item');
            sidebar_item_more_item.innerText = tab.name;
            new_sidebar_item_more.appendChild(sidebar_item_more_item);
        });

        new_sidebar_item.appendChild(new_sidebar_item_title);
        new_sidebar_item.appendChild(new_sidebar_item_more);
        sidebar_main.appendChild(new_sidebar_item);
    });
}


// 初始化
function init_page() {
    // 侧边栏大类展开与收起
    if (sidebar_item_can_expand) {
        document.querySelectorAll('.sidebar_item').forEach((element) => {
            let sidebar_item_title_more_expand = element.children[0].children[2]
            let sidebar_item_more = element.children[1]
            sidebar_item_title_more_expand.addEventListener('click', (event) => {
                event.stopPropagation()
                if (sidebar_item_title_more_expand.classList.contains('sidebar_item_title_more_expand')) {
                    sidebar_item_title_more_expand.classList.remove('sidebar_item_title_more_expand');
                    sidebar_item_more.classList.remove('sidebar_item_more_expand');
                } else {
                    sidebar_item_title_more_expand.classList.add('sidebar_item_title_more_expand');
                    sidebar_item_more.classList.add('sidebar_item_more_expand');
                }
            })
        })
    } else {
        document.querySelectorAll('.sidebar_item').forEach((element) => {
            element.children[0].children[2].style.display = 'none'
            element.children[1].style.display = 'none'
        })
    }

    // 卡片分类切换
    document.querySelectorAll(".tab_item").forEach((ele) => {
        ele.addEventListener('click', () => {
            let currect_index = Array.from(ele.parentElement.children).indexOf(ele)
            let sites_group_list = Array.from(ele.parentElement.parentElement.children[2].children)
            sites_group_list.forEach((sites_group) => {
                sites_group.style.display = 'none'
            })
            sites_group_list[currect_index].style.display = 'flex'
        })
    })

    // 侧边栏点击跳转
    document.querySelectorAll(".sidebar_item_title").forEach((ele) => {
        ele.addEventListener('click', () => {
            sidebar_blur_bg_hide()
            let currect_div = ele.parentElement
            let currect_index = Array.from(currect_div.parentElement.children).indexOf(currect_div)
            let taget_div = document.querySelectorAll('.card_title')[currect_index]
            taget_div.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
    })
}

fetch('data/website.json')
    .then(response => response.json())
    .then(data => {
        // 创建侧边栏与卡片
        createCards(data.data);
        createSidebarItems(data.data);

        // 初始化
        init_page()
    });


// config加载
function set_config(css, con) {
    if (css.includes('search_box')) {
        document.querySelector('.search_box').setAttribute('placeholder', con)
    } else if (css.includes('img')){
        document.querySelector(css).setAttribute('src', con)
    }else if (css.includes('favicon')) {
        document.querySelector('#favicon').setAttribute('href', con)
    }
    document.querySelector(css).innerHTML = con
}

set_config('title', website_name)
set_config('#header_title', website_name)
set_config('#sidebar_header_title', website_name)
set_config('.content_footer_card_title', website_name)
set_config('.content_footer_card_desc', website_description)
set_config('.content_footer_card_co',
    `Copyright © ${new Date().getFullYear()}` + website_footer)
set_config('.search_box', search_box_placeholder)
set_config('#sidebar_header_img', website_logo_img)
set_config('#favicon', website_logo_img)
