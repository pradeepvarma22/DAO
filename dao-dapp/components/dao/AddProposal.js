import { ethers } from "ethers";
import { useState, useEffect } from "react";
import daoContract from "../../utility/contract/dao/index"
import myContract from "../../utility/contract/token/index"
import { DAO_CONTRACT_ADDRESS } from "../../utility/constants/contract/dao/index"





export default function AddProposals({ walletState, walletDispatch }) {

    const [shares, setShares] = useState(0);
    const [depositTokens, setDepositTokens] = useState(0);
    const [proposal, setProposal] = useState("");

    async function loadOnChange() {

        await getShareBalance();

    }

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


    useEffect(() => {
        loadOnChange();
    }, [])


    return (
        <div>

            {shares >= 10 ? (
                <div>
                    <p>{shares}</p>


                    <input type="text" onChange={setProposalText} />
                    <button onClick={txnAddProposal}>Add Proposal</button>

                </div>
            ) : (
                <div>
                    <p>{shares}</p>

                    To add proposal user need to have shares greater than 10 VARMA tokens
                    If you have Varma Tokens deposit here
                    <p>Token COntract Approve {DAO_CONTRACT_ADDRESS} 2. transferFrom  </p>
                    <br />
                    <input type="number" onChange={setNoOfTokens} placeholder="Enter Tokens" />
                    <br />
                    <button onClick={deposit}>deposit tokens</button>
                    <br />

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