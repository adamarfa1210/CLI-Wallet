// utils.js
const fs = require("fs");
const { ethers } = require("ethers");

// Membuat wallet baru dan simpan private key
function generateWallet() {
  const wallet = ethers.Wallet.createRandom(); // ← Buat wallet baru (otomatis)
  fs.writeFileSync(
    "wallet.json",
    JSON.stringify({ privateKey: wallet.privateKey }, null, 2)
  );
  return wallet;
}

// Load wallet dari file wallet.json
function loadWallet() {
  if (!fs.existsSync("wallet.json")) return null;
  const { privateKey } = JSON.parse(fs.readFileSync("wallet.json"));
  return new ethers.Wallet(privateKey);
}

module.exports = { generateWallet, loadWallet };
