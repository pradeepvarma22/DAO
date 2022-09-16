/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  VarmaToken,
  VarmaTokenInterface,
} from "../../contracts/VarmaToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600d81526020017f5661726d61277320546f6b656e000000000000000000000000000000000000008152506040518060400160405280600581526020017f5641524d4100000000000000000000000000000000000000000000000000000081525081600390816200008f9190620005bc565b508060049081620000a19190620005bc565b505050620000c4620000b8620000f260201b60201c565b620000fa60201b60201c565b620000ec33670de0b6b3a76400006064620000e09190620006d2565b620001c060201b60201c565b62000809565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000232576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000229906200077e565b60405180910390fd5b62000246600083836200033860201b60201c565b80600260008282546200025a9190620007a0565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002b19190620007a0565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620003189190620007ec565b60405180910390a362000334600083836200033d60201b60201c565b5050565b505050565b505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003c457607f821691505b602082108103620003da57620003d96200037c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004447fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000405565b62000450868362000405565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200049d62000497620004918462000468565b62000472565b62000468565b9050919050565b6000819050919050565b620004b9836200047c565b620004d1620004c882620004a4565b84845462000412565b825550505050565b600090565b620004e8620004d9565b620004f5818484620004ae565b505050565b5b818110156200051d5762000511600082620004de565b600181019050620004fb565b5050565b601f8211156200056c576200053681620003e0565b6200054184620003f5565b8101602085101562000551578190505b620005696200056085620003f5565b830182620004fa565b50505b505050565b600082821c905092915050565b6000620005916000198460080262000571565b1980831691505092915050565b6000620005ac83836200057e565b9150826002028217905092915050565b620005c78262000342565b67ffffffffffffffff811115620005e357620005e26200034d565b5b620005ef8254620003ab565b620005fc82828562000521565b600060209050601f8311600181146200063457600084156200061f578287015190505b6200062b85826200059e565b8655506200069b565b601f1984166200064486620003e0565b60005b828110156200066e5784890151825560018201915060208501945060208101905062000647565b868310156200068e57848901516200068a601f8916826200057e565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620006df8262000468565b9150620006ec8362000468565b9250828202620006fc8162000468565b91508282048414831517620007165762000715620006a3565b5b5092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600062000766601f836200071d565b915062000773826200072e565b602082019050919050565b60006020820190508181036000830152620007998162000757565b9050919050565b6000620007ad8262000468565b9150620007ba8362000468565b9250828201905080821115620007d557620007d4620006a3565b5b92915050565b620007e68162000468565b82525050565b6000602082019050620008036000830184620007db565b92915050565b611aca80620008196000396000f3fe6080604052600436106100f35760003560e01c8063715018a61161008a578063a457c2d711610059578063a457c2d71461030d578063a9059cbb1461034a578063dd62ed3e14610387578063f2fde38b146103c4576100f3565b8063715018a6146102845780638da5cb5b1461029b57806395d89b41146102c6578063a0712d68146102f1576100f3565b8063313ce567116100c6578063313ce567146101c857806339509351146101f35780633ccfd60b1461023057806370a0823114610247576100f3565b806306fdde03146100f8578063095ea7b31461012357806318160ddd1461016057806323b872dd1461018b575b600080fd5b34801561010457600080fd5b5061010d6103ed565b60405161011a91906110e8565b60405180910390f35b34801561012f57600080fd5b5061014a600480360381019061014591906111a3565b61047f565b60405161015791906111fe565b60405180910390f35b34801561016c57600080fd5b506101756104a2565b6040516101829190611228565b60405180910390f35b34801561019757600080fd5b506101b260048036038101906101ad9190611243565b6104ac565b6040516101bf91906111fe565b60405180910390f35b3480156101d457600080fd5b506101dd6104db565b6040516101ea91906112b2565b60405180910390f35b3480156101ff57600080fd5b5061021a600480360381019061021591906111a3565b6104e4565b60405161022791906111fe565b60405180910390f35b34801561023c57600080fd5b5061024561051b565b005b34801561025357600080fd5b5061026e600480360381019061026991906112cd565b6105bc565b60405161027b9190611228565b60405180910390f35b34801561029057600080fd5b50610299610604565b005b3480156102a757600080fd5b506102b0610618565b6040516102bd9190611309565b60405180910390f35b3480156102d257600080fd5b506102db610642565b6040516102e891906110e8565b60405180910390f35b61030b60048036038101906103069190611324565b6106d4565b005b34801561031957600080fd5b50610334600480360381019061032f91906111a3565b61072b565b60405161034191906111fe565b60405180910390f35b34801561035657600080fd5b50610371600480360381019061036c91906111a3565b6107a2565b60405161037e91906111fe565b60405180910390f35b34801561039357600080fd5b506103ae60048036038101906103a99190611351565b6107c5565b6040516103bb9190611228565b60405180910390f35b3480156103d057600080fd5b506103eb60048036038101906103e691906112cd565b61084c565b005b6060600380546103fc906113c0565b80601f0160208091040260200160405190810160405280929190818152602001828054610428906113c0565b80156104755780601f1061044a57610100808354040283529160200191610475565b820191906000526020600020905b81548152906001019060200180831161045857829003601f168201915b5050505050905090565b60008061048a6108cf565b90506104978185856108d7565b600191505092915050565b6000600254905090565b6000806104b76108cf565b90506104c4858285610aa0565b6104cf858585610b2c565b60019150509392505050565b60006012905090565b6000806104ef6108cf565b905061051081858561050185896107c5565b61050b9190611420565b6108d7565b600191505092915050565b610523610dab565b60004703610566576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055d906114a0565b60405180910390fd5b6000610570610618565b90508073ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156105b8573d6000803e3d6000fd5b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61060c610dab565b6106166000610e29565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610651906113c0565b80601f016020809104026020016040519081016040528092919081815260200182805461067d906113c0565b80156106ca5780601f1061069f576101008083540402835291602001916106ca565b820191906000526020600020905b8154815290600101906020018083116106ad57829003601f168201915b5050505050905090565b662386f26fc1000034101561071e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071590611532565b60405180910390fd5b6107283382610eef565b50565b6000806107366108cf565b9050600061074482866107c5565b905083811015610789576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610780906115c4565b60405180910390fd5b61079682868684036108d7565b60019250505092915050565b6000806107ad6108cf565b90506107ba818585610b2c565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610854610dab565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036108c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ba90611656565b60405180910390fd5b6108cc81610e29565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610946576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161093d906116e8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ac9061177a565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a939190611228565b60405180910390a3505050565b6000610aac84846107c5565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610b265781811015610b18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0f906117e6565b60405180910390fd5b610b2584848484036108d7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610b9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9290611878565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c0a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c019061190a565b60405180910390fd5b610c1583838361104e565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c929061199c565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d2e9190611420565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d929190611228565b60405180910390a3610da5848484611053565b50505050565b610db36108cf565b73ffffffffffffffffffffffffffffffffffffffff16610dd1610618565b73ffffffffffffffffffffffffffffffffffffffff1614610e27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1e90611a08565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5590611a74565b60405180910390fd5b610f6a6000838361104e565b8060026000828254610f7c9190611420565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fd19190611420565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516110369190611228565b60405180910390a361104a60008383611053565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611092578082015181840152602081019050611077565b60008484015250505050565b6000601f19601f8301169050919050565b60006110ba82611058565b6110c48185611063565b93506110d4818560208601611074565b6110dd8161109e565b840191505092915050565b6000602082019050818103600083015261110281846110af565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061113a8261110f565b9050919050565b61114a8161112f565b811461115557600080fd5b50565b60008135905061116781611141565b92915050565b6000819050919050565b6111808161116d565b811461118b57600080fd5b50565b60008135905061119d81611177565b92915050565b600080604083850312156111ba576111b961110a565b5b60006111c885828601611158565b92505060206111d98582860161118e565b9150509250929050565b60008115159050919050565b6111f8816111e3565b82525050565b600060208201905061121360008301846111ef565b92915050565b6112228161116d565b82525050565b600060208201905061123d6000830184611219565b92915050565b60008060006060848603121561125c5761125b61110a565b5b600061126a86828701611158565b935050602061127b86828701611158565b925050604061128c8682870161118e565b9150509250925092565b600060ff82169050919050565b6112ac81611296565b82525050565b60006020820190506112c760008301846112a3565b92915050565b6000602082840312156112e3576112e261110a565b5b60006112f184828501611158565b91505092915050565b6113038161112f565b82525050565b600060208201905061131e60008301846112fa565b92915050565b60006020828403121561133a5761133961110a565b5b60006113488482850161118e565b91505092915050565b600080604083850312156113685761136761110a565b5b600061137685828601611158565b925050602061138785828601611158565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806113d857607f821691505b6020821081036113eb576113ea611391565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061142b8261116d565b91506114368361116d565b925082820190508082111561144e5761144d6113f1565b5b92915050565b7f42616c616e6365206973204c6f7720746f2073656e6400000000000000000000600082015250565b600061148a601683611063565b915061149582611454565b602082019050919050565b600060208201905081810360008301526114b98161147d565b9050919050565b7f53656e642045746820697320746f6f206c6f772e2e204974206d75737420677260008201527f6561746572207468616e203e3d20302e30310000000000000000000000000000602082015250565b600061151c603283611063565b9150611527826114c0565b604082019050919050565b6000602082019050818103600083015261154b8161150f565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006115ae602583611063565b91506115b982611552565b604082019050919050565b600060208201905081810360008301526115dd816115a1565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611640602683611063565b915061164b826115e4565b604082019050919050565b6000602082019050818103600083015261166f81611633565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006116d2602483611063565b91506116dd82611676565b604082019050919050565b60006020820190508181036000830152611701816116c5565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611764602283611063565b915061176f82611708565b604082019050919050565b6000602082019050818103600083015261179381611757565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006117d0601d83611063565b91506117db8261179a565b602082019050919050565b600060208201905081810360008301526117ff816117c3565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611862602583611063565b915061186d82611806565b604082019050919050565b6000602082019050818103600083015261189181611855565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006118f4602383611063565b91506118ff82611898565b604082019050919050565b60006020820190508181036000830152611923816118e7565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611986602683611063565b91506119918261192a565b604082019050919050565b600060208201905081810360008301526119b581611979565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006119f2602083611063565b91506119fd826119bc565b602082019050919050565b60006020820190508181036000830152611a21816119e5565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611a5e601f83611063565b9150611a6982611a28565b602082019050919050565b60006020820190508181036000830152611a8d81611a51565b905091905056fea264697066735822122028d3a43a5e2bf9aadb6f50936c067f501980f343b06ad0429d8b31dc0d389c0964736f6c63430008110033";

type VarmaTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VarmaTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VarmaToken__factory extends ContractFactory {
  constructor(...args: VarmaTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VarmaToken> {
    return super.deploy(overrides || {}) as Promise<VarmaToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VarmaToken {
    return super.attach(address) as VarmaToken;
  }
  override connect(signer: Signer): VarmaToken__factory {
    return super.connect(signer) as VarmaToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VarmaTokenInterface {
    return new utils.Interface(_abi) as VarmaTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VarmaToken {
    return new Contract(address, _abi, signerOrProvider) as VarmaToken;
  }
}
