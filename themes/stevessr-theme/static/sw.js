const CACHE_NAME = 'site-cache-v1';
const urlsToCache = [
  '/',
  '/index.json',
  '/css/main.css', // 加入其他需要缓存的资源
  '/js/main.js',
  '/offline.html'
];

// 在安装阶段缓存站点的静态资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 拦截网络请求并进行处理
self.addEventListener('fetch', event => {
  if (event.request.method === 'GET' && event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          // 如果在缓存中找到了请求，则直接返回缓存，否则进行网络请求
          return response || fetch(event.request).then(networkResponse => {
            // 动态缓存新的请求资源
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          });
        }).catch(() => {
          // 如果请求失败且缓存中没有找到，则返回离线页面
          return caches.match('/offline.html');
        })
    );
  }
});

// 激活新的Service Worker并清除旧缓存
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
