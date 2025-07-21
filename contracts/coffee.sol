// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract coffee {
    struct Memo {
        string name;
        string message;
        uint256 timestamp;
        address from;
        string typeofCoffee;
    }

    Memo[] memos;
    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function buyCoffee(string memory name, string memory message,string memory typeofCoffee) public payable {
        require(msg.value > 0, "Please pay greater than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender,typeofCoffee));
    }
    
    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
