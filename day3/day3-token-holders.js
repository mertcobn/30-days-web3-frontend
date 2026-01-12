const holders = [
    { address: "0x123adv...", balance: 100 },
    { address: "0x456gs4...", balance: 250 },
    { address: "0x789br2...", balance: 75},
    { address: "0x741bfb...", balance: 129},
    { address: "0x1153fa...", balance: 351}
];

function getTotalSupply(holderList){
    return holderList.reduce((previousValue, currentValue) => {return previousValue + currentValue.balance}, 0);
}

function getTopHolder(holderList) {
    return holderList.reduce((topHolder, currentHolder) => {return currentHolder.balance > topHolder.balance ? currentHolder : topHolder;});
}

function filterByBalance(holderList, minBalance) {
    return holderList.filter(balance => balance.balance > minBalance)
}

function normalizeAddresses(holderList) {
    return holderList.map(holder => holder.address.toUpperCase());
}

console.log("Total Supply:", getTotalSupply(holders));
console.log("Top Holder:", getTopHolder(holders));
console.log("Rich Holders (>100):", filterByBalance(holders, 100));
console.log("Normalized:", normalizeAddresses(holders));
