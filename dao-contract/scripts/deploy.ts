import { ethers } from "hardhat";

async function main() {


  let contractFactory = await ethers.getContractFactory("VarmaToken");

  let contract = await contractFactory.deploy();

  await contract.deployed();

  const tokenAddress = contract.address;

  console.log('Token Contract is at address', contract.address);




  let contractFactory_1 = await ethers.getContractFactory("DAO");

  let contract_1 = await contractFactory_1.deploy(tokenAddress);

  await contract_1.deployed();

  console.log('DAO Contract is at address', contract_1.address);






}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
