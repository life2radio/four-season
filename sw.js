/* 포시즌 기억정원 - 설치용 서비스워커
   ※ 캐시하지 않습니다(항상 최신 파일을 불러옴). 자동 업데이트가 그대로 유지됩니다. */
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){ /* 통과(네트워크 우선, 캐시 없음) */ });
