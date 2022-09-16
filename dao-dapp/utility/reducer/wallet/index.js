const walletReducer = (state, action) => {


    switch (action.type) {
        case WALLET_OPTIONS.SET_WALLET_ADDRESS: return { ...state, walletAddress: action.payload };
        case WALLET_OPTIONS.SET_WALLET_CONNECT: return { ...state, walletConnected: action.payload };
        case WALLET_OPTIONS.IS_WEB3_MODAL_INSTANCE: return { ...state, isWeb3ModalInstancePresent: action.payload };
        case WALLET_OPTIONS.SET_WEB3_MODAL_INSTANCE: return { ...state, web3ModalInstance: action.payload };
        case WALLET_OPTIONS.ERROR: return { ...state, error: true, errorMessage: action.payload };
        case WALLET_OPTIONS.PROVIDER: return { ...state, provider: action.payload };
        case WALLET_OPTIONS.SET_CHAIN_ID: return { ...state, chainId: action.payload };

        default: return state;
    }

}

const WALLET_INITIAL_STATE = {
    walletAddress: "",
    walletConnected: false,
    isWeb3ModalInstancePresent: false,
    web3ModalInstance: {},
    provider: {},
    chainId: 0,
    error: false,
    errorMessage: ""
}


const WALLET_OPTIONS = {
    SET_WALLET_ADDRESS: 'SET_WALLET_ADDRESS',
    SET_WALLET_CONNECT: 'SET_WALLET_CONNECT',
    IS_WEB3_MODAL_INSTANCE: 'IS_WEB3_MODAL_INSTANCE',
    SET_WEB3_MODAL_INSTANCE: 'SET_WEB3_MODAL_INSTANCE',
    SET_CHAIN_ID: 'SET_CHAIN_ID',
    PROVIDER: 'PROVIDER',
    ERROR: 'ERROR'

}



export { walletReducer, WALLET_INITIAL_STATE, WALLET_OPTIONS }
