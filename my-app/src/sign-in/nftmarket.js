<<<<<<< HEAD
const serverUrl = "https://hr43a6esr4uz.usemoralis.com:2053/server";
=======

const serverUrl = "https://lzit2f0d9oxu.usemoralis.com:2053/server";
>>>>>>> 06d1989b26b980d876e6f24c0d5a923904855111
const appId = "lE0k3K7UATt4uJ1bPdIjeg6xtKv6ZtZXqHR7xRGV";
Moralis.start({ serverUrl, appId });
/* globals Chart:false, feather:false */
Moralis.enableWeb3();

async function submit() {
  console.log("clicked")
  const input = document.querySelector("#input_image");
  let data = input.files[0];
  const imageFile = new Moralis.File(data.name, data);
  await imageFile.saveIPFS();
  let imageHash = imageFile.hash();
  console.log(imageHash)
  console.log(imageFile.ipfs())
  let metadata = {
    name: document.querySelector("#input_name").value,
    description: document.querySelector("#input_description").value,
    image: "/ipfs/" + imageHash
  }
  const jsonFile = new Moralis.File("metadata.json", {base64: btoa(JSON.stringify(metadata))});
  await jsonFile.saveIPFS();
  let metadataHash = jsonFile.hash();
  console.log(metadataHash)
  let res = await Moralis.Plugins.rarible.lazyMint({
    chain: 'rinkeby',
<<<<<<< HEAD
    userAddress: user.get("0xcb47540de6771f9a8fAc460F6362d5591897D3ea"),
=======
    userAddress: user.get("ethAddress"),
>>>>>>> 06d1989b26b980d876e6f24c0d5a923904855111
    tokenType: 'ERC721',
    tokenUri: '/ipfs/' + metadataHash,
    supply: 1
  });
  console.log(res);
  let token_address = res.data.result.tokenAddress;
  let token_id = res.data.result.tokenId;
  let url = `https://rinkeby.rarible.com/token/${token_address}:${token_id}?tab=details`
  let lurl = url.toLowerCase();
  document.querySelector("#success_message").innerHTML = `NFT Minted. <a href="${lurl}">View NFT</a>`
}

if(document.querySelector("#submit_button") != null){
  document.querySelector("#submit_button").onclick = submit;
}


