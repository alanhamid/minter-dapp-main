require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Camel Jockey Club";
const description = "The owner has the commercial rights to the artwork of this NFT, similar to the rights given by Bored Ape Yacht Club.  Each CJC NFT entitles its holder to exercise the stock option of to purchase 0.00001%  of the shares of Texila, Inc. for US$140.";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 777,
    layersOrder: [
      { name: "Background" },
      { name: "Protagonist" },
      { name: "Antagonist" },
      { name: "Accessories" },
      
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://www.cameljockeyclub.com", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Camel Jockey Club';
const CONTRACT_SYMBOL = 'CJC';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0xe82e9032fbc5e9cde32fC1C679e4bb896AA30a2f';
const TREASURY_ADDRESS = '0xe82e9032fbc5e9cde32fC1C679e4bb896AA30a2f';
const MAX_SUPPLY = 777; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 97 ; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 7; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-04-30T11:00:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-04-29T11:00:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xe82e9032fbc5e9cde32fC1C679e4bb896AA30a2f"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0xe82e9032fbc5e9cde32fC1C679e4bb896AA30a2f", "0x00905e3a5e6f93a9babf345f626ef57eb77e12b3", "0x037b2d2e8f5ec609cd5a7259689945fd60f7722f", "0x05012f437dee5276ac13ee90a10438468c07d6df", "0x055abadaed8e266c1adf0e732b97d28a0ba3d843", "0x05ef193fd2ddc6bce708bb69489b2c7144cfab8e",

"0x061735bea2d13fbc751648d441873c26dfc81b62", "0x065251509e340f82c217c477301e9369186a7052", "0x06572f6da4d739affba80df55f96598e81a92059", "0x06aba0900f9d06513a27b7798cb3bb072358df4c",

"0x08e78808e0aecbcbd4560da7930bfca793ee3acf", "0x09535b3be87fed39a14426061cbfecd56fae9063", "0x0ac97f1c3d5c168fb0a51122229639ba40c4c8ed", "0x0d48e43a5036561a408b5ba642492767bbbaf785", 

"0x0d5dbabba7d45b6ad9f6ce32e5b105e8cc9dfc9e", "0x0da5951eae5aa2f9d3f74341ede0ea590bedea68", "0x0dc281a26d5b263b334e6d50d0731de1c1057439", "0x0de844efde234a473da9e21d6c90c8f36e8bc9a2",  

"0x0ef955288ab7fe8e490800ad49858dbdb7c1e275", "0x10dbbb72f5c74d578d19a45e93b57647f51c28ad", "0x10e67f6dd529726b9d2779bc1b68a2bf13085c07", "0x1236cd9626f10299fd80aa2f7c3547cc0ca8e8ab", 

"0x1292183d5fd2a430c5d52a31c5fa42ce27da25b5", "0x14e660757689fbba375ce4d713bf1b789e769771", "0x165c3e03c337c8ce291add4947caf4fa43af069f", "0x16893fa514769e0cbf2c5c030f499fce9e021a29", 

"0x1742d57d888de5e68fc1057aaf546ea90dc7a8c6", "0xef1C5987Eb809aFD075B18515e889117a3606693", "0xbF6423f33a18e4645D8d911b7AccFf5F1f3E23e0", "0x18863273629da519ba9f7c02f65406bcc4638290", 

"0x18975b05bb9cd10a0e97d25977b718d5afb5ff9d", "0x1c2bc75ced540e0ae866638649466070f88aa39e", "0x1c6f6c1be333e6b93f53e5459594419359a590fa", "0x1e8b9779b79f27285ede6c9c90c4acd44ef9f71a",

"0x1f48c9342541e7166d33fb5dc8886362f33fe4e9", "0x213a416e298cb8c27d8ade2d72dbe81f3c85c3b2", "0x2170ed7fd7bfbffa58b181a4c674f499270279ff", "0x217d83bbe3693365b6bd40f4dd2019b4aa7c681b", 

"0x21fc0b6b423ac2276882f1e2db8d6c11d4faffda", "0x23fbf04b7cb8697844152db9aa466a9238b40f10", "0x25296ca92d17c6306e983b9449a8bad0a78954b9", "0x2534d2a226dbf3d975e5ca332dec6fd41f739da9", 

"0x25d90dd727d6e732014d27df44a8f8517ab0e9ac", "0x25dd361a47e323f588c00094c0741375a5a6db83", "0x268a5666603967a7853fa17a42cef8d78ad41c05", "0x26b2a6da509df511a867430a9964db94907e202e", 

"0x281a0ec0a602eb9c9b92a6711941f9d8e93fbb0f", "0x28dc828a31fc17d80baf6b3a47498e59261af728", "0x2e5199b46f1d8f2b9ddc02db7edad90805a82896", "0x2ebe70602aadc5d24b7602899d678adda9d394e7", 

"0x2ec69db4a5bbf1b49d6cd6f938a8bd04b5aafcae", "0x2f7973daeed41fd60563e214d8b97013727d66b5", "0x312f8ebb8c41ce5a6813f8c6a8c93b32fd2650d0", "0x3310add9c4abe48ed0139d8fa9029adeb11fd86b", 

"0x33294aa827fa8051a9e290b684519959e15a7602", "0x332d6d59328f5abce47475eb455752ccb31cf411", "0x340ee74b7257c6b11b7bf47fd279558ea9e143f8", "0x351b1b213b9edaf38022bf65e15085598f1d6337", 

"0x36201e21e40f5585e119455cc4bbd4a757edafa3", "0x373fc2d830b2fcf7731f42ab9d0d89e552da6ccb", "0x3822881d61803af91a95847ad20b1bf20a5671b2", "0x38bfe291ec6a06cb76f93302e168b5a3ecb28907", 

"0x38cb169b538a9ad32a8b146d534b8087a7fa9033", "0x39432039ddbd6fc67668386c897e54c1c5554ce4", "0x397946a397ecdd1fb4422615aa3a1cc5a729f4b1", "0x3ba99c9d7be4f1b8caee650b88ecaa2e7370119b",

"0x3c734de10afd2da8697dd9735533333b15bf1430", "0x3cb1010156174b71dd6f8402c56ba8945f37bb2c", "0x3d6b22b423b865d46419387aed51782839aa60a2", "0x3d854cc95c0cbfb4d6bfae2ae2e4c26f3a63d1da", 

"0x3e2a56c41806fca7432fab83613afa9f40a4e822", "0x3ecb6f916602aea842c49481b0819aeb0ac76261", "0x47a51e662e5a777cc969a0895a41f323d9b7749b", "0x48a11db8cfccb0f14e08aec935191f6bc203f3ab", 

"0x49b7c5d227d4443b50f0c8ce9548504cb3845af5", "0x4a8af4ec4718eccb0fd70f384f74a8e082706603", "0x4b07a0e22b91c5b4442af1be5ecb162efab0b69a", "0x4c476e5707d24b2860ed8a195256930da9f9ea78", 

"0x4e7d39d59089f8d7c2ad17d61ebd5869ba6b4dfa", "0x4f5a69a0140fde44d7002924265455c4313f428d", "0x4fb01f7b0db2f8b68a9f1ef0e7a24e5153026b27", "0x539e272682b6b59227c7b4c8fd26801d66c73436", 

"0x547894b6711ac2d255cbda4c1268848b550c68e3", "0x55fcf5c9f76fb2dda6487b8743bab7f0200b64dc", "0x56d05db81374b1bb4da194cff7877609157d4be1", "0x5787925ca2d957522d8492d047af8dacf09addbe", 
]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "0xc9b60FbAA9C71003e6441f54A6200efd311898c0"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Which Card will you get?"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeichwxqewv4ei7265ubwdmgxbsegp3s33ehnpi6ijzyoycsjvokevy";

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json` 
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "CJC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  // external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
