import { HardhatUserConfig } from "hardhat/config";

import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const ALCHEMY_API_KEY_URL: string = process.env.ALCHEMY_API_KEY_URL!;   // MATIC TEST NETWORK
const METAMASK_PRIVATE_KEY: string = process.env.METAMASK_PRIVATE_KEY!;


const config: HardhatUserConfig = {
  networks: {
    polygontest: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [METAMASK_PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.17",
  },
  paths: {
    artifacts: "./data/src/artifacts",
    cache: "./data/src/cache",
  },
  typechain: {
    outDir: './data/src/types',
  }
};

export default config;
