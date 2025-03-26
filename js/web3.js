async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      alert('Wallet connected: ' + accounts[0]);
    } catch (err) {
      alert('Connection failed');
    }
  } else {
    alert('Please install MetaMask or use WalletConnect');
  }
}