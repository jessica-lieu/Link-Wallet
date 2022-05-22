const serverUrl = "https://hr43a6esr4uz.usemoralis.com:2053/server";
const appId = "is22QzmZcFDkWnf2YAOXqLsoSdt62ODzPGeLTUv4";
Moralis.start({ serverUrl, appId });

let homepage = "http://127.0.0.1:5501/my-app/src/sign-in/index.html";
if(Moralis.User.current() == null && window.location.href != homepage){
    document.querySelector('body').style.display = 'none';
    window.location.href = "index.html";
}

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

if(document.querySelector("#btn-login") != null){
    document.querySelector("#btn-login").onclick = login;
}
if(document.querySelector("#btn-logout") != null){
    document.querySelector("#btn-logout").onclick = logout;
}

//get-balances-link
//get-transactions-link
//get-market-link
//get-NFT-link


