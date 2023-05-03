# Run a Hardhat Node

```bash
npm install
```

Navigate into chosen app

```bash
npx hardhat node
```

Ctrl+C to kill

Otherwise use

```bash
kill %1
```

```bash
npx hardhat run --network localhost scripts/deploy.js
npx hardhat run --network localhost scripts/withdraw.js
```

Wipe all previous data from network (Doesnt change private keys)

```bash
npx hardhat clean
```
