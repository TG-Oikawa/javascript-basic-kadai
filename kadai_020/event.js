const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const h2 = document.querySelector('h2');
    h2.textContent = 'ボタンをクリックしました'
});