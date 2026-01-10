const token = { // CREATING OBJECT, TYPE : AFTER VARIABLE!
    name: "My Learning Progress Token",
    symbol: "MLPT",
    address: "0xF2F86Cc8035adFe33116f238Da0861fd3AAf7d3d",
    network: "zkSync Era",
    decimals: 18,
    maxSupply: 1000000 // unlimited in deployed contract!
};

console.log(token);

console.log("== MLPT TOKEN INFO ==");

const tokenInfo = `
  name: ${token.name}
  symbol: ${token.symbol}
  address: ${token.address}
  network: ${token.network}
  decimals: ${token.decimals}
  maxSupply: ${token.maxSupply}`;

console.log(tokenInfo);


const realSupply = BigInt(token.maxSupply) * (10n ** BigInt(token.decimals));
console.log(`Real Supply: ${realSupply}`);
