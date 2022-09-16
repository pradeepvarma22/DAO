import daoContract from "../../utility/contract/dao/index"
import myContract from "../../utility/contract/token/index"
import { useEffect, useReducer, useState } from "react"
import { daoContractReducer, DAO_INITIAL_STATE, DAO_OPTIONS } from "../../utility/reducer/contract/dao/index"
import { ethers, BigNumber } from "ethers";



export default function Connected({ walletState, walletDispatch }) {

    const [daoContractState, daoContractDispatch] = useReducer(daoContractReducer, DAO_INITIAL_STATE)

    const [allProposals, setAllProposals] = useState([]);



    async function loadOnChange() {
        await getAllProposals();

        await getTokenBalance();

    }

    async function getTokenBalance() {
        const myProvider = walletState.provider;
        const signer = await myProvider.getSigner();
        const userAddress = await signer.getAddress()

        const daoContract_ = await daoContract(signer);
        const userBalance = await daoContract_.shares(userAddress);

        daoContractDispatch({ type: DAO_OPTIONS.SET_USER_TOKEN_BALANCE, payload: userBalance })

    }



    useEffect(() => {
        loadOnChange();
    }, [])


    async function upvote(hash) {


        const myProvider = walletState.provider;
        const signer = await myProvider.getSigner();
        const daoContract_ = await daoContract(signer);
        try {

            const txn = await daoContract_.vote(hash, 0);
            await txn.wait();

        } catch (error) {
            alert('Already Voted')
        }

    }

    async function downVote(hash) {

        const myProvider = walletState.provider;
        const signer = await myProvider.getSigner();
        const daoContract_ = await daoContract(signer);
        try {

            const txn = await daoContract_.vote(hash, 1);
            await txn.wait()

        } catch (error) {
            alert('Already Voted')
        }
    }





    return (
        <div>
            <div>



                {walletState.walletAddress}<br />
                {ethers.utils.formatEther(daoContractState.tokenBalance)}
                <br />






                <div>

                </div>



                <div>
                    {allProposals.map(function (d, idx) {




                        return (

                            <div key={idx}>
                                <div>{d.author}</div>
                                {d.createdAt.toString()}
                                <br />
                                {d.text}
                                <br />
                                {d.votesNo}
                                <br />
                                {d.votesYes}
                                <br />
                                <button onClick={() => setVote(d.hash, 0)}>UpVote</button>
                                <button onClick={() => setVote(d.hash, 1)}>DownVote</button>
                                <br />
                                <br />

                            </div>
                        )



                    })}
                </div>





            </div>

        </div>

    );

    async function setVote(hash, id) {

        if (id) {
            await upvote(hash);
        }
        else {
            await downVote(hash)
        }
        await getAllProposals()

    }


    async function getAllProposals() {
        const myProvider = walletState.provider;
        const signer = await myProvider.getSigner();
        const daoContract_ = await daoContract(signer);
        const noOfProposals = await daoContract_.noofproposals();
        const hashNames = []
        for (let i = 0; i < noOfProposals; i++) {
            const hash_ = await daoContract_.proposalhashlist(i);
            const text = ethers.utils.parseBytes32String(hash_)
            const obj = await daoContract_.proposals(hash_);

            const obj_ = {
                author: obj.author,
                createdAt: new Date(obj.createdAt.toString() * 1000),
                text: text,
                votesNo: ethers.utils.formatEther(obj.votesNo),
                votesYes: ethers.utils.formatEther(obj.votesYes),
                hash: hash_
            }
            hashNames.push(obj_);
        }
        setAllProposals(oldArray => hashNames);
    }



}