# Directory Structure

This is an example directory strucutre for EMSBlock project

```bash
emsblock
├── dev-testbed
│   ├── default_keys.json
│   ├── hardhat.config.js
│   ├── instructions
│   │   ├── dir_structure.md
│   │   ├── install_req.md
│   │   ├── run_node.md
│   │   └── run_web_app.md
│   ├── LICENSE.md
│   ├── package.json
│   └── README.md
    ├── libraries
        ├── contract
        │   └── hardhat
        │       └── console.sol
        ├── LICENSE
        ├── README.md
    └── apps
    │   ├── app-template
    │   |   ├── contracts
    │   |   │   └── Lock.sol
    │   |   ├── LICENSE.md
    │   |   ├── README.md
    │   |   ├── scripts
    │   |   │   ├── deploy.js
    │   |   │   └── withdraw.js
    │   |   ├── test
    │   |   │   └── Lock.js
    │   |   └── web
    │   |        ├── package.json
    │   |       ├── package-lock.json
    │   |       ├── public
    │   |       │   ├── favicon.ico
    │   |       │   ├── index.html
    │   |       │   ├── logo192.png
    │   |       │   ├── logo310.png
    │   |       │   ├── manifest.json
    │   |       │   └── robots.txt
    │   |       └── src
    │   |           ├── components
    │   |           │   ├── ConnectWallet.js
    │   |           │   ├── Dapp.js
    │   |           │   ├── Loading.js
    │   |           │   ├── NetworkErrorMessage.js
    │   |           │   ├── NoTokensMessage.js
    │   |           │   ├── NoWalletDetected.js
    │   |           │   ├── TransactionErrorMessage.js
    │   |           │   ├── Transfer.js
    │   |           │   └── WaitingForTransactionMessage.js
    │   |           └── index.js
    │   └── app-n
    │       ├── contracts
    │       ├── README.md
    │       ├── scripts
    │       ├── tasks
    │       ├── test
    │       └── web
```