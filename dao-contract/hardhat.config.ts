import { HardhatUserConfig } from "hardhat/config";

import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity:{
	version: "0.8.17",
  },
  paths:{
    artifacts: "./data/src/artifacts",
    cache: "./data/src/cache",
  },
  typechain: {
    outDir: './data/src/types',
  }
};

export default config;
