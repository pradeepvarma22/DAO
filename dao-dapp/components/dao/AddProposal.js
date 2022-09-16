import { ethers } from "ethers";
import { useEffect, useRef, useState } from "react";

import { DAO_CONTRACT_ADDRESS } from "../../utility/constants/contract/dao/index"
import daoContract from "../../utility/contract/dao/index"
import myContract from "../../utility/contract/token/index"

export default function AddProposals({ walletState, walletDispatch }) {
    const inputEl = useRef(null);

    const [shares, setShares] = useState(0);
    const [depositTokens, setDepositTokens] = useState(0);
    const [proposal, setProposal] = useState("");

    async function loadOnChange() {

        await getShareBalance();

    }

    useEffect(() => {
        loadOnChange();
    }, [])


    async function getShareBalance() {
        const myProvider = walletState.provider;
        const signer = await myProvider.getSigner();
        const userAddress = await signer.getAddress()

        const daoContract_ = await daoContract(signer);
        let shares_ = await daoContract_.shares(userAddress)
        setShares(ethers.utils.formatEther(shares_))

    }

    async function deposit() {
        const myProvider = walletState.provider;
        const signer = await myProvider.getSigner();
        const daoContract_ = await daoContract(signer);
        const tokenContract = await myContract(signer);
        const txn = await tokenContract.approve(DAO_CONTRACT_ADDRESS, ethers.utils.parseEther(depositTokens));
        await txn.wait();

        let txn2;

        let txn_test = await myProvider.getTransaction(txn.hash);
        if (txn_test) {
            if (txn_test.blockNumber) {

                txn2 = await daoContract_.deposit(ethers.utils.parseEther(depositTokens));
                await txn2.wait()
                alert('done')
            }
        }


        loadOnChange();
    }




    return (
        <div>

            {shares >= 10 ? (


                <div>
                    <div>
                        <div>
                            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                                <img src="" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
                                <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                                <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                                    <div className="mx-auto max-w-md">
                                        <b><center>Add Proposal</center></b>
                                        <div className="divide-y divide-gray-300/50">
                                            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                                                <p>🦊 {walletState.walletAddress}</p>
                                                <ul className="space-y-4">

                                                    <li className="flex items-center">
                                                        <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                                            <circle cx="12" cy="12" r="11" />
                                                            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                                        </svg>
                                                        <p className="ml-4">Shares:{shares}</p>
                                                    </li>



                                                    <li>
                                                        <div className="pt-8 text-base font-semibold leading-7">


                                                            <form className="w-full max-w-sm">
                                                                <div className="flex items-center border-b border-teal-500 py-2">
                                                                    <input ref={inputEl} onChange={setProposalText} placeholder="Proposal" type="text" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" aria-label="Proposal" />
                                                                    <button onClick={txnAddProposal} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                                                        ADD
                                                                    </button>
                                                                    <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                                                                        Cancel
                                                                    </button>
                                                                </div>
                                                            </form>

                                                            <br />

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pt-8 text-base font-semibold leading-7">
                                                <p className="text-gray-900">Want to dig deeper into DAO ?</p>
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

                </div>


            ) : (
                <div>
                    <div>
                        <div>
                            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                                <img src="" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
                                <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                                <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                                    <div className="mx-auto max-w-md">
                                        <b><center>Deposit</center></b>
                                        <div className="divide-y divide-gray-300/50">
                                            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                                                <p>🦊 {walletState.walletAddress}</p>
                                                <p>To add a proposal, users need to have more than <b>10 VARMA</b> tokens.</p>
                                                <ul className="space-y-4">

                                                    <li className="flex items-center">
                                                        <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                                            <circle cx="12" cy="12" r="11" />
                                                            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                                        </svg>
                                                        <p className="ml-4">Shares:{shares}</p>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                                                            <circle cx="12" cy="12" r="11" />
                                                            <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                                        </svg>
                                                        <p className="ml-4">Steps: Approve ERC20,  Deposit token to DAO</p>
                                                    </li>

                                                    <li>
                                                        <div className="pt-8 text-base font-semibold leading-7">


                                                            <form className="w-full max-w-sm">
                                                                <div className="flex items-center border-b border-teal-500 py-2">
                                                                    <input ref={inputEl} onChange={setNoOfTokens} placeholder="No of tokens" type="number" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" aria-label="No Of Tokens" />
                                                                    <button onClick={deposit} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                                                        deposit
                                                                    </button>
                                                                    <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                                                                        Cancel
                                                                    </button>
                                                                </div>
                                                            </form>

                                                            <br />

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pt-8 text-base font-semibold leading-7">
                                                <p className="text-gray-900">Want to dig deeper into DAO ?</p>
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

                </div>
            )
            }


        </div >
    )

    function setProposalText(e) {
        setProposal(e.target.value)
    }

    function setNoOfTokens(e) {

        setDepositTokens(e.target.value);

    }

    async function txnAddProposal() {
        const myProvider = walletState.provider;
        const signer = await myProvider.getSigner();
        const daoContract_ = await daoContract(signer);
        const hash = ethers.utils.formatBytes32String(proposal)
        const txn = await daoContract_.createProposal(hash)
        await txn.wait();
        alert('Proposal Added');
    }

}