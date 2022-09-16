import { BigNumber, ethers, utils } from "ethers"

const tokenContractReducer = (state, action) => {


    switch (action.type) {
        case TOKEN_OPTIONS.SET_USER_TOKEN_BALANCE: return { ...state, tokenBalance: action.payload };
        case TOKEN_OPTIONS.SET_TOKEN_AMOUNT: return { ...state, tokenAmount: action.payload }
        default: return state;
    }

}

const bigZero = BigNumber.from(0);

const TOKEN_INITIAL_STATE = {
    tokenBalance: bigZero,
    tokenAmount: bigZero
}


const TOKEN_OPTIONS = {
    SET_USER_TOKEN_BALANCE: 'SET_USER_TOKEN_BALANCE',
    SET_TOKEN_AMOUNT: 'SET_TOKEN_AMOUNT'


}



export { tokenContractReducer, TOKEN_INITIAL_STATE, TOKEN_OPTIONS }
