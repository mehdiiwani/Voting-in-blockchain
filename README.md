# Decentralized Voting Application

This is a demo application to implement voting in solidity smart contract using ReactJS. 


## Installation

After you cloned the repository, you want to install the packages using

```shell
npm install
```
Note that the node -v used is 16.20.0

You first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.

you need to add details in your .env file 

```shell
npx hardhat compile 
```

after compiling change the data in the constant.js file 

```shell
npx hardhat run --network volta scripts/deploy.js
```


Once the contract is uploaded to the blockchain, copy the contract address and copy it in the .env file. You can also use another blockchain by writing the blockchain's endpoint in hardhat-config.

Once you have pasted your private key and contract address in the .env file, simply run command

```shell
npm start
```
