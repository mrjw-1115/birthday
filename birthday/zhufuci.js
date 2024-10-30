// 祝词
var words=[
    '生日快乐',
    '身体健康',
    '万事顺遂',
    '平安喜乐',
    '心想事成',
    '天天开心',
    '好运连连',
    '大富大贵',
    '大吉大利',
    '万事如意',
    '福气满满',
    '吉祥如意',
    '鸿运当头',
    '五福临门',
    '吉星高照',
    '一帆风顺',
    '四时如意',
    '百事亨通',
    '万事大吉',
    '四季平安',
    '岁岁今日',
    '年年今朝',
    '和气吉祥',
    '欢欢喜喜',
    '合家幸福',
    '前途光明',
    '喜上眉梢',
    '荣华富贵',
    '事业有成',
    '样样如鱼得水',
    '工作顺利',
    '精力满满',
    '笑容常在',
    '出入平安',
    '幸福如意',
    '年年有余',
    '万事胜意',
    '无忧无烦',
    '心想事成',
    '步步高升',
    '幸福永驻',
    '顺风顺水',
    '喜乐多多',
    '永远年轻',
    '春日如沐春风',
    '夏时朝气蓬勃',
    '秋季心旷神怡',
    '冬日温暖愉悦',
    '日日皆有所获',
    '年年皆得所愿',
    '家人平安健康',
    '事事顺',
    '生活美满幸福',
    '处处好'];

// 生成指定范围随机数（保留小数点后两位）
function randomNum(min,max){
    var num=(Math.random() * (max - min + 1) + min).toFixed(2);
    return num;
}

// 初始函数
function init(){
    var container=document.querySelector('.container');
    var f=document.createDocumentFragment(); //创建文档片段对象

    words.forEach(w => {
        var word_box=document.createElement('div');
        var word=document.createElement('div');

        word.innerText=w;
        word.classList.add('word');

        // 随机生成色相值（0为红色、120为绿色、240为蓝色、360为红色）
        var hue=randomNum(0,240);
        word.style.color='hsl('+hue+',100%,65%)';

        word_box.classList.add('word-box');
        // 生成随机数值，并赋值给自定义属性
        word_box.style.setProperty('--margin-top',randomNum(-40,20)+'vh');
        word_box.style.setProperty('--margin-left',randomNum(6,35)+'vw');
        word_box.style.setProperty('--animation-duration',randomNum(8,20)+'s');
        word_box.style.setProperty('--animation-delay',randomNum(-20,0)+'s');

        word_box.appendChild(word);
        f.appendChild(word_box);
    })
    container.appendChild(f);
}

// 绑定加载事件
window.addEventListener('load',init);
