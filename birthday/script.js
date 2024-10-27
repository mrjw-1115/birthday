const button = document.getElementById('myButton');
const link = document.getElementById('myLink');
// 为按钮添加点击事件监听器
button.addEventListener('click', function() {
    // 修改链接的href属性值
    link.href = 'https://www.example2.com';
});