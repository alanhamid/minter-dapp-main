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
const CHAIN = 'polygon'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Camel Jockey Club';
const CONTRACT_SYMBOL = 'CJC';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x264fE2E041Cc4C6fE04f734317532947e6389907';
const TREASURY_ADDRESS = '0x264fE2E041Cc4C6fE04f734317532947e6389907';
const MAX_SUPPLY = 777; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 97 ; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 7; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-04-30T11:00:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-04-29T11:00:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x264fE2E041Cc4C6fE04f734317532947e6389907"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0x264fE2E041Cc4C6fE04f734317532947e6389907", "0xe82e9032fbc5e9cde32fC1C679e4bb896AA30a2f",

  "0x00905e3a5e6f93a9babf345f626ef57eb77e12b3", "0x037b2d2e8f5ec609cd5a7259689945fd60f7722f", "0x05012f437dee5276ac13ee90a10438468c07d6df", "0x055abadaed8e266c1adf0e732b97d28a0ba3d843", "0x05ef193fd2ddc6bce708bb69489b2c7144cfab8e",
  
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
  
  "0x579b0c22c22862a21df17e91ad69410160652219", "0x57cb3de63e42464aca6d571ee33b32f6804037b6", "0x57f068de9cf508e387f49b1561c320061282931f", "0x58256499d9cb9d7e0db6fcc57d76cf8ba0cd5b65", 
  
  "0x58f8b97a4ebb481731765e917ddeab1ac3fb200a", "0x59530dc0cd0fd8bc32dd1d5b014bcf16ca356d8a", "0x5ad0a8b8c63799b1b0c1617d5dc587b92e1692cd", "0x5b3a1e59697bb221455697b3050bf355cf8e5249", 
  
  "0x5c025a54096a5914382c2504cb912ff98ee8289e", "0x5cfdd9cc57ce290e1c4fce6b98d77db0225bb590", "0x5d3aa6fba854ddb66cb1e0d71cdb861777a8449c", "0x5e837dad4f995d7d020af9656f7e5bfd11e9bd17", 
  
  "0x5f9ea11036be1ca540061e0811cf0042b508de69", "0x6076e66e7d4f53084ba97ab098cae276762bf2c7", "0x633225e814e8fce8cde11c2b0b3d1d1aaf655108", "0x654d556ab8104da43aba8ef8592691967d7f1c28", 
  
  "0x66ddcca2298c7e259bb63d25e9f0ada93bcdf7ed", "0x66dfdddba4fd3ca77e170133915e4552ed4e017c", "0x68865dd750e568d78ab343af240f6d5b1810dfb4", "0x6940d187e40817005e8e05827b06ebf3469f2295", 
  
  "0x6a320638c885e956bf731a174d3886707d806779", "0x6acb03832290917bd835cfefaf748de883ed0636", "0x6c1ff18ffa9c188e621ee81276e055cec9d60789", "0x6c323f172c2e90407f1335ed6e21ada47448b6f0", 
  
  "0x6ce10edf5eadd00fd6ad9908346a0d413a7fb358", "0x6e9f0ec1b47b4aee4d9da8d61520f37daa0aae76", "0x6eb754ab1141581f3f3f7857f7ad7fabfbc78403", "0x6f7ce10cf9335216f63f37f15d6734a1d417db92",
  
  "0x6fbf2b9f7b1cddbbbeabcd0f65a5b63e5598ca62", "0x6feab2063bb6970e4d9e8d0b9f8f067bbf1fc00e", "0x70f91ef34c4b509574876113f32c89b78d0621ee", "0x70fdf6e33ace055ce86f442e81acc1a8f3f83b1c", 
  
  "0x711fe41e7cabc584900adbcb045e375b096b555f", "0x7130374dff79344daf7408b5081c34c163079bb8", "0x72b9e51113a4626b63d031fb248bf4f0732089dd", "0x73359643f337caaaa3b9d071c8e798619bb63815",
  
  "0x746f8aed87e2dcbcf9662afe3abc2964b9027a6e", "0x74eb0fe260056ae17fbba68d3f0816f9da3ae101", "0x7520a808e3079b01898d3b0221e73072e2233c43", "0x755d40bec086c901ff3cbb018587d259be553925",
  
  "0x756667ae451304e52b6f9b56c7a645b3463039ae", "0x75da3aa34da5d51e5aaeb6030e697d243d3536ac", "0x76ee2d0e199a4d21697302a14e07782e03d1ea35", "0x77058396c1799664f53c8829fd8245ac2dbceafc",
  
  "0x7731465e79a6ede4cdaf07e9b93061b565764079", "0x774e011f6c161a703dc855893fb621bb75f60945", "0x78f6c325c01a9769861579c5f7afd974d5b5bc25", "0x79cd4cfc1469d0deb2d32e8bb39da5db0d5e9118", 
  
  
  "0x7ddc9ad92a6651c67fce1ab320cd74df4430b3b5", "0x7f1def33443f3abdb53a85decd84735098f4927b", "0x7f8b6181d58adb7abc66bdc7ade2a384fa318ec1", "0x810227178b9680a9dd0ad821d8f5fbd06654a2ed",
  
  "0x8277628e80d40feff383d8ab7fe255113f009678", "0x8335659d19e46e720e7894294630436501407c3e", "0x84d87555804bff967c9e5d773a44f42660d6750f", "0x84efd04bad34765a5638a5c00b09d9d9feb7e05a", 
  
  "0x869875140575f65511391fe00105fffabfe37a11", "0x88bfd18a75dd6c99e0d122921ba94e699f624f00", "0x89b9db3aefee940e5380e8b0d99a0b69cd71fb53", "0x89cf9de233a1b3d83e99366f795c371fbe461295", 
  
  "0x8ac205ab2614efad1425a5749f1417834e55db9d", "0x8b193acb8d622c21f91a0c296f3dc932baf06e3a", "0x8c4b3a85d829b0ddb18190341d3b705b6eaf5efc", "0x8c7a726d3bfd0766f789b3628a1f5332b21e8a31", 
  
  "0x8edfa8758abea99400857653930d2bed4350a73b", "0x8f0c7d13d9bd9188b4b66b41a1fcc385169bf035", "0x8fa2dd1f61c4784f6a9a5caff6dee48320a8574e", "0x8ff4c8841c0bce95f7265e4d362f4d54a3911323", 
  
  "0x908c4c9ee0f840c0b64cb84f881aeb86ecd74378", "0x91d0bcd3acb804917f1a92eec6ed5431ed648907", "0x92f1cd80a91da93b677fab50f1017efde5e042eb", "0x94042280ac168c86cd48f63696b7dcf5e2586025", 
  
  "0x95c4460a7c1c7f0dfeef35e79cd6fcf55cd41503", "0x96a4a06067509b516d47be4cbbad30c4d33e200e", "0x96cb84ac416602cec04b6778fa3f8e588e84cc95", "0x981b7a636875ac376c79a08f4a7f08b0e261bdb8", 
  
  "0x98319863e839af6654caace9f296608ed1f1ad5d", "0x9b132185063881367203d367989366a6c982d469", "0x9b3d5976a7f4b63c8d44270a0031048b75230bff", "0x9b55d0948708b7fb4849ec81a587f87a409e89d4", 
  
  "0x9baac9b0c51e54fa3b7ad9d70ba062a239191a9e", "0x9e12bf9b800955e7d067e08f70417d663d3dcab5", "0xa254b8bd1689f7118eac24f5cbcdcb839524f4b6", "0xa41dcee235f7f8ab2c7d8a3e36fdc63704c142ae",  
  
  "0xa47c52003210b756bcfd2b480cf22d2cbc200d82", "0xa5095359ac5e327d23bc7f662d0ce089062f67d7", "0xa5f16522ab1fc25879c36ee3e37c44646bfc4a42", "0xa7b098e512f1b6fdb29970ea43da21e0f7dc36a6", 
  
  "0xa855148cfbd9a12f1265b8c6fd10f1bf3cebfd3e", "0xa938effbbb13b093a93a31e15b628fa77ad09816", "0xaa993a40732873c430d29fb8d8016bf861ad0614", "0xab3ec2f97121fc16ddab7e3dc8956fe4907dc242",
  
  "0xad5b8704eb26f418cefceee7c719ce3d823639ff", "0xae21f9f3cfeceae63799d987c1fb743641b4e1a3", "0xb0bcfde547e15c48fefeed2cc021f030de4f317e", "0xb1a65e2eaae317e08bd75648b69b03e0365ec854", 
  
  "0xb26a76fb5da1a3cd337bc11be8b0222d2ab16e91", "0xb2e0a81f67142a67baf8dc9877e56fd695e5d058", "0xb3743336f73eb0387567ae8c8b0f48b0996cf498", "0xb4544dc4bb0ee812c8a5b163ec145ff092891746",
  
  "0xb46ba8f67c1d021aa44da9704b645182e926b907", "0xb616eee28344eae22d1514bbb0cb75f908422018", "0xb7b40908cd42bf3adcee2166ee5a5ecee3095174", "0xb87186765f4951dce0342fabda15b8966513a464", 
  
  "0xba86b9037e1d84b51254e407ec73d9111ca103d3", "0xbb2a008881273ab0bfc7c528914dbd3132caa897", "0xbbbf89cb082aec247fd52c6d8f985a72f7235df0", "0xbbd38f1c8cc4e8f1c4444db21f4bfe2f6393d9ce",
  
  "0xbbf01ba16f8cf7fa7a2bc516444ff343d4a064fd", "0xbfe6a440a5fe0822dfe72b0fa1893f68462555eb", "0xc1f5e4bd4ff3074659af627b37db7b4314bc74a5", "0xc29a819c5de76cd7f6509bf2aa9f4681214e1500", 
  
  "0xc3520f0be22bc75a02429211d5b5300aab5ffa53", "0xc42bf60fa5f51b361ef5cf86c75c58ca9c0ceba3", "0xc47455993d7cff6248dc594baa8c3b6fbf9f0f93", "0xc4c9f9291bb0718789a025cff4e06a33bcc0703d", 
  
  "0xc5301285da585125b1dc8cccedd1de1845b68c0f", "0xc667364dd1b5c061401fa8b91253fc325c941fe4", "0xc93ae2d0f3888209c239861d43014db983616242", "0xca7adb37f8292a4adb196f1a0ccab648ff83ef56", 
  
  "0xca8bea99381b0a1eeae3288eb0a4e7833d1a835b", "0xcb5d9cf80ac372a725adabce1b27d5fce84fa386", "0xcb8ed45fda5f573af196f3ef73bebd9bc5df3ae8", "0xcc7e97b883872a750e630dd8e08f6fbf29c57a4d", 
  
  "0xcd601a1a4f2f4b6617a41143241b652bd21f6b75", "0xcd605a63542017821b30874768f5aaab7132d97d", "0xcd89efc0e421a5feee293f0d35f3b84362b1f385", "0xced69885b0ce371bcaa190f99e7a9b91cb64fd97", 
  
  "0xcf26de949ac609eb32419058b721c16c6651ce6f", "0xd164166614b5cd35e699c2ce001ee3302611ab5e", "0xd7cb1d43e1b95e99b9aef02eaf7e9ce6a9b31169", "0xdb00532543de4265f1258284cba7a5f1156cc5c0", 
  
  "0xdbb1efae885a811f7271da85ed4474d1391c3ee4", "0xdc318dfcb1513c804f05fa92a62803781739842a", "0xdc70f8b518f6e1a11ca12ea8f434dba46ead1537", "0xdc9089dd040d45beea818bcc7dc1187cc9e2cc24", 
  
  "0xdd1541020ac996e75c37ef3fb17570b8e20279b6", "0xdf06819774ea293f3621324653a0d2dd7adc1b6f", "0xe028f19ed99907b350831b2f7ac7cdac384b074a", "0xe4cccfe21d98eaa227829220b7d90a41332c8414",
  
  "0xe5adeb61e9d932141bfd95415d1ed542dcea2245", "0xe5b1918d99f9b5b63817f6c9a7afda744ef1f647", "0xe82e9032fbc5e9cde32fc1c679e4bb896aa30a2f", "0xe8a6d7cee6d8c5a8f24f1a2d850b0c3d683f1603", 
  
  "0xea5bf93cfc6a9bbc57da4e270980b5eb2ccc68ec", "0xea6a475b9a8dc8f94fd88a4edcb6e7a801ac2b3c", "0xeba40500926f604c9e4e7ae56a253a0949ca7461", "0xed73f61544e4c6b24b8498da5723a07a00af0f41", 
  
  "0xedf77511306de5d7a2e0976b02222c168506d4e2", "0xee4a9a50f9a65ab456375cc31562ef672bea9de0", "0xef894b2aef175ec00a030dd658e13855e85960f2",  "0xf16d53be9380f9a04316341594a4405717f2ddf4", 
  
  "0xf40f917fc407dd1ece4a2f0f8941bfccbb693479", "0xf4e14d778c2dbd6fd1a04f08721941eb3e1c9d6c", "0xf600ec227bb2b607507c12fc79cb4992642d1ed2", "0xf670f4451fbf4430e58a65119202c0773a60b24e", 
  
  "0xf69dd638c735512cb42e9c98af3223d9ae5e1fd4", "0xf6a1becd2e06a30c8fa602c952e46445ce4999cb", "0xf87d7fb5540966b495da294ca5f6d88d0035eeb9", "0xf8c855e911575f030f35f719b7e2b53796439fc3", 
  
  "0xf9c8d277b7485d29a0e76bdf2f53f584f9050baf", "0xfc108e96697809b7cf9a9fb9d32560ed8ac96424", "0xfce2ab59f496872398d08eb2f4b0ca9e7c1dbf8f", "0xfd309fae2a0da2706aa8a5c3037c0d0cb9d1ca2a", 
  
  "0xfdf7c11feea80bf2cec4ffba6208b8737e4109ed", "0xfe57ddc314aa57cf7f87499e913573047f947336", "0xfe9cb68d3830579087fa917fbbb69dd8436a8f2f"
  
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
