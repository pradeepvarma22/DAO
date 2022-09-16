import { Contract, ethers } from "ethers"

import { DAO_CONTRACT_ABI, DAO_CONTRACT_ADDRESS } from "../../constants/contract/dao/index"

export default async function daoContract(signer) {

    const contract = new Contract(DAO_CONTRACT_ADDRESS, DAO_CONTRACT_ABI, signer)


    return contract;

}
