window.TelegramLogin = () => {
  const tg = window.Telegram.WebApp;
  tg.expand();

  const user = tg.initDataUnsafe?.user;

  if (user) {
    document.getElementById("welcome").innerText = `Welcome, ${user.first_name}`;
    console.log("Telegram User:", user);

    // Optional: store user data
    localStorage.setItem("tg_user", JSON.stringify(user));
  } else {
    document.getElementById("welcome").innerText = `Telegram Login Failed`;
  }
};
