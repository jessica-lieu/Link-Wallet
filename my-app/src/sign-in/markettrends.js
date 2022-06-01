const serverUrl = "https://hr43a6esr4uz.usemoralis.com:2053/server";
const appId = "is22QzmZcFDkWnf2YAOXqLsoSdt62ODzPGeLTUv4";
Moralis.start({ serverUrl, appId });
const CONTRACT_ADDRESS = "0x36cd2476c77801816c089619bc98424d7718cfc0";

function fetchNFTMetadata(NFTs){
    let promises = [];

    for(let i = 0; i < NFTs.length; i++){

            let nft = NFTs[i];
            let id = nft.token_id;
            //call moralis cloud function -> static json file
            promises.push(fetch("https://hr43a6esr4uz.usemoralis.com:2053/server/functions/getNFT?_ApplicationId=N3yXsSbZVqQWHI5KluPKoaq4TLStrl2eorswNHfD&nftId=" + id)
            .then(res => res.json())
            .then(res => JSON.parse(res.result))
            .then(res => {nft.metadata = res})
            .then((res) => {return nft;}))
1
    }
    return Promise.all(promises);
}

function renderInventory(NFTs){
    const parent = document.getElementById("app");
    for(let i = 0; i < NFTs.length; i++){
        const nft = NFTs[i];
        let htmlString = `
        <div class="card">
            <img class="card-img-top" src="${nft.metadata.image}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${nft.metadata.name}</h5>
                <p class="card-text">${nft.metadata.description}</p>
                <p class="card-text">Amount in Circulation: ${nft.amount}</p> 
                <a href="transfer.html?nftId=${nft.token_id}" class="btn btn-primary">Transfer</a>
            </div>
      </div>        
        `
        let col = document.createElement("div");
        col.className = "col col-md-4";
        col.innerHTML = htmlString;
        parent.appendChild(col);
    }
}

async function initializeApp(){

    let currentUser = Moralis.User.current();
    if (!currentUser){
        currentUser = await Moralis.authenticate();
    }

    const options = { address: CONTRACT_ADDRESS, chain: "rinkeby"};
    let NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
    let NFTWithMetadata = await fetchNFTMetadata(NFTs.result);
    console.log(NFTWithMetadata);
    renderInventory(NFTWithMetadata);
}

initializeApp();