const serverUrl = "https://hr43a6esr4uz.usemoralis.com:2053/server";
const appId = "is22QzmZcFDkWnf2YAOXqLsoSdt62ODzPGeLTUv4";
Moralis.start({ serverUrl, appId });

// let homepage = "http://127.0.0.1:5500/index.html";
// if(Moralis.User.current() == null && window.location.href != homepage){
//     document.querySelector('body').style.display = 'none';
//     window.location.href = "index.html";
// }

login = async ()=>{
    await Moralis.authenticate().then(async function (user) {
        console.log('Logged In');
        user.set("name", document.getElementById('user-username').value);
        user.set("email", document.getElementById('user-email').value);
        await user.save();
        window.location.href = "dashboard.html";
    })
}

logout = async ()=>{
    await Moralis.User.logOut();
        console.log('Logged Out');
        window.location.href = "index.html";
}

getBalances = async () => {
    console.log("get balances clicked")
}

getTransactions = async () => {
    console.log("get transactions clicked")
    const options = {
        chain: "rinkeby",
        address: "0xcb47540de6771f9a8fAc460F6362d5591897D3ea",
        order: "desc",
        from_block: "0",
      };
      const transactions = await Moralis.Web3API.account.getTransactions(options);
      console.log(transactions);
}


if(document.querySelector("#btn-login") != null){
    document.querySelector("#btn-login").onclick = login;
}
if(document.querySelector("#btn-logout") != null){
    document.querySelector("#btn-logout").onclick = logout;
}
if(document.querySelector("#get-balances-link") != null){
    document.querySelector("#get-balances-link").onclick = getBalances;
}
if(document.querySelector("#get-transactions-link") != null){
    document.querySelector("#get-transactions-link").onclick = getTransactions;
}

//get-market-link
//get-NFT-link


