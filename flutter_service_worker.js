'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7967a6648f490f18bfbb2e783cbcaa85",
"version.json": "c692d3823f8473857d73dde6499bd7f3",
"index.html": "5a38063936c1af81aede0257cc0ddfbe",
"/": "5a38063936c1af81aede0257cc0ddfbe",
"main.dart.js": "cc4dc778b7ea0bcbd68ab2d1f5998d2a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "22a64b006a0e014f93a233907e31db2a",
".git/config": "be1e605f4b2dd59360fa488052d741de",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/6547f7b5ce911ef616cda3539fad96c0669460": "4af14052a7e73d0ba4d32bd797966096",
".git/objects/57/7c87aa7c20dbb83d41d1b3544e2e30fbe7bdea": "11bf8500455e6ac9130fce31210bf5f7",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/56/3b82934acb58ce7d90bfb24166843be0021d80": "badee9b42b654b934da7a65d01cc5e9f",
".git/objects/0b/58d452d73550cea5806a71b8ade5d74ce2ca0f": "7c83a11c6e0a1e7f7f17dd137d107e84",
".git/objects/93/d1fe0170a44e2dfce8d3d349cf160a0f37741f": "3b8a52d4dc78990d0981710b4fddb0bd",
".git/objects/60/3e353a4fc392c8d75980825e59396f8cc42faf": "7b114e2f60f9c52848ebb24f99858817",
".git/objects/34/01fe6d5c56e4604370087c2bf232d803213d8f": "359b0e004a4d0a181ac2393ff8f9ee47",
".git/objects/34/e98937511da3a6d573f27b7687c8015a5ed389": "860688e970c4de62c3d95d8e76f4dd06",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9c/60b5ecc27d5468cba1055bb7ed56da84b6aec8": "d1e7f7c2cd4d3cf6eec98ce9e6964074",
".git/objects/b5/6c34dd84a2d1e5cb7cef1dfeb53c09bd6bae0e": "ec6ab2d00c1c4fe06ae3b86d58e62616",
".git/objects/b2/a621cfa6dbb767a05e6093fe6fed810417333c": "712bb3ae319f616985c6ebd71ad9109d",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ac/458197ce023210d4a95418936e97bddadf1935": "58b12d5195c88307c4ee563a9e3f2bd8",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/700708912e9c8f2ae4a227780018abe5282a46": "0a88509d6a7400414beaf25b1077e4d5",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d1/3b679b8d0372b220cef46d413e897b943b16ab": "9c56f512e7c2307d685420be07293f3a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/3d7078df869c5f886ec1306b3358daa0805ed1": "0f89b050762db2a0e7c33896afb14872",
".git/objects/d8/fa3fc8725d5e8a49d7a932ffbb197ae0f743cf": "d95db34af3688265eec610127726ff52",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/ecfc773316e936d201186f223da42045ddc573": "6e40ef9f029e090194b1120fe8dd88d8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/7fcace780357a8da12ac8f71d32df276ee663a": "4a84f6cc3abd0a004b482395f5902714",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/e4/ae4ff7f2f46e93f3a061900127328c18eea6c6": "12c6e487ade39027ae6b92de0f2ab904",
".git/objects/e4/fd08bc4f3f6f8fe090b70d0a94477e1e291dd8": "9429787e606da5fb5cbf4568c3f28f9e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/11/2fda71790daa2692d334fb45168bb8097adce0": "fcec1dcd5f2686388863fe49cea89e19",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/e8914aab5e605b290fffb4039428f7fad9f55b": "548a95e34e74f9c8e18a73aa48a3aaba",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1f/ac77037297a94e1f8dcd69a14873640dc63a6a": "b3c47e00d90675604893cd29def25061",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/80/15c005744f5a331b4e51e430ecc9fac448b775": "92fb060d7bbe170564f5752a7c716783",
".git/objects/7b/39000695f1ab9822156d4036e289b2de9e068b": "56cc7cdfd3397bedb282f2d76c2dec1f",
".git/objects/8f/2f3ef1a92f23e4ffb792e14154166aa5935f3c": "dee12ce26c6c9c2e64e7891ae4b93e4f",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/713a0981083ac418e5ca62717dd5faf253e6b8": "2baba8a9417034f9ca18d0341b4f76bf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/df1ab2d26277439668e894c563ff7474d829d5": "d8225432f83f30e6a9d4587dc441d1db",
".git/objects/26/3cf0180f9224162860081b8bf830f051e4ccea": "7a3d39fda433d141ea09bb0e1a95e051",
".git/objects/4d/f6f1dd020fe505d85f4f53f568c2cf675c46d2": "bf995ce2910f37a515add2aae80891e2",
".git/objects/75/1cff759b9823bf85ea13835281f6ec67f1e969": "ed18f43f556846a787a4db7301951c39",
".git/objects/72/4e1796e1df9f7e3a0fb81d2152a9a56de0f475": "9f65a68be43fb9f326f0be59039f58a4",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/91faebbbcccbf2340f74f498243e16f81adeb7": "a7f3f34851a164b4caf92ab0ab93429b",
".git/objects/38/32146a7f5a6f10cf69bfb8d0cb998180ed74e4": "83a7bfde941f20e16638bceabaa822f2",
".git/objects/6e/f9584a283492f3c96c365a896070a088477a56": "33bdb8d329dad910b52adf828d70f7c0",
".git/objects/5c/2b475d35f39172b8fbb9da4e4402ce9ebe5445": "f5bbe2e0c1bc9a45ec084a658d1ebb50",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/4ff3db3a99c6170011dea321da0cb64bbb18cd": "989fb2c7c55001ed003b7d994d480825",
".git/objects/54/92a3a61f693c250fc35449292b41bd7637b24a": "e76e836cd341202b35433c8b8d3dfd1f",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6c/1cff072b5ac6934ba07289877b55af1cd1a848": "6ffad5ca547187ff5df0039a7cdd88a1",
".git/objects/39/9775253e36d81e8ad55f88407c3b990d584a1a": "0a7b88fbf66d804d274cf2cc6d8b2449",
".git/objects/52/b525df41b660a2e4e1b3bd40a181e6ae36fe4f": "f868eed89199963a8336a8d89f0591f6",
".git/objects/97/c34c7f101740957dc6fd0fc11ec68282302d85": "4a8bd27de6e506de92714dad233b2f30",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/9190b5a494ad593e4e50dc9b89af89a5b1b146": "f830da3701433d479edd4589eb4654d6",
".git/objects/b8/6198608d15d1d067e3950cca3085718ad1b538": "2259102339668144cea03643a9c8620c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/d2/3e16b4a27f4fb32b6edc8ca66d4f530bb1c127": "24ded64cdaa9d53ef827ec19f3dbf543",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/4a321c17032948cd335ea5039e0ad50f742919": "3675e63e443d54a2a9e125c11d3357fd",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c2/86445309a2f94ce0709d8baaebcbcc0819c810": "b020558d46213fb74fada64e1bfd6c47",
".git/objects/f6/ab86e00706a6dc7e59d15d788d64b315f58fb2": "88f0a20f9a13d77f107523850916039c",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/b78e4d2dcb6d46157ba085eb88578e4534e263": "dc0f8cc3c53e65f7349292608f9952d9",
".git/objects/77/2f43487e5379cc3c7c66398436f29e040da4e2": "95e33ec9c9eb526b4e02367cda821154",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8d/aa5c3b116f7e55eae4dd18dd7e3e16c8da52cb": "0d964b56b88b6e1a65ffcda4da4c9d94",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/4ed2423be875c414580f3a3985fdbc5575be30": "c86e98a50d17a33d3440c5de55e0e8dc",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/69a67a5232a1b512098b05b27d7f968a3fd99b": "b7f5389a17b17f703e0b2282ed98396d",
".git/objects/47/10f1424e3d492013c60d4b2fea52a6358b9262": "cdbb2a5c14d784aa450b62636c6ff1f4",
".git/objects/8b/f82315e1f1b7bd056122d33e137e1a3be35956": "fddf5298af29c962c404c3e055496900",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/e2d9f56b11cd362337faf0a654f6948486b5b2": "7ae9e9e0b293c40853264d5667e2c7a8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7d49ec904937a64a5e594faa329bb958",
".git/logs/refs/heads/main": "7d49ec904937a64a5e594faa329bb958",
".git/logs/refs/remotes/origin/main": "2b1c881cf8de704bdf7cbc19997b1357",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0cf6541d096833954c6bc7e4de5d7911",
".git/refs/remotes/origin/main": "0cf6541d096833954c6bc7e4de5d7911",
".git/index": "4a59c4da653cf1eccf81e3db3a9b5f0f",
".git/COMMIT_EDITMSG": "a8d5b56a4b634971b8d76d037455be4a",
"assets/AssetManifest.json": "1e276f72ca93749911215c03a476f6c1",
"assets/NOTICES": "9bad0e3a65bb267d2b4ed8f42dd03c27",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "36503ebcc0775b203c13413d08bfb0bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "96a2aa1b59588b20ddd6b7eb0dd59c78",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/png/english_qr.png": "6a04a2d47fab3e049f98a26700031b39",
"assets/assets/png/reservation_qr.png": "1e0681183ea23513df576b28d3929bdd",
"assets/assets/png/korean_qr.png": "28b6ba4cde2b1618f7405aaa232cdf12",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
