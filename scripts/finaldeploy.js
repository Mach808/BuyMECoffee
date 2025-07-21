const hre = require("hardhat");
const { ethers } = hre;

async function main() {
  const coffee = await hre.ethers.getContractFactory("coffee");
  const contract = await coffee.deploy(); //instance of contract

  // Wait for deployment to complete
  await contract.waitForDeployment();
  
  // Get the contract address using getAddress() method
  const contractAddress = await contract.getAddress();
  console.log("Address of contract:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});