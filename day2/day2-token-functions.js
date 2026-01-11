function weiToEth(weiAmount){
    return BigInt(weiAmount) / (10n ** 18n);
}

function ethToWei(ethAmount) {
    return BigInt(ethAmount) * (10n ** 18n);
}

function formatTokenAmount(rawAmount, decimals) {
    return rawAmount / (10n ** BigInt(decimals));
}

function isSameAddress(addr1, addr2) {
    return addr1.toLowerCase() === addr2.toLowerCase();
}


console.log("=== TEST: Wei to ETH ===");
console.log(weiToEth(1000000000000000000n));

console.log("\n=== TEST: ETH to Wei ===");
console.log(ethToWei(1));

console.log("\n=== TEST: Format Token ===");
console.log(formatTokenAmount(10000000000000000000n, 18)); 

console.log("\n=== TEST: Same Address ===");
console.log(isSameAddress("0xABC", "0xabc")); 
console.log(isSameAddress("0xABC", "0xDEF"));
