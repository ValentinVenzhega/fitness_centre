(()=>{"use strict";(()=>{const e=document.querySelector(".club-select").querySelector("ul");window.addEventListener("click",(t=>{const l=t.target;l.closest(".club-select")?e.style.display="block":l.closest(".club-select>ul")||(e.style.display="none")}))})(),(()=>{const e=document.querySelector(".fixed-gift"),t=document.querySelector("#free_visit_form"),l=document.querySelector("#callback_form"),s=document.querySelector("#gift"),o=document.getElementById("thanks");window.addEventListener("click",(n=>{const c=n.target;c.closest(".open-popup")?t.style.display="block":c.closest(".close-form")?t.style.display="none":c.closest("#form2")||(t.style.display="none"),c.closest(".callback-btn")?l.style.display="block":c.closest(".close_icon")?l.style.display="none":c.closest("#form1")||(l.style.display="none"),c.closest(".fixed-gift")?(s.style.display="block",e.style.display="none"):c.closest("#gift>.close_icon")||c.closest(".close-btn")?s.style.display="none":c.closest(".form-content")||(s.style.display="none"),c.closest("#thanks .sloce-icon")?o.style.display="none":c.closest("#thanks .form-content")?c.closest("#thanks .close-btn")&&(o.style.display="none"):o.style.display="none"}))})(),(()=>{const e=document.querySelector(".popup-menu"),t=(document.querySelector(".menu-button"),document.querySelector(".top-menu")),l=t.offsetTop,s=document.querySelector("#my-style");if(window.addEventListener("click",(t=>{const l=t.target;l.closest(".menu-button")?e.style.display="flex":(l.closest(".close-menu-btn")||l.closest(".popup-menu>ul>li>a"))&&(e.style.display="none")})),!s){const e=document.createElement("style");e.setAttribute("id","my-style"),e.textContent="\n         .position {\n            position: fixed;\n            top:0;\n            right: 14px;\n            z-index: 300;\n         }\n      ",document.head.appendChild(e)}window.addEventListener("scroll",(e=>{window.pageYOffset>l?t.classList.add("position"):t.classList.remove("position")}))})(),(()=>{const e=document.querySelectorAll("form"),t=(document.querySelectorAll('input[type="checkbox"]'),document.querySelectorAll('button[type="submit"]'),/^[А-Яа-я ]{2,20}$/),l=/^(8|\+7)([0-9]{9,10})$/,s=e=>{e.value=e.value.replace(/-{2,}/g,"-"),e.value=e.value.replace(/\s{2,}/g," "),e.value=e.value.replace(/^[ \s]+|[ \s]+$/,""),e.value=e.value.replace(/^[/-]+|[/-]+$/,"")},o=e=>{"name"===e.name&&""!==e.value&&(t.test(e.value)?((e=>{let t=e.value.split(" ");for(let e=0;e<t.length;e++)t[e]=t[e].slice(0,1).toUpperCase()+t[e].slice(1).toLowerCase();let l=t.join(" ");e.value=l})(e),s(e),e.style.border="3px solid green"):(e.style.border="3px solid red",e.value="")),"phone"===e.name&&""!==e.value&&(l.test(e.value)?(s(e),e.style.border="3px solid green"):(e.style.border="3px solid red",e.value=""))};e.forEach((e=>{for(let t of e.elements)"BUTTON"!==t.tagName&&t.addEventListener("blur",(()=>{o(t)}));e.addEventListener("submit",(t=>{t.preventDefault();for(let t of e.elements)"BUTTON"!==t.tagName&&""!==t.value&&(t.style.border="none")}))}))})(),(()=>{const e=document.getElementById("totop"),t=document.querySelector(".header-main").offsetTop;e.style.display="none",window.addEventListener("scroll",(l=>{window.pageYOffset>t?e.style.display="block":e.style.display="none"}))})(),(()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t,l=0;const s=()=>{e[l].style.display="none",l++,l>=e.length&&(l=0),e[l].style.display="block"};((e=1e3)=>{t=setInterval(s,e)})(3e3)})()})();