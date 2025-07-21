const hre = require("hardhat");
const { ethers } = hre;

async function getBalances(address) {
    const balanceBigInt = await ethers.provider.getBalance(address);
    return ethers.formatEther(balanceBigInt); // Changed from ethers.utils.formatEther
}

async function consoleBalances(addresses) {
    let counter = 0;
    for (const address of addresses) {
        const balance = await getBalances(address);
        console.log(`Address ${counter} balance:`, balance);
        counter++;
    }
}

async function consoleMemos(memos) {
    for (const memo of memos) {
        const timestamp = memo.timestamp;
        const name = memo.name;
        const from = memo.from;
        const message = memo.message;
        const type = memo.typeofCoffee;
        console.log('\n');
        console.log(`At ${timestamp},\nname: ${name},\nfrom: ${from},\nmessage: "${message}",\nType of Coffee: ${type}`);
    }
}

async function option(choice) {
    let etherValue;

    if (choice === 'latte') {
        etherValue = "1";
    } else if (choice === "americano") {
        etherValue = "1.6";
    } else {
        etherValue = "2";
    }

    const amount = { value: hre.ethers.parseEther(etherValue) };
    return amount;
}

async function main() {
    const [owner, from1, from2, from3] = await hre.ethers.getSigners();

    const Coffee = await hre.ethers.getContractFactory("coffee");
    const contract = await Coffee.deploy();
    await contract.waitForDeployment();

    console.log("Address of contract:", await contract.getAddress());

    const addresses = [owner.address, from1.address, from2.address, from3.address];

    console.log("Before buying coffee");
    await consoleBalances(addresses);

    const amount1 = await option("latte");
    await contract.connect(from1).buyCoffee("from1", "great", "latte", amount1);

    const amount2 = await option("americano");
    await contract.connect(from2).buyCoffee("from2", "Very nice latte", "americano", amount2);

    const amount3 = await option("coldcoffee");
    await contract.connect(from3).buyCoffee("from3", "Very nice filter coffee", "coldcoffee", amount3);


    console.log("After buying coffee");
    await consoleBalances(addresses);

    const memos = await contract.getMemos();
    await consoleMemos(memos);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});