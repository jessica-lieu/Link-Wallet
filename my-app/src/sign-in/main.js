console.log('Hello World');

const serverUrl = "https://hr43a6esr4uz.usemoralis.com:2053/server";
const appId = "is22QzmZcFDkWnf2YAOXqLsoSdt62ODzPGeLTUv4";
Moralis.start({ serverUrl, appId });

login = async ()=>{
    await Moralis.authenticate().then(async function (user) {
        console.log('Logged In');
        user.set("name", document.getElementById('user-username').value);
        user.set("email", document.getElementById('user-email').value);
        await user.save();
        window.location.href = "dashboard.html";
    })
}

document.querySelector("#btn-login").onclick = login;
