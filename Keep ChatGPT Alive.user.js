// ==UserScript==
// @name         Keep ChatGPT Running
// @namespace    https://github.com/new4u
// @version      0.4
// @description  Keeps ChatGPT responsive by automatically  regenerate every x minutes
// @author       new4u本爷有空
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @match        https://chat.openai.com/chat
// @connect      chat.openai.com
// @match        https://chat.openai.com/*
// @updateURL    https://raw.githubusercontent.com/new4u/KeepChatGPTAlive/main/Keep%20ChatGPT%20Alive.user.js
// @grant        none
// @copyright    2015-2023, new4u
// @license      GPL-3.0-only
// ==/UserScript==

(function() {
  'use strict';
  var count=0


  setInterval(() => {
      // const buttons = document.querySelectorAll('button[class*="btn relative btn-neutral border-0 md:border"]');
      const buttons = document.querySelectorAll('button');

      let found = false;

      buttons.forEach(button => {
          if (button.textContent === 'Regenerate response') {
              button.click();

              count++;
// 将count、小时、上下两次count的时间差，存到变量countHour中
              var d = new Date();
              var n = d.getHours();
              //utc时间
              var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
              //分别存在counttime[]中,以小时为index,值是count

              var counttime = new Array();
              counttime[n] = count;
              //每一个n+1,count归零
              counttime[n+1] = 0;
              // console.log(counttime[n]);
              // console.log(counttime[n+1]);

              // console.log(counttime[count]);
              // console.log(counttime[count-1]);
              // console.log(counttime[count]-counttime[count-1]);
              // console.log(counttime[count]-counttime[count-1]/3600000);
              console.log('Clicked button with text: Regenerate response次数+时长',counttime[n],n);
              found = true;
          }
      });

      if (!found) {
          console.log('Button with text: Regenerate response not found');
      }

  }, 150000);
})();
