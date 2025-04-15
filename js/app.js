window.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Telegram
  if (typeof TelegramLogin === "function") {
    TelegramLogin();
  }

  // 2. Initialize TON Wallet button
  if (typeof initTonWallet === "function") {
    initTonWallet();
  }

  // 3. Restore Ethereum Wallet
  const savedEth = localStorage.getItem("wallet_eth");
  if (savedEth) {
    document.getElementById("wallet-address").innerText = `ETH Wallet: ${savedEth}`;
  }

  // 4. Restore TON Wallet
  const savedTon = localStorage.getItem("wallet_ton");
  if (savedTon) {
    document.getElementById("ton-address").innerText = `TON Wallet: ${savedTon}`;
  }

  // 5. (Optional) Show username from Telegram
  const user = localStorage.getItem("tg_user");
  if (user) {
    const userObj = JSON.parse(user);
    document.getElementById("welcome").innerText = `Welcome back, ${userObj.first_name}`;
  }
});
