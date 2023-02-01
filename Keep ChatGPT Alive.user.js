// ==UserScript==
// @name         Keep ChatGPT Alive
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Keeps ChatGPT responsive by automatically inputting a question every x minutes
// @author       new4u本爷有空 https://github.com/new4u
// @match        https://chat.openai.com/*
// @updateURL    https://raw.githubusercontent.com/new4u/KeepChatGPTAlive/main/Keep%20ChatGPT%20Alive.user.js
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  setInterval(function () {
    // input a question into the chat box
    const textarea = document.querySelector("textarea");
    textarea.value = "继续";
    textarea.dispatchEvent(new KeyboardEvent("keydown", {
      bubbles: true,
      cancelable: true,
      key: "Enter",
      code: "Enter",
      keyCode: 13
    }));
  }, 120000); // input a question every 1 minutes (1 minutes * 60 seconds/minute * 1000 milliseconds/second)
})();
