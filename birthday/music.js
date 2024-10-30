<audio id="music" src="生日快乐.mp3" preload="auto" autoPlay="autoplay"></audio>

var music = document.getElementById("music");
var currentTime = 0;

// 监听音乐播放事件
music.addEventListener("timeupdate", function () {
    currentTime = music.currentTime;
});

// 监听页面离开事件
window.addEventListener("beforeunload", function () {
    sessionStorage.setItem("currentTime", currentTime);
});

// 监听页面加载事件
window.addEventListener("load", function () {
    var storedTime = sessionStorage.getItem("currentTime");
    if (storedTime) {
        music.currentTime = parseFloat(storedTime);
        music.play();
    }
});

