// scripts/deploy.ts

import { ethers } from "hardhat";

async function main() {
  const initialMessage = "Hello SpermBank";
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with the account:", deployer.address);

  const SpermBank = await ethers.deployContract("SpermBank", []);
  await SpermBank.waitForDeployment();
  console.log(
    "Contract deployed to address:",
    await SpermBank.getAddress()
  );
  console.log(
    `Deployment TX: https://holesky.etherscan.io/tx/${
      SpermBank.deploymentTransaction()?.hash
    }`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});