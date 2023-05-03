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

### Install NodeJS (Linux)
In terminal
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
Restart Terminal.
```bash
nvm install latest
nvm install 18.2.0
nvm use 18.2.0
```

### Install NodeJS (Windows)
[Link to Node Version Manager Download](https://github.com/coreybutler/nvm-windows#readme)
Then click download on readme and click download setup.exe. Run installer. Restart Terminal.

In terminal do
```bash
nvm install 18.2.0
nvm use 18.2.0
```
