let ethProvider;
let web3;
let tonConnectUI;
let tonAddress = null;

// ---- Ethereum WalletConnect ----
async function connectEthWallet() {
  ethProvider = new WalletConnectProvider.default({
    rpc: {
      1: "https://mainnet.infura.io/v3/YOUR_INFURA_KEY",
      // Or testnet: 5: "https://goerli.infura.io/v3/YOUR_INFURA_KEY"
    },
  });

  await ethProvider.enable();
  web3 = new Web3(ethProvider);

  const accounts = await web3.eth.getAccounts();
  const walletAddress = accounts[0];

  document.getElementById("wallet-address").innerText = `ETH Wallet: ${walletAddress}`;
  localStorage.setItem("wallet_eth", walletAddress);
}

// ---- TON Wallet Connect ----
function initTonWallet() {
  tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: "https://<your-domain-or-github>/tonconnect-manifest.json", // must be hosted
    buttonRootId: "ton-wallet-button", // HTML element ID for TON button
  });

  tonConnectUI.onStatusChange(async (walletInfo) => {
    if (walletInfo && walletInfo.account?.address) {
      tonAddress = walletInfo.account.address;
      document.getElementById("ton-address").innerText = `TON Wallet: ${tonAddress}`;
      localStorage.setItem("wallet_ton", tonAddress);
    }
  });
}

window.connectEthWallet = connectEthWallet;
window.initTonWallet = initTonWallet;
