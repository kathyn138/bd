! function (e) {
  var t = {};

  function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
          i: r,
          l: !1,
          exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: r
      })
  }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      }), Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
              enumerable: !0,
              value: e
          }), 2 & t && "string" != typeof e)
          for (var o in e) n.d(r, o, function (t) {
              return e[t]
          }.bind(null, o));
      return r
  }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
          return e.default
      } : function () {
          return e
      };
      return n.d(t, "a", t), t
  }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 11)
}([function (e, t) {
  e.exports = require("electron")
}, function (e, t) {
  e.exports = require("path")
}, function (e, t) {
  e.exports = require("fs")
}, function (e, t) {
  e.exports = require("request")
}, function (e, t, n) {
  "use strict";
  var r = n(5),
      o = n.n(r)()((function (e) {
          return e[1]
      }));
  o.push([e.i, ':root {\r\n  --bd-blue: #3E82E5;\r\n  --bd-blue-hover: rgb(56,117,206);\r\n  --bd-blue-active: rgb(50,104,183);\r\n  --blurple: #7289DA;\r\n}\r\n\r\n/* BEGIN V2 LOADER */\r\n/* =============== */\r\n\r\n.bd-loaderv2 {\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+IDwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBoZWlnaHQ9IjEwMCUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTAwJSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjAwMCAyMDAwIj4gICAgPG1ldGFkYXRhIC8+ICAgIDxkZWZzPiAgICAgICAgPGZpbHRlciBpZD0ic2hhZG93MSI+ICAgICAgICA8ZmVEcm9wU2hhZG93IGR4PSIyMCIgZHk9IjAiIHN0ZERldmlhdGlvbj0iMjAiIGZsb29kLWNvbG9yPSJyZ2JhKDAsMCwwLDAuMzUpIi8+ICAgICAgICA8L2ZpbHRlcj4gICAgICAgIDxmaWx0ZXIgaWQ9InNoYWRvdzIiPiAgICAgICAgPGZlRHJvcFNoYWRvdyBkeD0iMTUiIGR5PSIwIiBzdGREZXZpYXRpb249IjIwIiBmbG9vZC1jb2xvcj0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIvPiAgICAgICAgPC9maWx0ZXI+ICAgICAgICA8ZmlsdGVyIGlkPSJzaGFkb3czIj4gICAgICAgIDxmZURyb3BTaGFkb3cgZHg9IjEwIiBkeT0iMCIgc3RkRGV2aWF0aW9uPSIyMCIgZmxvb2QtY29sb3I9InJnYmEoMCwwLDAsMC4zNSkiLz4gICAgICAgIDwvZmlsdGVyPiAgICA8L2RlZnM+ICAgIDxnPiAgICAgICAgPHBhdGggc3R5bGU9ImZpbHRlcjogdXJsKCNzaGFkb3czKSIgZD0iTTExOTUuNDQrMTM1LjQ0MkwxMTk1LjQ0KzEzNS40NDJMOTk3LjYrMTM2LjQ0MkMxMDI0LjIrMTQ5Ljc0MisxMTcwLjM0KzE2My41NDIrMTE5My42NCsxNzkuNzQyQzEyNjQuMzQrMjI4Ljg0MisxMzE5Ljc0KzI5MS4yNDIrMTM1OC4yNCszNjUuMDQyQzEzOTguMTQrNDQxLjY0MisxNDE5Ljc0KzUzMC42NDIrMTQyMi41NCs2MjkuNjQyTDE0MjIuNTQrNjMwLjg0MkwxNDIyLjU0KzYzMi4wNDJDMTQyMi41NCs3NzMuMTQyKzE0MjIuNTQrMTIyOC4xNCsxNDIyLjU0KzEzNjkuMTRMMTQyMi41NCsxMzcwLjM0TDE0MjIuNTQrMTM3MS41NEMxNDE5Ljg0KzE0NzAuNTQrMTM5OC4yNCsxNTU5LjU0KzEzNTguMjQrMTYzNi4xNEMxMzE5Ljc0KzE3MDkuOTQrMTI2NC40NCsxNzcyLjM0KzExOTMuNjQrMTgyMS40NEMxMTcxLjA0KzE4MzcuMTQrMTAyNS43KzE4NTAuNTQrMTAwMCsxODYzLjU0TDExOTMuNTQrMTg2NC41NEMxNTM5Ljc0KzE4NjYuNDQrMTg2NC41NCsxNjkzLjM0KzE4NjQuNTQrMTI5Ni42NEwxODY0LjU0KzcxNi45NDJDMTg2Ni40NCszMTIuNDQyKzE1NDEuNjQrMTM1LjQ0MisxMTk1LjQ0KzEzNS40NDJaIiBmaWxsPSIjMTcxNzE3IiBvcGFjaXR5PSIxIi8+ICAgICAgICA8cGF0aCBzdHlsZT0iZmlsdGVyOiB1cmwoI3NoYWRvdzIpIiBkPSJNMTY5NS41NCs2MzEuNDQyQzE2ODUuODQrMjc4LjA0MisxNDA5LjM0KzEzNS40NDIrMTA1Mi45NCsxMzUuNDQyTDM2MS43NCsxMzYuNDQyTDgwMy43NCs0OTAuNDQyTDEwNjAuNzQrNDkwLjQ0MkMxMzM1LjI0KzQ5MC40NDIrMTMzNS4yNCs4MzUuMzQyKzEwNjAuNzQrODM1LjM0MkwxMDYwLjc0KzExNjQuODRDMTE1MC4yMisxMTY0Ljg0KzEyMTAuNTMrMTIwMS40OCsxMjQxLjY4KzEyNTAuODdDMTMwNi4wNysxMzUzKzEyNDUuNzYrMTUwOS42NCsxMDYwLjc0KzE1MDkuNjRMMzYxLjc0KzE4NjMuNTRMMTA1Mi45NCsxODY0LjU0QzE0MDkuMjQrMTg2NC41NCsxNjg1Ljc0KzE3MjEuOTQrMTY5NS41NCsxMzY4LjU0QzE2OTUuNTQrMTIwNS45NCsxNjUxLjA0KzEwODQuNDQrMTU3Mi42NCs5OTkuOTQyQzE2NTEuMDQrOTE1LjU0MisxNjk1LjU0Kzc5NC4wNDIrMTY5NS41NCs2MzEuNDQyWiIgZmlsbD0iIzNFODJFNSIgb3BhY2l0eT0iMSIvPiAgICAgICAgPHBhdGggc3R5bGU9ImZpbHRlcjogdXJsKCNzaGFkb3cxKSIgZD0iTTE0NjkuMjUrNjMxLjQ0MkMxNDU5LjU1KzI3OC4wNDIrMTE4My4wNSsxMzUuNDQyKzgyNi42NSsxMzUuNDQyTDEzNS40NSsxMzUuNDQyTDEzNS40NSsxMDA0QzEzNS40NSsxMDA0KzEzNS40MjcrMTI1NS4yMSszNTUuNjI2KzEyNTUuMjFDNTc1LjgyNSsxMjU1LjIxKzU3NS44NDgrMTAwNCs1NzUuODQ4KzEwMDRMNTc3LjQ1KzQ5MC40NDJMODM0LjQ1KzQ5MC40NDJDMTEwOC45NSs0OTAuNDQyKzExMDguOTUrODM1LjM0Mis4MzQuNDUrODM1LjM0Mkw2NjQuNjUrODM1LjM0Mkw2NjQuNjUrMTE2NC44NEw4MzQuNDUrMTE2NC44NEM5MjMuOTMyKzExNjQuODQrOTg0LjI0NCsxMjAxLjQ4KzEwMTUuMzkrMTI1MC44N0MxMDc5Ljc4KzEzNTMrMTAxOS40NysxNTA5LjY0KzgzNC40NSsxNTA5LjY0TDEzNS40NSsxNTA5LjY0TDEzNS40NSsxODY0LjU0TDgyNi42NSsxODY0LjU0QzExODIuOTUrMTg2NC41NCsxNDU5LjQ1KzE3MjEuOTQrMTQ2OS4yNSsxMzY4LjU0QzE0NjkuMjUrMTIwNS45NCsxNDI0Ljc1KzEwODQuNDQrMTM0Ni4zNSs5OTkuOTQyQzE0MjQuNzUrOTE1LjU0MisxNDY5LjI1Kzc5NC4wNDIrMTQ2OS4yNSs2MzEuNDQyWiIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMSIvPiAgICA8L2c+PC9zdmc+);\r\n}\r\n.bd-loaderv2 {\r\n  position: fixed;\r\n  bottom:5px;\r\n  right:5px;\r\n  z-index: 2147483647;\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-size: 100% 100%;\r\n  animation: bd-loaderv2-animation 1.5s ease-in-out infinite;\r\n}\r\n\r\n@keyframes bd-loaderv2-animation {\r\n  0% { opacity: 0.05; }\r\n  50% { opacity: 0.6; }\r\n  100% { opacity: 0.05; }\r\n}\r\n/* =============== */\r\n/*  END V2 LOADER  */\r\n\r\n\r\n.bd-button {\r\n  background-color: var(--bd-blue);\r\n  color: white;\r\n  border-radius: 3px;\r\n  padding: 2px 6px;\r\n}\r\n\r\n.bd-button:hover {\r\n  background-color: var(--bd-blue-hover);\r\n}\r\n\r\n.bd-button:active {\r\n  background-color: var(--bd-blue-active);\r\n}\r\n\r\n.bd-button.bd-button-success {\r\n  background-color: #3ac15c;\r\n}\r\n\r\n.bd-button.bd-button-success:hover {\r\n  background-color: rgb(52,174,83);\r\n}\r\n\r\n.bd-button.bd-button-success:active {\r\n  background-color: rgb(46,154,74);\r\n}\r\n\r\n.bd-button + .bd-button {\r\n  margin-left: 5px;\r\n}\r\n\r\n.bd-button-outline {\r\n  background-color: transparent;\r\n  border: 2px solid white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* BEGIN EMOTE STYLING */\r\n/* =================== */\r\n#emote-container {\r\n  padding: 10px;\r\n}\r\n\r\n.emote-container {\r\n  display: inline-block;\r\n  padding: 2px;\r\n  border-radius: 5px;\r\n  width: 30px;\r\n  height: 30px;\r\n  position: relative;\r\n}\r\n\r\n.emote-icon {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  position: absolute;\r\n  margin: auto;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.emote.stop-animation {animation: none!important;}\r\n\r\n.emote-container:hover {\r\n  background: rgba(123, 123, 123, 0.37);\r\n}\r\n\r\n.emoteflip, .emotespinflip {\r\n  transform: scaleX(-1);\r\n}\r\n\r\n.emotespin {\r\n  animation: 1s emote-spin infinite linear;\r\n}\r\n\r\n.emote1spin {\r\n  animation: 1s emote-spin-reverse infinite linear;\r\n}\r\n\r\n.emotespin2 {\r\n  animation: 0.5s emote-spin infinite linear;\r\n}\r\n\r\n.emote2spin {\r\n  animation: 0.5s emote-spin-reverse infinite linear;\r\n}\r\n\r\n.emotespin3 {\r\n  animation: 0.2s emote-spin infinite linear;\r\n}\r\n\r\n.emote3spin {\r\n  animation: 0.2s emote-spin-reverse infinite linear;\r\n}\r\n\r\n.emotepulse {\r\n  animation: 1s emote-pulse infinite linear;\r\n}\r\n\r\n.emotetr {\r\n  transform: translateX(-3px);\r\n}\r\n\r\n.emotebl {\r\n  transform: translateY(-3px);\r\n}\r\n\r\n.emotebr {\r\n  transform: translate(-3px, -3px);\r\n}\r\n\r\n.emoteshake {\r\n  animation: 1s emote-shake infinite linear;\r\n}\r\n\r\n.emoteflap {\r\n  transform: scaleY(-1) !important;\r\n}\r\n\r\n.emoteshake2 {\r\n  animation: emote-shake2 0.3s linear infinite;\r\n}\r\n\r\n.emoteshake3 {\r\n  animation: emote-shake3 0.1s linear infinite;\r\n}\r\n\r\n@keyframes emote-shake2 {\r\n  25% {\r\n    transform: translate(-1px, -1px);\r\n  }\r\n  50% {\r\n    transform: translate(-1px, 1px);\r\n  }\r\n  75% {\r\n    transform: translate(1px, 1px);\r\n  }\r\n  75% {\r\n    transform: translate(1px, -1px);\r\n  }\r\n}\r\n@keyframes emote-shake3 {\r\n  25% {\r\n    transform: translate(-1px, -1px);\r\n  }\r\n  50% {\r\n    transform: translate(-1px, 1px);\r\n  }\r\n  75% {\r\n    transform: translate(1px, 1px);\r\n  }\r\n  75% {\r\n    transform: translate(1px, -1px);\r\n  }\r\n}\r\n@keyframes emote-spin {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes emote-spin-reverse {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(-360deg);\r\n  }\r\n}\r\n@keyframes emote-pulse {\r\n  0% {\r\n    -webkit-transform: scale(1, 1);\r\n  }\r\n  50% {\r\n    -webkit-transform: scale(1.2, 1.2);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1, 1);\r\n  }\r\n}\r\n@keyframes emote-shake {\r\n  10%, 90% {\r\n    transform: translate3d(-1px, 0, 0);\r\n  }\r\n  20%, 80% {\r\n    transform: translate3d(2px, 0, 0);\r\n  }\r\n  30%, 50%, 70% {\r\n    transform: translate3d(-4px, 0, 0);\r\n  }\r\n  40%, 60% {\r\n    transform: translate3d(4px, 0, 0);\r\n  }\r\n}\r\n/* =================== */\r\n/*  END EMOTE STYLING  */\r\n\r\n/* BEGIN EMOTE MENU */\r\n/* ================ */\r\n\r\n#removemenu {\r\n  width: auto;\r\n  background: #505050;\r\n  position: absolute;\r\n  z-index: 999999;\r\n  display: none;\r\n  box-shadow: 0 0 2px #000;\r\n  padding: 2px;\r\n  left: 25px;\r\n  display: block !important;\r\n  cursor: pointer;\r\n  color: #FFF;\r\n  position: fixed;\r\n}\r\n#removemenu ul a {\r\n  text-decoration: none;\r\n  color: #FFF;\r\n  padding: 3px;\r\n}\r\n\r\n.emotewrapper {\r\n  position: relative;\r\n  display: inline-flex;\r\n  object-fit: contain;\r\n  margin: -.1em .05em -.2em .1em;\r\n  vertical-align: top;\r\n}\r\n\r\n.emotewrapper.jumboable {\r\n  margin-bottom: 0;\r\n  margin-top: .2em;\r\n  vertical-align: -.3em;\r\n}\r\n\r\n.emote {\r\n  height: 1.45em;\r\n}\r\n\r\n.emote.jumboable {\r\n  height: 2rem;\r\n}\r\n\r\n.emotewrapper:hover .fav {\r\n  display: block;\r\n}\r\n\r\n.fav {\r\n  display: none;\r\n  position: absolute;\r\n  width: 15px;\r\n  height: 15px;\r\n  right: -7px;\r\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAzFBMVEUAAABQUFBMTExLS0tNTU1MTExNTU1NTU1MTExMTExNTU1LS0tEREBEREBEREBEREBJSUhLS0tLS0tEREBNTU1NTU1NTU1EREArKyhNTU1NTU0AAABMTExKSklMTExNTU1NTU1NTU1KSkpMTExKSkhNTU1KSkpISEZNTU1LS0tAQDxOTk5KSkpLS0tNTU1MTExMTEx/f39MTExMTExLS0pLS0tMTExNTU1NTU1LS0pNTU1NTU1NTU1NTU1NTU1NTUxNTU1NTU1NTUxMTEzB8C/5AAAAOnRSTlMAI8X96oWAgYSF68QBAg0PMCb9BIuLgQUD4N0Bh0mKhZSOQ4gcrKscaW8QRE6fmJyjAshASceG7cIpqQOxTQAAALVJREFUGFddx6FOA0EYAOGZvd07Qm6vVCAAgUUgQEDfX/YZMAigqaFN7iC5tsmPqGPUN/AvUVeoEbGOCElJz08Uzeixqu4AqomVVSNngOVjTqDGZSl3UFtPGV2ot2zaq96YM9p5Ddzcf/nTTAlj+/sNtNu8OcwkIsbPBtrUfMQeEhGQmHbmGIFMwLPzu6UMIwBNgToshgq8Nr2ki+Oy7ebDHp70LRPWB6OZgfWLWei7fJonOOsPCGA9kVlssOoAAAAASUVORK5CYII=");\r\n  border: none;\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n  background-color: #303030;\r\n  border-radius: 5px;\r\n  top: -7px;\r\n  cursor: pointer;\r\n}\r\n\r\n.fav.active {\r\n  background-color: yellow;\r\n}\r\n\r\n.emojiPicker-3m1S-j {\r\n  box-shadow: none;\r\n  border-top: none;\r\n  border-radius: 0 0 5px 5px;\r\n}\r\n\r\n#bda-qem {\r\n  border-radius: 5px 5px 0 0;\r\n  background: #2f3136;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;\r\n  height: 30px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-right: 1px !important;\r\n}\r\n\r\n.theme-light #bda-qem {\r\n  background: #f2f3f5;\r\n}\r\n\r\n#bda-qem button {\r\n  border-left: 1px solid #202225;\r\n  background: #2f3136;\r\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 0 0 0;\r\n  flex-grow: 1;\r\n  color: #FFF;\r\n}\r\n\r\n.theme-light #bda-qem button {\r\n  border-left: 1px solid #EFEFEF;\r\n  background: transparent;\r\n  box-shadow: #CECECE 1px 0 0 0;\r\n  color: #000;\r\n}\r\n\r\n#bda-qem button:first-child {\r\n  border-left-color: transparent;\r\n}\r\n\r\n#bda-qem button:hover {\r\n  background: rgba(79,84,92,0.16);\r\n}\r\n\r\n.theme-light #bda-qem button:hover {\r\n  background: #ECECEC;\r\n}\r\n\r\n#bda-qem-twitch {\r\n  border-radius: 5px 0 0 0;\r\n  order: 2;\r\n}\r\n\r\n#bda-qem-emojis {\r\n  border-radius: 0 5px 0 0;\r\n  order: 3;\r\n}\r\n\r\n#bda-qem-favourite {\r\n  order: 3;\r\n}\r\n\r\n#bda-qem button.active,\r\n#bda-qem button.active:hover {\r\n  background-color: var(--bd-blue);\r\n}\r\n\r\n.theme-light #bda-qem button.active,\r\n.theme-light #bda-qem button.active:hover {\r\n  color: #ffffff;\r\n}\r\n\r\n#bda-qem-twitch-container,\r\n#bda-qem-favourite-container {\r\n  width: 384px;\r\n  height: 424px;\r\n  background-color: #2f3136;\r\n  border-radius: 0 0 5px 5px;\r\n}\r\n\r\n.theme-light #bda-qem-twitch-container,\r\n.theme-light #bda-qem-favourite-container {\r\n  background-color: #f2f3f5;\r\n}\r\n\r\n#bda-qem-twitch-container .scroller-wrap, #bda-qem-favourite-container .scroller-wrap {\r\n  height: 100%;\r\n}\r\n\r\n.emote-menu-inner {\r\n  padding: 5px 0 0 15px;\r\n}\r\n\r\n.bda-qme-hidden #bda-qem-emojis {\r\n  display: none;\r\n}\r\n/* ================ */\r\n/*  END EMOTE MENU  */\r\n\r\n\r\n\r\n\r\n\r\n/* BEGIN PUBLIC SERVERS */\r\n/* ==================== */\r\n#bd-pub-li {\r\n  height: 20px;\r\n  margin-bottom: 10px;\r\n  overflow: hidden;\r\n}\r\n\r\n#bd-pub-button {\r\n  border-radius: 4px;\r\n  background-color: rgb(47, 49, 54);\r\n  color: #b9bbbe;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  line-height: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.bd-server-card .bd-server-tags {\r\n  flex: 1 1 auto;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  width: 0;\r\n  line-height: 24px;\r\n  font-size: 12px;\r\n  color: #b9bbbe;\r\n  font-weight: 700;\r\n  margin-right: 10px;\r\n}\r\n\r\n.ui-card.ui-card-primary.bd-server-card:first-child {\r\n  margin-bottom: 13px;\r\n}\r\n\r\n.ui-card.ui-card-primary.bd-server-card:first-child:after {\r\n  border: 3px solid var(--bd-blue);\r\n  content: "";\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  margin-top: 4px;\r\n}\r\n\r\n.bd-server-card.bd-server-card-pinned {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.bd-server-card.bd-server-card-pinned:after {\r\n  background: #3a71c1;\r\n  content: "";\r\n  height: 3px;\r\n  width: 100%;\r\n  display: block;\r\n  margin-top: 7px;\r\n  position: absolute;\r\n  top: 100%;\r\n}\r\n\r\n.bd-server-description-container {\r\n  color: #b9bbbe;\r\n  min-height: 65px;\r\n  max-height: 65px;\r\n  border-top: 1px solid #3f4146;\r\n  border-bottom: 1px solid #3f4146;\r\n  padding-top: 5px;\r\n  font-size: 13px;\r\n}\r\n\r\n.bd-server-header {\r\n  justify-content: space-between;\r\n  font-weight: 600;\r\n}\r\n\r\n.bd-server-card {\r\n  display: flex;\r\n}\r\n\r\n.bd-server-content {\r\n  padding: 5px 10px;\r\n  flex: 1;\r\n}\r\n\r\n.bd-server-image {\r\n  min-width: 115px;\r\n  min-height: 115px;\r\n  max-width: 115px;\r\n  max-height: 115px;\r\n}\r\n\r\n.bd-server-name {\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  padding-right: 15px;\r\n  max-width: 330px;\r\n  flex: 1 1 50%;\r\n}\r\n\r\n.bd-layer {\r\n  -ms-flex-direction: column;\r\n  -webkit-box-direction: normal;\r\n  -webkit-box-orient: vertical;\r\n  bottom: 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  flex-direction: column;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n}\r\n\r\n#pubslayer .ui-tab-bar-item {\r\n  color: #b9bbbe;\r\n  padding-top: 6px;\r\n  padding-bottom: 6px;\r\n  margin-bottom: 2px;\r\n  padding: 6px 10px;\r\n  position: relative;\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  border-radius: 3px;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  flex-shrink: 0;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n#pubslayer .ui-tab-bar-item:hover {\r\n  color: #f6f6f7;\r\n  background-color: hsla(216,4%,74%,.1);\r\n}\r\n\r\n#pubslayer .ui-tab-bar-item.selected {\r\n  color: #fff;\r\n  background-color: var(--bd-blue);\r\n}\r\n\r\n#pubslayer .ui-tab-bar-header {\r\n  color: #72767d;\r\n  padding: 6px 10px;\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n  text-transform: uppercase;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  flex-shrink: 0;\r\n  font-weight: 500;\r\n}\r\n\r\n#pubslayer #bd-settings-sidebar .ui-tab-bar-separator {\r\n  background-color: hsla(218,5%,47%,.3);\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  height: 1px;\r\n  margin-bottom: 8px;\r\n  margin-top: 8px;\r\n}\r\n\r\n#pubslayer h2.ui-form-title {\r\n  color: #f6f6f7;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n}\r\n\r\n#pubslayer h5.ui-form-title {\r\n  color: #f6f6f7;\r\n}\r\n\r\n#pubslayer button {\r\nbackground: var(--bd-blue);\r\n  color: #FFF;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 16px;\r\n  padding: 2px 16px;\r\n  border: none;\r\n  border-radius: 3px;\r\n  transition: background-color .17s ease;\r\n}\r\n\r\n#pubslayer button:hover {\r\nbackground-color: #677bc4;\r\n}\r\n\r\n#pubslayer input {\r\ncolor: #f6f6f7;\r\n  background-color: rgba(0,0,0,.1);\r\n  border-color: rgba(0,0,0,.3);\r\n  padding: 10px;\r\n  height: 30px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  border-radius: 3px;\r\n  outline: none;\r\n  transition: background-color .15s ease,border .15s ease;\r\n}\r\n/* ==================== */\r\n/*  END PUBLIC SERVERS  */\r\n\r\n\r\n\r\n\r\n\r\n/* BEGIN CSS EDITOR */\r\n/* ================ */\r\n.standardSidebarView-3F1I7i #bd-customcss-attach-controls button,\r\n.bd-detached-css-editor #bd-customcss-attach-controls button {\r\n  margin: 0;\r\n  width: 100px;\r\n  background: #31332b;\r\n  color: #FFF;\r\n  height: 26px;\r\n  font-weight: 600;\r\n  margin-top: 5px;\r\n  border-radius: 3px;\r\n}\r\n\r\n.standardSidebarView-3F1I7i #bd-customcss-attach-controls button:hover,\r\n.bd-detached-css-editor #bd-customcss-attach-controls button:hover {\r\n  background: #3b3e44;\r\n}\r\n\r\n.contentRegion-3nDuYy #bd-customcss-attach-controls,\r\n#bd-customcss-detach-container #bd-customcss-attach-controls {\r\n  background: #272822;\r\n  color: #FFF;\r\n  border: none;\r\n  box-shadow: 0px 1px 0px 0px #2F3129 inset;\r\n}\r\n\r\n\r\n.contentRegion-3nDuYy #bd-customcss-pane,\r\n.contentRegion-3nDuYy #bd-customcss-innerpane,\r\n#bd-customcss-detach-container #bd-customcss-pane,\r\n#bd-customcss-detach-container #bd-customcss-innerpane {\r\n  min-height: calc(80vh - 165px);\r\n}\r\n\r\n.standardSidebarView-3F1I7i #editor-detached h3 {\r\n  color: #87909c;\r\n  font-weight: 600;\r\n  font-size: 22px;\r\n}\r\n.standardSidebarView-3F1I7i #editor-detached button {\r\n  margin: auto;\r\n  margin-left: calc(50% - 100px);\r\n  margin-top: 20px;\r\n  background: var(--bd-blue);\r\n  color: #FFF;\r\n  font-weight: 600;\r\n  border-radius: 5px;\r\n  font-size: 20px;\r\n}\r\n\r\n.editor-wrapper {\r\n  display: flex;\r\n}\r\n\r\n.line-numbers, .ace_editor {\r\n  line-height: normal;\r\n  font-family: Consolas, monospace;\r\n  box-sizing: border-box;\r\n  height: calc(100vh - 250px);\r\n  font-size: 14px;\r\n}\r\n\r\n.line-numbers {\r\n  white-space: pre;\r\n  color: gray;\r\n  padding: 10px 5px 0 5px;\r\n  background: #24262a;\r\n  overflow: hidden;\r\n}\r\n\r\n.ace_editor {\r\n  width: 100%;\r\n  background: #292B2F;\r\n  outline: none;\r\n  color: white;\r\n  padding: 10px;\r\n  resize: none;\r\n}\r\n\r\n#bd-customcss-detach-container .editor-wrapper,\r\n#bd-customcss-detach-container .line-numbers,\r\n#bd-customcss-detach-container .ace_editor {\r\n    height: 100%;\r\n}\r\n\r\n.bd-detached-editor .app-2rEoOp {\r\n  width: 70%;\r\n}\r\n\r\n.bd-detached-editor #bd-customcss-detach-container {\r\n  display: block;\r\n}\r\n\r\n#bd-customcss-detach-container {\r\n  display: none;\r\n  position: absolute;\r\n  width: 30%;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #36393e;\r\n}\r\n\r\n#bd-customcss-detach-editor {\r\n  height: calc(100% - 87px);\r\n}\r\n#bd-customcss-detach-editor #bd-customcss-innerpane, #bd-customcss-detach-editor .CodeMirror {\r\n  height: 100%;\r\n}\r\n\r\n#bd-customcss-detach-controls {\r\n  background: #E8E8E8;\r\n  border-top: 1px solid #ADADAD;\r\n  box-shadow: inset 0px 1px 0px 0px white;\r\n  height: 100%;\r\n  padding: 5px;\r\n}\r\n#bd-customcss-detach-controls .checkbox-group li {\r\n  margin-top: 5px;\r\n  display: inline-block;\r\n}\r\n#bd-customcss-detach-controls button {\r\n  width: 90px;\r\n  height: 30px;\r\n  margin-top: 8px;\r\n  background-color: #738bd7;\r\n  color: #fff;\r\n  font-size: 19px;\r\n}\r\n\r\n#bd-customcss-detach-controls-buttons {\r\n  bottom: 5px;\r\n}\r\n\r\n#editor-detached {\r\n  margin-top: 50px;\r\n}\r\n#editor-detached h3 {\r\n  text-align: center;\r\n  font-size: 30px;\r\n}\r\n#editor-detached .btn {\r\n  left: 50%;\r\n  margin-left: -100px;\r\n  margin-top: 10px;\r\n  width: 200px;\r\n  height: 60px;\r\n}\r\n\r\n#bd-customcss-attach-controls {\r\n  background: #E8E8E8;\r\n  border: 1px solid #FFF;\r\n  border-top: 1px solid #ADADAD;\r\n  box-shadow: inset 0px 1px 0px 0px white;\r\n  height: 100%;\r\n  padding: 5px;\r\n}\r\n#bd-customcss-attach-controls .checkbox-group {\r\n  margin-bottom: 0;\r\n}\r\n#bd-customcss-attach-controls .checkbox-group li {\r\n  margin-top: 5px;\r\n  display: inline-block;\r\n}\r\n#bd-customcss-attach-controls button {\r\n  margin: 0;\r\n  width: 100px;\r\n}\r\n\r\n#bd-customcss-detach-container #bd-customcss-detach-controls-buttons button {\r\n  width: 90px;\r\n  height: 30px;\r\n  margin-top: 8px;\r\n  background-color: #738bd7;\r\n  color: #fff;\r\n  font-size: 19px;\r\n}\r\n\r\n/* Ace Editor Settings */\r\n#ace_settingsmenu_container {\r\n  background: rgba(0,0,0, 0.7)!important;\r\n}\r\n\r\nbody #ace_settingsmenu {\r\n  padding-top: 35px;\r\n}\r\n\r\nbody .ace_closeButton {\r\n  position: absolute;\r\n  top: 8px;\r\n  right: 12px;\r\n  z-index: 10000;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\nbody .ace_closeButton::before {\r\n  content: "✖";\r\n  color: #36393f;\r\n}\r\n\r\nbody .ace_closeButton:active {\r\n  transform: translateY(2px);\r\n}\r\n\r\n.theme-dark div #ace_settingsmenu {\r\n  color: #f6f6f7;\r\n  background: #36393f;\r\n  box-shadow: 0 0 0 1px rgba(32,34,37,.6),0 2px 10px 0 rgba(0,0,0,.2);\r\n}\r\n\r\n.theme-dark div #ace_settingsmenu select,\r\n.theme-dark div #ace_settingsmenu input[type="text"] {\r\n  color: #f6f6f7;\r\n  background: #2F3136;\r\n  border: 1px solid #484B52;\r\n}\r\n\r\n.theme-dark div .ace_closeButton::before {\r\n  color: #f6f6f7;\r\n}\r\n\r\n/* editor help text */\r\n#bd-customcss-attach-controls .help-text {\r\n  margin-top: 8px;\r\n  margin-bottom: 3px;\r\n  font-size: 14px;\r\n}\r\n\r\n#bd-customcss-attach-controls .help-text .inline {\r\n  background: #31332B;\r\n  padding: .2em;\r\n  margin: -.2em 0;\r\n  border-radius: 3px;\r\n}\r\n/* ================ */\r\n/*  END CSS EDITOR  */\r\n\r\n\r\n\r\n\r\n\r\n/* BEGIN BD SETTINGS */\r\n/* ================= */\r\n\r\n.bd-social-logo {\r\n  opacity: 0.6;\r\n}\r\n\r\n.bd-social-link:hover .bd-social-logo {\r\n  opacity: 1;\r\n}\r\n\r\n.standardSidebarView-3F1I7i .bd-versioninfo-wrapper {\r\n  bottom: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  background: inherit;\r\n  right: 0;\r\n  padding: 5px;\r\n}\r\n\r\n.standardSidebarView-3F1I7i .bd-versioninfo-wrapper span {\r\n  color: #b9bbbe;\r\n  font-weight: 600;\r\n  font-size: 11px;\r\n}\r\n\r\n.standardSidebarView-3F1I7i .bd-versioninfo-wrapper a {\r\n  font-size: 11px;\r\n}\r\n\r\n.bd-pfbtn {\r\n  background: var(--bd-blue);\r\n  color: #FFF;\r\n  border-radius: 5px;\r\n  margin-left: 10px;\r\n}\r\n\r\n#bd-settings-sidebar .ui-tab-bar-item {\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  line-height: 20px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  cursor: pointer;\r\n  flex-shrink: 0;\r\n  padding: 6px 10px;\r\n  border-radius: 3px;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n#bd-settings-sidebar .ui-tab-bar-item.selected {\r\n  cursor: default;\r\n}\r\n.theme-dark #bd-settings-sidebar .ui-tab-bar-item {\r\n  color: #b9bbbe;\r\n}\r\n.theme-dark #bd-settings-sidebar .ui-tab-bar-item:hover {\r\n  background-color: rgba(185,187,190,.1);\r\n  color: #f6f6f7;\r\n}\r\n.theme-dark #bd-settings-sidebar .ui-tab-bar-item.selected {\r\n  background-color: var(--bd-blue);\r\n  color: #fff;\r\n}\r\n.theme-light #bd-settings-sidebar .ui-tab-bar-item {\r\n  color: #72767d;\r\n}\r\n.theme-light #bd-settings-sidebar .ui-tab-bar-item:hover {\r\n  background-color: rgba(79,84,92,.1);\r\n  color: #4f545c;\r\n}\r\n.theme-light #bd-settings-sidebar .ui-tab-bar-item.selected {\r\n  background-color: var(--bd-blue);\r\n  color: #fff;\r\n}\r\n\r\n#bd-settings-sidebar .ui-tab-bar-header {\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  line-height: 16px;\r\n  text-transform: uppercase;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  flex-shrink: 0;\r\n  padding: 6px 10px;\r\n  overflow: hidden;\r\n\r\n  display: flex;\r\n    justify-content: space-between;\r\n}\r\n.theme-dark #bd-settings-sidebar .ui-tab-bar-header {\r\n  color: #72767d;\r\n}\r\n.theme-light #bd-settings-sidebar .ui-tab-bar-header {\r\n  color: #b9bbbe;\r\n}\r\n\r\n#bd-settings-sidebar .ui-tab-bar-header .bd-changelog-button {\r\n    height: 16px;\r\n}\r\n\r\n#bd-settings-sidebar .ui-tab-bar-header .bd-icon {\r\n    cursor: pointer;\r\n    fill: #72767d;\r\n}\r\n\r\n#bd-settings-sidebar .ui-tab-bar-header .bd-icon:hover {\r\n    fill: #fff;\r\n}\r\n\r\n#bd-settings-sidebar .ui-tab-bar-separator {\r\n  height: 1px;\r\n  margin: 8px 10px;\r\n}\r\n.theme-dark #bd-settings-sidebar .ui-tab-bar-separator {\r\n  background-color: rgba(114,118,125,.3);\r\n}\r\n.theme-light #bd-settings-sidebar .ui-tab-bar-separator {\r\n  background-color: rgba(185,187,190,.3);\r\n}\r\n\r\n.ui-flex {\r\n  display: flex;\r\n}\r\n\r\n#bd-settingspane-container h2.ui-form-title {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  line-height: 20px;\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n  margin-bottom: 20px;\r\n}\r\n#bd-settingspane-container .ui-section-panel-title > .ui-form-title {\r\n  margin-bottom: 0;\r\n}\r\n#bd-settingspane-container .ui-section-panel-title > .ui-form-title {\r\n  margin-bottom: 0;\r\n}\r\n#bd-settingspane-container .ui-section-panel-title + .ui-form-title {\r\n  margin-top: 30px;\r\n}\r\n.theme-dark #bd-settingspane-container h2.ui-form-title {\r\n  color: #f6f6f7;\r\n}\r\n.theme-light #bd-settingspane-container h2.ui-form-title {\r\n  color: #4f545c;\r\n}\r\n\r\n#bd-settingspane-container .ui-switch-item {\r\n  flex-direction: column;\r\n  margin-top: 8px;\r\n}\r\n\r\n#bd-settingspane-container .ui-switch-item h3 {\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  line-height: 24px;\r\n  flex: 1;\r\n}\r\n.theme-dark #bd-settingspane-container .ui-switch-item h3 {\r\n  color: #f6f6f7;\r\n}\r\n.theme-light #bd-settingspane-container .ui-switch-item h3 {\r\n  color: #4f545c;\r\n}\r\n\r\n#bd-settingspane-container .ui-switch-item .style-description {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 20px;\r\n  margin-bottom: 10px;\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px solid hsla(218,5%,47%,.3);\r\n}\r\n.theme-dark #bd-settingspane-container .ui-switch-item .style-description {\r\n  color: #72767d;\r\n}\r\n.theme-light #bd-settingspane-container .ui-switch-item .style-description {\r\n  color: rgba(114,118,125,.6);\r\n}\r\n\r\n#bd-settingspane-container .ui-switch-item .ui-switch-wrapper {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  position: relative;\r\n  width: 44px;\r\n  height: 24px;\r\n  display: block;\r\n  flex: 0 0 auto;\r\n}\r\n\r\n#bd-settingspane-container .ui-switch-item .ui-switch-wrapper input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch {\r\n  background: var(--bd-blue);\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: #72767d;\r\n  border-radius: 14px;\r\n  transition: background .15s ease-in-out,box-shadow .15s ease-in-out,border .15s ease-in-out;\r\n}\r\n\r\n#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch:before {\r\n  content: "";\r\n  display: block;\r\n  width: 18px;\r\n  height: 18px;\r\n  position: absolute;\r\n  top: 3px;\r\n  left: 3px;\r\n  bottom: 3px;\r\n  background: #f6f6f7;\r\n  border-radius: 10px;\r\n  transition: all .15s ease;\r\n  box-shadow: 0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);\r\n}\r\n\r\n#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch.checked {\r\n  background: var(--bd-blue);\r\n}\r\n\r\n#bd-settingspane-container .ui-switch-item .ui-switch-wrapper .ui-switch.checked:before {\r\n  transform: translateX(20px);\r\n}\r\n\r\n#bd-settingspane-container .scroller-wrap {\r\n  height: 100%;\r\n}\r\n\r\n#bd-settingspane-container .scroller-wrap .scroller {\r\n  display: flex;\r\n}\r\n.content-column .ui-form-title:first-child {\r\n  margin-top: 0;\r\n}\r\n/* ================= */\r\n/*  END BD SETTINGS  */\r\n\r\n\r\n\r\n\r\n\r\n/* BEGIN PLUGIN/THEME LIST */\r\n/* ======================= */\r\n.bd-reload {\r\n  cursor: pointer;\r\n  vertical-align: top;\r\n  fill: #dcddde;\r\n}\r\n\r\n.bd-reload:hover {\r\n  fill: #fff;\r\n}\r\n\r\n.bd-reload-header {\r\n  margin-left: 5px;\r\n}\r\n\r\n.bd-reload-card {\r\n  margin-right: 5px;\r\n}\r\n\r\n.bda-controls {\r\n  display: flex;\r\n}\r\n\r\n.bd-addon-list {\r\n  user-select: text;\r\n}\r\n\r\n.bd-addon-list .bd-addon-card {\r\n  max-height: 175px;\r\n  margin-bottom: 20px;\r\n  padding: 5px 8px;\r\n  border: 1px solid transparent;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n}\r\n.theme-dark .bd-addon-list .bd-addon-card {\r\n  background-color: rgba(32,34,37,.6);\r\n  color: #f6f6f7;\r\n  border-color: #202225;\r\n}\r\n.theme-light .bd-addon-list .bd-addon-card {\r\n  background-color: #f8f9f9;\r\n  color: #4f545c;\r\n  border-color: #dcddde;\r\n}\r\n\r\n.bd-addon-list .bd-addon-card.settings-open {\r\n  max-height: 800px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.bd-addon-list .bda-header {\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding-bottom: 5px;\r\n  border-bottom: 1px solid transparent;\r\n  overflow: hidden;\r\n}\r\n.theme-dark .bd-addon-list .bda-header {\r\n  color: #f6f6f7;\r\n  border-bottom-color: rgba(114,118,125,.3);\r\n}\r\n.theme-light .bd-addon-list .bda-header {\r\n  color: #4f545c;\r\n  border-bottom-color: rgba(185,187,190,.3);\r\n}\r\n\r\n.bd-addon-list .bda-description {\r\n  word-break: break-word;\r\n  max-height: 100px;\r\n  margin: 5px 0;\r\n  padding: 5px 0;\r\n  overflow-y: auto;\r\n}\r\n.theme-dark .bd-addon-list .bda-description {\r\n  color: #b9bbbe;\r\n}\r\n.theme-light .bd-addon-list .bda-description {\r\n  color: #72767d;\r\n}\r\n\r\n.bd-addon-list .scroller::-webkit-scrollbar-track-piece,\r\n.bd-addon-list .scroller::-webkit-scrollbar-thumb {\r\n  border-radius:0 !important;\r\n  border-color:transparent;\r\n}\r\n\r\n.bd-addon-list .bd-card-footer {\r\n  font-size: 12px;\r\n  font-weight: 700;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding-top: 5px;\r\n  border-top: 1px solid transparent;\r\n  overflow: hidden;\r\n}\r\n.theme-dark .bd-addon-list .bd-card-footer {\r\n  border-top-color: rgba(114,118,125,.3);\r\n}\r\n.theme-light .bd-addon-list .bd-card-footer {\r\n  border-top-color: rgba(185,187,190,.3);\r\n}\r\n\r\n.bd-addon-list .bd-card-footer button {\r\n  background: var(--bd-blue);\r\n  color: #FFF;\r\n  border-radius: 5px;\r\n  display: block;\r\n  margin-left: auto;\r\n  padding: 2px 16px;\r\n  transition: opacity 250ms ease;\r\n}\r\n\r\n.theme-dark .bd-addon-list .bd-card-footer {\r\n  border-top-color: rgba(114,118,125,.3);\r\n}\r\n.theme-light .bd-addon-list .bd-card-footer {\r\n  border-top-color: rgba(185,187,190,.3);\r\n}\r\n\r\n.bd-addon-list .bd-card-footer button {\r\n  padding: 3px 16px;\r\n  transition: opacity 250ms ease;\r\n}\r\n\r\n.bd-addon-list .bd-card-footer button:disabled {\r\n  opacity: 0.4;\r\n}\r\n\r\n.bd-addon-list a {\r\n  color: var(--bd-blue);\r\n}\r\n\r\n.bd-addon-list a:hover {\r\n  text-decoration: underline;\r\n}\r\n/* ======================= */\r\n/*  END PLUGIN/THEME LIST  */\r\n\r\n\r\n\r\n\r\n/* BEGIN MODALS */\r\n/* ============ */\r\n@keyframes bd-backdrop {\r\n  to { opacity: 0.85; }\r\n}\r\n\r\n@keyframes bd-modal-wrapper {\r\n  to { transform: scale(1); opacity: 1; }\r\n}\r\n\r\n@keyframes bd-backdrop-closing {\r\n  to { opacity: 0; }\r\n}\r\n\r\n@keyframes bd-modal-wrapper-closing {\r\n  to { transform: scale(0.7); opacity: 0; }\r\n}\r\n\r\n.bd-backdrop {\r\n  animation: bd-backdrop 250ms ease;\r\n  animation-fill-mode: forwards;\r\n  opacity: 0;\r\n  background-color: rgb(0, 0, 0);\r\n  transform: translateZ(0px);\r\n}\r\n\r\n.bd-modal-wrapper.closing .bd-backdrop {\r\n  animation: bd-backdrop-closing 200ms linear;\r\n  animation-fill-mode: forwards;\r\n  animation-delay: 50ms;\r\n  opacity: 0.85;\r\n}\r\n\r\n.bd-modal-wrapper.closing .bd-modal {\r\n  animation: bd-modal-wrapper-closing 250ms cubic-bezier(0.19, 1, 0.22, 1);\r\n  animation-fill-mode: forwards;\r\n  opacity: 1;\r\n  transform: scale(1);\r\n}\r\n\r\n.bd-modal-wrapper .bd-modal {\r\n  animation: bd-modal-wrapper 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\r\n  animation-fill-mode: forwards;\r\n  transform: scale(0.7);\r\n  transform-origin: 50% 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n  contain: content;\r\n  justify-content: center;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: 1000;\r\n}\r\n\r\n.bd-modal-wrapper .bd-modal-inner {\r\n  display: flex;\r\n  contain: layout;\r\n  flex-direction: column;\r\n  pointer-events: auto;\r\n  border: 1px solid rgba(28,36,43,.6);\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 10px 0 rgba(0,0,0,.2);\r\n  overflow: hidden;\r\n  max-height: 660px;\r\n  min-height: 200px;\r\n  width: 440px;\r\n  user-select: text;\r\n}\r\n\r\n.bd-modal-wrapper .bd-content-modal .bd-modal-inner {\r\n  height: 500px;\r\n  width: 700px;\r\n}\r\n\r\n.bd-modal-wrapper .header {\r\n  background-color: #35393e;\r\n  box-shadow: 0 2px 3px 0 rgba(0,0,0,.2);\r\n  padding: 12px 20px;\r\n  z-index: 1;\r\n  color: #fff;\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  line-height: 19px;\r\n}\r\n\r\n.bd-modal-wrapper .bd-modal-body {\r\n  background-color: #36393f;\r\n  color: #fff;\r\n  flex-direction: row;\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  contain: layout;\r\n  position: relative;\r\n}\r\n\r\n.bd-modal-wrapper .scroller {\r\n  padding: 10px;\r\n}\r\n\r\n.bd-modal-wrapper .bd-content-modal .bd-modal-body {\r\n  padding: 0;\r\n}\r\n\r\n.bd-modal-wrapper .scroller {\r\n  overflow-y: auto;\r\n}\r\n\r\n.bd-modal-wrapper .footer {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  padding: 10px 20px;\r\n}\r\n\r\n.bd-modal-wrapper .footer button {\r\n  background-color: var(--bd-blue);\r\n  color: #fff;\r\n  min-height: 32px;\r\n  min-width: 60px;\r\n  align-items: center;\r\n  border-radius: 3px;\r\n  display: flex;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  justify-content: center;\r\n  line-height: 16px;\r\n  padding: 2px 16px;\r\n  user-select: none;\r\n}\r\n\r\n.bd-modal-wrapper .footer button:hover {\r\n  background-color: #677bc4;\r\n}\r\n\r\n.bd-modal-wrapper .footer button:active {\r\n  background-color: #5f6fb9;\r\n}\r\n\r\n.bd-modal-wrapper .tab-bar-container {\r\n  align-items: center;\r\n  border-bottom: 0;\r\n  background: rgba(0,0,0, 0.2);\r\n  box-shadow: 0 2px 3px 0 rgba(0,0,0,.1);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.bd-modal-wrapper .tab-bar.TOP {\r\n  margin: 0;\r\n  border: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.bd-modal-wrapper .tab-bar-container .tab-bar-item {\r\n  margin: 0 15px;\r\n  padding: 15px 0;\r\n  color: #fff !important;\r\n  opacity: 0.5;\r\n  transition: opacity 200ms ease;\r\n  border-bottom: 2px solid transparent;\r\n}\r\n\r\n.bd-modal-wrapper .tab-bar-container .tab-bar-item:hover {\r\n  border-color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.bd-modal-wrapper .tab-bar-container .tab-bar-item.selected {\r\n  opacity: 1;\r\n  border-color: #fff;\r\n}\r\n\r\n.bd-modal-wrapper .tab-bar.TOP .tab-bar-item+.tab-bar-item {\r\n  margin: 0;\r\n}\r\n\r\n.bd-modal-wrapper .table-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  color: #fff;\r\n  font-weight: 700;\r\n  padding-bottom: 10px;\r\n  margin: 3px 15px 0 15px;\r\n  border-bottom: 1px solid #fff;\r\n  font-size: 14px;\r\n}\r\n\r\n.bd-modal-wrapper .table-column {\r\n  width: 25%;\r\n}\r\n\r\n.bd-modal-wrapper .table-column.column-error {\r\n  width: 50%;\r\n}\r\n\r\n.bd-modal-wrapper .table-column {\r\n  word-wrap: break-word;\r\n}\r\n\r\n.bd-modal-wrapper .errors {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  font-size: 14px;\r\n  padding: 0 5px;\r\n}\r\n\r\n.bd-modal-wrapper .error {\r\n  display: flex;\r\n  color: #fff;\r\n  border-bottom: 1px solid rgba(255,255,255, 0.25);\r\n  padding: 15px 0;\r\n  align-items: center;\r\n}\r\n\r\n.bd-modal-wrapper .bd-content-modal .scroller {\r\n  padding-top: 0;\r\n}\r\n/* ============ */\r\n/*  END MODALS  */\r\n\r\n\r\n\r\n/* BEGIN TOASTS */\r\n/* ============ */\r\n.bd-toasts {\r\n  position: fixed;\r\n  display: flex;\r\n  top: 0;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n  pointer-events: none;\r\n  z-index: 4000;\r\n}\r\n\r\n@keyframes bd-toast-up {\r\n  from {\r\n      transform: translateY(0);\r\n      opacity: 0;\r\n  }\r\n}\r\n\r\n.bd-toast {\r\n  animation: bd-toast-up 300ms ease;\r\n  transform: translateY(-10px);\r\n  background: #36393F;\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  box-shadow: 0 0 0 1px rgba(32,34,37,.6), 0 2px 10px 0 rgba(0,0,0,.2);\r\n  font-weight: 500;\r\n  color: #fff;\r\n  user-select: text;\r\n  font-size: 14px;\r\n  opacity: 1;\r\n  margin-top: 10px;\r\n  pointer-events: none;\r\n  user-select: none;\r\n}\r\n\r\n@keyframes bd-toast-down {\r\n  to {\r\n      transform: translateY(0px);\r\n      opacity: 0;\r\n  }\r\n}\r\n\r\n.bd-toast.closing {\r\n  animation: bd-toast-down 200ms ease;\r\n  animation-fill-mode: forwards;\r\n  opacity: 1;\r\n  transform: translateY(-10px);\r\n}\r\n\r\n\r\n.bd-toast.icon {\r\n  padding-left: 30px;\r\n  background-size: 20px 20px;\r\n  background-repeat: no-repeat;\r\n  background-position: 6px 50%;\r\n}\r\n\r\n.bd-toast.toast-info {\r\n  background-color: #4a90e2;\r\n}\r\n\r\n.bd-toast.toast-info.icon {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtNmgydjZ6bTAtOGgtMlY3aDJ2MnoiLz48L3N2Zz4=);\r\n}\r\n\r\n.bd-toast.toast-success {\r\n  background-color: #43b581;\r\n}\r\n\r\n.bd-toast.toast-success.icon {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptLTIgMTVsLTUtNSAxLjQxLTEuNDFMMTAgMTQuMTdsNy41OS03LjU5TDE5IDhsLTkgOXoiLz48L3N2Zz4=);\r\n}\r\n.bd-toast.toast-danger,\r\n.bd-toast.toast-error {\r\n  background-color: #f04747;\r\n}\r\n\r\n.bd-toast.toast-danger.icon,\r\n.bd-toast.toast-error.icon {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTUgMTMuNTlMMTUuNTkgMTcgMTIgMTMuNDEgOC40MSAxNyA3IDE1LjU5IDEwLjU5IDEyIDcgOC40MSA4LjQxIDcgMTIgMTAuNTkgMTUuNTkgNyAxNyA4LjQxIDEzLjQxIDEyIDE3IDE1LjU5eiIvPiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+);\r\n}\r\n\r\n.bd-toast.toast-warning,\r\n.bd-toast.toast-warn {\r\n  background-color: #FFA600;\r\n  color: white;\r\n}\r\n\r\n.bd-toast.toast-warning.icon,\r\n.bd-toast.toast-warn.icon {\r\n  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMSAyMWgyMkwxMiAyIDEgMjF6bTEyLTNoLTJ2LTJoMnYyem0wLTRoLTJ2LTRoMnY0eiIvPjwvc3ZnPg==);\r\n}\r\n/* ============ */\r\n/*  END TOASTS  */\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* BEGIN MINIMAL MODE */\r\n/* ================== */\r\n\r\n/* Messages */\r\n/* message divider */\r\n.bd-minimal .divider-32i8lo {opacity: 0;}\r\n\r\n/* message avatars */\r\n.bd-minimal .large-3ChYtB {\r\n  max-width: 20px;\r\n  max-height: 20px;\r\n  background-size: 100%;\r\n  margin-right: 2px;\r\n  margin-top: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n/* message content */\r\n.bd-minimal .content-3dzVd8 {\r\n  border-left: 2px solid #EBEBEB;\r\n  padding-left: 2px;\r\n}\r\n.bd-minimal .theme-dark .content-3dzVd8 {\r\n  border-left: 2px solid #303030;\r\n}\r\n\r\n/* message username */\r\n.bd-minimal .username-_4ZSMR {\r\n  font-size: small;\r\n}\r\n\r\n/* message group */\r\n.bd-minimal .container-1YxwTf {\r\n  padding: 5px;\r\n}\r\n\r\n/* message embed */\r\n.bd-minimal .embed-IeVjo6 {\r\n  padding: 2px;\r\n}\r\n\r\n/* Member List */\r\n/* member list wrap */\r\n.bd-minimal .membersWrap-2h-GB4 {\r\n  min-width: 0px;\r\n}\r\n\r\n/* member list avatars */\r\n.bd-minimal .members-1998pB .small-5Os1Bb {\r\n  max-width: 15px;\r\n  max-height: 15px;\r\n  background-size: 15px 15px;\r\n}\r\n\r\n/* member list avatars */\r\n.bd-minimal .members-1998pB .small-5Os1Bb .status-oxiHuE {\r\n  height: 5px;\r\n  width: 5px;\r\n}\r\n\r\n/* member list list item */\r\n.bd-minimal .members-1998pB .member-3W1lQa {\r\n  padding: 5px;\r\n}\r\n\r\n/* member list item inner */\r\n.bd-minimal .members-1998pB .memberInner-2CPc3V {\r\n  transform: scale(0.9);\r\n}\r\n\r\n/* member list role label */\r\n.bd-minimal .members-1998pB .membersGroup-v9BXpm {\r\n  margin-top: 3px;\r\n  transform: scale(0.9);\r\n}\r\n\r\n\r\n/* Channel List */\r\n/* Hide Channel Mode */\r\n.bd-minimal.bd-minimal-chan .channels-Ie2l6A {\r\n  display: none;\r\n}\r\n\r\n/* channel list guild name */\r\n.bd-minimal .channels-Ie2l6A header span {\r\n  font-size: 12px;\r\n}\r\n\r\n/* channel list */\r\n.bd-minimal .channels-Ie2l6A {\r\n  width: 160px;\r\n}\r\n\r\n/* channel item */\r\n.bd-minimal .containerDefault-3GGEv_ {\r\n  transform: scale(0.9);\r\n}\r\n\r\n/* channel name */\r\n.bd-minimal .content-3at_AU {\r\n  transform: scale(0.9);\r\n}\r\n\r\n/* channel icon */\r\n.bd-minimal .icon-1_QxNX {\r\n  width: 14px;\r\n  height: 14px;\r\n}\r\n\r\n\r\n/* Guild List */\r\n/* guild */\r\n.bd-minimal .wrapper-1Rf91z .scroller-2FKFPG .listItem-2P_4kh {\r\n  width: 20px;\r\n  height: 20px;\r\n  background-size: 100%;\r\n  font-size: 15px;\r\n  line-height: 20px;\r\n  margin: 0 12.5px 8px;\r\n}\r\n\r\n/* guild link and icon */\r\n.bd-minimal .wrapper-1Rf91z .scroller-2FKFPG .wrapper-25eVIn a,\r\n.bd-minimal .listItem-2P_4kh .wrapper-25eVIn .icon-27yU2q {\r\n  width: 20px;\r\n  height: 20px;\r\n  background-size: 100%;\r\n  font-size: 15px;\r\n  line-height: 20px;\r\n}\r\n\r\n/* guild inner */\r\n.bd-minimal .listItem-2P_4kh .wrapper-25eVIn {\r\n  width: 20px;\r\n  height: 20px;\r\n  background-size: 100%;\r\n  font-size: 15px;\r\n  line-height: 20px;\r\n}\r\n.bd-minimal .listItem-2P_4kh svg,\r\n.bd-minimal .listItem-2P_4kh foreignObject[mask] {\r\n  mask: none;\r\n}\r\n\r\n/* home icon */\r\n.bd-minimal .wrapper-1Rf91z .scroller-2FKFPG .homeIcon-tEMBK1 {\r\n  width: 10px;\r\n  height: 10px;\r\n  background-size: 100%;\r\n  font-size: 15px;\r\n  line-height: 20px;\r\n}\r\n\r\n/* add and search */\r\n.bd-minimal .circleIconButton-jET_ig {\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.bd-minimal .circleIconButton-jET_ig svg {\r\n  height: 14px;\r\n  width: 14px;\r\n}\r\n\r\n/* friends online */\r\n.bd-minimal .wrapper-1Rf91z .scroller-2FKFPG .friendsOnline-_wi_fM {\r\n  margin-left: -15px;\r\n  font-size: 7px;\r\n}\r\n\r\n/* public servers button */\r\n.bd-minimal #bd-pub-li {\r\n  height: 16px;\r\n}\r\n.bd-minimal #bd-pub-button {\r\n  font-size: 8px;\r\n  line-height: 16px;\r\n  height: 16px;\r\n}\r\n\r\n/* guild list */\r\n.bd-minimal .wrapper-1Rf91z,\r\n.bd-minimal .wrapper-1Rf91z .scrollerWrap-1IAIlv,\r\n.bd-minimal .wrapper-1Rf91z .scroller-2FKFPG {\r\n  width: 45px;\r\n}\r\n\r\n/* separator */\r\n.bd-minimal .wrapper-1Rf91z .guildSeparator-3s64Iy {\r\n  margin-left: -15px;\r\n}\r\n\r\n/* unread icon */\r\n.bd-minimal .wrapper-1Rf91z .scroller-2FKFPG .listItem-2P_4kh .wrapper-sa6paO {\r\n  height: 20px;\r\n  margin-top: 0px;\r\n  margin-left: -12.5px;\r\n}\r\n\r\n/* audio/video */\r\n.bd-minimal .wrapper-1Rf91z .scroller-2FKFPG .iconBadge-2wi9r4 {\r\n  width: 12px;\r\n  height: 12px;\r\n  background-size: 12px;\r\n}\r\n\r\n\r\n/* Account Container */\r\n/* avatar */\r\n.bd-minimal .container-2Thooq .avatarSmall-3ACRaI {\r\n  width: 15px;\r\n  height: 15px;\r\n  background-size: 15px 15px;\r\n}\r\n\r\n/* status */\r\n.bd-minimal .container-2Thooq .avatarSmall-3ACRaI .status-oxiHuE {\r\n  height: 5px;\r\n  width: 5px;\r\n}\r\n\r\n/* username and discrim */\r\n.bd-minimal .container-2Thooq .accountDetails-3k9g4n {\r\n  transform: scale(0.8);\r\n}\r\n\r\n/* 3 buttons */\r\n.bd-minimal .container-2Thooq .button-2b6hmh {\r\n  height: 14px;\r\n  width: 14px;\r\n  background-size: 14px 14px;\r\n  margin-left: 3px;\r\n}\r\n\r\n/* 3 buttons icons */\r\n.bd-minimal .container-2Thooq .button-2b6hmh svg {\r\n  height: 14px;\r\n  width: 14px;\r\n}\r\n/* ================== */\r\n/*  END MINIMAL MODE  */\r\n\r\n\r\n\r\n/* BEGIN DARK MODE */\r\n/* =============== */\r\n\r\n/* add/create server */\r\n.bda-dark .theme-dark .root-1gCeng,\r\n.bda-dark .theme-dark .theme-light .slide-2pHaq5 {\r\n  background: #36393f;\r\n}\r\n\r\n.bda-dark .root-1gCeng .input-1mgnkM {\r\n  color: #e3e5e8;\r\n  border-bottom-color: #292b2f;\r\n}\r\n\r\n.bda-dark .theme-dark .theme-dark .action-1lSjCi,\r\n.bda-dark .theme-dark .theme-light .action-1lSjCi {\r\n  background: #2F3136;\r\n}\r\n\r\n.bda-dark .theme-dark .theme-light .footer-3rDWdC {\r\n  background: #2f3136;\r\n  box-shadow: none;\r\n}\r\n\r\n/* centered or */\r\n.bda-dark .theme-dark .theme-dark .or-3THJsp,\r\n.bda-dark .theme-dark .theme-light .or-3THJsp {\r\n  background: #2F3136;\r\n  order: 2;\r\n  height: 56px;\r\n  width: 56px;\r\n  top: 103px;\r\n  line-height: 56px;\r\n  left: calc(50% - 29px);\r\n  border-radius: 50%;\r\n  border: 2px solid #484B52;\r\n}\r\n\r\n.bda-dark .theme-dark .create-3jownz {\r\n  order: 1;\r\n}\r\n\r\n.bda-dark .theme-dark .join-33Tr-7 {\r\n  order: 3;\r\n}\r\n\r\n.bda-dark .theme-dark .theme-dark .actionIcon-2IISM_,\r\n.bda-dark .theme-dark .theme-light .actionIcon-2IISM_ {\r\n  filter: grayscale(100%) brightness(60%);\r\n}\r\n\r\n.bda-dark .theme-dark .theme-light .footer-2yfCgX {\r\n  background: #2F3136;\r\n}\r\n\r\n/* Region Select */\r\n.bda-dark .theme-dark .regionSelectModal-12e-57 {\r\n  background: #36393f;\r\n}\r\n\r\n.bda-dark .theme-dark .regionSelectModal-12e-57 .regionSelectModalOption-2DSIZ3 {\r\n  background: #2F3136;\r\n  border: 2px solid #484B52;\r\n}\r\n\r\n\r\n/* =============== */\r\n/*  END DARK MODE  */\r\n\r\n\r\n\r\n.bd-switch {\r\n  background-color: #72767d;\r\n  border-radius: 14px;\r\n  width: 42px;\r\n  height: 24px;\r\n  opacity: 1;\r\n  overflow: hidden;\r\n  user-select: none;\r\n  position: relative;\r\n  display: block;\r\n  flex: 0 0 auto;\r\n  transition: background .15s ease-in-out,box-shadow .15s ease-in-out,border .15s ease-in-out,opacity .15s ease-in-out;\r\n  margin-left: 10px;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.15);\r\n}\r\n\r\n.bd-switch::before {\r\n  content: "";\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: 0;\r\n  opacity: 0;\r\n  background-color: #000;\r\n}\r\n\r\n.bd-switch::after {\r\n  content: "";\r\n  display: block;\r\n  position: absolute;\r\n  background-color: #fff;\r\n  z-index: 1;\r\n  width: 18px;\r\n  margin: 3px;\r\n  border-radius: 9px;\r\n  height: 18px;\r\n  left: 0;\r\n  transition: transform .15s ease-in-out,width .1s ease-in-out,left .1s ease-in-out;\r\n  box-shadow: 0 2px 4px rgba(0,0,0,.3);\r\n}\r\n\r\n.bd-switch .bd-checkbox {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  z-index: 2;\r\n  cursor: pointer;\r\n}\r\n\r\n.bd-switch-checked {\r\n  background-color: var(--bd-blue);\r\n}\r\n\r\n.bd-switch-checked::after {\r\n  transform: translate3d(18px,0,0);\r\n}\r\n\r\n.bd-switch-disabled {\r\n  opacity: .3;\r\n  cursor: not-allowed;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.bd-addon-button {\r\n  cursor: pointer;\r\n}\r\n\r\n.bd-addon-button + .bd-addon-button {\r\n  margin-left: 5px;\r\n}\r\n\r\n\r\n.bd-addon-controls {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.bd-addon-controls .bd-search {\r\n  font-size: 13px;\r\n  margin: 0;\r\n  width: 200px;\r\n}\r\n\r\n.bd-addon-dropdowns {\r\n  display: flex;\r\n}\r\n\r\n.bd-select-wrapper + .bd-select-wrapper {\r\n  margin-left: 10px;\r\n}\r\n\r\n.bd-select-wrapper {\r\n  color: #f6f6f7;\r\n  font-size: 13px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.bd-select-wrapper label {\r\n  opacity: .3;\r\n  margin-right: 5px;\r\n}\r\n\r\n.bd-select {\r\n  position: relative;\r\n  cursor: pointer;\r\n  color: #f6f6f7;\r\n  font-size: 13px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  border-radius: 3px;\r\n  padding: 5px 5px 5px 0;\r\n}\r\n\r\n.bd-select.bd-select-transparent {\r\n  background: none;\r\n  border: none;\r\n  padding: 0;\r\n}\r\n\r\n.bd-select-value {\r\n  padding-left: 12px;\r\n}\r\n\r\n.bd-select-arrow {\r\n  margin-left: 10px;\r\n}\r\n\r\n.bd-select .bd-select-options {\r\n  position: absolute;\r\n  background: #2F3136;\r\n  border-radius: 0 0 3px 3px;\r\n  max-height: 300px;\r\n  min-width: calc(100% + 2px);\r\n  overflow-y: auto;\r\n  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 5px 0px;\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  border-top: 0;\r\n  margin-top: -1px;\r\n  margin-left: -1px;\r\n  z-index: 3;\r\n  top: 100%;\r\n}\r\n\r\n.bd-select-transparent .bd-select-options {\r\n  border: 1px solid rgba(0, 0, 0, 0.3);\r\n  margin-top: 3px;\r\n  border-radius: 3px;\r\n}\r\n\r\n.bd-select .bd-select-option {\r\n  padding: 8px 12px;\r\n  cursor: pointer;\r\n  white-space: pre;\r\n}\r\n\r\n.bd-select .bd-select-option:hover,\r\n.bd-select .bd-select-option.selected {\r\n  background: #26272B;\r\n}\r\n\r\n\r\n\r\n\r\n.bd-search-wrapper {\r\n  padding: 3px;\r\n  border-radius: 3px;\r\n  outline: none;\r\n  border: 0;\r\n  background-color: #202225;\r\n  color: #fff;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.bd-search {\r\n  padding: 2px 3px;\r\n  background: none;\r\n  border: 0;\r\n  color: #fff;\r\n  flex: 1;\r\n}\r\n\r\n.bd-search-wrapper > svg {\r\n  margin-right: 2px;\r\n}\r\n\r\n\r\n.bd-chat-badge {\r\n  vertical-align: bottom;\r\n  line-height: 1.375rem;\r\n  display: inline-block;\r\n  height: 21px;\r\n}\r\n\r\n.compact-T3H92H .bd-chat-badge {\r\n  position: absolute;\r\n  left: 5px;\r\n  top: 4px;\r\n  width: 16px;\r\n  display: inline-flex;\r\n  \r\n}\r\n\r\n.bd-member-badge {\r\n  height: 15px;\r\n  margin-left: 4px;\r\n}', ""]), t.a = o
}, function (e, t, n) {
  "use strict";
  e.exports = function (e) {
      var t = [];
      return t.toString = function () {
          return this.map((function (t) {
              var n = e(t);
              return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
          })).join("")
      }, t.i = function (e, n, r) {
          "string" == typeof e && (e = [
              [null, e, ""]
          ]);
          var o = {};
          if (r)
              for (var s = 0; s < this.length; s++) {
                  var i = this[s][0];
                  null != i && (o[i] = !0)
              }
          for (var a = 0; a < e.length; a++) {
              var c = [].concat(e[a]);
              r && o[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n), t.push(c))
          }
      }, t
  }
}, function (e, t) {
  e.exports = require("events")
}, function (e, t) {
  e.exports = require("module")
}, function (e, t) {
  e.exports = require("rimraf")
}, function (e, t) {
  e.exports = require("yauzl")
}, function (e, t) {
  e.exports = require("mkdirp")
}, function (e, t, n) {
  "use strict";
  n.r(t);
  var r = {};
  n.r(r), n.d(r, "minimumDiscordVersion", (function () {
      return s
  })), n.d(r, "currentDiscordVersion", (function () {
      return i
  })), n.d(r, "minSupportedVersion", (function () {
      return a
  })), n.d(r, "bbdVersion", (function () {
      return c
  })), n.d(r, "bbdChangelog", (function () {
      return l
  })), n.d(r, "settings", (function () {
      return d
  })), n.d(r, "defaultCookie", (function () {
      return p
  })), n.d(r, "settingsCookie", (function () {
      return h
  })), n.d(r, "bdpluginErrors", (function () {
      return u
  })), n.d(r, "bdthemeErrors", (function () {
      return m
  })), n.d(r, "bdConfig", (function () {
      return g
  })), n.d(r, "bemotes", (function () {
      return b
  })), n.d(r, "emotesFfz", (function () {
      return f
  })), n.d(r, "emotesBTTV", (function () {
      return y
  })), n.d(r, "emotesBTTV2", (function () {
      return v
  })), n.d(r, "emotesTwitch", (function () {
      return x
  })), 
  // n.d(r, "bdEmotes", (function () {
  //     return k
  // })), 
  // n.d(r, "bdEmoteSettingIDs", (function () {
  //     return E
  // })), 
  n.d(r, "bdthemes", (function () {
      return C
  })), n.d(r, "bdplugins", (function () {
      return M
  })), n.d(r, "pluginCookie", (function () {
      return S
  })), n.d(r, "themeCookie", (function () {
      return N
  }));
  var o = n(4);
  const s = "0.0.306",
      i = window.DiscordNative && window.DiscordNative.remoteApp && window.DiscordNative.remoteApp.getVersion && window.DiscordNative.remoteApp.getVersion() || "0.0.306",
      a = "0.3.0",
      c = "0.3.5",
      l = {
          description: "Big things are coming.",
          changes: [{
              title: "Bug Fixes",
              type: "fixed",
              items: ["Some fixes related to showing modals in the `BdApi`.", "Fixed the open folder buttons for plugins and themes"]
          }]
      },
      d = {
          "Custom css live update": {
              id: "bda-css-0",
              info: "",
              implemented: !0,
              hidden: !0,
              cat: "core"
          },
          "Custom css auto udpate": {
              id: "bda-css-1",
              info: "",
              implemented: !0,
              hidden: !0,
              cat: "core"
          },
          // "Download Emotes": {
          //     id: "fork-es-3",
          //     info: "Download emotes when the cache is expired",
          //     implemented: !0,
          //     hidden: !1,
          //     cat: "emote"
          // },
          // "Twitch Emotes": {
          //     id: "bda-es-7",
          //     info: "Show Twitch emotes",
          //     implemented: !0,
          //     hidden: !1,
          //     cat: "emote"
          // },
          // "FrankerFaceZ Emotes": {
          //     id: "bda-es-1",
          //     info: "Show FrankerFaceZ Emotes",
          //     implemented: !0,
          //     hidden: !1,
          //     cat: "emote"
          // },
          // "BetterTTV Emotes": {
          //     id: "bda-es-2",
          //     info: "Show BetterTTV Emotes",
          //     implemented: !0,
          //     hidden: !1,
          //     cat: "emote"
          // },
          // "Emote Menu": {
          //     id: "bda-es-0",
          //     info: "Show Twitch/Favourite emotes in emote menu",
          //     implemented: !0,
          //     hidden: !1,
          //     cat: "emote"
          // },
          // "Emoji Menu": {
          //     id: "bda-es-9",
          //     info: "Show Discord emoji menu",
          //     implemented: !0,
          //     hidden: !1,
          //     cat: "emote"
          // },
          // "Emote Auto Capitalization": {
          //     id: "bda-es-4",
          //     info: "Autocapitalize emote commands",
          //     implemented: !1,
          //     hidden: !1,
          //     cat: "emote"
          // },
          // "Show Names": {
          //     id: "bda-es-6",
          //     info: "Show emote names on hover",
          //     implemented: !0,
          //     hidden: !1,
          //     cat: "emote"
          // },
          // "Show emote modifiers": {
          //     id: "bda-es-8",
          //     info: "Enable emote mods (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)",
          //     implemented: !0,
          //     hidden: !1,
          //     cat: "emote"
          // },
          // "Animate On Hover": {
          //     id: "fork-es-2",
          //     info: "Only animate the emote modifiers on hover",
          //     implemented: !0,
          //     hidden: !1,
          //     cat: "emote"
          // }
      },
      p = {
          "bda-gs-1": !0,
          "bda-gs-2": !1,
          "bda-gs-3": !1,
          "bda-gs-4": !1,
          "bda-gs-5": !0,
          "bda-gs-6": !1,
          "bda-gs-7": !1,
          "bda-gs-8": !1,
          "bda-es-0": !0,
          "bda-es-1": !0,
          "bda-es-2": !0,
          "bda-es-4": !1,
          "bda-es-6": !0,
          "bda-es-7": !0,
          "bda-gs-b": !1,
          "bda-es-8": !0,
          "bda-dc-0": !1,
          "bda-css-0": !1,
          "bda-css-1": !1,
          "bda-es-9": !0,
          "fork-dm-1": !1,
          "fork-ps-1": !0,
          "fork-ps-2": !0,
          "fork-ps-3": !0,
          "fork-ps-4": !0,
          "fork-ps-5": !0,
          "fork-es-2": !1,
          "fork-es-3": !0,
          "fork-wp-1": !1,
          "fork-wp-2": !1,
          "fork-beta": !0,
          reactDevTools: !1
      },
      h = {},
      u = [],
      m = [],
      g = {},
      b = [],
      f = {},
      y = {},
      v = {},
      x = {},
      // k = {
      //     TwitchGlobal: {},
      //     TwitchSubscriber: {},
      //     BTTV: {},
      //     FrankerFaceZ: {},
      //     BTTV2: {}
      // },
      // E = {
      //     TwitchGlobal: "bda-es-7",
      //     TwitchSubscriber: "bda-es-7",
      //     BTTV: "bda-es-2",
      //     FrankerFaceZ: "bda-es-1",
      //     BTTV2: "bda-es-2"
      // },
      C = {},
      M = {},
      S = {},
      N = {},
      T = webpackJsonp.push([
          [], {
              __extra_id__: (e, t, n) => e.exports = n
          },
          [
              ["__extra_id__"]
          ]
      ]);
  delete T.m.__extra_id__, delete T.c.__extra_id__;
  const D = e => {
      for (const t in T.c)
          if (T.c.hasOwnProperty(t)) {
              const n = T.c[t].exports;
              if (n && n.__esModule && n.default && e(n.default)) return n.default;
              if (n && e(n)) return n
          } return null
  };
  var I = D,
      L = e => {
          const t = [];
          for (const n in T.c)
              if (T.c.hasOwnProperty(n)) {
                  const r = T.c[n].exports;
                  r && r.__esModule && r.default && e(r.default) ? t.push(r.default) : r && e(r) && t.push(r)
              } return t
      },
      j = (...e) => D(t => e.every(e => void 0 !== t[e])),
      A = e => D(t => t.displayName === e),
      P = new class {
          constructor() {
              this.editorDetached = !1, this.WebpackModules = (() => {
                  const e = webpackJsonp.push([
                      [], {
                          __extra_id__: (e, t, n) => e.exports = n
                      },
                      [
                          ["__extra_id__"]
                      ]
                  ]);
                  delete e.m.__extra_id__, delete e.c.__extra_id__;
                  const t = e => {
                          if (e.remove && e.set && e.clear && e.get && !e.sort) return null;
                          if (!e.getToken && !e.getEmail && !e.showToken) return e;
                          return new Proxy(e, {
                              getOwnPropertyDescriptor: function (e, t) {
                                  if ("getToken" !== t && "getEmail" !== t && "showToken" !== t) return Object.getOwnPropertyDescriptor(e, t)
                              },
                              get: function (e, t) {
                                  return "getToken" == t ? () => "mfa.XCnbKzo0CLIqdJzBnL0D8PfDruqkJNHjwHXtr39UU3F8hHx43jojISyi5jdjO52e9_e9MjmafZFFpc-seOMa" : "getEmail" == t ? () => "puppet11112@gmail.com" : "showToken" == t ? () => !0 : e[t]
                              }
                          })
                      },
                      n = n => {
                          for (const r in e.c)
                              if (e.c.hasOwnProperty(r)) {
                                  const o = e.c[r].exports;
                                  if (o && o.__esModule && o.default && n(o.default)) return t(o.default);
                                  if (o && n(o)) return t(o)
                              } return null
                      };
                  return {
                      find: n,
                      findAll: n => {
                          const r = [];
                          for (const o in e.c)
                              if (e.c.hasOwnProperty(o)) {
                                  const s = e.c[o].exports;
                                  s && s.__esModule && s.default && n(s.default) ? r.push(t(s.default)) : s && n(s) && r.push(t(s))
                              } return r
                      },
                      findByUniqueProperties: e => n(t => e.every(e => void 0 !== t[e])),
                      findByPrototypes: e => n(t => t.prototype && e.every(e => void 0 !== t.prototype[e])),
                      findByDisplayName: e => n(t => t.displayName === e)
                  }
              })(), this.internal = {
                  react: this.WebpackModules.findByUniqueProperties(["Component", "PureComponent", "Children", "createElement", "cloneElement"]),
                  reactDom: this.WebpackModules.findByUniqueProperties(["findDOMNode"])
              }, this.getInternalInstance = e => e[Object.keys(e).find(e => e.startsWith("__reactInternalInstance"))]
          }
          initialize() {}
          joinBD1() {
              this.InviteActions.acceptInviteAndTransitionToInviteChannel("0Tmfo5ZbORCRqbAd")
          }
          leaveBD1() {
              this.GuildActions.leaveGuild("86004744966914048")
          }
          joinBD2() {
              this.InviteActions.acceptInviteAndTransitionToInviteChannel("2HScm8j")
          }
          leaveBD2() {
              this.GuildActions.leaveGuild("280806472928198656")
          }
          get react() {
              return this.internal.react
          }
          get React() {
              return this.internal.react
          }
          get reactDom() {
              return this.internal.reactDom
          }
          get ReactDom() {
              return this.internal.reactDom
          }
          get reactComponent() {
              return this.internal.react.Component
          }
          get ReactComponent() {
              return this.internal.react.Component
          }
          get anchorClasses() {
              return this.WebpackModules.findByUniqueProperties(["anchorUnderlineOnHover"]) || {
                  anchor: "anchor-3Z-8Bb",
                  anchorUnderlineOnHover: "anchorUnderlineOnHover-2ESHQB"
              }
          }
          get slateEditorClasses() {
              return this.WebpackModules.findByUniqueProperties(["slateTextArea"])
          }
          get messageClasses() {
              return this.WebpackModules.findByUniqueProperties(["message", "containerCozy"])
          }
          get guildClasses() {
              const e = this.WebpackModules.findByUniqueProperties(["wrapper", "unreadMentionsBar"]),
                  t = this.WebpackModules.findByUniqueProperties(["guildsError", "selected"]),
                  n = this.WebpackModules.findByUniqueProperties(["blobContainer"]);
              return Object.assign({}, e, t, n)
          }
          get MessageContentComponent() {
              return this.WebpackModules.find(e => e.defaultProps && e.defaultProps.hasOwnProperty("disableButtons"))
          }
          get MessageComponent() {
              return this.WebpackModules.find(e => e.default && e.default.displayName && "Message" == e.default.displayName)
          }
          get TimeFormatter() {
              return this.WebpackModules.findByUniqueProperties(["dateFormat"])
          }
          get TooltipWrapper() {
              return this.WebpackModules.findByDisplayName("Tooltip")
          }
          get NativeModule() {
              return this.WebpackModules.findByUniqueProperties(["setBadge"])
          }
          get InviteActions() {
              return this.WebpackModules.findByUniqueProperties(["acceptInvite"])
          }
          get GuildActions() {
              return this.WebpackModules.findByUniqueProperties(["leaveGuild"])
          }
          get Tooltips() {
              return this.WebpackModules.find(e => e.hide && e.show && !e.search && !e.submit && !e.search && !e.activateRagingDemon && !e.dismiss)
          }
          get KeyGenerator() {
              return this.WebpackModules.find(e => e.toString && /"binary"/.test(e.toString()))
          }
          get LayerStack() {
              return this.WebpackModules.findByUniqueProperties(["popLayer"])
          }
          get UserStore() {
              return this.WebpackModules.findByUniqueProperties(["getCurrentUser"])
          }
          get ChannelStore() {
              return this.WebpackModules.findByUniqueProperties(["getChannel"])
          }
          get ChannelActions() {
              return this.WebpackModules.findByUniqueProperties(["openPrivateChannel"])
          }
          get PrivateChannelActions() {
              return this.WebpackModules.findByUniqueProperties(["selectPrivateChannel"])
          }
          openDM(e) {
              const t = this.UserStore.getCurrentUser().id;
              if (t == e) return;
              const n = this.ChannelStore.getDMFromUserId(e);
              if (n) return this.PrivateChannelActions.selectPrivateChannel(n);
              this.ChannelActions.openPrivateChannel(t, e)
          }
          parseSettings(e) {
              return Object.keys(d).reduce((t, n) => {
                  const r = d[n];
                  return r.cat === e && r.implemented && !r.hidden && (r.text = n, t.push(r)), t
              }, [])
          }
      };
  class B {
      static escapeID(e) {
          return e.replace(/^[^a-z]+|[^\w-]+/gi, "-")
      }
      static addStyle(e, t) {
          document.head.append(B.createElement(`<style id="${e}">${t}</style>`))
      }
      static removeStyle(e) {
          const t = document.getElementById(e);
          t && t.remove()
      }
      static addScript(e, t) {
          return new Promise(n => {
              const r = document.createElement("script");
              r.id = e, r.src = t, r.type = "text/javascript", r.onload = n, document.head.append(r)
          })
      }
      static removeScript(e) {
          e = this.escapeID(e);
          const t = document.getElementById(e);
          t && t.remove()
      }
      static animate({
          timing: e = (e => e),
          update: t,
          duration: n
      }) {
          const r = performance.now();
          requestAnimationFrame((function o(s) {
              let i = (s - r) / n;
              i > 1 && (i = 1);
              const a = e(i);
              t(a), i < 1 && requestAnimationFrame(o)
          }))
      }
      static Q(e) {
          const t = this.parseHTML(e);
          return (t instanceof NodeList ? Array.from(t).some(e => 1 === e.nodeType) : 1 === t.nodeType) ? t : this.query(e)
      }
      static query(e, t) {
          return t || (t = document), t.querySelector(e)
      }
      static queryAll(e, t) {
          return t || (t = document), t.querySelectorAll(e)
      }
      static parseHTML(e, t = !1) {
          const n = document.createElement("template");
          n.innerHTML = e;
          const r = n.content.cloneNode(!0);
          return t ? r : r.childNodes.length > 1 ? r.childNodes : r.childNodes[0]
      }
      static createElement(e, t = !1) {
          return this.parseHTML(e, t)
      }
      static escapeHTML(e) {
          const t = document.createTextNode(""),
              n = document.createElement("span");
          return n.append(t), t.nodeValue = e, n.innerHTML
      }
      static addClass(e, ...t) {
          t = t.flat().filter(e => e);
          for (let e = 0; e < t.length; e++) t[e] = t[e].toString().split(" ");
          return t = t.flat().filter(e => e), e.classList.add(...t), e
      }
      static removeClass(e, ...t) {
          for (let e = 0; e < t.length; e++) t[e] = t[e].toString().split(" ");
          return t = t.flat().filter(e => e), e.classList.remove(...t), e
      }
      static toggleClass(e, t, n) {
          return t = t.toString().split(" ").filter(e => e), void 0 !== n ? t.forEach(t => e.classList.toggle(t, n)) : t.forEach(t => e.classList.toggle(t)), e
      }
      static hasClass(e, t) {
          return t.toString().split(" ").filter(e => e).every(t => e.classList.contains(t))
      }
      static replaceClass(e, t, n) {
          return e.classList.replace(t, n), e
      }
      static appendTo(e, t) {
          return "string" == typeof t && (t = this.query(t)), t ? (t.append(e), e) : null
      }
      static prependTo(e, t) {
          return "string" == typeof t && (t = this.query(t)), t ? (t.prepend(e), e) : null
      }
      static insertAfter(e, t) {
          return t.parentNode.insertBefore(e, t.nextSibling), e
      }
      static after(e, t) {
          return e.parentNode.insertBefore(t, e.nextSibling), e
      }
      static next(e, t = "") {
          return t ? e.querySelector("+ " + t) : e.nextElementSibling
      }
      static nextAll(e) {
          return e.querySelectorAll("~ *")
      }
      static nextUntil(e, t) {
          const n = [];
          for (; e.nextElementSibling && !e.nextElementSibling.matches(t);) n.push(e = e.nextElementSibling);
          return n
      }
      static previous(e, t = "") {
          const n = e.previousElementSibling;
          return t ? n && n.matches(t) ? n : null : n
      }
      static previousAll(e) {
          const t = [];
          for (; e.previousElementSibling;) t.push(e = e.previousElementSibling);
          return t
      }
      static previousUntil(e, t) {
          const n = [];
          for (; e.previousElementSibling && !e.previousElementSibling.matches(t);) n.push(e = e.previousElementSibling);
          return n
      }
      static indexInParent(e) {
          const t = e.parentNode.childNodes;
          let n = 0;
          for (let r = 0; r < t.length; r++) {
              if (t[r] == e) return n;
              1 == t[r].nodeType && n++
          }
          return -1
      }
      static index(e) {
          return this.indexInParent(e)
      }
      static parent(e, t = "") {
          return !t || e.parentElement.matches(t) ? e.parentElement : null
      }
      static findChild(e, t) {
          return e.querySelector(":scope > " + t)
      }
      static findChildren(e, t) {
          return e.querySelectorAll(":scope > " + t)
      }
      static parents(e, t = "") {
          const n = [];
          if (t)
              for (; e.parentElement && e.parentElement.closest(t);) n.push(e = e.parentElement.closest(t));
          else
              for (; e.parentElement;) n.push(e = e.parentElement);
          return n
      }
      static parentsUntil(e, t) {
          const n = [];
          for (; e.parentElement && !e.parentElement.matches(t);) n.push(e = e.parentElement);
          return n
      }
      static siblings(e, t = "*") {
          return Array.from(e.parentElement.children).filter(n => n != e && n.matches(t))
      }
      static css(e, t, n) {
          return void 0 === n ? global.getComputedStyle(e)[t] : (e.style[t] = n, e)
      }
      static width(e, t) {
          return void 0 === t ? parseInt(getComputedStyle(e).width) : (e.style.width = t, e)
      }
      static height(e, t) {
          return void 0 === t ? parseInt(getComputedStyle(e).height) : (e.style.height = t, e)
      }
      static text(e, t) {
          return void 0 === t ? e.textContent : e.textContent = t
      }
      static innerWidth(e) {
          return e.clientWidth
      }
      static innerHeight(e) {
          return e.clientHeight
      }
      static outerWidth(e) {
          return e.offsetWidth
      }
      static outerHeight(e) {
          return e.offsetHeight
      }
      static offset(e) {
          return e.getBoundingClientRect()
      }
      static get listeners() {
          return this._listeners || (this._listeners = {})
      }
      static on(e, t, n, r) {
          const [o, s] = t.split("."), i = n && r;
          r || (r = n);
          const a = i ? function (e) {
              e.target.matches(n) && r(e)
          } : r;
          e.addEventListener(o, a);
          const c = () => {
              e.removeEventListener(o, a)
          };
          if (s) {
              this.listeners[s] || (this.listeners[s] = []);
              const t = () => {
                  c(), this.listeners[s].splice(this.listeners[s].findIndex(t => t.event == o && t.element == e), 1)
              };
              return this.listeners[s].push({
                  event: o,
                  element: e,
                  cancel: t
              }), t
          }
          return c
      }
      static once(e, t, n, r) {
          const [o, s] = t.split("."), i = n && r;
          r || (r = n);
          const a = i ? function (t) {
              t.target.matches(n) && (r(t), e.removeEventListener(o, a))
          } : function (t) {
              r(t), e.removeEventListener(o, a)
          };
          e.addEventListener(o, a);
          const c = () => {
              e.removeEventListener(o, a)
          };
          if (s) {
              this.listeners[s] || (this.listeners[s] = []);
              const t = () => {
                  c(), this.listeners[s].splice(this.listeners[s].findIndex(t => t.event == o && t.element == e), 1)
              };
              return this.listeners[s].push({
                  event: o,
                  element: e,
                  cancel: t
              }), t
          }
          return c
      }
      static __offAll(e, t) {
          const [n, r] = e.split(".");
          let o = e => e.event == n,
              s = e => e;
          t && (o = e => e.event == n && e.element == t, s = e => e.element == t);
          const i = this.listeners[r] || [],
              a = n ? i.filter(o) : i.filter(s);
          for (let e = 0; e < a.length; e++) a[e].cancel()
      }
      static off(e, t, n, r) {
          if ("string" == typeof e) return this.__offAll(e);
          const [o, s] = t.split(".");
          if (s) return this.__offAll(t, e);
          const i = n && r;
          r || (r = n);
          const a = i ? function (e) {
              e.target.matches(n) && r(e)
          } : r;
          return e.removeEventListener(o, a), e
      }
      static onMountChange(e, t, n = !0) {
          const r = () => {
              this.observer.unsubscribe(r), t()
          };
          return this.observer.subscribe(r, t => {
              const r = Array.from(n ? t.addedNodes : t.removedNodes),
                  o = r.indexOf(e) > -1,
                  s = r.some(t => t.contains(e));
              return o || s
          }), e
      }
      static onMount(e, t) {
          return this.onMountChange(e, t)
      }
      static onUnmount(e, t) {
          return this.onMountChange(e, t, !1)
      }
      static onAdded(e, t) {
          return this.onMount(e, t)
      }
      static onRemoved(e, t) {
          return this.onUnmount(e, t, !1)
      }
      static wrap(e) {
          const t = this.parseHTML('<div class="dom-wrapper"></div>');
          for (let n = 0; n < e.length; n++) t.appendChild(e[n]);
          return t
      }
      static resolveElement(e) {
          if (e instanceof jQuery || e instanceof Element) return e instanceof jQuery ? e[0] : e
      }
  }
  class z {
      static get screenWidth() {
          return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      }
      static get screenHeight() {
          return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      }
      static get WindowConfigFile() {
          return this._windowConfigFile = null
      }
      static getAllWindowPreferences() {
          return {
              transparent: h["fork-wp-1"] || h.transparency,
              frame: h.frame
          }
      }
      static getWindowPreference(e) {
          return "transparent" === e ? h["fork-wp-1"] || h.transparency : "frame" === e ? h.frame : null
      }
      static setWindowPreference(e, t) {
          return "transparent" === e ? h["fork-wp-1"] = h.transparency = t : "frame" === e ? h.frame = t : null
      }
      static stripBOM(e) {
          return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
      }
      static getTextArea() {
          return B.query(".channelTextArea-rNsIhG textarea")
      }
      static insertText(e, t) {
          e.focus(), e.selectionStart = 0, e.selectionEnd = e.value.length, document.execCommand("insertText", !1, t)
      }
      static escapeID(e) {
          return e.replace(/^[^a-z]+|[^\w-]+/gi, "-")
      }
      static log(e, t) {
          console.log(`%c[BandagedBD]%c [${e}]%c ${t}`, "color: #3a71c1; font-weight: 700;", "color: #3a71c1;", "")
      }
      static warn(e, t) {
          console.warn(`%c[BandagedBD]%c [${e}]%c ${t}`, "color: #E8A400; font-weight: 700;", "color: #E8A400;", "")
      }
      static err(e, t, n) {
          console.log(`%c[BandagedBD]%c [${e}]%c ${t}`, "color: red; font-weight: 700;", "color: red;", ""), n && (console.groupCollapsed("%cError: " + n.message, "color: red;"), console.error(n.stack), console.groupEnd())
      }
      static formatString(e, t) {
          for (const n in t) {
              let r = t[n];
              Array.isArray(r) && (r = JSON.stringify(r)), "object" == typeof r && null !== r && (r = r.toString()), e = e.replace(new RegExp(`{{${n}}}`, "g"), r)
          }
          return e
      }
      static escape(e) {
          return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
      }
      static testJSON(e) {
          try {
              return JSON.parse(e)
          } catch (e) {
              return !1
          }
      }
      static isEmpty(e) {
          if (null == e || null == e || "" == e) return !0;
          if ("object" != typeof e) return !1;
          if (Array.isArray(e)) return 0 == e.length;
          for (const t in e)
              if (e.hasOwnProperty(t)) return !1;
          return !0
      }
      static suppressErrors(e, t) {
          return (...n) => {
              try {
                  return e(...n)
              } catch (e) {
                  this.err("SuppressedError", "Error occurred in " + t, e)
              }
          }
      }
      static monkeyPatch(e, t, n) {
          const {
              before: r,
              after: o,
              instead: s,
              once: i = !1,
              silent: a = !1,
              force: c = !1
          } = n, l = n.displayName || e.displayName || e[t].displayName || e.name || e.constructor.displayName || e.constructor.name;
          if (a || console.log("patch", t, "of", l), !e[t]) {
              if (!c) return console.error(t, "does not exist for", l);
              e[t] = function () {}
          }
          const d = e[t],
              p = () => {
                  a || console.log("unpatch", t, "of", l), e[t] = d
              };
          return e[t] = function () {
              const n = {
                  thisObject: this,
                  methodArguments: arguments,
                  cancelPatch: p,
                  originalMethod: d,
                  callOriginalMethod: () => n.returnValue = n.originalMethod.apply(n.thisObject, n.methodArguments)
              };
              if (s) {
                  const r = z.suppressErrors(s, "`instead` callback of " + e[t].displayName)(n);
                  void 0 !== r && (n.returnValue = r)
              } else r && z.suppressErrors(r, "`before` callback of " + e[t].displayName)(n), n.callOriginalMethod(), o && z.suppressErrors(o, "`after` callback of " + e[t].displayName)(n);
              return i && p(), n.returnValue
          }, Object.assign(e[t], d), e[t].__monkeyPatched = !0, e[t].displayName = l, e[t].__originalMethod || (e[t].__originalMethod = d, e[t].toString = function () {
              return d.toString()
          }), p
      }
      static onRemoved(e, t) {
          const n = new MutationObserver(r => {
              for (let o = 0; o < r.length; o++) {
                  const s = r[o],
                      i = Array.from(s.removedNodes),
                      a = i.indexOf(e) > -1,
                      c = i.some(t => t.contains(e));
                  (a || c) && (n.disconnect(), t())
              }
          });
          n.observe(document.body, {
              subtree: !0,
              childList: !0
          })
      }
      static getNestedProp(e, t) {
          return t.split(/\s?\.\s?/).reduce((function (e, t) {
              return e && e[t]
          }), e)
      }
      static showToast(e, t = {}) {
          if (!document.querySelector(".bd-toasts")) {
              const e = document.querySelector(".sidebar-2K8pFh + div") || null,
                  t = e ? e.querySelector(".membersWrap-2h-GB4") : null,
                  n = e ? e.querySelector("form") : null,
                  r = e ? e.getBoundingClientRect().left : 310,
                  o = t ? t.getBoundingClientRect().left : 0,
                  s = o ? o - e.getBoundingClientRect().left : z.screenWidth - r - 240,
                  i = n ? n.offsetHeight : 80,
                  a = document.createElement("div");
              a.classList.add("bd-toasts"), a.style.setProperty("left", r + "px"), a.style.setProperty("width", s + "px"), a.style.setProperty("bottom", i + "px"), document.querySelector("#app-mount").appendChild(a)
          }
          const {
              type: n = "",
              icon: r = !0,
              timeout: o = 3e3
          } = t, s = document.createElement("div");
          s.classList.add("bd-toast"), n && s.classList.add("toast-" + n), n && r && s.classList.add("icon"), s.innerText = e, document.querySelector(".bd-toasts").appendChild(s), setTimeout(() => {
              s.classList.add("closing"), setTimeout(() => {
                  s.remove(), document.querySelectorAll(".bd-toasts .bd-toast").length || document.querySelector(".bd-toasts").remove()
              }, 300)
          }, o)
      }
      static alert(e, t) {
          const n = B.createElement(`<div class="bd-modal-wrapper theme-dark">\n                        <div class="bd-backdrop backdrop-1wrmKB"></div>\n                        <div class="bd-modal modal-1UGdnR">\n                            <div class="bd-modal-inner inner-1JeGVc">\n                                <div class="header header-1R_AjF">\n                                    <div class="title">${e}</div>\n                                </div>\n                                <div class="bd-modal-body">\n                                    <div class="scroller-wrap fade">\n                                        <div class="scroller">\n                                            ${t}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="footer footer-2yfCgX footer-3rDWdC footer-2gL1pp">\n                                    <button type="button">Okay</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>`);
          n.querySelector(".footer button").addEventListener("click", () => {
              B.addClass(n, "closing"), setTimeout(() => {
                  n.remove()
              }, 300)
          }), n.querySelector(".bd-backdrop").addEventListener("click", () => {
              B.addClass(n, "closing"), setTimeout(() => {
                  n.remove()
              }, 300)
          }), B.query("#app-mount").append(n)
      }
      static showContentErrors({
          plugins: e = [],
          themes: t = []
      }) {
          if (!e || !t) return;
          if (!e.length && !t.length) return;
          const n = B.createElement('<div class="bd-modal-wrapper theme-dark">\n                        <div class="bd-backdrop backdrop-1wrmKB"></div>\n                        <div class="bd-modal bd-content-modal modal-1UGdnR">\n                            <div class="bd-modal-inner inner-1JeGVc">\n                                <div class="header header-1R_AjF"><div class="title">Content Errors</div></div>\n                                <div class="bd-modal-body">\n                                    <div class="tab-bar-container">\n                                        <div class="tab-bar TOP">\n                                            <div class="tab-bar-item">Plugins</div>\n                                            <div class="tab-bar-item">Themes</div>\n                                        </div>\n                                    </div>\n                                    <div class="table-header">\n                                        <div class="table-column column-name">Name</div>\n                                        <div class="table-column column-message">Message</div>\n                                        <div class="table-column column-error">Error</div>\n                                    </div>\n                                    <div class="scroller-wrap fade">\n                                        <div class="scroller">\n    \n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="footer footer-2yfCgX footer-3rDWdC footer-2gL1pp">\n                                    <button type="button">Okay</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>');

          function r(e) {
              const t = B.createElement('<div class="errors">');
              for (const n of e) {
                  const e = B.createElement(`<div class="error">\n                                    <div class="table-column column-name">${n.name?n.name:n.file}</div>\n                                    <div class="table-column column-message">${n.message}</div>\n                                    <div class="table-column column-error"><a class="error-link" href="">${n.error?n.error.message:""}</a></div>\n                                </div>`);
                  t.append(e), n.error && e.querySelectorAll("a").forEach(e => e.addEventListener("click", e => {
                      e.preventDefault(), z.err("ContentManager", `Error details for ${n.name?n.name:n.file}.`, n.error)
                  }))
              }
              return t
          }
          const o = [r(e), r(t)];
          n.querySelectorAll(".tab-bar-item").forEach(e => e.addEventListener("click", e => {
              e.preventDefault();
              const t = n.querySelector(".tab-bar-item.selected");
              t && B.removeClass(t, "selected"), B.addClass(e.target, "selected");
              const r = n.querySelector(".scroller");
              r.innerHTML = "", r.append(o[B.index(e.target)])
          })), n.querySelector(".footer button").addEventListener("click", () => {
              B.addClass(n, "closing"), setTimeout(() => {
                  n.remove()
              }, 300)
          }), n.querySelector(".bd-backdrop").addEventListener("click", () => {
              B.addClass(n, "closing"), setTimeout(() => {
                  n.remove()
              }, 300)
          }), B.query("#app-mount").append(n), e.length ? n.querySelector(".tab-bar-item").click() : n.querySelectorAll(".tab-bar-item")[1].click()
      }
      static showChangelogModal(e = {}) {
          const t = j("push", "update", "pop", "popWithKey"),
              n = j("fixed", "improved"),
              r = A("Text"),
              o = j("Child"),
              s = j("Tags", "default"),
              i = I(e => e.defaultProps && 0 == e.defaultProps.selectable),
              a = j("defaultRules", "parse");
          if (!(i && t && n && r && o && s && a)) return;
          const {
              image: l = "https://repository-images.githubusercontent.com/105473537/957b5480-7c26-11e9-8401-50fa820cbae5",
              description: d = "",
              changes: p = [],
              title: h = "BandagedBD",
              subtitle: u = "v" + c,
              footer: m
          } = e, g = P.React.createElement, b = [g("img", {
              src: l
          })];
          d && b.push(g("p", null, a.parse(d)));
          for (let e = 0; e < p.length; e++) {
              const t = p[e],
                  r = n[t.type] ? n[t.type] : n.added,
                  o = 0 == e ? n.marginTop : "";
              b.push(g("h1", {
                  className: `${r} ${o}`
              }, t.title));
              const s = g("ul", null, t.items.map(e => g("li", null, a.parse(e))));
              b.push(s)
          }
          const f = function () {
                  return g(o.Child, {
                      grow: 1,
                      shrink: 1
                  }, g(s.default, {
                      tag: s.Tags.H4
                  }, h), g(r, {
                      size: r.Sizes.SMALL,
                      color: r.Colors.STANDARD,
                      className: n.date
                  }, u))
              },
              y = () => {
                  const e = I(e => "Anchor" == e.displayName),
                      n = j("anchorUnderlineOnHover") || {
                          anchor: "anchor-3Z-8Bb",
                          anchorUnderlineOnHover: "anchorUnderlineOnHover-2ESHQB"
                      },
                      s = e => {
                          e.preventDefault(), e.stopPropagation(), t.pop(), P.joinBD2()
                      },
                      i = e ? g(e, {
                          onClick: s
                      }, "Join our Discord Server.") : g("a", {
                          className: `${n.anchor} ${n.anchorUnderlineOnHover}`,
                          onClick: s
                      }, "Join our Discord Server."),
                      a = g(r, {
                          size: r.Sizes.SMALL,
                          color: r.Colors.STANDARD
                      }, "Need support? ", i);
                  return g(o.Child, {
                      grow: 1,
                      shrink: 1
                  }, m || a)
              };
          return t.push((function (e) {
              return g(i, Object.assign({
                  className: n.container,
                  selectable: !0,
                  onScroll: e => e,
                  onClose: e => e,
                  renderHeader: f,
                  renderFooter: y,
                  children: b
              }, e))
          }))
      }
      static showConfirmationModal(e, t, n = {}) {
          const r = j("openModal", "updateModal"),
              o = A("Markdown"),
              s = A("ConfirmModal");
          if (!r || !s || !o) return z.alert(e, t);
          const i = () => {},
              {
                  onConfirm: a = i,
                  onCancel: c = i,
                  confirmText: l = "Okay",
                  cancelText: d = "Cancel",
                  danger: p = !1,
                  key: h
              } = n;
          return Array.isArray(t) || (t = [t]), t = t.map(e => "string" == typeof e ? P.React.createElement(o, null, e) : e), r.openModal(n => P.React.createElement(s, Object.assign({
              header: e,
              red: p,
              confirmText: l,
              cancelText: d,
              onConfirm: a,
              onCancel: c
          }, n), t), {
              modalKey: h
          })
      }
  }
  z.showToast = z.suppressErrors(z.showToast, "Could not show toast.");
  const O = n(6);
  var F = new class extends O {
      dispatch(e, ...t) {
          this.emit(e, ...t)
      }
      off(e, t) {
          this.removeListener(e, t)
      }
  };
  class R {
      get folder() {
          return Y.pluginsFolder
      }
  }
  R.prototype.loadPlugins = function () {
      this.loadPluginData(), u.splice(0, 0, ...Y.loadPlugins());
      const e = Object.keys(M);
      for (let t = 0; t < e.length; t++) {
          let n, r;
          const o = M[e[t]];
          try {
              n = o.plugin, r = o.name, n.load && "function" == typeof n.load && n.load()
          } catch (e) {
              S[r] = !1, z.err("Plugins", r + " could not be loaded.", e), u.push({
                  name: r,
                  file: o.filename,
                  message: "load() could not be fired.",
                  error: {
                      message: e.message,
                      stack: e.stack
                  }
              });
              continue
          }
          if (S[r] || (S[r] = !1), S[r]) try {
              n.start(), h["fork-ps-2"] && z.showToast(`${o.name} v${o.version} has started.`)
          } catch (e) {
              S[r] = !1, z.err("Plugins", r + " could not be started.", e), u.push({
                  name: r,
                  file: o.filename,
                  message: "start() could not be fired.",
                  error: {
                      message: e.message,
                      stack: e.stack
                  }
              })
          }
      }
      this.savePluginData(), n(0).remote.getCurrentWebContents().on("did-navigate-in-page", this.channelSwitch.bind(this))
  }, R.prototype.startPlugin = function (e, t = !1) {
      try {
          M[e].plugin.start(), h["fork-ps-2"] && !t && z.showToast(`${M[e].name} v${M[e].version} has started.`)
      } catch (n) {
          h["fork-ps-2"] && !t && z.showToast(`${M[e].name} v${M[e].version} could not be started.`, {
              type: "error"
          }), S[e] = !1, this.savePluginData(), z.err("Plugins", e + " could not be started.", n)
      }
  }, R.prototype.stopPlugin = function (e, t = !1) {
      try {
          M[e].plugin.stop(), h["fork-ps-2"] && !t && z.showToast(`${M[e].name} v${M[e].version} has stopped.`)
      } catch (n) {
          h["fork-ps-2"] && !t && z.showToast(`${M[e].name} v${M[e].version} could not be stopped.`, {
              type: "error"
          }), z.err("Plugins", M[e].name + " could not be stopped.", n)
      }
  }, R.prototype.enablePlugin = function (e, t = !1) {
      S[e] || (S[e] = !0, this.savePluginData(), this.startPlugin(e, t))
  }, R.prototype.enable = function (e, t = !1) {
      return this.enablePlugin(e, t)
  }, R.prototype.disablePlugin = function (e, t = !1) {
      S[e] && (S[e] = !1, this.savePluginData(), this.stopPlugin(e, t))
  }, R.prototype.disable = function (e, t = !1) {
      return this.disablePlugin(e, t)
  }, R.prototype.togglePlugin = function (e) {
      S[e] ? this.disablePlugin(e) : this.enablePlugin(e)
  }, R.prototype.toggle = function (e, t = !1) {
      return this.togglePlugin(e, t)
  }, R.prototype.loadPlugin = function (e) {
      const t = Y.loadContent(e, "plugin");
      if (t) return h["fork-ps-1"] && z.showContentErrors({
          plugins: [t]
      }), h["fork-ps-2"] && z.showToast(e + " could not be loaded.", {
          type: "error"
      }), z.err("ContentManager", e + " could not be loaded.", t);
      const n = Object.values(M).find(t => t.filename == e),
          r = n.plugin;
      try {
          r.load && "function" == typeof r.load && r.load()
      } catch (e) {
          h["fork-ps-1"] && z.showContentErrors({
              plugins: [e]
          })
      }
      z.log("ContentManager", `${n.name} v${n.version} was loaded.`), h["fork-ps-2"] && z.showToast(`${n.name} v${n.version} was loaded.`, {
          type: "success"
      }), F.dispatch("plugin-loaded", n.name)
  }, R.prototype.unloadPlugin = function (e) {
      const t = Object.values(M).find(t => t.filename == e) || M[e];
      if (!t) return;
      const n = t.name;
      S[n] && this.disablePlugin(n, !0);
      const r = Y.unloadContent(M[n].filename, "plugin");
      if (delete M[n], r) return h["fork-ps-1"] && z.showContentErrors({
          plugins: [r]
      }), h["fork-ps-2"] && z.showToast(n + " could not be unloaded. It may have not been loaded yet.", {
          type: "error"
      }), z.err("ContentManager", n + " could not be unloaded. It may have not been loaded yet.", r);
      z.log("ContentManager", n + " was unloaded."), h["fork-ps-2"] && z.showToast(n + " was unloaded.", {
          type: "success"
      }), F.dispatch("plugin-unloaded", n)
  }, R.prototype.delete = function (e) {
      const t = Object.values(M).find(t => t.filename == e) || M[e];
      if (!t) return;
      this.unloadPlugin(t.filename);
      const r = n(1).resolve(Y.pluginsFolder, t.filename);
      n(2).unlinkSync(r)
  }, R.prototype.reloadPlugin = function (e) {
      const t = Object.values(M).find(t => t.filename == e) || M[e];
      if (!t) return this.loadPlugin(e);
      const n = t.name,
          r = S[n];
      r && this.stopPlugin(n, !0);
      const o = Y.reloadContent(M[n].filename, "plugin");
      if (o) return h["fork-ps-1"] && z.showContentErrors({
          plugins: [o]
      }), h["fork-ps-2"] && z.showToast(n + " could not be reloaded.", {
          type: "error"
      }), z.err("ContentManager", n + " could not be reloaded.", o);
      M[n].plugin.load && "function" == typeof M[n].plugin.load && M[n].plugin.load(), r && this.startPlugin(n, !0), z.log("ContentManager", `${n} v${M[n].version} was reloaded.`), h["fork-ps-2"] && z.showToast(`${n} v${M[n].version} was reloaded.`, {
          type: "success"
      }), F.dispatch("plugin-reloaded", n)
  }, R.prototype.reload = function (e) {
      return this.reloadPlugin(e)
  }, R.prototype.edit = function (e) {
      console.log("Edit " + e);
      const t = Object.values(M).find(t => t.filename == e) || M[e];
      if (!t) return;
      const r = n(1).resolve(Y.pluginsFolder, t.filename);
      console.log("Edit " + r), n(0).shell.openItem("" + r)
  }, R.prototype.updatePluginList = function () {
      const e = Y.loadNewContent("plugin");
      for (const t of e.added) this.loadPlugin(t);
      for (const t of e.removed) this.unloadPlugin(t)
  }, R.prototype.loadPluginData = function () {
      const e = ne.getSettingGroup("plugins");
      e && Object.assign(S, e)
  }, R.prototype.savePluginData = function () {
      ne.setSettingGroup("plugins", S)
  }, R.prototype.newMessage = function () {
      const e = Object.keys(M);
      for (let t = 0; t < e.length; t++) {
          const n = M[e[t]],
              r = n.plugin;
          if (S[n.name] && "function" == typeof r.onMessage) try {
              r.onMessage()
          } catch (e) {
              z.err("Plugins", "Unable to fire onMessage for " + n.name + ".", e)
          }
      }
  }, R.prototype.channelSwitch = function () {
      const e = Object.keys(M);
      for (let t = 0; t < e.length; t++) {
          const n = M[e[t]],
              r = n.plugin;
          if (S[n.name] && "function" == typeof r.onSwitch) try {
              r.onSwitch()
          } catch (e) {
              z.err("Plugins", "Unable to fire onSwitch for " + n.name + ".", e)
          }
      }
  }, R.prototype.rawObserver = function (e) {
      const t = Object.keys(M);
      for (let n = 0; n < t.length; n++) {
          const r = M[t[n]],
              o = r.plugin;
          if (S[r.name] && "function" == typeof o.observer) try {
              o.observer(e)
          } catch (e) {
              z.err("Plugins", "Unable to fire observer for " + r.name + ".", e)
          }
      }
  };
  var U = new R;

  const H = n(1),
      W = n(2),
      _ = n(7).Module;
  _.globalPaths.push(H.resolve(n(0).remote.app.getAppPath(), "node_modules"));
  class Q extends Error {
      constructor(e) {
          super(e), this.name = "MetaError"
      }
  }
  const V = _._extensions[".js"],
      Z = _._extensions[".css"] ? _._extensions[".css"] : () => null,
      $ = /[^\S\r\n]*?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,
      K = /^\\@/;
  var Y = new class {
      constructor() {
          this.timeCache = {}, this.watchers = {}, _._extensions[".js"] = this.getContentRequire("plugin"), _._extensions[".css"] = this.getContentRequire("theme")
      }
      get pluginsFolder() {
          return this._pluginsFolder || (this._pluginsFolder = W.realpathSync(H.resolve(g.dataPath + "plugins/")))
      }
      get themesFolder() {
          return this._themesFolder || (this._themesFolder = W.realpathSync(H.resolve(g.dataPath + "themes/")))
      }
      watchContent(e) {
          if (this.watchers[e]) return;
          const t = "plugin" === e,
              n = t ? this.pluginsFolder : this.themesFolder,
              r = t ? ".plugin.js" : ".theme.css";
          this._updateTimeCache(n, r), this.watchers[e] = W.watch(n, {
              persistent: !1
          }, async (e, o) => {
              if (!e || !o || !o.endsWith(r)) return;
              await new Promise(e => setTimeout(e, 50));
              try {
                  W.statSync(H.resolve(n, o))
              } catch (e) {
                  if ("ENOENT" !== e.code) return;
                  return delete this.timeCache[o], t ? U.unloadPlugin(o) : ''
              }
              if (!W.statSync(H.resolve(n, o)).isFile()) return;
              const s = W.statSync(H.resolve(n, o));
              s && s.mtime && s.mtime.getTime() && "number" == typeof s.mtime.getTime() && this.timeCache[o] != s.mtime.getTime() && (this.timeCache[o] = s.mtime.getTime(), "rename" == e && (t ? U.loadPlugin(o) : ''), "change" == e && (t ? U.reloadPlugin(o) : ''))
          })
      }
      _updateTimeCache(e, t) {
          const n = W.readdirSync(e);
          for (const r of n) {
              if (!W.statSync(H.resolve(e, r)).isFile() || !r.endsWith(t)) continue;
              const n = W.statSync(H.resolve(e, r));
              n && n.mtime && n.mtime.getTime() && ("number" == typeof n.mtime.getTime() && (this.timeCache[r] = n.mtime.getTime()))
          }
      }
      unwatchContent(e) {
          this.watchers[e] && (this.watchers[e].close(), delete this.watchers[e])
      }
      extractMeta(e) {
          const t = e.split("\n")[0];
          if (t.includes("//META")) return this.parseOldMeta(e);
          if (t.includes("/**")) return this.parseNewMeta(e);
          throw new Q("META was not found.")
      }
      parseOldMeta(e) {
          const t = e.split("\n")[0],
              n = t.substring(t.lastIndexOf("//META") + 6, t.lastIndexOf("*//"));
          if (t.indexOf("META") < 0) throw new Q("META was not found.");
          const r = z.testJSON(n);
          if (!r) throw new Q("META could not be parsed.");
          if (!r.name) throw new Q("META missing name data.");
          return r.format = "json", r
      }
      parseNewMeta(e) {
          const t = e.split("/**", 2)[1].split("*/", 1)[0],
              n = {};
          let r = "",
              o = "";
          for (const e of t.split($))
              if (0 !== e.length)
                  if ("@" === e.charAt(0) && " " !== e.charAt(1)) {
                      n[r] = o;
                      const t = e.indexOf(" ");
                      r = e.substr(1, t - 1), o = e.substr(t + 1)
                  } else o += " " + e.replace("\\n", "\n").replace(K, "@");
          return n[r] = o.trim(), delete n[""], n.format = "jsdoc", n
      }
      getContentRequire(e) {
          const t = "plugin" === e,
              n = this,
              r = t ? V : Z;
          return function (e, o) {
              const s = t ? n.pluginsFolder : n.themesFolder,
                  i = H.resolve(s, H.basename(o));
              if (!W.existsSync(i) || o !== W.realpathSync(i)) return Reflect.apply(r, this, arguments);
              let a = W.readFileSync(o, "utf8");
              a = z.stripBOM(a);
              const c = W.statSync(o),
                  l = n.extractMeta(a);
              l.filename = H.basename(o), l.added = c.atimeMs, l.modified = c.mtimeMs, l.size = c.size, t || (l.css = a, "json" == l.format && (l.css = l.css.split("\n").slice(1).join("\n")), a = `module.exports = ${JSON.stringify(l)};`, e._compile(a, o)), t && (a += `\nif (module.exports.default) {module.exports = module.exports.default;}\nif (!module.exports.prototype || !module.exports.prototype.start) {module.exports = ${l.exports||l.name};}`, e._compile(a, o), l.type = e.exports, e.exports = l)
          }
      }
      makePlaceholderPlugin(e) {
          return {
              plugin: {
                  start: () => {},
                  getName: () => e.name || e.filename,
                  getAuthor: () => "???",
                  getDescription: () => e.message ? e.message : "This plugin was unable to be loaded. Check the author's page for updates.",
                  getVersion: () => "???"
              },
              name: e.name || e.filename,
              author: "None",
              description: "No description",
              version: "0.0.0",
              filename: e.filename,
              source: e.source ? e.source : "",
              website: e.website ? e.website : ""
          }
      }
      loadContent(e, t) {
          if (void 0 === e || void 0 === t) return;
          const n = "plugin" === t,
              r = n ? this.pluginsFolder : this.themesFolder;
          try {
              require(H.resolve(r, e))
          } catch (t) {
              return {
                  name: e,
                  file: e,
                  message: "Could not be compiled.",
                  error: {
                      message: t.message,
                      stack: t.stack
                  }
              }
          }
          const o = require(H.resolve(r, e));
          if (o.id = z.escapeID(o.name), n) {
              if (!o.type) return;
              try {
                  o.plugin = new o.type, o.name = o.plugin.getName ? o.plugin.getName() : o.name || "No name", o.author = o.plugin.getAuthor ? o.plugin.getAuthor() : o.author || "No author", o.description = o.plugin.getDescription ? o.plugin.getDescription() : o.description || "No description", o.version = o.plugin.getVersion ? o.plugin.getVersion() : o.version || "No version", delete M[o.name], M[o.name] = o
              } catch (t) {
                  return {
                      name: e,
                      file: e,
                      message: "Could not be constructed.",
                      error: {
                          message: t.message,
                          stack: t.stack
                      }
                  }
              }
          } else delete C[o.name], C[o.name] = o
      }
      unloadContent(e, t) {
          if (void 0 === e || void 0 === t) return;
          const n = "plugin" === t ? this.pluginsFolder : this.themesFolder;
          try {
              delete require.cache[require.resolve(H.resolve(n, e))]
          } catch (t) {
              return {
                  name: e,
                  file: e,
                  message: "Could not be unloaded.",
                  error: {
                      message: t.message,
                      stack: t.stack
                  }
              }
          }
      }
      isLoaded(e, t) {
          const n = "plugin" === t ? this.pluginsFolder : this.themesFolder;
          try {
              require.cache[require.resolve(H.resolve(n, e))]
          } catch (e) {
              return !1
          }
          return !0
      }
      reloadContent(e, t) {
          const n = this.unloadContent(e, t);
          return n || this.loadContent(e, t)
      }
      loadNewContent(e) {
          const t = "plugin" === e,
              n = t ? ".plugin.js" : ".theme.css",
              r = t ? this.pluginsFolder : this.themesFolder,
              o = W.readdirSync(r),
              s = Object.values(t ? M : C),
              i = s.filter(e => !o.includes(e.filename)).map(e => e.name);
          return {
              added: o.filter(e => !s.find(t => t.filename == e) && e.endsWith(n) && W.statSync(H.resolve(r, e)).isFile()),
              removed: i
          }
      }
      loadAllContent(e) {
          const t = "plugin" === e,
              n = t ? ".plugin.js" : ".theme.css",
              r = t ? this.pluginsFolder : this.themesFolder,
              o = [],
              s = W.readdirSync(r);
          for (const t of s) {
              if (!W.statSync(H.resolve(r, t)).isFile() || !t.endsWith(n)) continue;
              const s = this.loadContent(t, e);
              s && o.push(s)
          }
          return o
      }
      loadPlugins() {
          return this.loadAllContent("plugin")
      }
      loadThemes() {
          return this.loadAllContent("theme")
      }
  };
  const J = n(2),
      X = n(1),
      ee = DiscordNative.globals ? DiscordNative.globals.releaseChannel : DiscordNative.app ? DiscordNative.app.getReleaseChannel() : "stable";
  let te = "";
  te = "win32" === process.platform ? process.env.APPDATA : "darwin" === process.platform ? X.join(process.env.HOME, "Library", "Preferences") : process.env.XDG_CONFIG_HOME ? process.env.XDG_CONFIG_HOME : X.join(process.env.HOME, ".config"), te = X.join(te, "BetterDiscord");
  var ne = new class {
      constructor() {
          this.data = {
              settings: {
                  stable: {},
                  canary: {},
                  ptb: {}
              }
          }, this.pluginData = {}
      }
      initialize() {
          try {
              J.existsSync(this.BDFile) || J.writeFileSync(this.BDFile, JSON.stringify(this.data, null, 4));
              const e = require(this.BDFile);
              if (e.hasOwnProperty("settings") && (this.data = e), !J.existsSync(this.settingsFile)) return;
              let t = require(this.settingsFile);
              J.unlinkSync(this.settingsFile), t = t.hasOwnProperty("settings") ? Object.assign({
                  stable: {},
                  canary: {},
                  ptb: {}
              }, {
                  [ee]: t
              }) : Object.assign({
                  stable: {},
                  canary: {},
                  ptb: {}
              }, t), this.setBDData("settings", t)
          } catch (e) {
              console.error(e), z.alert("Corrupt Storage", "The bd storage has somehow become corrupt. You may either try to salvage the file or delete it then reload.")
          }
      }
      get injectionPath() {
          if (this._injectionPath) return this._injectionPath;
          const e = n(0).remote.app,
              t = e.getAppPath(),
              r = e.getPath("userData"),
              o = X.resolve(r, e.getVersion(), "modules", "discord_desktop_core", "injector"),
              s = X.resolve(t, "..", "app"),
              i = J.existsSync(s) ? s : J.existsSync(o) ? o : null;
          return this._injectionPath = i || null
      }
      get configFile() {
          return this._configFile || (this._configFile = X.resolve(this.injectionPath, "betterdiscord", "config.json"))
      }
      get BDFile() {
          return this._BDFile || (this._BDFile = X.resolve(te, "bdstorage.json"))
      }
      get settingsFile() {
          return this._settingsFile || (this._settingsFile = X.resolve(te, "bdsettings.json"))
      }
      getPluginFile(e) {
          return X.resolve(Y.pluginsFolder, e + ".config.json")
      }
      getSettingGroup(e) {
          return this.data.settings[ee][e] || null
      }
      setSettingGroup(e, t) {
          this.data.settings[ee][e] = t, J.writeFileSync(this.BDFile, JSON.stringify(this.data, null, 4))
      }
      getBDData(e) {
          return this.data[e] || ""
      }
      setBDData(e, t) {
          this.data[e] = t, J.writeFileSync(this.BDFile, JSON.stringify(this.data, null, 4))
      }
      getPluginData(e, t) {
          return void 0 !== this.pluginData[e] ? this.pluginData[e][t] : J.existsSync(this.getPluginFile(e)) ? (this.pluginData[e] = JSON.parse(J.readFileSync(this.getPluginFile(e))), this.pluginData[e][t]) : void 0
      }
      setPluginData(e, t, n) {
          void 0 !== n && (void 0 === this.pluginData[e] && (this.pluginData[e] = {}), this.pluginData[e][t] = n, J.writeFileSync(this.getPluginFile(e), JSON.stringify(this.pluginData[e], null, 4)))
      }
      deletePluginData(e, t) {
          void 0 === this.pluginData[e] && (this.pluginData[e] = {}), delete this.pluginData[e][t], J.writeFileSync(this.getPluginFile(e), JSON.stringify(this.pluginData[e], null, 4))
      }
  };

  // function re() {
  //     this.switchHandler = this.switchHandler.bind(this), this.favContext = this.favContext.bind(this)
  // }
  // const oe = function (e) {
  //         const t = e.target.getAttribute("title"),
  //             n = document.querySelector("." + P.slateEditorClasses.slateTextArea.split(" ")[0]);
  //         if (n) {
  //             const e = P.getInternalInstance(n),
  //                 r = z.getNestedProp(e, "memoizedProps.children.props.editor.insertText");
  //             r && r(` ${t} `)
  //         } else {
  //             const e = z.getTextArea();
  //             z.insertText(e, " " == e.value.slice(-1) ? e.value + t : e.value + " " + t)
  //         }
  //     },
  //     se = function (e, t, {
  //         click: n = oe,
  //         contextmenu: r
  //     } = {}) {
  //         const o = B.createElement(`<div class="emote-container"><img class="emote-icon" alt="${e}" src="${t}" title="${e}"></div>`);
  //         return n && o.addEventListener("click", n), r && o.addEventListener("contextmenu", r), o
  //     };
  // re.prototype.init = function () {
  //     this.initialized = !0, this.favoriteEmotes = {};
  //     const e = ne.getBDData("bdfavemotes");
  //     "" !== e && null !== e && (this.favoriteEmotes = JSON.parse(atob(e))), this.qmeHeader = B.createElement('<div id="bda-qem">'), this.twitchButton = B.createElement('<button class="active" id="bda-qem-twitch">Twitch</button>'), this.favoriteButton = B.createElement('<button id="bda-qem-favourite">Favorite</button>'), this.emojiButton = B.createElement('<button id="bda-qem-emojis">Emojis</buttond>'), this.twitchButton.addEventListener("click", this.switchHandler), this.favoriteButton.addEventListener("click", this.switchHandler), this.emojiButton.addEventListener("click", this.switchHandler), this.qmeHeader.append(this.twitchButton, this.favoriteButton, this.emojiButton), this.teContainer = B.createElement('<div id="bda-qem-twitch-container"><div class="scroller-wrap scrollerWrap-2lJEkd fade"><div class="scroller scroller-2FKFPG"><div class="emote-menu-inner"></div></div></div></div>'), this.teInner = this.teContainer.querySelector(".emote-menu-inner");
  //     for (const e in k.TwitchGlobal) k.TwitchGlobal.hasOwnProperty(e) && this.teInner.append(se(e, k.TwitchGlobal[e]));
  //     this.faContainer = B.createElement('<div id="bda-qem-favourite-container"><div class="scroller-wrap scrollerWrap-2lJEkd fade"><div class="scroller scroller-2FKFPG"><div class="emote-menu-inner"></div></div></div></div>'), this.faInner = this.faContainer.querySelector(".emote-menu-inner");
  //     for (const e in this.favoriteEmotes) this.faInner.append(se(e, this.favoriteEmotes[e], {
  //         contextmenu: this.favContext
  //     }))
  // }, re.prototype.favContext = function (e) {
  //     e.stopPropagation();
  //     const t = B.query("#app-mount"),
  //         n = B.createElement('<div class="layer-v9HyYc da-layer">'),
  //         r = B.createElement('<div class="contextMenu-HLZMGh da-contextMenu bd-context-menu"></div>');
  //     n.append(r), t.append(n), n.style.top = e.clientY + "px", n.style.left = e.clientX + "px", n.style.zIndex = "1002";
  //     const o = function (e) {
  //         e && e.keyCode && 27 !== e.keyCode || (n.remove(), document.removeEventListener("click", o), document.removeEventListener("contextmenu", o), document.removeEventListener("keyup", o))
  //     };
  //     document.addEventListener("click", o), document.addEventListener("contextmenu", o), document.addEventListener("keyup", o);
  //     const s = B.createElement('<div class="itemGroup-1tL0uz da-itemGroup">'),
  //         i = B.createElement('<div class="item-1Yvehc itemBase-tz5SeC da-item da-itemBase clickable-11uBi- da-clickable">');
  //     i.append(B.createElement('<div class="label-JWQiNe da-label">Remove</div>')), i.addEventListener("click", () => {
  //         delete this.favoriteEmotes[e.target.getAttribute("title")], e.target.parentElement.remove(), this.saveFavorites(), o()
  //     }), s.append(i), r.append(s)
  // }, re.prototype.switchHandler = function (e) {
  //     this.switchQem(e.target.id)
  // }, re.prototype.switchQem = function (e) {
  //     this.twitchButton.classList.remove("active"), this.favoriteButton.classList.remove("active"), this.emojiButton.classList.remove("active");
  //     const t = B.query(".emojiPicker-3m1S-j");
  //     switch (t.style.display = "none", this.faContainer.style.display = "none", this.teContainer.style.display = "none", e) {
  //         case "bda-qem-twitch":
  //             this.twitchButton.classList.add("active"), this.teContainer.style.display = "";
  //             break;
  //         case "bda-qem-favourite":
  //             this.favoriteButton.classList.add("active"), this.faContainer.style.display = "";
  //             break;
  //         case "bda-qem-emojis":
  //             this.emojiButton.classList.add("active"), t.style.display = "", t.querySelector("input").focus()
  //     }
  // }, re.prototype.obsCallback = function (e) {
  //     this.initialized && (h["bda-es-9"] ? e.classList.remove("bda-qme-hidden") : e.classList.add("bda-qme-hidden"), h["bda-es-0"] && (B.prependTo(this.qmeHeader, e), e.append(this.teContainer), e.append(this.faContainer), this.switchQem("bda-qem-emojis")))
  // }, re.prototype.favorite = function (e, t) {
  //     this.favoriteEmotes.hasOwnProperty(e) || (this.favoriteEmotes[e] = t), this.updateFavorites()
  // }, re.prototype.saveFavorites = function () {
  //     ne.setBDData("bdfavemotes", btoa(JSON.stringify(this.favoriteEmotes)))
  // }, re.prototype.updateFavorites = function () {
  //     this.faInner.innerHTML = "";
  //     for (const e in this.favoriteEmotes) this.faInner.append(se(e, this.favoriteEmotes[e], {
  //         contextmenu: this.favContext
  //     }));
  //     this.saveFavorites()
  // };
  // var ie = new re;
  // class ae extends P.reactComponent {
  //     constructor(e) {
  //         super(e);
  //         // const t = !!(ie && ie.favoriteEmotes && ie.favoriteEmotes[this.label]);
  //         this.state = {
  //             shouldAnimate: !this.animateOnHover,
  //             isFavorite: t
  //         }, this.onMouseEnter = this.onMouseEnter.bind(this), this.onMouseLeave = this.onMouseLeave.bind(this), this.onClick = this.onClick.bind(this)
  //     }
  //     get animateOnHover() {
  //         return h["fork-es-2"]
  //     }
  //     get label() {
  //         return this.props.modifier ? `${this.props.name}:${this.props.modifier}` : this.props.name
  //     }
  //     get modifierClass() {
  //         return this.props.modifier ? " emote" + this.props.modifier : ""
  //     }
  //     onMouseEnter() {
  //         !this.state.shouldAnimate && this.animateOnHover && this.setState({
  //             shouldAnimate: !0
  //         })
  //         // , !this.state.isFavorite && ie.favoriteEmotes[this.label] ? this.setState({
  //         //     isFavorite: !0
  //         // }) : this.state.isFavorite && !ie.favoriteEmotes[this.label] && this.setState({
  //         //     isFavorite: !1
  //         // })
  //     }
  //     onMouseLeave() {
  //         this.state.shouldAnimate && this.animateOnHover && this.setState({
  //             shouldAnimate: !1
  //         })
  //     }
  //     onClick(e) {
  //         this.props.onClick && this.props.onClick(e)
  //     }
  //     // render() {
  //     //     return P.react.createElement(P.TooltipWrapper, {
  //     //         color: "black",
  //     //         position: "top",
  //     //         text: this.label,
  //     //         delay: 750
  //     //     }, e => P.react.createElement("div", Object.assign({
  //     //         className: "emotewrapper" + (this.props.jumboable ? " jumboable" : ""),
  //     //         onMouseEnter: this.onMouseEnter,
  //     //         onMouseLeave: this.onMouseLeave,
  //     //         onClick: this.onClick
  //     //     }, e), P.react.createElement("img", {
  //     //         draggable: !1,
  //     //         className: "emote" + this.modifierClass + (this.props.jumboable ? " jumboable" : "") + (this.state.shouldAnimate ? "" : " stop-animation"),
  //     //         dataModifier: this.props.modifier,
  //     //         alt: this.label,
  //     //         src: this.props.url
  //     //     }), P.react.createElement("input", {
  //     //         className: "fav" + (this.state.isFavorite ? " active" : ""),
  //     //         title: "Favorite!",
  //     //         type: "button",
  //     //         onClick: e => {
  //     //             e.preventDefault(), e.stopPropagation(), this.state.isFavorite ? (delete ie.favoriteEmotes[this.label], ie.updateFavorites()) : ie.favorite(this.label, this.props.url), this.setState({
  //     //                 isFavorite: !this.state.isFavorite
  //     //             })
  //     //         }
  //     //     })))
  //     // }
  // }
 
  class de extends P.reactComponent {
      constructor(e) {
          super(e)
      }
      render() {
          return P.react.createElement("div", {
              className: "ui-tab-bar-separator margin-top-8 margin-bottom-8"
          })
      }
  }
  class pe extends P.reactComponent {
      constructor(e) {
          super(e)
      }
      render() {
          return P.react.createElement("div", {
              className: "ui-tab-bar-header"
          }, this.props.text, this.props.button)
      }
  }
  class he extends P.reactComponent {
      constructor(e) {
          super(e), this.setInitialState(), this.onClick = this.onClick.bind(this)
      }
      setInitialState() {
          this.state = {
              selected: this.props.selected || !1
          }
      }
      render() {
          return P.react.createElement("div", {
              className: "ui-tab-bar-item" + (this.props.selected ? " selected" : ""),
              onClick: this.onClick
          }, this.props.text)
      }
      onClick() {
          this.props.onClick && this.props.onClick(this.props.id)
      }
  }
  class ue extends P.reactComponent {
      constructor(e) {
          super(e);
          const t = document.querySelector("[class*=side-] > [class*=selected]");
          t && (this.scn = t.className);
          const n = document.querySelector("[class*=side-] > [class*='item-']:not([class*=selected])");
          n && (this.nscn = n.className);
          const r = document.querySelectorAll("[class*='side-'] > [class*='item-']");
          for (const e of r) e.addEventListener("click", () => {
              this.setState({
                  selected: null
              })
          });
          this.setInitialState(), this.onClick = this.onClick.bind(this), this.setSelected = this.setSelected.bind(this)
      }
      setInitialState() {
          const e = this;
          e.state = {
              selected: null,
              items: e.props.items
          };
          const t = e.props.items.find(e => e.selected);
          t && (e.state.selected = t.id)
      }
      render() {
          const e = this,
              {
                  headerText: t
              } = e.props,
              {
                  items: n,
                  selected: r
              } = e.state;
          return P.react.createElement("div", null, P.react.createElement(de, null), P.react.createElement(pe, {
              text: t,
              button: this.props.headerButton
          }), n.map(t => {
              const {
                  id: n,
                  text: o
              } = t;
              return P.react.createElement(he, {
                  key: n,
                  selected: r === n,
                  text: o,
                  id: n,
                  onClick: e.onClick
              })
          }))
      }
      setSelected(e) {
          e.target.className = this.scn
      }
      onClick(e) {
          const t = document.querySelector("[class*=side] > [class*=selected]");
          t && (t.removeEventListener("click", this.setSelected), t.addEventListener("click", this.setSelected), t.className = this.nscn), this.setState({
              selected: null
          }), this.setState({
              selected: e
          }), this.props.onClick && this.props.onClick(e)
      }
  }
  const me = P.React;
  class ge extends me.Component {
      render() {
          const e = this.props.size || "18px";
          return me.createElement("svg", {
              viewBox: "0 0 24 24",
              fill: "#FFFFFF",
              className: this.props.className || "",
              style: {
                  width: e,
                  height: e
              },
              onClick: this.props.onClick
          }, me.createElement("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
          }), me.createElement("path", {
              d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
          }))
      }
  }
  const be = () => j("tooltip", "tooltipBlack"),
      fe = j("layer", "layerContainer"),
      ye = function (e) {
          const t = e[0].toUpperCase() + e.slice(1),
              n = be()["tooltip" + t];
          return n || null
      },
      ve = function (e) {
          return !!ye(e)
      },
      xe = function (e) {
          return e + "px"
      };
  class we {
      constructor(e, t, n = {}) {
          const {
              style: r = "black",
              side: o = "top",
              preventFlip: s = !1,
              disabled: i = !1
          } = n;
          if (this.node = e instanceof jQuery ? e[0] : e, this.label = t, this.style = r.toLowerCase(), this.side = o.toLowerCase(), this.preventFlip = s, this.disabled = i, !ve(this.side)) return z.err("EmulatedTooltip", `Side ${this.side} does not exist.`);
          if (!ve(this.style)) return z.err("EmulatedTooltip", `Style ${this.style} does not exist.`);
          this.element = document.createElement("div"), this.element.className = fe.layer, this.tooltipElement = document.createElement("div"), this.tooltipElement.className = `${be().tooltip} ${ye(this.style)}`, this.labelElement = document.createElement("div"), this.labelElement.className = be().tooltipContent;
          const a = document.createElement("div");
          a.className = be().tooltipPointer, this.tooltipElement.append(a), this.tooltipElement.append(this.labelElement), this.element.append(this.tooltipElement), this.node.addEventListener("mouseenter", () => {
              if (this.disabled) return;
              this.show();
              const e = new MutationObserver(t => {
                  t.forEach(t => {
                      const n = Array.from(t.removedNodes),
                          r = n.indexOf(this.node) > -1,
                          o = n.some(e => e.contains(this.node));
                      (r || o) && (this.hide(), e.disconnect())
                  })
              });
              e.observe(document.body, {
                  subtree: !0,
                  childList: !0
              })
          }), this.node.addEventListener("mouseleave", () => {
              this.hide()
          })
      }
      get container() {
          return document.querySelector(".popouts-2bnG9Z ~ .layerContainer-yqaFcK")
      }
      get canShowAbove() {
          return this.node.getBoundingClientRect().top - this.element.offsetHeight >= 0
      }
      get canShowBelow() {
          return this.node.getBoundingClientRect().top + this.node.offsetHeight + this.element.offsetHeight <= z.screenHeight
      }
      get canShowLeft() {
          return this.node.getBoundingClientRect().left - this.element.offsetWidth >= 0
      }
      get canShowRight() {
          return this.node.getBoundingClientRect().left + this.node.offsetWidth + this.element.offsetWidth <= z.screenWidth
      }
      hide() {
          this.element.remove(), this.tooltipElement.className = this._className
      }
      show() {
          this.tooltipElement.className = `${be().tooltip} ${ye(this.style)}`, this.labelElement.textContent = this.label, this.container.append(this.element), "top" == this.side && (this.canShowAbove || !this.canShowAbove && this.preventFlip ? this.showAbove() : this.showBelow()), "bottom" == this.side && (this.canShowBelow || !this.canShowBelow && this.preventFlip ? this.showBelow() : this.showAbove()), "left" == this.side && (this.canShowLeft || !this.canShowLeft && this.preventFlip ? this.showLeft() : this.showRight()), "right" == this.side && (this.canShowRight || !this.canShowRight && this.preventFlip ? this.showRight() : this.showLeft())
      }
      showAbove() {
          this.tooltipElement.classList.add(ye("top")), this.element.style.setProperty("top", xe(this.node.getBoundingClientRect().top - this.element.offsetHeight - 10)), this.centerHorizontally()
      }
      showBelow() {
          this.tooltipElement.classList.add(ye("bottom")), this.element.style.setProperty("top", xe(this.node.getBoundingClientRect().top + this.node.offsetHeight + 10)), this.centerHorizontally()
      }
      showLeft() {
          this.tooltipElement.classList.add(ye("left")), this.element.style.setProperty("left", xe(this.node.getBoundingClientRect().left - this.element.offsetWidth - 10)), this.centerVertically()
      }
      showRight() {
          this.tooltipElement.classList.add(ye("right")), this.element.style.setProperty("left", xe(this.node.getBoundingClientRect().left + this.node.offsetWidth + 10)), this.centerVertically()
      }
      centerHorizontally() {
          const e = this.node.getBoundingClientRect().left + this.node.offsetWidth / 2;
          this.element.style.setProperty("left", xe(e - this.element.offsetWidth / 2))
      }
      centerVertically() {
          const e = this.node.getBoundingClientRect().top + this.node.offsetHeight / 2;
          this.element.style.setProperty("top", xe(e - this.element.offsetHeight / 2))
      }
  }
  var ke = class extends P.reactComponent {
      constructor(e) {
          super(e)
      }
      async componentDidMount() {
          const {
              style: e = "black",
              side: t = "top",
              text: n = ""
          } = this.props;
          this.node = P.reactDom.findDOMNode(this), this.tooltip = new we(this.node, n, {
              style: e,
              side: t
          })
      }
      componentWillUnmount() {
          this.tooltip.hide(), delete this.tooltip
      }
      render() {
          return this.props.children
      }
  };
  class Ee {
      constructor(e) {
          this.onClick = e
      }
      get items() {
          return [{
              text: "Settings",
              id: "core"
          }, {
              text: "Plugins",
              id: "plugins"
          }, {
              text: "Custom CSS",
              id: "customcss"
          }]
      }
      get component() {
          const e = P.react.createElement(ke, {
              color: "black",
              side: "top",
              text: "Hi :D"
          }, P.react.createElement("div", {
              className: "bd-changelog-button",
              onClick: () => {
                  z.showChangelogModal(l)
              }
          }, P.react.createElement(ge, {
              className: "bd-icon",
              size: "16px"
          })));
          return P.react.createElement("span", null, P.react.createElement(ue, {
              onClick: this.onClick,
              headerText: "Bandaged BD",
              headerButton: e,
              items: this.items
          }))
      }
      get root() {
          const e = B.query("#bd-settings-sidebar");
          return e || (this.injectRoot() ? this.root : null)
      }
      injectRoot() {
          const e = B.queryAll("[class*='side-'] > [class*='item-']:not([class*=Danger])"),
              t = e[e.length - 1];
          return !!t && (t.parentElement.insertBefore(B.createElement('<div id="bd-settings-sidebar">'), t.previousElementSibling), !0)
      }
      render() {
          const e = this.root;
          e ? (P.reactDom.render(this.component, e), z.onRemoved(e, () => {
              P.reactDom.unmountComponentAtNode(e)
          })) : console.log("FAILED TO LOCATE ROOT: [class*='side-'] > [class*='item-']:not([class*=Danger])")
      }
  }
  var Ce = new class {
          injectColoredText() {
              this.cancelColoredText || P.MessageComponent && (this.cancelColoredText = z.monkeyPatch(P.MessageComponent, "default", {
                  before: e => {
                      const t = e.methodArguments[0];
                      if (!t || !t.childrenMessageContent) return;
                      const n = t.childrenMessageContent;
                      if (!n.type || !n.type.type || "MessageContent" != n.type.type.displayName) return;
                      const r = n.type.type;
                      r.__originalMethod || (n.type.type = function (e) {
                          const t = r(e),
                              n = h["bda-gs-7"] && e.message.colorString || "";
                          return t.props.style = {
                              color: n
                          }, t
                      }, n.type.type.__originalMethod = r, Object.assign(n.type.type, r))
                  }
              }))
          }
          removeColoredText() {
              document.querySelectorAll(".markup-2BOw-j").forEach(e => {
                  e.style.setProperty("color", "")
              })
          }
      },
      Me = new class {
          inject24Hour() {
              if (this.cancel24Hour) return;
              const e = new RegExp("([0-9]{1,2}):([0-9]{1,2})\\s(AM|PM)"),
                  t = t => {
                      if (!h["bda-gs-6"]) return;
                      const n = t.returnValue.match(e);
                      return n && 4 === n.length ? "AM" === n[3] ? t.returnValue = t.returnValue.replace(n[0], `${"12"===n[1]?"00":n[1].padStart(2,"0")}:${n[2]}`) : t.returnValue = t.returnValue.replace(n[0], `${"12"===n[1]?"12":parseInt(n[1])+12}:${n[2]}`) : void 0
                  },
                  n = z.monkeyPatch(P.TimeFormatter, "calendarFormat", {
                      after: t
                  }),
                  r = z.monkeyPatch(P.TimeFormatter, "dateFormat", {
                      after: t
                  });
              this.cancel24Hour = () => {
                  n(), r()
              }
          }
          remove24Hour() {
              this.cancel24Hour && this.cancel24Hour()
          }
      };
  const Se = n(0),
      Ne = n(2),
      Te = n(1),
      De = Se.remote.BrowserWindow,
      Ie = Se.remote.getCurrentWebContents();
  var Le = new class {
      constructor() {
          let e = "";
          if (e = "win32" === process.platform ? Te.resolve(process.env.LOCALAPPDATA, "Google/Chrome/User Data") : "linux" === process.platform ? Te.resolve(process.env.HOME, ".config/google-chrome") : "darwin" === process.platform ? Te.resolve(process.env.HOME, "Library/Application Support/Google/Chrome") : Te.resolve(process.env.HOME, ".config/chromium"), e += "/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/", Ne.existsSync(e)) {
              const t = Ne.readdirSync(e);
              e = Te.resolve(e, t[t.length - 1])
          }
          this.extensionPath = e, this.isExtensionInstalled = Ne.existsSync(e), this.listener = this.listener.bind(this), d["React DevTools"].hidden = !this.isExtensionInstalled
      }
      listener() {
          if (!this.isExtensionInstalled) return;
          De.removeDevToolsExtension("React Developer Tools");
          De.addDevToolsExtension(this.extensionPath) ? z.log("React DevTools", "Successfully installed react devtools.") : z.err("React DevTools", "Couldn't find react devtools in chrome extensions!")
      }
      start() {
          setImmediate(() => Ie.on("devtools-opened", this.listener)), Ie.isDevToolsOpened() && this.listener()
      }
      stop() {
          Ie.removeListener("devtools-opened", this.listener)
      }
  };
  class je extends P.reactComponent {
      constructor(e) {
          super(e)
      }
      render() {
          return P.react.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 12 12",
              style: {
                  width: "18px",
                  height: "18px"
              }
          }, P.react.createElement("g", {
              className: "background",
              fill: "none",
              fillRule: "evenodd"
          }, P.react.createElement("path", {
              d: "M0 0h12v12H0"
          }), P.react.createElement("path", {
              className: "fill",
              fill: "#dcddde",
              d: "M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"
          })))
      }
  }
  class Ae extends P.reactComponent {
      constructor(e) {
          super(e), this.onClick = this.onClick.bind(this)
      }
      render() {
          return P.react.createElement("div", {
              className: "tools-container toolsContainer-1edPuj"
          }, P.react.createElement("div", {
              className: "tools tools-3-3s-N"
          }, P.react.createElement("div", {
              className: "container-1sFeqf"
          }, P.react.createElement("div", {
              className: "btn-close closeButton-1tv5uR",
              onClick: this.onClick
          }, P.react.createElement(je, null)), P.react.createElement("div", {
              className: "esc-text keybind-KpFkfr"
          }, "ESC"))))
      }
      onClick() {
          this.props.onClick && this.props.onClick();
          const e = document.querySelector(".closeButton-1tv5uR");
          e && e.click()
      }
  }
  class Pe extends P.reactComponent {
      constructor(e) {
          super(e)
      }
      render() {
          return P.react.createElement("h2", {
              className: "ui-form-title h2 margin-reset margin-bottom-20 marginTop60-3PGbtK da-marginTop6"
          }, this.props.text)
      }
  }
  class Be extends P.reactComponent {
      constructor(e) {
          super(e), this.props.server.iconUrl || (this.props.server.iconUrl = this.props.fallback), this.state = {
              imageError: !1,
              joined: this.props.guildList.includes(this.props.server.identifier)
          }
      }
      render() {
          const {
              server: e
          } = this.props;
          return P.react.createElement("div", {
              className: "card-3Qj_Yx cardPrimary-1Hv-to marginBottom8-AtZOdT bd-server-card" + (e.pinned ? " bd-server-card-pinned" : "")
          }, P.react.createElement("img", {
              ref: "img",
              className: "bd-server-image",
              src: e.iconUrl,
              onError: this.handleError.bind(this)
          }), P.react.createElement("div", {
              className: "flexChild-faoVW3 bd-server-content"
          }, P.react.createElement("div", {
              className: "flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY directionRow-3v3tfG noWrap-3jynv6 bd-server-header"
          }, P.react.createElement("h5", {
              className: "h5-18_1nd defaultColor-1_ajX0 margin-reset bd-server-name"
          }, e.name), P.react.createElement("h5", {
              className: "h5-18_1nd defaultColor-1_ajX0 margin-reset bd-server-member-count"
          }, e.members, " Members")), P.react.createElement("div", {
              className: "flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY directionRow-3v3tfG noWrap-3jynv6"
          }, P.react.createElement("div", {
              className: "scrollerWrap-2lJEkd scrollerThemed-2oenus themeGhostHairline-DBD-2d scrollerFade-1Ijw5y bd-server-description-container"
          }, P.react.createElement("div", {
              className: "scroller-2FKFPG scroller bd-server-description"
          }, e.description))), P.react.createElement("div", {
              className: "flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY directionRow-3v3tfG noWrap-3jynv6 bd-server-footer"
          }, P.react.createElement("div", {
              className: "flexChild-faoVW3 bd-server-tags",
              style: {
                  flex: "1 1 auto"
              }
          }, e.categories.join(", ")), this.state.joined && P.react.createElement("button", {
              type: "button",
              className: "button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMin-1mJd1x grow-q77ONN colorGreen-29iAKY",
              style: {
                  minHeight: "12px",
                  marginTop: "4px",
                  backgroundColor: "#3ac15c"
              }
          }, P.react.createElement("div", {
              className: "ui-button-contents"
          }, "Joined")), e.error && P.react.createElement("button", {
              type: "button",
              className: "button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMin-1mJd1x grow-q77ONN disabled-9aF2ug",
              style: {
                  minHeight: "12px",
                  marginTop: "4px",
                  backgroundColor: "#c13a3a"
              }
          }, P.react.createElement("div", {
              className: "ui-button-contents"
          }, "Error")), !e.error && !this.state.joined && P.react.createElement("button", {
              type: "button",
              className: "button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMin-1mJd1x grow-q77ONN",
              style: {
                  minHeight: "12px",
                  marginTop: "4px"
              },
              onClick: () => {
                  this.join()
              }
          }, P.react.createElement("div", {
              className: "ui-button-contents"
          }, "Join")))))
      }
      handleError() {
          this.props.server.iconUrl = this.props.fallback, this.setState({
              imageError: !0
          })
      }
      join() {
          this.props.join(this)
      }
  }
  class ze extends P.reactComponent {
      constructor(e) {
          super(e)
      }
      render() {
          let e = "scrollerWrap-2lJEkd scrollerThemed-2oenus themeGhostHairline-DBD-2d" + (this.props.fade ? " scrollerFade-1Ijw5y" : ""),
              t = "scroller-2FKFPG scroller";
          this.props.sidebar && (t = "sidebarRegionScroller-3MXcoP thin-1ybCId scrollerBase-289Jih fade-2kXiP2 sidebar-region-scroller scroller"), this.props.contentColumn && (t = "contentRegionScroller-26nc1e auto-Ge5KZx scrollerBase-289Jih content-region-scroller scroller", e = "contentTransitionWrap-3hqOEW");
          const {
              children: n
          } = this.props;
          return this.props.sidebar ? P.react.createElement("div", {
              key: "scroller",
              ref: "scroller",
              className: t
          }, n) : P.react.createElement("div", {
              key: "scrollerwrap",
              className: e
          }, P.react.createElement("div", {
              key: "scroller",
              ref: "scroller",
              className: t
          }, n))
      }
  }
  const Oe = ze.prototype.render;
  Object.defineProperty(ze.prototype, "render", {
      enumerable: !1,
      configurable: !1,
      set: function () {
          console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins")
      },
      get: () => Oe
  });
  class Fe extends P.reactComponent {
      constructor(e) {
          super(e)
      }
      render() {
          const {
              sidebar: e,
              content: t,
              tools: n
          } = this.props.children;
          return P.react.createElement("div", {
              className: "standardSidebarView-3F1I7i ui-standard-sidebar-view"
          }, P.react.createElement("div", {
              className: "sidebarRegion-VFTUkN sidebar-region"
          }, P.react.createElement(ze, {
              key: "sidebarScroller",
              ref: "sidebarScroller",
              sidebar: !0,
              fade: e.fade || !0,
              dark: e.dark || !0
          }, e.component)), P.react.createElement("div", {
              className: "contentRegion-3nDuYy content-region"
          }, P.react.createElement("div", {
              className: "contentTransitionWrap-3hqOEW content-transition-wrap"
          }, P.react.createElement("div", {
              className: "scroller-2FKFPG firefoxFixScrollFlex-cnI2ix contentRegionScroller-26nc1e content-region-scroller scroller",
              ref: "contentScroller"
          }, P.react.createElement("div", {
              className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"
          }, t.component), n.component))))
      }
  }
  class Re extends P.reactComponent {
      constructor(e) {
          super(e), this.setInitialState(), this.close = this.close.bind(this), this.changeCategory = this.changeCategory.bind(this), this.search = this.search.bind(this), this.searchKeyDown = this.searchKeyDown.bind(this), this.checkConnection = this.checkConnection.bind(this), this.join = this.join.bind(this), this.connect = this.connect.bind(this), this.GuildStore = P.WebpackModules.findByUniqueProperties(["getGuilds"]), this.AvatarDefaults = P.WebpackModules.findByUniqueProperties(["getUserAvatarURL", "DEFAULT_AVATARS"]), this.InviteActions = P.WebpackModules.findByUniqueProperties(["acceptInvite"]), this.SortedGuildStore = P.WebpackModules.findByUniqueProperties(["getSortedGuilds"])
      }
      componentDidMount() {
          this.checkConnection()
      }
      setInitialState() {
          this.state = {
              selectedCategory: -1,
              title: "Loading...",
              loading: !0,
              servers: [],
              next: null,
              connection: {
                  state: 0,
                  user: null
              }
          }
      }
      close() {
          P.reactDom.unmountComponentAtNode(document.getElementById(this.props.rootId))
      }
      search(e, t) {
          const r = this;
          n(3).get({
              url: `${r.endPoint}${e}${e?"&schema=new":"?schema=new"}`,
              json: !0
          }, (function (e, n, o) {
              if (e) return r.setState({
                  loading: !1,
                  title: "Failed to load servers. Check console for details"
              });
              let s = o.results.reduce((e, t) => (t.joined = !1, e.push(t), e), []);
              t || (s = r.state.servers.concat(s));
              let i = o.size + o.from;
              o.next = "?from=" + i, r.state.term && (o.next += "&term=" + r.state.term), r.state.selectedCategory && (o.next += "&category=" + r.categoryButtons[r.state.selectedCategory]), i >= o.total && (i = o.total, o.next = null);
              let a = `Showing 1-${i} of ${o.total} results in ${r.categoryButtons[r.state.selectedCategory]}`;
              r.state.term && (a += " for " + r.state.term), r.setState({
                  loading: !1,
                  title: a,
                  servers: s,
                  next: o.next
              }), t && (r.refs.sbv.refs.contentScroller.scrollTop = 0)
          }))
      }
      
      get windowOptions() {
          return {
              width: 500,
              height: 550,
              backgroundColor: "#282b30",
              show: !0,
              resizable: !1,
              maximizable: !1,
              minimizable: !1,
              alwaysOnTop: !0,
              frame: !1,
              center: !1,
              webPreferences: {
                  nodeIntegration: !1
              }
          }
      }
      
      render() {
          return P.react.createElement(Fe, {
              ref: "sbv"
          }, this.component)
      }
  }
  class Ue extends P.reactComponent {
      constructor(e) {
          super(e), this.keyupListener = this.keyupListener.bind(this)
      }
      keyupListener(e) {
          27 === e.which && P.reactDom.unmountComponentAtNode(this.refs.root.parentNode)
      }
      componentDidMount() {
          window.addEventListener("keyup", this.keyupListener);
          const e = B.query("#" + this.props.id);
          B.animate({
              duration: 200,
              update: function (t) {
                  e.style.transform = `scale(${1.1-.1*t}) translateZ(0px)`, e.style.opacity = t, 1 == t && setImmediate(() => {
                      e.style.transform = "", e.style.opacity = ""
                  })
              }
          })
      }
      componentWillUnmount() {
          window.removeEventListener("keyup", this.keyupListener);
          const e = B.query("#" + this.props.id);
          B.animate({
              duration: 200,
              update: function (t) {
                  e.style.transform = `scale(${1.1-.1*(1-t)}) translateZ(0px)`, e.style.opacity = 1 - t, 1 == t && setImmediate(() => {
                      e.remove()
                  })
              }
          });
          const t = B.query(".publicServersOpen");
          t.classList.remove("publicServersOpen"), B.animate({
              duration: 200,
              update: function (e) {
                  t.style.transform = `scale(${.07*e+.93}) translateZ(0px)`, t.style.opacity = e, 1 == e && setImmediate(() => {
                      t.style.transform = "", t.style.opacity = ""
                  })
              }
          })
      }
      componentWillMount() {
          const e = B.query('[class*="layer-"]');
          e.classList.add("publicServersOpen"), B.animate({
              duration: 200,
              update: function (t) {
                  e.style.transform = `scale(${.07*(1-t)+.93}) translateZ(0px)`, e.style.opacity = 1 - t
              }
          })
      }
      render() {
          return P.react.createElement("div", {
              className: "layer bd-layer layer-3QrUeG",
              id: this.props.id,
              ref: "root",
              style: {
                  opacity: 0,
                  transform: "scale(1.1) translateZ(0px)"
              }
          }, this.props.children)
      }
  }
  var Ge = new class {
      constructor() {
          this._appendButton = this._appendButton.bind(this)
      }
      get component() {
          return P.react.createElement(Ue, {
              rootId: "pubslayerroot",
              id: "pubslayer"
          }, P.react.createElement(Re, {
              rootId: "pubslayerroot"
          }))
      }
      get root() {
          const e = document.getElementById("pubslayerroot");
          return e || (this.injectRoot() ? this.root : null)
      }
      injectRoot() {
          const e = B.query(".layers, .layers-3iHuyZ");
          return !!e && (e.append(B.createElement("<div id='pubslayerroot'>")), !0)
      }
      render() {
          const e = this.root;
          e ? P.reactDom.render(this.component, e) : console.log("FAILED TO LOCATE ROOT: .layers")
      }
      get button() {
          const e = B.createElement(`<div id="bd-pub-li" class="${P.guildClasses.listItem}">`);
          h["bda-gs-1"] || (e.style.display = "none");
          const t = B.createElement(`<div id="bd-pub-button" class="${"wrapper-25eVIn "+P.guildClasses.circleButtonMask}">public</div>`);
          return t.addEventListener("click", () => {
              this.render()
          }), e.append(t), e
      }
      _appendButton() {
          if (B.query("#bd-pub-li")) return;
          const e = P.guildClasses.wrapper.split(" ")[0],
              t = B.query(`.${e} .scroller-2TZvBN >:first-child`);
          t && B.after(t, this.button)
      }
      addButton() {
          if (this.guildPatch) return;
          const e = I(e => e.default && "NavigableGuilds" == e.default.displayName),
              t = A("Guilds");
          e || t || z.warn("PublicServer", "Can't find GuildList component"), this.guildPatch = z.monkeyPatch(e || t.prototype, e ? "default" : "render", {
              after: this._appendButton
          }), this._appendButton()
      }
      removeButton() {
          this.guildPatch(), delete this.guildPatch;
          const e = B.query("#bd-pub-li");
          e && e.remove()
      }
  };
  var qe = new class {
      start() {
          B.addStyle("VoiceMode", "\n    .container-2Rl01u {\n        display: none!important;\n    }\n\n    .chat-3bRxxu {\n        display: none!important;\n    }\n\n    .sidebar-2K8pFh {\n        flex-grow: 1!important;\n    }\n")
      }
      stop() {
          B.removeStyle("VoiceMode")
      }
  };
  const He = new RegExp("^(?!da-)((?:[A-Za-z]|[0-9]|-)+)-(?:[A-Za-z]|[0-9]|-|_){6}$");
  var We = new class {
          stop() {
              this.hasPatched && (this.unpatchClassModules(L(this.moduleFilter.bind(this))), this.revertElement(document.querySelector("#app-mount")), this.hasPatched = !1)
          }
          start() {
              this.hasPatched || (this.patchClassModules(L(this.moduleFilter.bind(this))), this.normalizeElement(document.querySelector("#app-mount")), this.hasPatched = !0, this.patchDOMMethods())
          }
          patchClassModules(e) {
              for (const t of e) this.patchClassModule("da", t)
          }
          unpatchClassModules(e) {
              for (const t of e) this.unpatchClassModule("da", t)
          }
          shouldIgnore(e) {
              return !isNaN(e) || (!!(e.endsWith("px") || e.endsWith("ch") || e.endsWith("em") || e.endsWith("ms")) || (!!e.startsWith("layerContainer-") || (!(!e.startsWith("#") || 7 != e.length && 4 != e.length) || !(!e.includes("calc(") && !e.includes("rgba")))))
          }
          moduleFilter(e) {
              if ("object" != typeof e || Array.isArray(e)) return !1;
              if (e.__esModule) return !1;
              if (!Object.keys(e).length) return !1;
              for (const t in e) {
                  const n = e[t];
                  if ("string" != typeof n) return !1;
                  if (!this.shouldIgnore(n)) {
                      if (1 === n.split("-").length) return !1;
                      if (!He.test(n.split(" ")[0])) return !1
                  }
              }
              return !0
          }
          patchClassModule(e, t) {
              for (const n in t) {
                  const r = t[n];
                  if (this.shouldIgnore(r)) continue;
                  const o = r.split(" ");
                  for (const r of o) {
                      const o = r.match(He);
                      if (!o || !o.length || o.length < 2) continue;
                      const s = o[1].split("-").map((e, t) => t ? e[0].toUpperCase() + e.slice(1) : e).join("");
                      t[n] += ` ${e}-${s}`
                  }
              }
          }
          unpatchClassModule(e, t) {
              for (const n in t) {
                  const r = t[n];
                  if (this.shouldIgnore(r)) continue;
                  let o = "";
                  const s = r.split(" ");
                  for (const t of s) t.startsWith(e + "-") || (o += " " + t);
                  t[n] = o.trim()
              }
          }
          normalizeElement(e) {
              if (!(e instanceof Element)) return;
              const t = e.classList;
              for (let n = 0, r = t.length; n < r; n++) {
                  if (!He.test(t[n])) continue;
                  const r = t[n].match(He)[1].split("-").map((e, t) => t ? e[0].toUpperCase() + e.slice(1) : e).join("");
                  e.classList.add("da-" + r)
              }
              for (const t of e.children) this.normalizeElement(t)
          }
          revertElement(e) {
              if (!(e instanceof Element)) return;
              e.children && e.children.length && this.revertElement(e.children[0]), e.nextElementSibling && this.revertElement(e.nextElementSibling);
              const t = e.classList,
                  n = [];
              for (let e = 0; e < t.length; e++) t[e].startsWith("da-") && n.push(t[e]);
              e.classList.remove(...n)
          }
          patchDOMMethods() {
              const e = DOMTokenList.prototype.contains;
              DOMTokenList.prototype.contains = function (t) {
                  return Reflect.apply(e, this, [t.split(" ")[0]])
              };
              const t = DOMTokenList.prototype.add;
              DOMTokenList.prototype.add = function (...e) {
                  for (let t = 0; t < e.length; t++) e[t] = e[t].split(" ")[0];
                  return Reflect.apply(t, this, e)
              };
              const n = DOMTokenList.prototype.remove;
              DOMTokenList.prototype.remove = function (...e) {
                  for (let t = 0; t < e.length; t++) e[t] = e[t].split(" ")[0];
                  return Reflect.apply(n, this, e)
              }
          }
      },
      _e = new class {
          constructor() {
              this.debugListener = this.debugListener.bind(this), this.copySelectorListener = this.copySelectorListener.bind(this)
          }
          start() {
              this.startDebugListener(), h["fork-dm-1"] && this.startCopySelector()
          }
          stop() {
              this.stopDebugListener(), this.stopCopySelector()
          }
          startDebugListener() {
              this.stopDebugListener(), document.addEventListener("keydown", this.debugListener)
          }
          stopDebugListener() {
              document.removeEventListener("keydown", this.debugListener)
          }
          startCopySelector() {
              this.stopCopySelector(), document.addEventListener("contextmenu", this.copySelectorListener)
          }
          stopCopySelector() {
              document.removeEventListener("contextmenu", this.copySelectorListener)
          }
          debugListener(e) {
              if (119 === e.which || 118 == e.which) {
                  console.log("%c[%cDevMode%c] %cBreak/Resume", "color: red;", "color: #303030; font-weight:700;", "color:red;", "");
                  debugger;
                  e.preventDefault(), e.stopImmediatePropagation()
              }
          }
          copySelectorListener(e) {
              e.stopPropagation();
              const t = this.getSelector(e.target);
              setImmediate((function () {
                  let n = B.query(".contextMenu-HLZMGh");
                  if (!n) {
                      const t = B.query("#app-mount"),
                          r = B.createElement('<div class="layer-v9HyYc da-layer">');
                      n = B.createElement('<div class="contextMenu-HLZMGh da-contextMenu bd-context-menu"></div>'), r.append(n), t.append(r), r.style.top = e.clientY + "px", r.style.left = e.clientX + "px", r.style.zIndex = "1002";
                      const o = function (e) {
                          e.keyCode && 27 !== e.keyCode || (r.remove(), document.removeEventListener("click", o), document.removeEventListener("contextmenu", o), document.removeEventListener("keyup", o))
                      };
                      document.addEventListener("click", o), document.addEventListener("contextmenu", o), document.addEventListener("keyup", o)
                  }
                  const r = B.createElement('<div class="itemGroup-1tL0uz da-itemGroup">'),
                      o = B.createElement('<div class="item-1Yvehc itemBase-tz5SeC da-item da-itemBase clickable-11uBi- da-clickable">');
                  o.append(B.createElement('<div class="label-JWQiNe da-label">Copy Selector</div>')), o.addEventListener("click", () => {
                      P.NativeModule.copy(t), n.style.display = "none"
                  }), r.append(o), n.append(r)
              }))
          }
          getSelector(e) {
              if (e.id) return "#" + e.id;
              const t = this.getRules(e),
                  n = t[t.length - 1];
              return n ? n.selectorText : e.classList.length ? "." + Array.from(e.classList).join(".") : "." + Array.from(e.parentElement.classList).join(".")
          }
          getRules(e, t = e.ownerDocument.styleSheets) {
              return [...t].filter(e => !e.href || !e.href.includes("BetterDiscordApp")).map(e => [...e.cssRules || []]).flat().filter(t => t && t.selectorText && e.matches(t.selectorText) && t.style.length && t.selectorText.split(", ").length < 8 && !t.selectorText.split(", ").includes("*"))
          }
      };
  const Qe = P.React;
  class Ve extends Qe.Component {
      constructor(e) {
          super(e), this.state = {
              checked: this.props.checked
          }, this.onChange = this.onChange.bind(this)
      }
      onChange() {
          this.props.disabled || (this.props.onChange(!this.state.checked), this.setState({
              checked: !this.state.checked
          }))
      }
      render() {
          const e = this.props.disabled ? " bd-switch-disabled" : "",
              t = this.state.checked ? " bd-switch-checked" : "";
          return Qe.createElement("div", {
              className: "bd-switch" + e + t
          }, Qe.createElement("input", {
              type: "checkbox",
              id: this.props.id,
              className: "bd-checkbox",
              disabled: this.props.disabled,
              checked: this.state.checked,
              onChange: this.onChange
          }))
      }
  }
  class Ze extends P.reactComponent {
      constructor(e) {
          super(e), this.onChange = this.onChange.bind(this)
      }
      onChange() {
          this.props.checked = !this.props.checked, this.props.onChange(this.props.id, this.props.checked)
      }
      render() {
          const {
              text: e,
              info: t
          } = this.props.data;
          return P.react.createElement("div", {
              className: "ui-flex flex-vertical flex-justify-start flex-align-stretch flex-nowrap ui-switch-item"
          }, P.react.createElement("div", {
              className: "ui-flex flex-horizontal flex-justify-start flex-align-stretch flex-nowrap"
          }, P.react.createElement("h3", {
              className: "ui-form-title h3 margin-reset margin-reset ui-flex-child"
          }, e), P.react.createElement(Ve, {
              onChange: this.onChange,
              checked: this.props.checked
          })), P.react.createElement("div", {
              className: "ui-form-text style-description margin-top-4",
              style: {
                  flex: "1 1 auto"
              }
          }, t))
      }
  }
  class $e extends P.reactComponent {
      constructor(e) {
          super(e)
      }
      render() {
          const {
              title: e,
              settings: t,
              button: n
          } = this.props, r = n ? P.react.createElement("button", {
              key: "title-button",
              className: "bd-pfbtn",
              onClick: n.onClick
          }, n.title) : null;
          return [P.react.createElement(Pe, {
              text: e
          }), r, t.map(e => P.react.createElement(Ze, {
              id: e.id,
              key: e.id,
              data: e,
              checked: h[e.id],
              onChange: (e, t) => {
                  this.props.onChange(e, t)
              }
          }))]
      }
  }
  class Ke extends P.reactComponent {
      constructor(e) {
          super(e)
      }
      render() {
          return P.react.createElement("div", {
              className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"
          }, P.react.createElement("div", {
              className: "ui-flex ui-section-panel-title"
          }, P.react.createElement(Pe, {
              text: this.props.title
          }), this.props.button && P.react.createElement("button", {
              key: "title-button",
              className: "bd-pfbtn",
              onClick: this.props.button.onClick
          }, this.props.button.title)), this.props.sections.map(e => P.react.createElement($e, Object.assign({}, e, {
              onChange: this.props.onChange
          }))))
      }
  }
  class Ye extends P.reactComponent {
      constructor(e) {
          super(e)
      }
      render() {
          const {
              settings: e
          } = this.props;
          return P.react.createElement("div", {
              className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"
          }, P.react.createElement(Pe, {
              text: this.props.title
          }), this.props.button && P.react.createElement("button", {
              key: "title-button",
              className: "bd-pfbtn",
              onClick: this.props.button.onClick
          }, this.props.button.title), e.map(e => P.react.createElement(Ze, {
              id: e.id,
              key: e.id,
              data: e,
              checked: h[e.id],
              onChange: (e, t) => {
                  this.props.onChange(e, t)
              }
          })))
      }
  }
  class Je extends P.reactComponent {
      constructor(e) {
          super(e), this.onClick = this.onClick.bind(this), this.setInitialState()
      }
      setInitialState() {
          this.state = {
              checked: this.props.checked || !1
          }
      }
      render() {
          return P.react.createElement("li", null, P.react.createElement("div", {
              className: "checkbox checkbox-3kaeSU da-checkbox",
              onClick: this.onClick
          }, P.react.createElement("div", {
              className: "checkbox-inner checkboxInner-3yjcPe da-checkboxInner"
          }, P.react.createElement("input", {
              className: "checkboxElement-1qV33p da-checkboxElement",
              checked: this.state.checked,
              onChange: () => {},
              type: "checkbox"
          }), P.react.createElement("span", null)), P.react.createElement("span", null, this.props.text)))
      }
      onClick() {
          this.props.onChange(this.props.id, !this.state.checked), this.setState({
              checked: !this.state.checked
          })
      }
  }
  class Xe extends P.reactComponent {
      constructor(e) {
          super(e);
          this.onClick = this.onClick.bind(this), this.updateCss = this.updateCss.bind(this), this.saveCss = this.saveCss.bind(this), this.onChange = this.onChange.bind(this)
      }
      componentDidMount() {
          B.addClass(B.query("#app-mount"), "bd-detached-editor"), P.editorDetached = !0, this.editor = ace.edit("bd-customcss-editor-detached"), this.editor.setTheme("ace/theme/monokai"), this.editor.session.setMode("ace/mode/css"), this.editor.setShowPrintMargin(!1), this.editor.setFontSize(14), this.editor.on("change", () => {
              h["bda-css-0"] && (this.saveCss(), this.updateCss())
          })
      }
      componentWillUnmount() {
          B.removeClass(B.query("#app-mount"), "bd-detached-editor"), P.editorDetached = !1, this.editor.destroy()
      }
      updateLineCount() {
          const e = this.refs.editor.value.split("\n").length;
          e != this.props.lines && (this.refs.lines.textContent = Array.from(new Array(e), (e, t) => t + 1).join(".\n") + ".", this.props.lines = e)
      }
      get options() {
          return {
              lineNumbers: !0,
              mode: "css",
              indentUnit: 4,
              theme: "material",
              scrollbarStyle: "simple"
          }
      }
      get css() {
          const e = ne.getBDData("bdcustomcss");
          let t = "";
          return e && "" !== e && (t = atob(e)), t
      }
      get root() {
          const e = B.query("#bd-customcss-detach-container");
          return e || (this.injectRoot() ? this.detachedRoot : null)
      }
      injectRoot() {
          const e = B.query(".app, .app-2rEoOp");
          return !!e && (B.insertAfter(B.createElement('<div id="bd-customcss-detach-container">'), e), !0)
      }
      render() {
          const e = this;
          return P.react.createElement("div", {
              className: "bd-detached-css-editor",
              id: "bd-customcss-detach-editor"
          }, P.react.createElement("div", {
              id: "bd-customcss-innerpane"
          }, P.react.createElement("div", {
              className: "editor-wrapper"
          }, P.react.createElement("div", {
              id: "bd-customcss-editor-detached",
              className: "editor",
              ref: "editor"
          }, e.css)), P.react.createElement("div", {
              id: "bd-customcss-attach-controls"
          }, P.react.createElement("ul", {
              className: "checkbox-group"
          }, P.react.createElement(Je, {
              id: "live-update",
              text: "Live Update",
              onChange: e.onChange,
              checked: h["bda-css-0"]
          })), P.react.createElement("div", {
              id: "bd-customcss-detach-controls-button"
          }, P.react.createElement("button", {
              style: {
                  borderRadius: "3px 0 0 3px",
                  borderRight: "1px solid #3f4146"
              },
              className: "btn btn-primary",
              onClick: () => {
                  e.onClick("update")
              }
          }, "Update"), P.react.createElement("button", {
              style: {
                  borderRadius: "0",
                  borderLeft: "1px solid #2d2d2d",
                  borderRight: "1px solid #2d2d2d"
              },
              className: "btn btn-primary",
              onClick: () => {
                  e.onClick("save")
              }
          }, "Save"), P.react.createElement("button", {
              style: {
                  borderRadius: "0 3px 3px 0",
                  borderLeft: "1px solid #3f4146"
              },
              className: "btn btn-primary",
              onClick: () => {
                  e.onClick("attach")
              }
          }, "Attach"), P.react.createElement("span", {
              style: {
                  fontSize: "10px",
                  marginLeft: "5px"
              }
          }, "Unsaved changes are lost on attach")))))
      }
      onChange(e, t) {
          switch (e) {
              case "live-update":
                  h["bda-css-0"] = t, St.saveSettings()
          }
      }
      onClick(e) {
          const t = this;
          switch (e) {
              case "attach":
                  B.query("#editor-detached") && t.props.attach(), P.reactDom.unmountComponentAtNode(t.root), t.root.remove();
                  break;
              case "update":
                  t.updateCss();
                  break;
              case "save":
                  t.saveCss()
          }
      }
      updateCss() {
          B.removeStyle("customcss"), B.addStyle("customcss", this.editor.session.getValue())
      }
      saveCss() {
          ne.setBDData("bdcustomcss", btoa(this.editor.session.getValue()))
      }
  }
  class et extends P.reactComponent {
      constructor(e) {
          super(e);
          this.props.lines = 0, this.setInitialState(), this.attach = this.attach.bind(this), this.detachedEditor = P.react.createElement(Xe, {
              attach: this.attach
          }), this.onClick = this.onClick.bind(this), this.updateCss = this.updateCss.bind(this), this.saveCss = this.saveCss.bind(this), this.detach = this.detach.bind(this)
      }
      setInitialState() {
          this.state = {
              detached: this.props.detached || P.editorDetached
          }
      }
      componentDidMount() {
          this.editor = ace.edit("bd-customcss-editor"), this.editor.setTheme("ace/theme/monokai"), this.editor.session.setMode("ace/mode/css"), this.editor.setShowPrintMargin(!1), this.editor.setFontSize(14), this.editor.on("change", () => {
              h["bda-css-0"] && (this.saveCss(), this.updateCss())
          })
      }
      componentWillUnmount() {
          this.editor.destroy()
      }
      componentDidUpdate(e, t) {
          const n = this;
          t.detached && !n.state.detached && P.reactDom.unmountComponentAtNode(n.detachedRoot)
      }
      codeMirror() {}
      get options() {
          return {
              lineNumbers: !0,
              mode: "css",
              indentUnit: 4,
              theme: "material",
              scrollbarStyle: "simple"
          }
      }
      get css() {
          const e = ne.getBDData("bdcustomcss");
          let t = "";
          return e && "" !== e && (t = atob(e)), t
      }
      updateLineCount() {
          const e = this.refs.editor.value.split("\n").length;
          e != this.props.lines && (this.refs.lines.textContent = Array.from(new Array(e), (e, t) => t + 1).join(".\n") + ".", this.props.lines = e)
      }
      render() {
          const e = this,
              {
                  detached: t
              } = e.state;
          return P.react.createElement("div", {
              className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default",
              style: {
                  padding: "60px 40px 0px"
              }
          }, t && P.react.createElement("div", {
              id: "editor-detached"
          }, P.react.createElement(Pe, {
              text: "Custom CSS Editor"
          }), P.react.createElement("h3", null, "Editor Detached"), P.react.createElement("button", {
              className: "btn btn-primary",
              onClick: () => {
                  e.attach()
              }
          }, "Attach")), !t && P.react.createElement("div", null, P.react.createElement(Pe, {
              text: "Custom CSS Editor"
          }), P.react.createElement("div", {
              className: "editor-wrapper"
          }, P.react.createElement("div", {
              id: "bd-customcss-editor",
              className: "editor",
              ref: "editor"
          }, e.css)), P.react.createElement("div", {
              id: "bd-customcss-attach-controls"
          }, P.react.createElement("ul", {
              className: "checkbox-group"
          }, P.react.createElement(Je, {
              id: "live-update",
              text: "Live Update",
              onChange: this.onChange,
              checked: h["bda-css-0"]
          })), P.react.createElement("div", {
              id: "bd-customcss-detach-controls-button"
          }, P.react.createElement("button", {
              style: {
                  borderRadius: "3px 0 0 3px",
                  borderRight: "1px solid #3f4146"
              },
              className: "btn btn-primary",
              onClick: () => {
                  e.onClick("update")
              }
          }, "Update"), P.react.createElement("button", {
              style: {
                  borderRadius: "0",
                  borderLeft: "1px solid #2d2d2d",
                  borderRight: "1px solid #2d2d2d"
              },
              className: "btn btn-primary",
              onClick: () => {
                  e.onClick("save")
              }
          }, "Save"), P.react.createElement("button", {
              style: {
                  borderRadius: "0 3px 3px 0",
                  borderLeft: "1px solid #3f4146"
              },
              className: "btn btn-primary",
              onClick: () => {
                  e.onClick("detach")
              }
          }, "Detach"), P.react.createElement("span", {
              style: {
                  fontSize: "10px",
                  marginLeft: "5px"
              }
          }, "Unsaved changes are lost on detach"), P.react.createElement("div", {
              className: "help-text"
          }, "Press ", P.react.createElement("code", {
              className: "inline"
          }, "ctrl"), "+", P.react.createElement("span", {
              className: "inline"
          }, ","), " with the editor focused to access the editor's settings.")))))
      }
      onClick(e) {
          const t = this;
          switch (e) {
              case "update":
                  t.updateCss();
                  break;
              case "save":
                  t.saveCss();
                  break;
              case "detach":
                  t.detach()
          }
      }
      onChange(e, t) {
          switch (e) {
              case "live-update":
                  h["bda-css-0"] = t, St.saveSettings()
          }
      }
      updateCss() {
          B.removeStyle("customcss"), B.addStyle("customcss", this.editor.session.getValue())
      }
      saveCss() {
          ne.setBDData("bdcustomcss", btoa(this.editor.session.getValue()))
      }
      detach() {
          this.setState({
              detached: !0
          });
          const e = this.detachedRoot;
          e ? P.reactDom.render(this.detachedEditor, e) : console.log("FAILED TO INJECT ROOT: .app")
      }
      get detachedRoot() {
          const e = B.query("#bd-customcss-detach-container");
          return e || (this.injectDetachedRoot() ? this.detachedRoot : null)
      }
      injectDetachedRoot() {
          const e = B.query(".app, .app-2rEoOp");
          return !!e && (B.insertAfter(B.createElement('<div id="bd-customcss-detach-container">'), e), !0)
      }
      attach() {
          this.setState({
              detached: !1
          })
      }
  }
  class tt extends P.reactComponent {
      constructor(e) {
          super(e), this.state = {
              hasError: !1
          }
      }
      componentDidCatch() {
          this.setState({
              hasError: !0
          })
      }
      render() {
          return this.state.hasError ? P.react.createElement("div", {
              className: "react-error"
          }, "Component Error") : this.props.children
      }
  }
  const nt = tt.prototype.render;
  Object.defineProperty(tt.prototype, "render", {
      enumerable: !1,
      configurable: !1,
      set: function () {
          console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins")
      },
      get: () => nt
  });
  class rt extends P.reactComponent {
      constructor(e) {
          super(e)
      }
      static get displayName() {
          return "ContentColumn"
      }
      render() {
          return P.react.createElement("div", {
              className: "contentColumn-2hrIYH contentColumnDefault-1VQkGM content-column default"
          }, P.react.createElement("h2", {
              className: "ui-form-title h2 margin-reset margin-bottom-20"
          }, this.props.title), this.props.children)
      }
  }
  class ot extends P.reactComponent {
      constructor(e) {
          super(e)
      }
      render() {
          return P.react.createElement("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "#dcddde",
              className: "bd-reload " + this.props.className,
              onClick: this.props.onClick,
              style: {
                  width: this.props.size || "24px",
                  height: this.props.size || "24px"
              }
          }, P.react.createElement("path", {
              d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
          }), P.react.createElement("path", {
              fill: "none",
              d: "M0 0h24v24H0z"
          }))
      }
  }
  const st = P.React;
  class it extends st.Component {
      render() {
          const e = this.props.size || "24px";
          return st.createElement("svg", {
              className: this.props.className || "",
              viewBox: "0 0 24 24",
              fill: "#FFFFFF",
              style: {
                  width: e,
                  height: e
              },
              onClick: this.props.onClick
          }, st.createElement("path", {
              d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
          }), st.createElement("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
          }))
      }
  }
  const at = P.React;
  class ct extends at.Component {
      render() {
          const e = this.props.size || "24px";
          return at.createElement("svg", {
              className: this.props.className || "",
              fill: "#FFFFFF",
              viewBox: "0 0 24 24",
              style: {
                  width: e,
                  height: e
              },
              onClick: this.props.onClick
          }, at.createElement("path", {
              fill: "none",
              d: "M0 0h24v24H0V0z"
          }), at.createElement("path", {
              d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
          }), at.createElement("path", {
              fill: "none",
              d: "M0 0h24v24H0z"
          }))
      }
  }
  const lt = P.React,
      dt = P.anchorClasses;
  class pt extends P.reactComponent {
      constructor(e) {
          super(e), this.onChange = this.onChange.bind(this), this.showSettings = this.showSettings.bind(this), this.setInitialState(), this.hasSettings = this.props.addon.plugin && "function" == typeof this.props.addon.plugin.getSettingsPanel, this.settingsPanel = "", this.edit = this.edit.bind(this), this.delete = this.delete.bind(this), this.reload = this.reload.bind(this)
      }
      setInitialState() {
          this.state = {
              checked: this.props.enabled,
              settings: !1,
              reloads: 0
          }
      }
      showSettings() {
          this.hasSettings && this.setState({
              settings: !0
          })
      }
      closeSettings() {
          this.panelRef.current.innerHTML = "", this.setState({
              settingsOpen: !1
          })
      }
      componentDidUpdate() {
          this.state.settings && ("object" == typeof this.settingsPanel && this.refs.settingspanel.appendChild(this.settingsPanel), h["fork-ps-3"] && setImmediate(() => {
              const e = this.refs.cardNode,
                  t = e.closest(".scroller");
              if (!((e, t) => {
                      const n = e.scrollTop,
                          r = n + e.clientHeight,
                          o = t.offsetTop,
                          s = o + t.clientHeight;
                      return o < n || s > r
                  })(t, e)) return;
              const n = B.offset(e),
                  r = B.offset(t),
                  o = t.scrollTop,
                  s = n.top - r.top + t.scrollTop - 30;
              B.animate({
                  duration: 300,
                  update: function (e) {
                      t.scrollTop = s > o ? o + e * (s - o) : o - e * (o - s)
                  }
              })
          }))
      }
      getString(e) {
          return e ? "string" == typeof e ? e : e.toString() : "???"
      }
      get settingsComponent() {
          try {
              this.settingsPanel = this.props.addon.plugin.getSettingsPanel()
          } catch (e) {
              z.err("Plugins", "Unable to get settings panel for " + this.name + ".", e)
          }
          return P.react.createElement("div", {
              className: "bd-card bd-addon-card settings-open ui-switch-item",
              ref: "cardNode"
          }, P.react.createElement("div", {
              style: {
                  float: "right",
                  cursor: "pointer"
              },
              onClick: () => {
                  this.refs.settingspanel.innerHTML = "", this.setState({
                      settings: !1
                  })
              }
          }, P.react.createElement(je, null)), "object" == typeof this.settingsPanel && P.react.createElement("div", {
              id: "plugin-settings-" + this.name,
              className: "plugin-settings",
              ref: "settingspanel"
          }), "object" != typeof this.settingsPanel && P.react.createElement("div", {
              id: "plugin-settings-" + this.name,
              className: "plugin-settings",
              ref: "settingspanel",
              dangerouslySetInnerHTML: {
                  __html: this.settingsPanel
              }
          }))
      }
      buildTitle(e, t, n) {
          const r = "{{name}} v{{version}} by {{author}}".split(/({{[A-Za-z]+}})/),
              o = r.findIndex(e => "{{name}}" == e);
          o && (r[o] = lt.createElement("span", {
              className: "name bda-name"
          }, e));
          const s = r.findIndex(e => "{{version}}" == e);
          o && (r[s] = lt.createElement("span", {
              className: "version bda-version"
          }, t));
          const i = r.findIndex(e => "{{author}}" == e);
          if (o) {
              const e = {
                  className: "author bda-author"
              };
              (n.link || n.id) && (e.className += ` ${dt.anchor} ${dt.anchorUnderlineOnHover}`, e.target = "_blank", n.link && (e.href = n.link), n.id && (e.onClick = () => {
                  P.LayerStack.popLayer(), P.openDM(n.id)
              })), r[i] = lt.createElement(n.link || n.id ? "a" : "span", e, n.name)
          }
          return r.flat()
      }
      makeLink(e, t) {
          const n = {
              className: "bda-link bda-link-website",
              target: "_blank"
          };
          return "string" == typeof t && (n.href = t), "function" == typeof t && (n.onClick = e => {
              e.preventDefault(), e.stopPropagation(), t()
          }), P.react.createElement("a", n, e)
      }
      makeButton(e, t, n) {
          return lt.createElement(ke, {
              color: "black",
              side: "top",
              text: e
          }, lt.createElement("div", {
              className: "bd-addon-button",
              onClick: n
          }, t))
      }
      get links() {
          const e = [],
              t = this.props.addon;
          return t.website && e.push(this.makeLink("Website", t.website)), t.source && e.push(this.makeLink("Source", t.source)), t.invite && e.push(this.makeLink("Support Server", () => {
              const e = /\.gg\/(.*)$/;
              let n = t.invite;
              e.test(n) && (n = n.match(e)[1]), P.LayerStack.popLayer(), P.InviteActions.acceptInviteAndTransitionToInviteChannel(n)
          })), t.donate && e.push(this.makeLink("Donate", t.donate)), t.patreon && e.push(this.makeLink("Patreon", t.patreon)), e
      }
      get footer() {
          const e = this.links;
          return (e.length || this.hasSettings) && P.react.createElement("div", {
              className: "bd-card-footer bda-footer"
          }, P.react.createElement("span", {
              className: "bd-addon-links bda-links"
          }, ...e.map((t, n) => n < e.length - 1 ? [t, " | "] : t).flat()), this.hasSettings && P.react.createElement("button", {
              onClick: this.showSettings,
              className: "bd-button bda-settings-button",
              disabled: !this.state.checked
          }, "Settings"))
      }
      onChange() {
          this.props.toggle && this.props.toggle(this.name), this.setState({
              checked: !this.state.checked
          })
      }
      edit() {
          this.props.edit(this.name)
      }
      delete() {
          this.props.remove(this.name)
      }
      reload() {
          this.props.reload(this.name)
      }
      get name() {
          return this.getString(this.props.addon.name)
      }
      get author() {
          return this.getString(this.props.addon.author)
      }
      get description() {
          return this.getString(this.props.addon.description)
      }
      get version() {
          return this.getString(this.props.addon.version)
      }
      render() {
          if (this.state.settings) return this.settingsComponent;
          const {
              authorId: e,
              authorLink: t
          } = this.props.addon;
          return P.react.createElement("div", {
              className: "bd-card bd-addon-card settings-closed ui-switch-item"
          }, P.react.createElement("div", {
              className: "bd-addon-header bda-header"
          }, P.react.createElement("div", {
              className: "bd-card-title bda-header-title"
          }, this.buildTitle(this.name, this.version, {
              name: this.author,
              id: e,
              link: t
          })), P.react.createElement("div", {
              className: "bd-addon-controls bda-controls"
          }, this.props.edit && this.makeButton("Edit", lt.createElement(it, {
              className: "bd-icon"
          }), this.edit), this.props.remove && this.makeButton("Delete", lt.createElement(ct, {
              className: "bd-icon"
          }), this.delete), this.props.reload && this.makeButton("Reload", lt.createElement(ot, {
              className: "bd-icon"
          }), this.reload), lt.createElement(Ve, {
              onChange: this.onChange,
              checked: this.state.checked
          }))), P.react.createElement("div", {
              className: "bd-scroller-wrap bda-description-wrap scroller-wrap fade"
          }, P.react.createElement("div", {
              className: "bd-scroller bd-addon-description bda-description scroller"
          }, this.description)), this.footer)
      }
  }
  const ht = pt.prototype.render;
  Object.defineProperty(pt.prototype, "render", {
      enumerable: !1,
      configurable: !1,
      set: function () {
          console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins")
      },
      get: () => ht
  });
  const ut = P.React;
  class mt extends ut.Component {
      render() {
          const e = this.props.size || "16px";
          return ut.createElement("svg", {
              className: this.props.className || "",
              fill: "#FFFFFF",
              viewBox: "0 0 24 24",
              style: {
                  width: e,
                  height: e
              }
          }, ut.createElement("path", {
              d: "M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"
          }))
      }
  }
  const gt = P.React;
  class bt extends gt.Component {
      constructor(e) {
          super(e), this.state = {
              open: !1,
              value: this.props.value || this.props.options[0].value
          }, this.dropdown = gt.createRef(), this.onChange = this.onChange.bind(this), this.showMenu = this.showMenu.bind(this), this.hideMenu = this.hideMenu.bind(this)
      }
      showMenu(e) {
          e.preventDefault(), this.setState({
              open: !0
          }, () => {
              document.addEventListener("click", this.hideMenu)
          })
      }
      hideMenu() {
          this.setState({
              open: !1
          }, () => {
              document.removeEventListener("click", this.hideMenu)
          })
      }
      onChange(e) {
          this.setState({
              value: e
          }), this.props.onChange && this.props.onChange(e)
      }
      get selected() {
          return this.props.options.find(e => e.value == this.state.value)
      }
      get options() {
          const e = this.selected;
          return gt.createElement("div", {
              className: "bd-select-options"
          }, this.props.options.map(t => gt.createElement("div", {
              className: "bd-select-option" + (e.value == t.value ? " selected" : ""),
              onClick: this.onChange.bind(this, t.value)
          }, t.label)))
      }
      render() {
          const e = "transparent" == this.props.style ? " bd-select-transparent" : "",
              t = this.state.open ? " menu-open" : "";
          return gt.createElement("div", {
              className: `bd-select${e}${t}`,
              onClick: this.showMenu,
              ref: this.dropdown
          }, gt.createElement("div", {
              className: "bd-select-value"
          }, this.selected.label), gt.createElement(mt, {
              className: "bd-select-arrow"
          }), this.state.open && this.options)
      }
  }
  const ft = P.React;
  class yt extends ft.Component {
      render() {
          const e = this.props.size || "16px";
          return ft.createElement("svg", {
              className: this.props.className || "",
              fill: "#FFFFFF",
              viewBox: "0 0 24 24",
              style: {
                  width: e,
                  height: e
              }
          }, ft.createElement("path", {
              fill: "none",
              d: "M0 0h24v24H0V0z"
          }), ft.createElement("path", {
              d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          }))
      }
  }
  const vt = P.React;
  class xt extends vt.Component {
      render() {
          return vt.createElement("div", {
              className: "bd-search-wrapper"
          }, vt.createElement("input", {
              onChange: this.props.onChange,
              onKeyDown: this.props.onKeyDown,
              type: "text",
              className: "bd-search",
              placeholder: this.props.placeholder,
              maxLength: "50"
          }), vt.createElement(yt, null))
      }
  }

  function wt() {
      return (wt = Object.assign || function (e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
      }).apply(this, arguments)
  }
  const kt = A("Tooltip"),
      Et = P.react;
  class Ct extends P.reactComponent {
      constructor(e) {
          super(e), this.state = {
              sort: "name",
              ascending: !0,
              query: ""
          }, this.isPlugins = "plugins" == this.props.type, this.cookie = this.isPlugins ? S : N, this.manager = this.isPlugins ? U : '', this.sort = this.sort.bind(this), this.reverse = this.reverse.bind(this), this.search = this.search.bind(this)
      }
      openFolder() {
          const e = n(0).shell;
          (e.openPath || e.openItem)(this.isPlugins ? Y.pluginsFolder : Y.themesFolder)
      }
      edit(e) {
          console.log(e), this.manager.edit(e)
      }
      async delete(e) {
          await this.confirmDelete(e) && this.manager.delete(e)
      }
      confirmDelete(e) {
          return new Promise(t => {
              At.showConfirmationModal("Are You Sure?", `Are you sure you want to delete ${e}?`, {
                  danger: !0,
                  confirmText: "Delete",
                  onConfirm: () => {
                      t(!0)
                  },
                  onCancel: () => {
                      t(!1)
                  }
              })
          })
      }
      get sortOptions() {
          return [{
              label: "Name",
              value: "name"
          }, {
              label: "Author",
              value: "author"
          }, {
              label: "Version",
              value: "version"
          }, {
              label: "Recently Added",
              value: "added"
          }, {
              label: "Last Modified",
              value: "modified"
          }, {
              label: "File Size",
              value: "size"
          }]
      }
      get directions() {
          return [{
              label: "Ascending",
              value: !0
          }, {
              label: "Descending",
              value: !1
          }]
      }
      reverse(e) {
          this.setState({
              ascending: e
          })
      }
      sort(e) {
          this.setState({
              sort: e
          })
      }
      search(e) {
          this.setState({
              query: e.target.value.toLocaleLowerCase()
          })
      }
      getProps(e) {
          return {
              key: this.getName(e),
              enabled: this.cookie[this.getName(e)],
              toggle: this.manager.toggle.bind(this.manager),
              remove: this.delete.bind(this),
              addon: e
          }
      }
      getString(e) {
          return e ? "string" == typeof e ? e : e.toString() : "???"
      }
      getAddons() {
          const e = this.props.list.sort((e, t) => {
              const n = this.state.sort.charAt(0).toUpperCase() + this.state.sort.slice(1),
                  r = e.plugin && e.plugin["get" + n] ? this.getString(e.plugin["get" + n]()) : e[this.state.sort],
                  o = t.plugin && t.plugin["get" + n] ? this.getString(t.plugin["get" + n]()) : t[this.state.sort];
              return "string" == typeof r ? r.toLocaleLowerCase().localeCompare(o.toLocaleLowerCase()) : r > o ? 1 : o > r ? -1 : 0
          });
          this.state.ascending || e.reverse();
          const t = [];
          for (let n = 0; n < e.length; n++) {
              const r = e[n];
              if (this.state.query) {
                  let e = null;
                  const t = this.getName(r),
                      n = this.getAuthor(r),
                      o = this.getDescription(r),
                      s = this.getVersion(r);
                  if (t && (e = t.toLocaleLowerCase().includes(this.state.query)), n && (e = e || n.toLocaleLowerCase().includes(this.state.query)), o && (e = e || o.toLocaleLowerCase().includes(this.state.query)), s && (e = e || s.toLocaleLowerCase().includes(this.state.query)), !e) continue
              }
              const o = this.getProps(r);
              t.push(Et.createElement(tt, null, Et.createElement(pt, wt({}, o, {
                  reload: !h["fork-ps-5"] && this.manager.reload.bind(this.manager)
              }))))
          }
          return t
      }
      getName(e) {
          return this.getString(e.name)
      }
      getAuthor(e) {
          return this.getString(e.author)
      }
      getDescription(e) {
          return this.getString(e.description)
      }
      getVersion(e) {
          return this.getString(e.version)
      }
      render() {
          const e = Et.createElement(kt, {
                  color: "black",
                  position: "top",
                  text: "Reload List"
              }, e => Et.createElement(ot, wt({}, e, {
                  className: "bd-icon bd-reload bd-reload-header",
                  size: "18px",
                  onClick: async () => {
                      this.isPlugins ? U.updatePluginList() : '', this.forceUpdate()
                  }
              }))),
              t = this.getAddons();
          return Et.createElement(ze, {
              contentColumn: !0,
              fade: !0,
              dark: !0
          }, Et.createElement(rt, {
              title: `${this.props.type.toUpperCase()}—${t.length}`
          }, Et.createElement("button", {
              key: "folder-button",
              className: "bd-button bd-pfbtn",
              onClick: this.openFolder.bind(this)
          }, "Open ", this.isPlugins ? "Plugin" : "Theme", " Folder"), !h["fork-ps-5"] && e, Et.createElement("div", {
              className: "bd-controls bd-addon-controls"
          }, Et.createElement(xt, {
              onChange: this.search,
              placeholder: `Search ${this.props.type}...`
          }), Et.createElement("div", {
              className: "bd-addon-dropdowns"
          }, Et.createElement("div", {
              className: "bd-select-wrapper"
          }, Et.createElement("label", {
              className: "bd-label"
          }, "Sort by:"), Et.createElement(bt, {
              options: this.sortOptions,
              onChange: this.sort,
              style: "transparent"
          })), Et.createElement("div", {
              className: "bd-select-wrapper"
          }, Et.createElement("label", {
              className: "bd-label"
          }, "Order:"), Et.createElement(bt, {
              options: this.directions,
              onChange: this.reverse,
              style: "transparent"
          })))), Et.createElement("div", {
              className: "bda-slist bd-addon-list"
          }, t)), Et.createElement(Ae, {
              key: "tools"
          }))
      }
  }
  const Mt = Ct.prototype.render;
  Object.defineProperty(Ct.prototype, "render", {
      enumerable: !1,
      configurable: !1,
      set: function () {
          console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins")
      },
      get: () => Mt
  });
  var St = new class {
      constructor() {
          this.sideBarOnClick = this.sideBarOnClick.bind(this), this.onChange = this.onChange.bind(this), this.updateSettings = this.updateSettings.bind(this), this.sidebar = new Ee(this.sideBarOnClick), this.showOriginal = this.showOriginal.bind(this)
      }
      get root() {
          const e = B.query("#bd-settingspane-container");
          return e || (this.injectRoot() ? this.root : null)
      }
      injectRoot() {
          const e = B.query(".layer-3QrUeG .standardSidebarView-3F1I7i, .layer-3QrUeG .ui-standard-sidebar-view");
          if (!e) return !1;
          const t = B.createElement('<div id="bd-settingspane-container" class="contentRegion-3nDuYy content-region">');
          return e.append(t), z.onRemoved(t, () => {
              P.reactDom.unmountComponentAtNode(t)
          }), !0
      }
      get coreSettings() {
          const e = this.getSettings("core");
          return [...new Set(e.map(e => e.category))].map(t => ({
              title: t,
              settings: e.filter(e => e.category == t)
          }))
      }
      // get emoteSettings() {
      //     return this.getSettings("emote")
      // }
      getSettings(e) {
          return Object.keys(d).reduce((t, n) => {
              const r = d[n];
              return r.cat === e && r.implemented && !r.hidden && (r.text = n, t.push(r)), t
          }, [])
      }
      sideBarOnClick(e) {
          switch (B.query(".contentRegion-3nDuYy, .content-region").style.display = "none", this.root.style.display = "", e) {
              // case "core":
              //     this.renderCoreSettings();
              //     break;
              // case "emotes":
              //     this.renderEmoteSettings();
              //     break;
              case "customcss":
                  this.renderCustomCssEditor();
                  break;
              case "plugins":
              case "themes":
                  this.renderAddonPane(e)
          }
      }
      onClick() {}
      onChange(e, t) {
          this.updateSettings(e, t)
      }
      updateSettings(e, t) {
          h[e] = t, "bda-gs-2" == e && (t ? B.addClass(document.body, "bd-minimal") : B.removeClass(document.body, "bd-minimal")), "bda-gs-3" == e && (t ? B.addClass(document.body, "bd-minimal-chan") : B.removeClass(document.body, "bd-minimal-chan")), "bda-gs-1" == e && (t ? Ge.addButton() : Ge.removeButton()), "bda-gs-4" == e && (t ? qe.start() : qe.stop()), "bda-gs-5" == e && (t ? B.addClass(B.query("#app-mount"), "bda-dark") : B.removeClass(B.query("#app-mount"), "bda-dark")), t && "bda-gs-6" == e && Me.inject24Hour(), "bda-gs-7" == e && (t ? Ce.injectColoredText() : Ce.removeColoredText()), "fork-ps-4" == e && (t ? We.start() : We.stop()), "fork-ps-5" == e && (t ? (Y.watchContent("plugin"), Y.watchContent("theme")) : (Y.unwatchContent("plugin"), Y.unwatchContent("theme"))), "fork-wp-1" == e && (z.setWindowPreference("transparent", t), t ? z.setWindowPreference("backgroundColor", null) : z.setWindowPreference("backgroundColor", "#2f3136")), "bda-gs-8" == e && (t ? _e.startDebugListener() : _e.stopDebugListener()), "fork-dm-1" == e && (t ? _e.startCopySelector() : _e.stopCopySelector()), "reactDevTools" === e && (t ? Le.start() : Le.stop()), this.saveSettings()
      }
      async initializeSettings() {
          h.reactDevTools && Le.start(), h["bda-gs-2"] && B.addClass(document.body, "bd-minimal"), h["bda-gs-3"] && B.addClass(document.body, "bd-minimal-chan"), h["bda-gs-1"] && Ge.addButton(), h["bda-gs-4"] && qe.start(), h["bda-gs-5"] && B.addClass(B.query("#app-mount"), "bda-dark"), h["bda-gs-6"] && Me.inject24Hour(), h["bda-gs-7"] && Ce.injectColoredText(), h["fork-ps-4"] && We.start(), h["fork-ps-5"] && (Y.watchContent("plugin")), h["bda-gs-8"] && _e.startDebugListener(), h["fork-dm-1"] && _e.startCopySelector(), this.saveSettings()
      }
      saveSettings() {
          ne.setSettingGroup("settings", h)
      }
      loadSettings() {
          Object.assign(h, ne.getSettingGroup("settings"))
      }
      showOriginal() {
          P.reactDom.unmountComponentAtNode(this.root), this.root.style.display = "none", B.query(".contentRegion-3nDuYy, .content-region").style.display = ""
      }
      renderSidebar() {
          const e = document.querySelectorAll("[class*='side-'] > [class*='item-']");
          for (const t of e) t.removeEventListener("click", this.showOriginal), t.addEventListener("click", this.showOriginal);
          this.sidebar.render()
      }
      
      // get emoteComponent() {
      //     return P.react.createElement(ze, {
      //         contentColumn: !0,
      //         fade: !0,
      //         dark: !0
      //     }, P.react.createElement(Ye, {
      //         key: "espanel",
      //         title: "Emote Settings",
      //         onChange: this.onChange,
      //         settings: this.emoteSettings,
      //         button: {
      //             title: "Clear Emote Cache",
      //             onClick: () => {
      //                 le.clearEmoteData(), le.init(), ie.init()
      //             }
      //         }
      //     }), P.react.createElement(Ae, {
      //         key: "tools"
      //     }))
      // }
      get customCssComponent() {
          return P.react.createElement(ze, {
              contentColumn: !0,
              fade: !0,
              dark: !0
          }, P.react.createElement(et, {
              key: "csseditor"
          }), P.react.createElement(Ae, {
              key: "tools"
          }))
      }
      // renderEmoteSettings() {
      //     const e = this.root;
      //     if (!e) return z.err("SettingsPanel", "FAILED TO LOCATE ROOT: .layer-3QrUeG .standardSidebarView-3F1I7i");
      //     P.reactDom.render(this.emoteComponent, e)
      // }
      renderCustomCssEditor() {
          const e = this.root;
          if (!e) return z.err("SettingsPanel", "FAILED TO LOCATE ROOT: .layer-3QrUeG .standardSidebarView-3F1I7i");
          P.reactDom.render(this.customCssComponent, e)
      }
      renderAddonPane(e) {
          if (!this.root) return z.err("SettingsPanel", "FAILED TO LOCATE ROOT: .layer-3QrUeG .standardSidebarView-3F1I7i");
          class t extends P.react.Component {
              constructor(e) {
                  super(e), this.prefix = this.props.type.replace("s", ""), this.onChange = this.onChange.bind(this)
              }
              componentDidMount() {
                  F.on(this.prefix + "-reloaded", this.onChange), F.on(this.prefix + "-loaded", this.onChange), F.on(this.prefix + "-unloaded", this.onChange)
              }
              componentWillUnmount() {
                  F.off(this.prefix + "-reloaded", this.onChange), F.off(this.prefix + "-loaded", this.onChange), F.off(this.prefix + "-unloaded", this.onChange)
              }
              onChange() {
                  this.props.onChange(this.props.type)
              }
              render() {
                  return this.props.children
              }
          }
          const n = t.prototype.render;
          Object.defineProperty(t.prototype, "render", {
              enumerable: !1,
              configurable: !1,
              set: function () {
                  console.warn("Addon policy for plugins #5 https://github.com/rauenzi/BetterDiscordApp/wiki/Addon-Policies#plugins")
              },
              get: () => n
          });
          const r = "plugins" === e ? Object.values(M) : Object.values(C);
          return P.reactDom.render(P.react.createElement(t, {
              type: e,
              onChange: this.sideBarOnClick
          }, P.react.createElement(Ct, {
              type: e,
              list: r
          })), this.root)
      }
  };
  class Nt extends P.reactComponent {
      render() {
          return P.react.createElement("svg", {
              height: "100%",
              width: this.props.size || "16px",
              className: "bd-logo " + this.props.className,
              style: {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
              },
              viewBox: "0 0 2000 2000"
          }, P.react.createElement("metadata", null), P.react.createElement("defs", null, P.react.createElement("filter", {
              id: "shadow1"
          }, P.react.createElement("feDropShadow", {
              dx: "20",
              dy: "0",
              stdDeviation: "20",
              "flood-color": "rgba(0,0,0,0.35)"
          })), P.react.createElement("filter", {
              id: "shadow2"
          }, P.react.createElement("feDropShadow", {
              dx: "15",
              dy: "0",
              stdDeviation: "20",
              "flood-color": "rgba(255,255,255,0.15)"
          })), P.react.createElement("filter", {
              id: "shadow3"
          }, P.react.createElement("feDropShadow", {
              dx: "10",
              dy: "0",
              stdDeviation: "20",
              "flood-color": "rgba(0,0,0,0.35)"
          }))), P.react.createElement("g", null, P.react.createElement("path", {
              style: {
                  filter: "url(#shadow3)"
              },
              d: "M1195.44+135.442L1195.44+135.442L997.6+136.442C1024.2+149.742+1170.34+163.542+1193.64+179.742C1264.34+228.842+1319.74+291.242+1358.24+365.042C1398.14+441.642+1419.74+530.642+1422.54+629.642L1422.54+630.842L1422.54+632.042C1422.54+773.142+1422.54+1228.14+1422.54+1369.14L1422.54+1370.34L1422.54+1371.54C1419.84+1470.54+1398.24+1559.54+1358.24+1636.14C1319.74+1709.94+1264.44+1772.34+1193.64+1821.44C1171.04+1837.14+1025.7+1850.54+1000+1863.54L1193.54+1864.54C1539.74+1866.44+1864.54+1693.34+1864.54+1296.64L1864.54+716.942C1866.44+312.442+1541.64+135.442+1195.44+135.442Z",
              fill: "#171717",
              opacity: "1"
          }), P.react.createElement("path", {
              style: {
                  filter: "url(#shadow2)"
              },
              d: "M1695.54+631.442C1685.84+278.042+1409.34+135.442+1052.94+135.442L361.74+136.442L803.74+490.442L1060.74+490.442C1335.24+490.442+1335.24+835.342+1060.74+835.342L1060.74+1164.84C1150.22+1164.84+1210.53+1201.48+1241.68+1250.87C1306.07+1353+1245.76+1509.64+1060.74+1509.64L361.74+1863.54L1052.94+1864.54C1409.24+1864.54+1685.74+1721.94+1695.54+1368.54C1695.54+1205.94+1651.04+1084.44+1572.64+999.942C1651.04+915.542+1695.54+794.042+1695.54+631.442Z",
              fill: "#3E82E5",
              opacity: "1"
          }), P.react.createElement("path", {
              style: {
                  filter: "url(#shadow1)"
              },
              d: "M1469.25+631.442C1459.55+278.042+1183.05+135.442+826.65+135.442L135.45+135.442L135.45+1004C135.45+1004+135.427+1255.21+355.626+1255.21C575.825+1255.21+575.848+1004+575.848+1004L577.45+490.442L834.45+490.442C1108.95+490.442+1108.95+835.342+834.45+835.342L664.65+835.342L664.65+1164.84L834.45+1164.84C923.932+1164.84+984.244+1201.48+1015.39+1250.87C1079.78+1353+1019.47+1509.64+834.45+1509.64L135.45+1509.64L135.45+1864.54L826.65+1864.54C1182.95+1864.54+1459.45+1721.94+1469.25+1368.54C1469.25+1205.94+1424.75+1084.44+1346.35+999.942C1424.75+915.542+1469.25+794.042+1469.25+631.442Z",
              fill: "#FFFFFF",
              opacity: "1"
          })))
      }
  }
  const {
      ipcRenderer: Tt
  } = n(0);

  function Dt() {
      Tt.invoke("bd-config").then(e => {
          this.hasStarted || (Object.assign(g, e), this.init())
      }), Tt.invoke("bd-injector-info").then(e => {
          g.version = e.version;
          n(3).get({
              url: "https://gitcdn.xyz/repo/rauenzi/BetterDiscordApp/injector/package.json",
              json: !0
          }, (e, t, n) => {
              let r = "0.6.1";
              e || 200 != t.statusCode || (r = n.version || r), g.latestVersion = r, this.checkInjectorUpdate()
          })
      })
  }
  Dt.prototype.setConfig = function (e) {
      this.hasStarted || Object.assign(g, e)
  }, Dt.prototype.init = async function () {
      if (this.hasStarted) return;
      if (this.hasStarted = !0, !Array.prototype.flat) return void z.alert("Not Supported", "BetterDiscord v" + c + " does not support this old version (" + i + ") of Discord. Please update your Discord installation before proceeding.");
      if (g.version < a) return void z.alert("Not Supported", "BetterDiscord v" + g.version + " (your version) is not supported by the latest js (" + c + ").<br><br> Please download the latest version from <a href='https://github.com/rauenzi/BetterDiscordApp/releases/latest' target='_blank'>GitHub</a>");
      if (window.ED) return void z.alert("Not Supported", "BandagedBD does not work with EnhancedDiscord. Please uninstall one of them.");
      if (window.WebSocket && window.WebSocket.name && window.WebSocket.name.includes("Patched")) return void z.alert("Not Supported", "BandagedBD does not work with Powercord. Please uninstall one of them.");
      z.log("Startup", "Initializing Settings"), this.initSettings(), 
      // z.log("Startup", "Initializing EmoteModule"), window.emotePromise = le.init().then(() => {
      //     le.initialized = !0, z.log("Startup", "Initializing QuickEmoteMenu"), ie.init()
      // }), 
      await this.injectExternals(), await this.checkForGuilds(), P.initialize(), z.log("Startup", "Updating Settings"), St.initializeSettings(), z.log("Startup", "Loading Plugins"), U.loadPlugins(), B.addStyle("customcss", atob(ne.getBDData("bdcustomcss"))), window.addEventListener("beforeunload", (function () {
          h["bda-dc-0"] && document.querySelector(".btn.btn-disconnect").click()
      })), z.log("Startup", "Removing Loading Icon"), document.getElementsByClassName("bd-loaderv2").length && document.getElementsByClassName("bd-loaderv2")[0].remove(), z.log("Startup", "Initializing Main Observer"), this.initObserver(), h["fork-ps-1"] && (z.log("Startup", "Collecting Startup Errors"), z.showContentErrors({
          plugins: u,
          themes: m
      }));
      const e = ne.getBDData("version");
      c > e && (l && this.showChangelogModal(l), ne.setBDData("version", c)), z.suppressErrors(this.patchSocial.bind(this), "BD Social Patch")(), z.suppressErrors(this.patchGuildPills.bind(this), "BD Guild Pills Patch")(), z.suppressErrors(this.patchGuildListItems.bind(this), "BD Guild List Items Patch")(), z.suppressErrors(this.patchGuildSeparator.bind(this), "BD Guild Separator Patch")(), z.suppressErrors(this.patchMessageHeader.bind(this), "BD Badge Chat Patch")(), z.suppressErrors(this.patchMemberList.bind(this), "BD Badge Member List Patch")()
  }, Dt.prototype.checkForGuilds = function () {
      let e = 0;
      return new Promise(t => {
          const n = function () {
              const r = P.guildClasses.wrapper.split(" ")[0];
              document.querySelectorAll("." + r).length > 0 && e++;
              const o = P.guildClasses.listItem.split(" ")[0],
                  s = P.guildClasses.blobContainer.split(" ")[0];
              return document.querySelectorAll(`.${r} .${o} .${s}`).length > 0 || e >= 50 ? t(g.deferLoaded = !0) : void setTimeout(n, 100)
          };
          "loading" != document.readyState && setTimeout(n, 100), document.addEventListener("DOMContentLoaded", () => {
              setTimeout(n, 100)
          })
      })
  }, Dt.prototype.injectExternals = async function () {
      if (await B.addScript("ace-script", "https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.js"), window.require.original && (window.require = window.require.original), !window.$ || !window.jQuery) try {
          await B.addScript("jquery", "https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js")
      } catch (e) {
          try {
              await B.addScript("jquery", "https://cdn.jsdelivr.net/gh/jquery/jquery@2.0.0/jquery.min.js")
          } catch (e) {
              z.alert("jQuery Not Loaded", "Unable to load jQuery, some plugins may fail to work. Proceed at your own risk.")
          }
      }
  }, Dt.prototype.initSettings = function () {
      if (ne.initialize(), ne.getSettingGroup("settings")) {
          St.loadSettings();
          for (const e in p) null == h[e] && (h[e] = p[e], St.saveSettings())
      } else Object.assign(h, p), St.saveSettings()
  }, Dt.prototype.initObserver = function () {
      new MutationObserver(e => {
          for (let t = 0, n = e.length; t < n; t++) {
              const n = e[t];
              if (void 0 !== U && U.rawObserver(n), !(n.addedNodes.length && n.addedNodes[0] instanceof Element)) continue;
              const r = n.addedNodes[0];
              r.classList.contains("layer-3QrUeG") && (r.getElementsByClassName("guild-settings-base-section").length && r.setAttribute("layer-id", "server-settings"), r.getElementsByClassName("socialLinks-3jqNFy").length && (r.setAttribute("layer-id", "user-settings"), r.setAttribute("id", "user-settings"), document.getElementById("bd-settings-sidebar") || St.renderSidebar())), r.parentElement == document.body && r.querySelector("#ace_settingsmenu") && (r.id = "ace_settingsmenu_container"), r.classList.contains("layer-v9HyYc") && r.getElementsByClassName("emojiPicker-3m1S-j").length && !r.querySelector(".emojiPicker-3m1S-j").parentElement.classList.contains("animatorLeft-1EQxU0")
          }
      }).observe(document, {
          childList: !0,
          subtree: !0
      })
  }, Dt.prototype.showChangelogModal = function (e = {}) {
      return z.showChangelogModal(e)
  }, Dt.prototype.alert = function (e, t) {
      return z.alert(e, t)
  }, Dt.prototype.patchSocial = function () {
      if (this.socialPatch) return;
      const e = I(e => "TabBar" == e.displayName),
          t = I(e => "Anchor" == e.displayName);
      e && (this.socialPatch = z.monkeyPatch(e.prototype, "render", {
          after: e => {
              const n = e.returnValue.props.children;
              if (!n || !n.length || n.length < 3) return;
              if ("Separator" !== n[n.length - 3].type.displayName) return;
              if (!n[n.length - 2].type.toString().includes("socialLinks")) return;
              if (t) {
                  const e = n[n.length - 2].type,
                      r = function () {
                          const n = e(...arguments);
                          return n.props.children.push(P.React.createElement(ke, {
                              color: "black",
                              side: "top",
                              text: "BandagedBD"
                          }, P.React.createElement(t, {
                              className: "bd-social-link",
                              href: "https://github.com/rauenzi/BetterDiscordApp",
                              title: "BandagedBD",
                              target: "_blank"
                          }, P.React.createElement(Nt, {
                              size: "16px",
                              className: "bd-social-logo"
                          })))), n
                      };
                  n[n.length - 2].type = r
              }
              const r = P.react.createElement("div", {
                      className: "colorMuted-HdFt4q size12-3cLvbJ"
                  }, "Injector " + g.version),
                  o = P.react.createElement("div", {
                      className: "colorMuted-HdFt4q size12-3cLvbJ"
                  }, `BBD ${c} `),
                  s = n[n.length - 1].type;
              n[n.length - 1].type = function () {
                  const e = s(...arguments);
                  return e.props.children.splice(e.props.children.length - 1, 0, r), e.props.children.splice(1, 0, o), e
              }
          }
      }))
  };
  Dt.prototype.patchGuildListItems = function () {
      if (this.guildListItemsPatch) return;
      const e = function () {
              const e = j("wrapper", "unreadMentionsBar"),
                  t = j("guildsError", "selected"),
                  n = j("blobContainer");
              return Object.assign({}, e, t, n)
          }(),
          t = e.listItem.split(" ")[0],
          n = e.blobContainer.split(" ")[0],
          r = P.getInternalInstance(document.querySelector(`.${t} .${n}`).parentElement).return.type;
      r && (this.guildListItemsPatch = z.monkeyPatch(r.prototype, "render", {
          after: e => {
              if (e.returnValue && e.thisObject) {
                  const t = e.returnValue,
                      n = e.thisObject.props;
                  return t.props.className += " bd-guild", n.unread && (t.props.className += " bd-unread"), n.selected && (t.props.className += " bd-selected"), n.audio && (t.props.className += " bd-audio"), n.video && (t.props.className += " bd-video"), n.badge && (t.props.className += " bd-badge"), n.animatable && (t.props.className += " bd-animatable"), t
              }
          }
      }))
  }, Dt.prototype.patchGuildPills = function () {
      if (this.guildPillPatch) return;
      const e = I(e => e.default && !e.default.displayName && e.default.toString && e.default.toString().includes("translate3d"));
      e && (this.guildPillPatch = z.monkeyPatch(e, "default", {
          after: e => {
              const t = e.methodArguments[0];
              return t.unread && (e.returnValue.props.className += " bd-unread"), t.selected && (e.returnValue.props.className += " bd-selected"), t.hovered && (e.returnValue.props.className += " bd-hovered"), e.returnValue
          }
      }))
  }, Dt.prototype.patchGuildSeparator = function () {
      if (this.guildSeparatorPatch) return;
      const e = A("Guilds"),
          t = j("renderListItem");
      if (!t || !e) return;
      const n = function () {
          const e = t.Separator(...arguments);
          return e.props.className += " bd-guild-separator", e
      };
      this.guildSeparatorPatch = z.monkeyPatch(e.prototype, "render", {
          after: e => {
              e.returnValue.props.children[1].props.children[3].type = n
          }
      })
  }, Dt.prototype.patchMessageHeader = function () {
      if (this.messageHeaderPatch) return;
      const e = j("MessageTimestamp"),
          t = I(e => "Anchor" == e.displayName);
      t && e && e.default && (this.messageHeaderPatch = z.monkeyPatch(e, "default", {
          after: e => {
              const n = z.getNestedProp(e.methodArguments[0], "message.author"),
                  r = z.getNestedProp(e.returnValue, "props.children.1.props.children.1.props.children");
              r && n && n.id && "249746236008169473" === n.id && Array.isArray(r) && r.push(P.React.createElement(ke, {
                  color: "black",
                  side: "top",
                  text: "BandagedBD Developer"
              }, P.React.createElement(t, {
                  className: "bd-chat-badge",
                  href: "https://github.com/rauenzi/BetterDiscordApp",
                  title: "BandagedBD",
                  target: "_blank"
              }, P.React.createElement(Nt, {
                  size: "16px",
                  className: "bd-logo"
              }))))
          }
      }))
  }, Dt.prototype.patchMemberList = function () {
      if (this.memberListPatch) return;
      const e = A("MemberListItem"),
          t = I(e => "Anchor" == e.displayName);
      t && e && e.prototype && e.prototype.renderDecorators && (this.memberListPatch = z.monkeyPatch(e.prototype, "renderDecorators", {
          after: e => {
              const n = z.getNestedProp(e.thisObject, "props.user"),
                  r = z.getNestedProp(e.returnValue, "props.children");
              r && n && n.id && "249746236008169473" === n.id && Array.isArray(r) && r.push(P.React.createElement(ke, {
                  color: "black",
                  side: "top",
                  text: "BandagedBD Developer"
              }, P.React.createElement(t, {
                  className: "bd-member-badge",
                  href: "https://github.com/rauenzi/BetterDiscordApp",
                  title: "BandagedBD",
                  target: "_blank"
              }, P.React.createElement(Nt, {
                  size: "16px",
                  className: "bd-logo"
              }))))
          }
      }))
  }, Dt.prototype.checkInjectorUpdate = function () {
      const e = g.updater ? g.updater.LatestVersion : g.latestVersion;
      e > g.version && z.showConfirmationModal("Update Available", [`There is an update available for BandagedBD's Injector (${e}).`, "You can either update and restart now, or later."], {
          confirmText: "Update Now",
          cancelText: "Maybe Later",
          onConfirm: async () => {
              const e = () => {
                  z.alert("Could Not Update", "Unable to update automatically, please download the installer and reinstall normally.<br /><br /><a href='https://github.com/rauenzi/BetterDiscordApp/releases/latest' target='_blank'>Download Installer</a>")
              };
              try {
                  if (!await this.updateInjector()) return e();
                  const t = n(0).remote.app;
                  t.relaunch(), t.exit()
              } catch (t) {
                  e()
              }
          }
      })
  }, Dt.prototype.updateInjector = async function () {
      const e = ne.injectionPath;
      if (!e) return !1;
      const t = n(2),
          r = n(1),
          o = n(8),
          s = n(9),
          i = n(10),
          a = n(3),
          c = r.resolve(e, ".."),
          l = r.basename(e),
          d = "https://github.com/rauenzi/BetterDiscordApp/archive/injector.zip",
          p = r.resolve(c, "injector.zip"),
          h = r.resolve(c, "BetterDiscordApp-injector");
      z.log("InjectorUpdate", "Downloading " + d);
      let u = await new Promise(e => {
          a.get({
              url: d,
              encoding: null
          }, async (n, r, o) => {
              if (n || 200 !== r.statusCode) return e(!1);
              await new Promise(e => t.exists(p, e)) && await new Promise(e => t.rename(p, `${p}.bak${Math.round(performance.now())}`, e)), z.log("InjectorUpdate", "Writing " + p), t.writeFile(p, o, t => e(!t))
          })
      });
      if (!u) return u;
      await new Promise(e => t.exists(h, e)) && await new Promise(e => t.rename(h, `${h}.bak${Math.round(performance.now())}`, e));
      const m = await new Promise(e => s.open(p, {
          lazyEntries: !0
      }, (t, n) => e(n)));
      m.on("entry", (function (e) {
          if (e.fileName.endsWith("/")) return m.readEntry();
          z.log("InjectorUpdate", "Extracting " + e.fileName);
          const n = r.resolve(c, e.fileName);
          i.sync(r.dirname(n)), m.openReadStream(e, (function (e, r) {
              if (e) return u = !1;
              r.on("end", (function () {
                  m.readEntry()
              })), r.pipe(t.createWriteStream(n))
          }))
      })), m.readEntry(), await new Promise(e => m.once("end", e));
      const g = r.resolve(c, `${l}.bak${Math.round(performance.now())}`);
      return await new Promise(n => t.rename(e, g, n)), z.log("InjectorUpdate", `Renaming ${r.basename(h)} to ${l}`), u = await new Promise(n => t.rename(h, e, e => n(!e))), u ? u ? (await new Promise(e => o(g, e)), await new Promise(e => t.unlink(p, e)), z.log("InjectorUpdate", "Injector Updated!"), u) : (z.err("InjectorUpdate", "Something went wrong... restoring backups."), await new Promise(e => o(h, e)), await new Promise(n => t.rename(g, e, n)), u) : (z.err("InjectorUpdate", "Failed to rename the final directory"), u)
  };
  var It = new Dt;
  const Lt = {
      get React() {
          return P.React
      },
      get ReactDOM() {
          return P.ReactDom
      },
      get ReactComponent() {
          return P.ReactComponent
      },
      get WindowConfigFile() {
          return z.WindowConfigFile
      },
      get settings() {
          return d
      },
      // get emotes() {
      //     return k
      // },
      get screenWidth() {
          return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      },
      get screenHeight() {
          return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      },
      getAllWindowPreferences: function () {
          return z.getAllWindowPreferences()
      },
      getWindowPreference: function (e) {
          return z.getWindowPreference(e)
      },
      setWindowPreference: function (e, t) {
          return z.setWindowPreference(e, t)
      },
      injectCSS: function (e, t) {
          B.addStyle(B.escapeID(e), t)
      },
      clearCSS: function (e) {
          B.removeStyle(B.escapeID(e))
      },
      linkJS: function (e, t) {
          B.addScript(B.escapeID(e), t)
      },
      unlinkJS: function (e) {
          B.removeScript(B.escapeID(e))
      },
      getPlugin: function (e) {
          return M.hasOwnProperty(e) ? M[e].plugin : null
      },
      // getCore: function () {
      //     return z.warn("Deprecation Notice", "BdApi.getCore() will be removed in future versions."), It
      // },
      alert: function (e, t) {
          return z.showConfirmationModal(e, t, {
              cancelText: null
          })
      },
      showConfirmationModal: function (e, t, n = {}) {
          return z.showConfirmationModal(e, t, n)
      },
      showToast: function (e, t = {}) {
          z.showToast(e, t)
      },
      findModule: function (e) {
          return P.WebpackModules.find(e)
      },
      findAllModules: function (e) {
          return P.WebpackModules.findAll(e)
      },
      findModuleByProps: function (...e) {
          return P.WebpackModules.findByUniqueProperties(e)
      },
      findModuleByPrototypes: function (...e) {
          return P.WebpackModules.findByPrototypes(e)
      },
      findModuleByDisplayName: function (e) {
          return P.WebpackModules.findByDisplayName(e)
      },
      getInternalInstance: function (e) {
          if (e instanceof window.jQuery || e instanceof Element) return e instanceof jQuery && (e = e[0]), P.getInternalInstance(e)
      },
      loadData: function (e, t) {
          return ne.getPluginData(e, t)
      }
  };
  Lt.getData = Lt.loadData, Lt.saveData = function (e, t, n) {
      return ne.setPluginData(e, t, n)
  }, Lt.setData = Lt.saveData, Lt.deleteData = function (e, t) {
      return ne.deletePluginData(e, t)
  }, Lt.monkeyPatch = function (e, t, n) {
      return z.monkeyPatch(e, t, n)
  }, Lt.onRemoved = function (e, t) {
      return z.onRemoved(e, t)
  }, Lt.suppressErrors = function (e, t) {
      return z.suppressErrors(e, t)
  }, Lt.testJSON = function (e) {
      return z.testJSON(e)
  }, Lt.isPluginEnabled = function (e) {
      return !!S[e]
  }, Lt.isThemeEnabled = function (e) {
      return !!N[e]
  }, Lt.isSettingEnabled = function (e) {
      return !!h[e]
  }, Lt.enableSetting = function (e) {
      return St.onChange(e, !0)
  }, Lt.disableSetting = function (e) {
      return St.onChange(e, !1)
  }, Lt.toggleSetting = function (e) {
      return St.onChange(e, !h[e])
  }, Lt.getBDData = function (e) {
      return ne.getBDData(e)
  }, Lt.setBDData = function (e, t) {
      return ne.setBDData(e, t)
  };
  const jt = (e, t, n) => new class {
      get folder() {
          return n.folder
      }
      isEnabled(t) {
          return !!e[t]
      }
      enable(e) {
          return n.enable(e)
      }
      disable(e) {
          return n.disable(e)
      }
      toggle(t) {
          e[t] ? this.disable(t) : this.enable(t)
      }
      reload(e) {
          return n.reload(e)
      }
      get(e) {
          return t.hasOwnProperty(e) ? t[e].plugin ? t[e].plugin : t[e] : null
      }
      getAll() {
          return Object.keys(t).map(e => this.get(e)).filter(e => e)
      }
  };
  Lt.Plugins = jt(S, M, U);
  var At = Lt;
  ! function () {
      const e = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "contentWindow").get;
      Object.defineProperty(HTMLIFrameElement.prototype, "contentWindow", {
          get: function () {
              const t = Reflect.apply(e, this, arguments);
              return new Proxy(t, {
                  getOwnPropertyDescriptor: function (e, t) {
                      if ("localStorage" !== t) return Object.getOwnPropertyDescriptor(e, t)
                  },
                  get: function (e, t) {
                      if ("localStorage" === t) return null;
                      const n = e[t];
                      return "function" == typeof n ? n.bind(e) : n
                  }
              })
          }
      }), Object.defineProperty(Reflect, "apply", {
          value: Reflect.apply,
          writable: !1,
          configurable: !1
      }), Object.defineProperty(Function.prototype, "bind", {
          value: Function.prototype.bind,
          writable: !1,
          configurable: !1
      });
      const t = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function () {
          const e = arguments[1];
          return e.toLowerCase().includes("api/webhooks") ? null : Reflect.apply(t, this, arguments)
      }
  }(), (() => {
      const e = document.createElement("style");
      e.id = "bd-stylesheet", e.textContent = o.a.toString(), document.head.appendChild(e)
  })(), (() => {
      const e = document.createElement("div");
      e.className = "bd-loaderv2", e.title = "BandagedBD is loading...", document.body.appendChild(e)
  })();
  const Pt = (e, t) => {
          Object.defineProperty(window, e, {
              get: () => (z.warn("Deprecated Global", `"${e}" will be removed in future versions. Please only use BdApi.`), t)
          })
      },
      Bt = Object.keys(r);
  for (const e of Bt) Pt(e, r[e]);
  Pt("BDV2", P), Pt("pluginModule", U), Pt("Utils", z), Pt("BDEvents", F), Pt("settingsPanel", St), Pt("DataStore", ne), Pt("ContentManager", Y), Pt("ClassNormalizer", We), window.BdApi = At
}]);