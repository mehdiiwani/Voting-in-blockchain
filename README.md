# Decentralized Voting Application

This is a 1st prototype of our project. We are going to release more versions as well with updated code and latest features.


## Installation

### CLone the project to your local machine 

```
git clone https://github.com/mehdiiwani/Voting-in-blockchain
```

To Start and run this project you first need to ensure few things 

### Node version used is 16.20.0 
make sure you have the same node version or it will have some dependencies error
you can use nvm for that 

```
nvm use 16.20.0
```

Then you can proceed whis this step

```shell
npm install
```

You first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.

### Note you need to add details in your .env

Your private key and network rpc

after that proceed for this command

```shell
npx hardhat compile 
```

### Note make sure you use the correct solidity version in Hardhat.config.js 
You can use different testnets as well

```shell
npx hardhat run --network volta scripts/deploy.js
```
after compiling change the data in the constant.js file 

```shell
npm start
```
