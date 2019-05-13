/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/images/avatar.png",
    "revision": "1924a12f8e87c13d8dbb8d4cde3250de"
  },
  {
    "url": "assets/images/StreetFighterSymbol.svg",
    "revision": "7e132403f0111226360e5c0254d5a3fb"
  },
  {
    "url": "assets/style/index.css",
    "revision": "980cc3e973f4c2a9bf6d8353f9df76ab"
  },
  {
    "url": "index.html",
    "revision": "5b30c49a8c10861cd4095d955a7631ca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
