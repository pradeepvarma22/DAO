import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import ConnectToWallet from "../components/common/ConnectToWallet"
import Web3Modal from "web3modal"
import { useEffect, useReducer, useRef } from "react"
import AddProposals from "../components/dao/AddProposal"
import { WALLET_INITIAL_STATE, walletReducer } from "../utility/reducer/wallet/index"



export default function AddProposal() {
    const web3ModalRef = useRef()
    const [walletState, walletDispatch] = useReducer(walletReducer, WALLET_INITIAL_STATE)

    useEffect(() => {

        if (!walletState.walletConnected) {
            web3ModalRef.current = new Web3Modal({
                network: 'rinkeby',
                providerOptions: {},
                disableInjectedProvider: false
            })
        }

    }, [])


    return (
        <div>
            <Header />

            {
                walletState.walletConnected ? (
                    <div>

                        <AddProposals walletState={walletState} walletDispatch={walletDispatch} />

                    </div>

                ) : (

                    <div className="grid place-items-center h-screen">

                        <ConnectToWallet walletState={walletState} walletDispatch={walletDispatch} web3ModalRef={web3ModalRef} />


                    </div>
                )
            }

            <Footer />

        </div >
    )
}