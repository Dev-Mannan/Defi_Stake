require('@nomiclabs/hardhat-waffle');
require("dotenv").config();

module.exports = {
  solidity: '0.8.0',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/Q8w_9YFUi5bKS9_e56vnm2wcmqERLMV9',
      accounts: ['054169e83bfaf6b503f609b68c195eaa40ae18a9470d987b668d275b205835f4'],
    },
  },
};
