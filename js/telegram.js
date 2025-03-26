const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe.user;
document.getElementById('user-info').innerText = `Logged in as: ${user.username}`;