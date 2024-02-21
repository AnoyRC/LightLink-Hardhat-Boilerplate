require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "YOUR_PRIVATE_KEY";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    pegasus: {
      url: `https://replicator.pegasus.lightlink.io/rpc/v1`,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      pegasus: "your API key",
    },
    customChains: [
      {
        network: "pegasus",
        chainId: 1891,
        urls: {
          apiURL: "https://pegasus.lightlink.io/api",
          browserURL: "https://pegasus.lightlink.io/",
        },
      },
    ],
  },
};
