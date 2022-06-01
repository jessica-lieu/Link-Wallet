const serverUrl = "https://hr43a6esr4uz.usemoralis.com:2053/server";
const appId = "is22QzmZcFDkWnf2YAOXqLsoSdt62ODzPGeLTUv4";
Moralis.start({ serverUrl, appId });
const CONTRACT_ADDRESS = "0x36cd2476c77801816c089619bc98424d7718cfc0";

async function init(){
    let currentUser = Moralis.User.current();
    if (!currentUser){
        window.location.pathname = "/transfer.html";
    }

    const urlParams = new URLSearchParams(window.location.search);
    const nftId = urlParams.get("nftId");
    document.getElementById("token_id_input").value = nftId;
}

async function transfer(){
    console.log("Being called")
    let tokenId = parseInt(document.getElementById("token_id_input").value);
    let address = document.getElementById("amount_input").value
    let amount = parseInt(document.getElementById("amount_input").value)

    const options = {type: "erc1155",
        receiver: address,
        contract_address: CONTRACT_ADDRESS,
        token_id: tokenId,
        amount: amount}
    let result = await Moralis.transfer(options);
    console.log(result);
}

document.getElementById("submit_transfer").onclick = transfer;

init();