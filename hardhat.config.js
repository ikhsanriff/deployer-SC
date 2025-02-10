require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  networks: {
    custom: {
      url: process.env.RPC_URL,  // Use your RPC URL here from .env
      accounts: [process.env.PRIVATE_KEY],  // Use your private key here from .env
    },
  },
  solidity: "0.8.28",  // Ensure this matches the Solidity version of your contract
};
