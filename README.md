# Testbed - using Hardhat

```
cd testbed
```

```
npm install
```

```
cd hardhat
```

```
npx hardhat node
```
Ctrl+C to kill

Otherwise use
```
kill %1
```


```
npx hardhat run --network localhost scripts/deploy.js
npx hardhat run --network localhost scripts/Withdraw.js
```


Wipe all previous data from network (Doesnt change private keys)
```
npx hardhat clean
```