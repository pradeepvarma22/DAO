import myContract from "../../utility/contract/token/index"
import { useEffect, useReducer } from "react"
import { tokenContractReducer, TOKEN_INITIAL_STATE, TOKEN_OPTIONS } from "../../utility/reducer/contract/token/index"
import { ethers, BigNumber } from "ethers";
import { useRef } from "react"

export default function MintToken({ walletState, walletDispatch, web3ModalRef }) {

    const [tokenContractState, tokenContractDispatch] = useReducer(tokenContractReducer, TOKEN_INITIAL_STATE)
    const inputEl = useRef(null);
    const bigZero = BigNumber.from(0);


    async function mintTokens() {
        const myProvider = walletState.provider;
        const signer = await myProvider.getSigner();
        const userAddress = await signer.getAddress()
        const contract = await myContract(signer);



        const noOfTokens = tokenContractState.tokenAmount;
        const _value = noOfTokens * 0.01;


        const txn = await contract.mint(ethers.utils.parseEther(noOfTokens), { value: ethers.utils.parseEther(_value.toString()) })
        await txn.wait();

        await getBalanceOf();
    }

    async function getBalanceOf() {
        const myProvider = walletState.provider;
        const signer = await myProvider.getSigner();
        const userAddress = await signer.getAddress()
        const contract = await myContract(signer);
        const balance = await contract.balanceOf(userAddress);
        tokenContractDispatch({ type: TOKEN_OPTIONS.SET_USER_TOKEN_BALANCE, payload: balance })
    }

    useEffect(() => {
        inputEl.current.focus();
        getBalanceOf();
    }, [])



    const setTokenAmount = (e) => {

        if (e.target.value > 0) {
            tokenContractDispatch({ type: TOKEN_OPTIONS.SET_TOKEN_AMOUNT, payload: e.target.value })
        }
        else {
            tokenContractDispatch({ type: TOKEN_OPTIONS.SET_TOKEN_AMOUNT, payload: bigZero })

        }
    }



    return (
        <div>
            <div>
                <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                    <img src="" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
                    <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                    <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                        <div className="mx-auto max-w-md">
                            <p>Token Symbol: <b>VARMA </b></p>
                            <div className="divide-y divide-gray-300/50">
                                <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                                    <p>🦊 {walletState.walletAddress}</p>
                                    <ul className="space-y-4">
                                        <li className="flex items-center">
                                            <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="12" r="11" />
                                                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                            </svg>
                                            <p className="ml-4">DAO</p>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="12" r="11" />
                                                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                            </svg>
                                            <p className="ml-4">
                                                Balance :
                                                <code className="text-sm font-bold text-gray-900">  {ethers.utils.formatEther(tokenContractState.tokenBalance)}</code>
                                            </p>
                                        </li>
                                        <li className="flex items-center">
                                            <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="12" r="11" />
                                                <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                            </svg>
                                            <p className="ml-4">
                                                Each Token Cost
                                                <code className="text-sm font-bold text-gray-900">  0.01  MATIC</code>
                                            </p>
                                        </li>

                                        <li>
                                            <div className="pt-8 text-base font-semibold leading-7">


                                                <form class="w-full max-w-sm">
                                                    <div class="flex items-center border-b border-teal-500 py-2">
                                                        <input onChange={setTokenAmount} placeholder="No of tokens" ref={inputEl} type="number" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" aria-label="No Of Tokens" />
                                                        <button onClick={mintTokens} class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                                            Mint
                                                        </button>
                                                        <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </form>

                                                <br />

                                            </div>
                                        </li>
                                    </ul>
                                    <p>Anyone can participate in the DAO using the Varma token.</p>
                                </div>
                                <div className="pt-8 text-base font-semibold leading-7">
                                    <p className="text-gray-900">Want to dig deeper into ERC20 Token?</p>
                                    <p>
                                        <a href="" className="text-sky-500 hover:text-sky-600" target="_blank">Read the docs &rarr;</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



















        </div>
    )


}