// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract NewTestnet {
    string public name = "New Testnet Contract";

    function getName() public view returns (string memory) {
        return name;
    }
}
