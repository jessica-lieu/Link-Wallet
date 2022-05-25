const serverUrl = "https://hr43a6esr4uz.usemoralis.com:2053/server";
const appId = "is22QzmZcFDkWnf2YAOXqLsoSdt62ODzPGeLTUv4";
Moralis.start({ serverUrl, appId });

<<<<<<< HEAD
let homepage = "http://127.0.0.1:5500/index.html";
if (Moralis.User.current() == null && window.location.href != homepage) {
    document.querySelector('body').style.display = 'none';
    window.location.href = "index.html";
}
=======
// let homepage = "http://127.0.0.1:5500/index.html";
// if(Moralis.User.current() == null && window.location.href != homepage){
//     document.querySelector('body').style.display = 'none';
//     window.location.href = "index.html";
// }
>>>>>>> 06d1989b26b980d876e6f24c0d5a923904855111

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
    console.log("get balances clicked");
    const ethBalance = await Moralis.Web3API.account.getNativeBalance();
    const ropstenBalance = await Moralis.Web3API.account.getNativeBalance({ chain: "ropsten" });
    const rinkebyBalance = await Moralis.Web3API.account.getNativeBalance({ chain: "rinkeby" });
    console.log((ethBalance.balance / 1e18).toFixed(5) + " ETH");
    console.log((ropstenBalance.balance / 1e18).toFixed(5) + " ETH");
    console.log((rinkebyBalance.balance / 1e18).toFixed(5) + " ETH");

    let content = document.querySelector('#userBalances').innerHTML = `
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Chain</th>
                <th scope="col">Balance</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Ether</th>
                <td>${(ethBalance.balance / 1e18).toFixed(5)} ETH</td>
            </tr>
            <tr>
                <th>Ropsten</th>
                <td>${(ropstenBalance.balance / 1e18).toFixed(5)} ETH</td>
            </tr>
            <tr>
                <th>Rinkeby</th>
                <td>${(rinkebyBalance.balance / 1e18).toFixed(5)} ETH</td>
            </tr>
        </tbody>
    </table>
    `;
}

getTransactions = async () => {
    console.log("get transactions clicked");
    const options = {
        chain: "rinkeby",
        address: "0xcb47540de6771f9a8fAc460F6362d5591897D3ea",
        order: "desc",
        from_block: "0",
      };
      const transactions = await Moralis.Web3API.account.getTransactions(options);
      console.log(transactions);
}

<<<<<<< HEAD
getMarket = async () => {
    console.log("get market clicked");
}

getNFT = async () => {
    console.log("get NFT clicked");
}

millisecondsToTime = (ms) => {
    let minutes = Math.floor(ms / (1000 * 60));
    let hours = Math.floor(ms / (1000 * 60 * 60));
    let days = Math.floor(ms / (1000 * 60 * 60 * 24));

    if (days < 1) {
        if (hours < 1) {
            if (minutes < 1) {
                return `Less than a minute ago`;
            } else return `${minutes} minutes(s) ago`;
        } else return `${hours} hours(s) ago`;
    } else return `${days} days(s) ago`;
};

if (document.querySelector("#btn-login") != null) {
=======

if(document.querySelector("#btn-login") != null){
>>>>>>> 06d1989b26b980d876e6f24c0d5a923904855111
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
<<<<<<< HEAD
if (document.querySelector("#get-market-link") != null) {
    document.querySelector("#get-market-link").onclick = getMarket;
}
if (document.querySelector("#get-NFT-link") != null) {
    document.querySelector("#get-NFT-link").onclick = getNFT;
}

=======

//get-market-link
//get-NFT-link
>>>>>>> 06d1989b26b980d876e6f24c0d5a923904855111


