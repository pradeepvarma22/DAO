import { BigNumber } from "ethers";


const tokenContractReducer = (state, action) => {


    switch (action.type) {

        case CONTRACT_OPTIONS.SET_BALANCE_OF_USER: return { ...state, balanceOf: action.payload };

        default: return state;
    }

}


const bigZero = BigNumber.from(0);

const CONTRACT_INITIAL_STATE = {
    balanceOf: bigZero

}


const CONTRACT_OPTIONS = {
    SET_BALANCE_OF_USER: 'SET_BALANCE_OF_USER'
}



export { tokenContractReducer, CONTRACT_INITIAL_STATE, CONTRACT_OPTIONS }

