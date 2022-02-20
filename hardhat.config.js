require("dotenv").config();
require("@nomiclabs/hardhat-ethers");


module.exports = {
   solidity: "0.7.3",
   defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: process.env.DEV_API_URL,
         accounts: [`0x${process.env.PRIVATE_KEY}`],
        }
   },
}
