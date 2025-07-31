// wallet.js
require("dotenv").config();
const { ethers } = require("ethers");
const inquirer = require("inquirer");
const { generateWallet, loadWallet } = require("./utils");

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

async function showMenu() {
  const { choice } = await inquirer.prompt({
    type: "list",
    name: "choice",
    message: "Pilih aksi:",
    choices: ["Generate Wallet", "Tampilkan Info Wallet", "Lihat Saldo", "Kirim ETH", "Keluar"],
  });

  if (choice === "Generate Wallet") {
    const wallet = generateWallet();
    console.log("✅ Wallet baru dibuat!");
    console.log("Address:", wallet.address);
  }

  if (choice === "Tampilkan Info Wallet") {
    const wallet = loadWallet();
    if (!wallet) return console.log("❌ Wallet belum dibuat.");
    console.log("Address:", wallet.address);
    console.log("Private Key:", wallet.privateKey);
  }

  if (choice === "Lihat Saldo") {
    const wallet = loadWallet();
    if (!wallet) return console.log("❌ Wallet belum dibuat.");
    const connected = wallet.connect(provider);
    const balance = await connected.getBalance();
    console.log("💰 Saldo ETH:", ethers.utils.formatEther(balance));
  }

  if (choice === "Kirim ETH") {
    const wallet = loadWallet();
    if (!wallet) return console.log("❌ Wallet belum dibuat.");
    const connected = wallet.connect(provider);

    const { to, amount } = await inquirer.prompt([
      { name: "to", message: "Alamat tujuan:" },
      { name: "amount", message: "Jumlah ETH:" },
    ]);

    const tx = await connected.sendTransaction({
      to,
      value: ethers.utils.parseEther(amount),
    });

    console.log("📤 Transaksi terkirim!");
    console.log("Hash:", tx.hash);
  }

  if (choice !== "Keluar") await showMenu();
}

showMenu();
