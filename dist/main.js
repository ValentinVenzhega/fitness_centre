(()=>{"use strict";const e=(e,t)=>{const l=document.getElementById(e),o=document.createElement("div"),n=document.querySelectorAll(".popup"),s=document.querySelector("#thanks"),c=s.querySelector(".form-content"),r=(document.querySelectorAll('input[type="checkbox"]'),document.querySelector("#footer_form")),a=r.querySelectorAll('.club > input[type="radio"]'),i="Необходимо подтвердить согласие на обработку персональных данных";let d;o.style.cssText="font-size: 20px;max-width:400px;margin: 0 auto;padding-top:10px;color:rgb(168, 15, 15);",!1!==t&&(d=document.getElementById(t),d.addEventListener("change",(()=>{d&&!1===d.checked?o.textContent=i:o.textContent=""})));let u=!1;a.forEach((e=>{e.checked&&(u=!0)})),u||r.addEventListener("click",(e=>{e.target.closest(".club")&&(o.textContent="",u=!0)})),l.addEventListener("submit",(e=>{e.preventDefault(),l.appendChild(o);const r=e.target;o.textContent="идет отправка";const a=new FormData(l);let m={};if(a.forEach(((e,t)=>{m[t]=e})),!1!==t){if(d&&!1===d.checked)return void(o.textContent=i);o.textContent=""}if(r.closest("#footer_form")){if(!u)return void(o.textContent="Пожалуйста, выберите клуб");o.textContent="",u=!1}y(m).then((e=>{if(200!==e.status)throw new Error("status networking not 200");o.textContent="",s.style.display="block",setTimeout((()=>{n.forEach((e=>e.style.display="none")),s.style.display="none"}),2e3)})).catch((e=>{o.textContent="",s.style.display="block",c.innerHTML='<div class="form-content">\n               <h4>Извините!</h4>\n               <p>Что-то пошло не так.<br> Ваша заявка не отправлена.</p>\n               <button class="btn close-btn">Закрыть</button>\n            </div>',setTimeout((()=>{s.style.display="block",n.forEach((e=>e.style.display="none"))}),2e3)})),l.reset()}));const y=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};(()=>{document.querySelector(".club-select");const e=document.querySelector(".left ul");window.addEventListener("click",(t=>{const l=t.target;l.closest(".club-select")?e.classList.toggle("list-active"):l.closest("ul")||e.classList.remove("list-active"),l.closest("ul")&&e.classList.add("list-active")}))})(),(()=>{const e=document.querySelector(".fixed-gift"),t=document.querySelector("#free_visit_form"),l=document.querySelector("#callback_form"),o=document.querySelector("#gift"),n=document.querySelector("#thanks"),s=document.querySelector('form[name="free-visit-form"]'),c=document.querySelector('form[name="callback-form"]');window.addEventListener("click",(r=>{const a=r.target;a.closest(".open-popup")?t.style.display="block":!a.closest(".open-popup>.close-form")&&a.closest("#form2")||(t.style.display="none",s.reset()),a.closest(".callback-btn")?l.style.display="block":!a.closest(".callback-btn .close_icon")&&a.closest("#form1")||(l.style.display="none",c.reset()),a.closest(".fixed-gift")?(o.style.display="block",e.style.display="none"):(a.closest("#gift .close_icon")||a.closest("#gift .close-btn"))&&(o.style.display="none"),(a.closest("#thanks .sloce-icon")||!a.closest("#thanks .form-content")||a.closest("#thanks .close-btn"))&&(n.style.display="none")}))})(),(()=>{const e=document.querySelector(".popup-menu"),t=(document.querySelector(".menu-button"),document.querySelector(".top-menu")),l=t.offsetTop,o=document.querySelector("#my-style");if(window.addEventListener("click",(t=>{const l=t.target;l.closest(".menu-button")?e.style.display="flex":(l.closest(".close-menu-btn")||l.closest(".popup-menu>ul>li>a"))&&(e.style.display="none")})),!o){const e=document.createElement("style");e.setAttribute("id","my-style"),e.textContent="\n         .position {\n            position: fixed;\n            top:0;\n            right: 14px;\n            z-index: 300;\n         }\n      ",document.head.appendChild(e)}window.addEventListener("scroll",(e=>{window.pageYOffset>l?t.classList.add("position"):t.classList.remove("position")}))})(),(()=>{const e=document.querySelectorAll("form"),t=/^[А-Яа-я ]{2,20}$/,l=/^(8|\+7)([0-9]{9,10})$/,o=e=>{e.value=e.value.replace(/-{2,}/g,"-"),e.value=e.value.replace(/\s{2,}/g," "),e.value=e.value.replace(/^[ \s]+|[ \s]+$/,""),e.value=e.value.replace(/^[/-]+|[/-]+$/,"")},n=e=>{"name"===e.name&&""!==e.value&&(t.test(e.value)?((e=>{let t=e.value.split(" ");for(let e=0;e<t.length;e++)t[e]=t[e].slice(0,1).toUpperCase()+t[e].slice(1).toLowerCase();let l=t.join(" ");e.value=l})(e),o(e),e.style.border="3px solid green"):(e.style.border="3px solid red",e.value="",alert("введите имя на русском языке"))),"phone"===e.name&&""!==e.value&&(l.test(e.value)?(o(e),e.style.border="3px solid green"):(e.style.border="3px solid red",e.value="",alert("ввел менее 7 или более 11 цифр")))};e.forEach((e=>{for(let t of e.elements)"BUTTON"!==t.tagName&&t.addEventListener("input",(()=>{n(t)}));e.addEventListener("submit",(t=>{t.preventDefault();for(let t of e.elements)"BUTTON"!==t.tagName&&""!==t.value&&(t.style.border="none")}))}))})(),(()=>{const e=document.getElementById("totop"),t=document.querySelector(".header-main").offsetTop;e.style.display="none",window.addEventListener("scroll",(l=>{window.pageYOffset>t?e.style.display="block":e.style.display="none"}))})(),e("banner-form","check1"),e("footer_form",!1),e("form1","check"),e("form2","check2"),e("card_order","card_check"),(()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t,l=0;const o=()=>{e[l].style.cssText="\n      opacity: 0;\n      transition: opacity 1s;\n      ",l++,l>=e.length&&(l=0),e[l].style.cssText="\n      opacity: 1;\n      transition: opacity 1s;\n      "};((e=1e3)=>{t=setInterval(o,e)})(3e3)})(),(()=>{const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide"),l=(document.querySelector("#style-gallery"),document.querySelector(".gallery-line"));let o,n=0;const s=(e,t,l)=>{e[t].classList.remove(l)},c=(e,t,l)=>{e[t].classList.add(l)};for(let e=0;e<t.length;e++){const e=document.createElement("li");e.className="line",l.append(e)}let r=document.querySelectorAll(".line");r[n].classList.add("line-active");const a=()=>{s(t,n,"slide-active"),s(r,n,"line-active"),n++,n>=t.length&&(n=0),c(t,n,"slide-active"),c(r,n,"line-active")},i=(e=3e3)=>{o=setInterval(a,e)};e.addEventListener("click",(e=>{e.preventDefault();const l=e.target;s(t,n,"slide-active"),s(r,n,"line-active"),l.closest("#arrow-right")?n++:l.closest("#arrow-left")?n--:l.matches(".line")&&r.forEach(((e,t)=>{e===l&&(n=t)})),n>=t.length&&(n=0),n<0&&(n=t.length-1),c(t,n,"slide-active"),c(r,n,"line-active")})),e.addEventListener("mouseover",(e=>{e.target.closest(".gallery-slider")&&clearInterval(o)})),e.addEventListener("mouseout",(e=>{e.target.closest(".gallery-slider")&&i()})),i(3e3)})(),(()=>{const e=document.querySelector(".services-slider"),t=(e.querySelectorAll(".slide"),document.querySelector(".services-block"));let l=0;t.addEventListener("click",(t=>{t.preventDefault();const o=t.target;o.closest("#arrow-right")?l<1050&&(l+=224,e.style.left=-l+"px"):o.closest("#arrow-left")&&(l>1050||l>0)&&(l-=224,e.style.left=-l+"px")}))})(),(()=>{const e=document.querySelector("#price-total"),t=document.querySelector("#card_order"),l=document.querySelector(".price-message>input"),o={mozaika:[1999,9900,13900,19900],schelkovo:[2999,14990,21990,24990]};let n=0,s=o.mozaika,c=o.mozaika[0];e&&(e.textContent=c,t.addEventListener("click",(t=>{const r=t.target;r.closest(".time")&&"LABEL"===r.tagName&&(n=+r.getAttribute("for").slice(1,r.length)-1),r.closest(".club")&&"INPUT"===r.tagName&&(s=o[r.value]),c=s[n],"ТЕЛО2021"===l.value&&(c=Math.round(.7*c),e.innerHTML=c),e.innerHTML=c})),l.addEventListener("input",(()=>{"ТЕЛО2021"===l.value&&(c=Math.round(.7*c),e.innerHTML=c)})))})()})();