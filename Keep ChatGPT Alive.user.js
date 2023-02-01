// ==UserScript==
// @name         Keep ChatGPT Alive 保持ChatGPT一直有效
// @namespace    https://github.com/new4u
// @version      0.3
// @description  Keeps ChatGPT responsive by automatically inputting a question every x minutes
// @author       new4u本爷有空
// @match        https://chat.openai.com/*
// @updateURL    https://raw.githubusercontent.com/new4u/KeepChatGPTAlive/main/Keep%20ChatGPT%20Alive.user.js
// @grant        none
// @copyright    2015-2022, new4u
// @license      GPL-3.0-only
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
