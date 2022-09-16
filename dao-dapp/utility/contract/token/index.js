import { Contract, ethers } from "ethers"

import { TOKEN_CONTRACT_ABI, TOKEN_CONTRACT_ADDRESS } from "../../constants/contract/token/index"

export default async function myContract(signer) {

    let contract;


    contract = new Contract(TOKEN_CONTRACT_ADDRESS, TOKEN_CONTRACT_ABI, signer)


    return contract;

}
