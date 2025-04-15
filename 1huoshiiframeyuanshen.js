const overlay = document.getElementById('huoshiaicYuanshenOverlay');
const iframeContainer = document.getElementById('huoshiaicYuanshenIframeContainer');
const iframe = document.getElementById('huoshiaicYuanshenIframe');
const closeButton = document.getElementById('huoshiaicYuanshenCloseButton');

// 定义每个按钮的 iframe 源地址
const iframeSources = {
    huoshiaicYuanshenOpenButton1: "https://huoshi111.github.io/huoshiaicyuanshen/1%E7%8C%9C%E5%8E%9F%E7%A5%9E%E8%A7%92%E8%89%B2.html",
    huoshiaicYuanshenOpenButton2: "https://huoshi111.github.io/huoshigame0/%E7%81%AB%E7%8B%AE%E8%BF%B7%E5%AE%AB%E6%B8%B8%E6%88%8F.html",
    huoshiaicYuanshenOpenButton3: "https://huoshi111.github.io/huoshigamezstictactoe/Tic%20tac%20toe%E7%81%AB%E7%8B%AE%E6%B8%B8%E6%88%8F.html",
    huoshiaicYuanshenOpenButton4: "https://huoshi111.github.io/huoshiyinyue001/%E7%81%AB%E7%8B%AE%E9%9F%B3%E4%B9%90v.5.0.html",
    huoshiaicYuanshenOpenButton5: "https://huoshi111.github.io/huoshiwall/huoshiwallpaper.html",
    // 哔哩哔哩
    huoshiaicYuanshenOpenButton6: "https://tools-wiki.biligame.com/ys/simulator/dist/wish",
    //火狮 宇宙星空
    huoshiaicYuanshenOpenButton7: "https://huoshi111.github.io/huoshistarskyhs11/%E7%81%AB%E7%8B%AE%20%E5%AE%87%E5%AE%99%E6%98%9F%E7%A9%BA.html",

    huoshiaicYuanshenOpenButton8: "https://huoshi111.github.io/huoshihuihuaai/%E7%81%AB%E7%8B%AE%E7%BB%98%E7%94%BB%E7%94%9F%E6%88%90.html",
    huoshiaicYuanshenOpenButton9: "https://huoshi111.github.io/huoshianimestyleai/%E7%81%AB%E7%8B%AE%E5%8A%A8%E6%BC%AB%E7%94%9F%E6%88%90.html"
};

// 绑定按钮点击事件
document.querySelectorAll('[id^="huoshiaicYuanshenOpenButton"]').forEach(button => {
    button.addEventListener('click', function() {
        const iframeSource = iframeSources[this.id];
        iframe.src = iframeSource; // 设置 iframe 的源地址
        overlay.style.display = 'block';
        setTimeout(() => {
            overlay.classList.add('active');
            iframeContainer.classList.add('active');
        }, 10); // 允许浏览器渲染 display 变化
    });
});

closeButton.addEventListener('click', function() {
    overlay.classList.remove('active');
    iframeContainer.classList.remove('active');

    // 等待动画完成后隐藏
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);
});
