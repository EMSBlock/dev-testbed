# Testbed

### Setup

Install hardhat env
```bash
mkdir hardhat
cd hardhat
npm install --save-dev hardhat
npm install
```

Then click `Create a Javascript project`

Startup hardhat node
```bash
npx hardhat node
```

This does stuff
```
npm audit fix --force
```

### Hardhat network settings (for metamask)

Network Name: Hardhat— This is up to you and defines how the network will show up in your network dropdown.
New RPC URL: http://127.0.0.1:8545/ — The endpoint returned from running npx hardhat node earlier.
Chain ID: 31337 — This is the default chain identifier that is implemented by Hardhat. You can refer to their documentation here.
Currency Symbol: HardhatETH — This is up to you and defines the symbol for the local network currency (ie. ETH).

https://medium.com/@kaishinaw/connecting-metamask-with-a-local-hardhat-network-7d8cea604dc6

In case the error comes up
https://ethereum.stackexchange.com/questions/109625/received-invalid-block-tag-87-latest-block-number-is-0