import { BigNumber, ethers, utils } from "ethers"

const daoContractReducer = (state, action) => {


    switch (action.type) {
        case DAO_OPTIONS.SET_USER_TOKEN_BALANCE: return { ...state, tokenBalance: action.payload };

        default: return state;
    }

}

const bigZero = BigNumber.from(0);

const DAO_INITIAL_STATE = {
    tokenBalance: bigZero,

}


const DAO_OPTIONS = {
    SET_USER_TOKEN_BALANCE: 'SET_USER_TOKEN_BALANCE',



}



export { daoContractReducer, DAO_INITIAL_STATE, DAO_OPTIONS }
