import myContract from "../../utility/contract/token/index"
import { useEffect, useReducer } from "react"
import { tokenContractReducer, TOKEN_INITIAL_STATE, TOKEN_OPTIONS } from "../../utility/reducer/contract/token/index"
import { ethers } from "ethers";

export default function MintToken({ walletState, walletDispatch, web3ModalRef }) {

    const [tokenContractState, tokenContractDispatch] = useReducer(tokenContractReducer, TOKEN_INITIAL_STATE)




    async function getBalanceOf() {
        const myProvider = walletState.provider;
        const signer = await myProvider.getSigner();
        const userAddress = await signer.getAddress()
        const contract = await myContract(signer);
        const balance = await contract.balanceOf(userAddress);
        tokenContractDispatch({ type: TOKEN_OPTIONS.SET_USER_TOKEN_BALANCE, payload: balance })
    }



    useEffect(() => {
        getBalanceOf()
    }, [])




    return (
        <div>

            <div>
                User Have Token Balancec balanceOf:
                {"   "}{
                    ethers.utils.formatEther(tokenContractState.tokenBalance)
                }
            </div>
            <br />
            <div>

            </div>



        </div>
    )


}