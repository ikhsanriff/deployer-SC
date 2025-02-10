# EVM Deploy Script

This repository contains a script to deploy Ethereum-based smart contracts to any EVM-compatible network (mainnet or testnet). It is designed for easy integration with different RPC URLs, making it highly customizable for any new project.

## Features

- Deploy smart contracts to EVM networks.
- Support custom RPC URL configuration via `.env`.
- Support any evm chain, testnet and mainnet
- Built using Hardhat, a flexible development environment for smart contracts.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/username/evm-deploy-script.git

   ```bash
cd deployer-SC

   ```bash
npm install

Set up environment variables: Create a .env file in the root directory of the project and add your private key and RPC URL:
PRIVATE_KEY=your-private-key
RPC_URL=your-rpc-url

Run the deployment script
   ```bash
npx hardhat run scripts/deploy.js --network custom
