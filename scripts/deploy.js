const { ethers } = require("hardhat");

async function main() {
  // Mendapatkan akun yang digunakan untuk deploy
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Mengecek saldo deployer
  const balance = await ethers.provider.getBalance(deployer.address); // Pastikan kita mengambil saldo deployer yang benar
  console.log("Account balance:", ethers.utils.formatEther(balance)); // Gunakan formatEther dengan benar

  // Mengambil kontrak yang ingin dideploy
  const Contract = await ethers.getContractFactory("NewTestnet");

  // Deploy kontrak
  const contract = await Contract.deploy();
  console.log("Contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
