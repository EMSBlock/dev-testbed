# Run a Hardhat Node

## Starting a node

1. Navigate into dev-testbed

2. Install npm modules

```bash
npm install
```

3. Deploy hardhat node

```bash
npx hardhat node
```

## Stopping a node

Ctrl+C to kill

Otherwise use

```bash
kill %1
```

## Resetting a node

Wipe all previous data from network (Doesnt change private keys).  
When node is not running.

```bash
npx hardhat clean
```

## Other commands

```bash
npx hardhat run --network localhost scripts/deploy.js
npx hardhat run --network localhost scripts/withdraw.js
```
