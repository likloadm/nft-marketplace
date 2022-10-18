const path = require('path')
require('@nomiclabs/hardhat-waffle')
require('dotenv').config({ path: path.join(__dirname, '/.env.local') })
require('hardhat-gas-reporter')

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'QTUM',
  networks: {
    hardhat: {
      chainId: 1337
    },
    QTUM: {
      url: 'https://eth2.quark.blue:23890',
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000
    }
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
