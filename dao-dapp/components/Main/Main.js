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
                <br />
                <center>
                    <div>
                        <p className="hover:shadow-md">{walletState.walletAddress}</p>
                        Shares: {ethers.utils.formatEther(daoContractState.tokenBalance)}
                    </div>
                </center>





                <div>

                </div>



                <div>


                    <div className="flex items-center w-screen min-h-screen">
                        <div className="container ml-auto mr-auto flex flex-wrap gap-10 items-start">


                            {allProposals.map(function (d, idx) {

                                return (



                                    <div>

                                        <div className="px-4 py-3 w-max bg-white shadow-md rounded-xl duration-500 hover:scale-105  hover:shadow-xl">

                                            <img
                                                src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                                alt="Product"
                                                className="h-80 w-72 object-cover rounded-t-xl"
                                            />
                                            <div key={idx} className="px-4 py-3 w-72">
                                                <span className="text-gray-400 mr-3 text-xs">{d.author}</span>
                                                <p className="text-lg font-semibold text-black truncate">{d.text}</p>
                                                <div className="flex items-center">
                                                    <p className="text-sm text-gray-600 cursor-auto ml-2"><b>+</b> {" "} {d.votesYes}  </p>
                                                    <p className="text-sm text-gray-600 cursor-auto ml-2"><b>-</b> {" "} {d.votesNo}</p>
                                                </div>
                                                <p>
                                                    <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2" onClick={() => setVote(d.hash, 0)}>UpVote</button>{"   "}
                                                    <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2" onClick={() => setVote(d.hash, 1)}>DownVote</button>
                                                </p>
                                                <p>{d.createdAt.toString()}</p>

                                            </div>

                                        </div>




                                    </div>



                                )


                            })}
                        </div>
                    </div>
                </div>


            </div>

        </div >

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