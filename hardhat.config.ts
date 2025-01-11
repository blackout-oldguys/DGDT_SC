// hardhat.config.ts

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const { RPC_ENDPOINT, DEPLOYER_PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    holesky: {
      url: RPC_ENDPOINT,
      accounts: [DEPLOYER_PRIVATE_KEY || ""],
    },
  },
  defaultNetwork: "holesky",
};

export default config;