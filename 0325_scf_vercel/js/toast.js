function showToast(title, text, sec=3) {
    if (!title) {
        console.error('title is required');
        return;
    }else if (!text) {
        console.error('text is required');
        return;
    }

    var oldToast =  document.querySelectorAll('.mToast');
    if (oldToast.length > 0) {
        oldToast[0].remove();
    }

    var toast = document.createElement('div');
    var titleDiv = document.createElement('div');
    var textDiv = document.createElement('div');

    toast.className = 'mToast_div';
    titleDiv.className = 'mToast_title';
    textDiv.className = 'mToast_text';

    toast.style.cssText = `
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: 9999;

        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 14px;
        color: white;
        backdrop-filter: blur(10px);
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        width: 250px;
        margin: 15px;
        padding: 15px;

        transition: 0.5s;
        transform: translateX(150%);
    `;
    titleDiv.style.cssText = `
        color: white;
        padding-bottom: 5px;
    `;
    textDiv.style.cssText = `
        color: rgb(213, 213, 213);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    `;

    titleDiv.textContent = title;
    textDiv.textContent = text;

    toast.appendChild(titleDiv);
    toast.appendChild(textDiv);
    document.body.appendChild(toast);

    setTimeout(function () {
        toast.style.transform = 'translateX(0)';
    }, 100);


    setTimeout(function () {
        toast.style.transform = 'translateX(150%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 500);
    }, sec * 1000);
}