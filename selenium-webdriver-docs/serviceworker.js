'use strict';function f(){};self.addEventListener("install",function(a){a.waitUntil(self.skipWaiting())});self.addEventListener("activate",function(a){a.waitUntil(self.caches.keys().then(function(d){return Promise.all(d.map(function(b){return self.caches.delete(b)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(a){a.respondWith(self.caches.match(a.request).then(function(d){var b=fetch(a.request).then(function(c){if(!c||200!==c.status)return c;var g=c.clone();self.caches.open("dossier-cache-v1").then(function(e){return e.put(a.request,g)}).catch(function(e){return console.error("failed to cache response: "+e)});return c});d&&(b=b.catch(f));return d||b}))});
