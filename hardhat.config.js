require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  
  solidity: "0.8.9",

  defaultNetwork: "localhost",

  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  }

};

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

console.log("# Hardhat config loaded");