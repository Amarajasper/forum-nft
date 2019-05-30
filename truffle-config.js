require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
// MNEMONIC_PHRASE and INFURA_KEY are mentioned in .env file
const mnemonic = process.env.MNEMONIC_PHRASE;
const infuraKey = process.env.INFURA_KEY;

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
        },
    "ropsten-infura": {
        provider: () => new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/v3/' + infuraKey, 0),
        network_id: 3,
        gas: 5500000,
        gasPrice: 100000000000,
        timeoutBlocks: 200,
    },
  },
    mocha: {},
    compilers: {
        solc: {
            version: "0.5.2",
        }
    }
}