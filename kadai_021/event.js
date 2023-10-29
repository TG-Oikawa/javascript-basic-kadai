const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    setTimeout(() => {
    const h2 = document.querySelector('h2');
    h2.textContent = 'ボタンをクリックしました';
    },2000);
});