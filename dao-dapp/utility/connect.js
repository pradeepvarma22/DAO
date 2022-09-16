import { ethers } from "ethers"

import { WALLET_OPTIONS } from "./reducer/wallet/index"

export default async function connect(web3ModalRef, walletDispatch) {

    const OPTIONS = WALLET_OPTIONS;

    try {

        const web3ModalInstance = await web3ModalRef.current.connect()
        walletDispatch({ type: OPTIONS.SET_WALLET_CONNECT, payload: true })
        walletDispatch({ type: OPTIONS.IS_WEB3_MODAL_INSTANCE, payload: true })
        walletDispatch({ type: OPTIONS.SET_WEB3_MODAL_INSTANCE, payload: web3ModalInstance })
        const provider = new ethers.providers.Web3Provider(web3ModalInstance);
        walletDispatch({ type: OPTIONS.PROVIDER, payload: provider })
        const getChainId = await provider.getNetwork()
        walletDispatch({ type: OPTIONS.SET_CHAIN_ID, payload: getChainId })
        const signer = await provider.getSigner();
        const walletAddress = await signer.getAddress();
        walletDispatch({ type: OPTIONS.SET_WALLET_ADDRESS, payload: walletAddress })

    } catch (error) {

        walletDispatch({ type: OPTIONS.ERROR, payload: error.toString() })

        console.error(error)

    }

}