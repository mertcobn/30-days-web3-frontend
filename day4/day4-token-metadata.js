const tokenMetadata = {
    name: "My Learning Progress Token",
    symbol: "MLPT",
    address: "0xF2F86Cc8035adFe33116f238Da0861fd3AAf7d3d",
    decimals: 18,
    maxSupply: 1000000
};

const advancedMetadata = {
    token: {
        name: "MLPT",
        contract: {
            address: "0xF2F86Cc8035adFe33116f238Da0861fd3AAf7d3d",
            network: "zkSync Era"
        }
    }
};

function exportToJSON(data) {
    return JSON.stringify(data, null, 2);
}

function importFromJSON(jsonString) {
    return JSON.parse(jsonString);
}

function addMetadata(metadata, key, value) {
    return {...metadata, [key]: value};
}

function getContractAddress(metadata) {
    return metadata.token.contract.address;
}


const jsonString = exportToJSON(tokenMetadata);
const imported = importFromJSON(jsonString);
console.log("Imported:", imported);

const withNetwork = addMetadata(tokenMetadata, "network", "zkSync Era");
console.log(withNetwork);

console.log("Contract Address:", getContractAddress(advancedMetadata));
console.log("Network:", advancedMetadata.token.contract.network);
