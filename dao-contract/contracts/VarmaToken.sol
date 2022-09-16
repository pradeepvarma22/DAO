// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VarmaToken is ERC20, Ownable {
    uint256 constant ONE_TOKEN_DECIMAL = 10**18;

    constructor() ERC20("Varma's Token", "VARMA") {
        _mint(msg.sender, 100 * ONE_TOKEN_DECIMAL);
    }

    function mint(uint256 amount) external payable {
        require(
            msg.value >= 0.01 ether,
            "Send Eth is too low.. It must greater than >= 0.01"
        );

        _mint(msg.sender, amount);
    }

    function withdraw() external onlyOwner {
        require(address(this).balance != 0, "Balance is Low to send");

        address payable WithdrawOwner = payable(owner());
        WithdrawOwner.transfer(address(this).balance);
    }
}
