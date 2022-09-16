import Footer from "../components/common/Footer"
import Header from "../components/common/Header"
import Main from "../components/Main/Main"
import ConnectToWallet from "../components/common/ConnectToWallet"
import { WALLET_INITIAL_STATE, walletReducer } from "../utility/reducer/wallet/index"
import { useEffect, useReducer, useRef } from "react"
import Web3Modal from "web3modal"
import Connected from "../components/Main/Main"

export default function Home() {

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

      <div>
        {
          walletState.walletConnected ? (
            <div>


              <Connected walletState={walletState} walletDispatch={walletDispatch} />

            </div>

          ) : (
            <div>

              <ConnectToWallet walletState={walletState} walletDispatch={walletDispatch} web3ModalRef={web3ModalRef} />


            </div>
          )
        }

      </div>

      <Footer />

    </div>
  )
}
