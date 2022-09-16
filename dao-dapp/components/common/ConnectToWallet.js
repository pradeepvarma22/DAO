import connect from "../../utility/connect";
import Image from 'next/image'


export default function ConnectToWallet({ walletState, walletDispatch, web3ModalRef }) {

    const connectMe = () => {
        connect(web3ModalRef, walletDispatch);
    }

    return (
        <div>


            <button onClick={connectMe} className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all">

                Login With MetaMask 🦊

            </button>


        </div >
    )


}