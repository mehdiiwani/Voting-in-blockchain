/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.0",
   defaultNetwork: "volta",
   networks: {
      hardhat: {},
      volta: {
         url: "https://volta-rpc.energyweb.org",
         accounts: [`0x${PRIVATE_KEY}`],
         gas: 2100000,
         gasPrice: 800000000,
      }
   },
}
