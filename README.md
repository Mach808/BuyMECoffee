# ☕ Buy Me a Coffee (Web3 dApp)
Buy Me a Coffee is a Web3 DApp that lets users send ETH tips and messages to creators as a token of appreciation. Built with Solidity and Ethers.js, it connects to wallets like MetaMask and records all messages on-chain. Deployed using Hardhat and Netlify.

## 🔗 Live Demo
https://ethereumcoffee.netlify.app/

## ✨ Features
  1. Connects Sepolia ETH wallet(MetaMask)
  2. Send ETH along with a personal message
  3. View list of supporters and their messages
  4. Smart contract deployed to testnet
  5. Real-time updates using Ethers.js

## 🛠️ Tech Stack
  1. Frontend: React.js
  2. Blockchain: Solidity, Hardhat
  3. Web3 Integration: Ethers.js
  4. Wallet: MetaMask

## Installation
### Prerequisites
1. Nodejs and npm
2. MetaMask browser extension
3. Testnet ETH (Goerli or Sepolia)

## 1. Clone the repo
`git clone https://github.com/yourusername/BuyMeCoffee.git`
`cd BuyMeCoffee`

## 2. Install dependencies
`npm install`

## 3. Compile & deploy smart contract
`cd smart_contract`
`npx hardhat compile`
`npx hardhat run scripts/deploy.js --network sepolia`

## 4. Update frontend
Replace the contract address and ABI in the frontend code (state.js or relevant file).

## 5. Run frontend
`npm start`

# 📸 Screenshots
![ScreenShot of the webApp](<img width="1908" height="1056" alt="image" src="https://github.com/user-attachments/assets/e7b97a6d-f45b-4421-9f4c-404b5b7263cb" />)

