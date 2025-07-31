# 🪙 CLI Wallet for Ethereum

A simple command-line Ethereum wallet built with Node.js and [ethers.js](https://docs.ethers.org/).  
This tool allows you to generate wallets, check balances, send transactions, and securely manage private keys.

---

## 🚀 Features

- Generate new Ethereum wallet (public/private key pair)
- Check ETH balance using Infura or other JSON-RPC endpoints
- Send ETH transactions to other addresses
- Save wallet data to encrypted local file
- Load wallet from file for reuse

---

## 📦 Tech Stack

- Node.js
- Ethers.js v5
- Inquirer.js v8 (for interactive CLI prompts)
- `dotenv` (optional) for secure environment variable management

---

## 📁 Folder Structure

CLI-Wallet/
├── wallet.js # Main CLI script
├── wallet.json # (Ignored) Locally stored encrypted wallet file
├── .gitignore
├── package.json
└── README.md


---

## 📋 Usage

```bash
# Install dependencies
npm install

# Run the wallet CLI
node wallet.js
