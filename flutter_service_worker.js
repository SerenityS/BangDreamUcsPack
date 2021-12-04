'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "20aea6464acae4a3d44f737ce57ab9c3",
"manifest.json": "15625228bde3516e6f98fc1e034239cb",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "fc123b2bb64317cb34e0411ac45973ae",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "bfcabbc751a70e1b797711e6d9c7c7b2",
"/": "bfcabbc751a70e1b797711e6d9c7c7b2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "0f73b4d29cafb0fb131e3d207c11b652",
"assets/assets/json/songLists.json": "055035bbb3b4f96b14186d50673dd05d",
"assets/assets/level/D06.png": "bdd72f3ca636d5d7b54600ec5f0eaf18",
"assets/assets/level/SP29.png": "c41b4245b092e9784449fb7d1c57aaf3",
"assets/assets/level/D26.png": "6969f92de5116e21db0569e65fe100b2",
"assets/assets/level/S14.png": "1a454aff2fc8deb53f2bd1e6ff975785",
"assets/assets/level/DP10.png": "4944c2a9a1b553d257a7c2e841e07ba7",
"assets/assets/level/S08.png": "c6cd48a7b4523ec9cb0753f954007235",
"assets/assets/level/DP05.png": "a222d5c07ef947c85f121494dd738d9b",
"assets/assets/level/SP23.png": "f86cead95fb9112ad3522b0ec363aea6",
"assets/assets/level/S24.png": "a68c869bb2a178c03b581e7f7f615cc4",
"assets/assets/level/DP02.png": "c12e345ec6f8d2d5465d63b2c6bbc45a",
"assets/assets/level/S20.png": "5e7a711521c1a6b7dbffbb3ce05738ed",
"assets/assets/level/D21.png": "733d8f7b88ca20ba8ec5912dabc14756",
"assets/assets/level/SP19.png": "4384922bc74b8f6adf08689cb05d30cc",
"assets/assets/level/D03.png": "85a944560b3f44e9958654f43570f005",
"assets/assets/level/C03.png": "838497745c3fbfd67366238e806b17b7",
"assets/assets/level/D12.png": "b2ea4fa28e9d14ecef10b1966f4a2713",
"assets/assets/level/DP16.png": "7811a4cf5f75bd5af712f4b04195fefb",
"assets/assets/level/S06.png": "f2663da81574d265c2b8c2d2492aafab",
"assets/assets/level/SP05.png": "ad46a6b1b6aa5cea70150cb78e6042e1",
"assets/assets/level/D14.png": "ab3887b618fea61c9a46764cb98d0b82",
"assets/assets/level/D23.png": "c13db0fff86aad4c2a8419c664742309",
"assets/assets/level/D11.png": "c9eefe07fe123a0c59b7e29e0228382b",
"assets/assets/level/SP14.png": "941719b54fa4f3e328271c688c47aae5",
"assets/assets/level/SP04.png": "bd7ff69e4902ccfb5fa459bfc6b601cb",
"assets/assets/level/D22.png": "116c501af55c15d8d0c3c5bad169db4d",
"assets/assets/level/C02.png": "9070e2a3f6c59f29892df3dfad348bdf",
"assets/assets/level/DP29.png": "f81a2ed84ea05b2433077bc40a6605ec",
"assets/assets/level/SP03.png": "39cd4f714360dbd70e5f09ac577a95c5",
"assets/assets/level/D23_3.png": "c13db0fff86aad4c2a8419c664742309",
"assets/assets/level/S23.png": "cc74591817e1cd2dfe7a0e661baa9cbf",
"assets/assets/level/DP20.png": "57f7118dd1f80c59e2c250aa2f292356",
"assets/assets/level/D24.png": "149951db67c7438f7875f5a890f7bd2d",
"assets/assets/level/SP22.png": "140cbf14b851bb5920550d0da30ac481",
"assets/assets/level/S03.png": "8fb9ae5fea5887eb0448215ac80fdee6",
"assets/assets/level/DP18.png": "902f3f17587413e1a34d1b2782b27d70",
"assets/assets/level/DP24.png": "71f92cee5e4ad66573401ecc9e41984b",
"assets/assets/level/S19.png": "b89488c7b6745d315773ed7f4d1d9d3b",
"assets/assets/level/SP30.png": "f97667a2def00d47d05116ba8bb791fe",
"assets/assets/level/DP12.png": "34246f1fd0dc95aa02197290284a7d44",
"assets/assets/level/C05.png": "3d7ec9e566ff4e6a2e60d55a13c7daa2",
"assets/assets/level/D19.png": "ef13b2e22734b901bb3b2e3cf40bf9ec",
"assets/assets/level/S04.png": "daffb27fda6cb5a5b37a8c75c661d10f",
"assets/assets/level/C09.png": "668433fd607792e39a303cf1d640ff31",
"assets/assets/level/SP12.png": "5d2c786649ef019c22612958093965e4",
"assets/assets/level/D10.png": "5862fbed3021f9c25d012d288f032b01",
"assets/assets/level/SP15.png": "b4c956041b1e4257e78b72f557a1d0e9",
"assets/assets/level/S17.png": "ac9c7803447b466b436a1df45ac08287",
"assets/assets/level/S11.png": "970a8ddfad3aa8a7bdf2c9f78a79cd5a",
"assets/assets/level/SP01.png": "ceca2e56a4b2e65f6b4ebf536868aeac",
"assets/assets/level/DP17.png": "5a92c03ba0f9cac4ead6d52e49fb2169",
"assets/assets/level/D27.png": "ee4da781c42647e77349088c2fc2df0b",
"assets/assets/level/DP13.png": "1578370073a2c4c1bb1714d1e629a23d",
"assets/assets/level/C04.png": "1c22bc527ca3f3fa1828a41fcba1e047",
"assets/assets/level/SP25.png": "bd972a204a03ffa2d73ec982bc41a6d0",
"assets/assets/level/DP19.png": "237096544aaa71d93c79a397ca7949de",
"assets/assets/level/D29.png": "5645b5a06634ab778c74b698121998be",
"assets/assets/level/DP27.png": "6fdc5541b0df1c3447c2f850273a6f30",
"assets/assets/level/DP21.png": "8052d509edba65cf4cef40a7bd087123",
"assets/assets/level/S29.png": "24e64968fa8eb5b697f2548ea55545a4",
"assets/assets/level/S01.png": "04eb1b6d0fcca34dce903f56400c3c84",
"assets/assets/level/D16.png": "192daa3631ea608618903df4ff62fec4",
"assets/assets/level/SP28.png": "62f781df5ab362ea2fc93c6be032668c",
"assets/assets/level/SP10.png": "93a0604991eb7faa298ddff205329882",
"assets/assets/level/SP06.png": "0430032d7d670886900f9b90a405672e",
"assets/assets/level/S09.png": "ff8e8d47acf11d5f8545785f439ab2f6",
"assets/assets/level/SP02.png": "d142bcfa1cf16a575ec6833f6e8756fe",
"assets/assets/level/S27.png": "658717a7cc9a38734e953abc2cd152a7",
"assets/assets/level/C07.png": "93df5dfa27d387570cdf6beb6e307c46",
"assets/assets/level/DP30.png": "3aae7b296fd001c120ec606cd3eaaba5",
"assets/assets/level/SP20.png": "bf1eac044ed3f6bb42fbcaa1f940dfb0",
"assets/assets/level/DP01.png": "84941c136eb56f9b624161d9eaa49dec",
"assets/assets/level/DP22.png": "bb82a6484a01b65f5295a0f25ad7a472",
"assets/assets/level/D02.png": "655df8ecd70ed6b14a16001e667a56f9",
"assets/assets/level/DP15.png": "a63547cf924b3ae7af0994806cd0f65d",
"assets/assets/level/SP11.png": "773e7b4201610c619e34574b232921a2",
"assets/assets/level/S12.png": "ec703c2571b9fe3db37a602c94818a1f",
"assets/assets/level/C06.png": "ecd79d1ce3b997cd3734e2bf0c11ba74",
"assets/assets/level/D09.png": "54967d0c2b836e93a956f6b76d003280",
"assets/assets/level/DP28.png": "523b6c10c96e2b4fc2330ba79e004aa1",
"assets/assets/level/DP23.png": "bdf6d642323c992c92fe689cc754b3ae",
"assets/assets/level/S28.png": "788a5f68319486e492c3b15a1457a554",
"assets/assets/level/DP06.png": "fc6fd230626e03d0db864d677009dcfd",
"assets/assets/level/SP16.png": "ce0f1a028b1b57fb5025fe7c217fac2d",
"assets/assets/level/SP08.png": "712b34c5e1e13fd8449837d1429e137b",
"assets/assets/level/S05.png": "1b25f73e2b815cf625d4557b6fe6716f",
"assets/assets/level/S26.png": "86487ad43a694b90b4db934a39da4734",
"assets/assets/level/DP25.png": "cc1ff46755ec8c738bd15591fcf28f01",
"assets/assets/level/S18.png": "e84c90dcb09bce4ca7226002207a0146",
"assets/assets/level/DP14.png": "c44a431b87ff580e9a00001b978ae29f",
"assets/assets/level/D04.png": "080d867b44987085ccbcc05788ab6533",
"assets/assets/level/D30.png": "79a20c1730d910544ece06cecd24ec28",
"assets/assets/level/S10.png": "71f2072f8ee1749f1750732ac22c62c1",
"assets/assets/level/D28.png": "4a2278b316edc28626ab73976d04ca3f",
"assets/assets/level/S30.png": "3c102a477bdfc2273a55b3c3606615e4",
"assets/assets/level/SP21.png": "2010a10e76149d06b657dd87d5d04d2f",
"assets/assets/level/SP09.png": "b95c5717fb68e906059a4455afe8cd09",
"assets/assets/level/D23_1.png": "c13db0fff86aad4c2a8419c664742309",
"assets/assets/level/D08.png": "5c62ee7c389186553be805f21dff8346",
"assets/assets/level/D07.png": "45f33047c8cf88687dbe7a54897b7b5b",
"assets/assets/level/D15.png": "1c3d4c4855330f3e4f0d337c7c83d982",
"assets/assets/level/C01.png": "8c197c25fd7b1cf521a0b48bc5a2dd61",
"assets/assets/level/DP26.png": "d2262098e1612045996056fe2404b2af",
"assets/assets/level/D17.png": "57f3ccf018676373dfff5f7d2e31ac17",
"assets/assets/level/SP24.png": "8968bd339586ed0b032c597ac1863568",
"assets/assets/level/S13.png": "b31756163b3cf26f481a408fbf8a9620",
"assets/assets/level/D23_2.png": "c13db0fff86aad4c2a8419c664742309",
"assets/assets/level/D20.png": "b7b80cc877fa34ef4213c69f3a5cfb05",
"assets/assets/level/D05.png": "97ac84f9d27f98675d714fd3a74f66e0",
"assets/assets/level/S16.png": "94e00c0f35619ca9662e8889016bb4dc",
"assets/assets/level/D25.png": "acd9ec0dfc34b739eb0af98b8ac09809",
"assets/assets/level/S25.png": "63955e9a82c9c91bba15334945532899",
"assets/assets/level/S15.png": "c71e6ae7b046ad4f50fffe4994298a86",
"assets/assets/level/SP27.png": "924564c1039ea3c927b8cee2686b5b5a",
"assets/assets/level/C08.png": "5bcca43923310437025d8d4355c6282c",
"assets/assets/level/S07.png": "d5a1000db0fa9c8eac90862aa56f1918",
"assets/assets/level/S22.png": "50bc2de1d6b2f963f31b9348c91a7bf3",
"assets/assets/level/SP18.png": "409f56b9d34e9ac90e7534a500b0254b",
"assets/assets/level/SP07.png": "8c51881c47b5d0603cb62e6ff6703be3",
"assets/assets/level/DP08.png": "a5b3d95a1926b0622e6f8cf5d276ec86",
"assets/assets/level/DP03.png": "238d8fb4c1e2e76bf835f73c0c9f41ae",
"assets/assets/level/SP17.png": "cba562573719b69fc071542c8266df29",
"assets/assets/level/DP11.png": "1dc7b4cb94addf865ad2c06d11eed676",
"assets/assets/level/D18.png": "351a0a19f97f3e8d1b94c87dfe6a62ae",
"assets/assets/level/D13.png": "7008ad7624d9d33e8e519c2478b3620d",
"assets/assets/level/DP04.png": "d09da04d897374f87fe37363988c7402",
"assets/assets/level/DP09.png": "cfc9a92261ae672f1770fb3a19054a2d",
"assets/assets/level/SP13.png": "95517388f77f559722d7784c22c351f0",
"assets/assets/level/S21.png": "6a022962135427d817047ce64262e188",
"assets/assets/level/S02.png": "b8b161a8639baf0359a8eb4b1fa4517b",
"assets/assets/level/DP07.png": "551ac11593f87c0991316f620ba6c0ca",
"assets/assets/level/SP26.png": "0afafd67b9daa23cf283b5da5bbb0225",
"assets/NOTICES": "bd3dd2a2428696bce9b718c2858b9953",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
