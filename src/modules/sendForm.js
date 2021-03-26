const sendForm = () => {

   const form = document.querySelectorAll('form'),
      statusMessage = document.createElement('div'),
      popup = document.querySelectorAll('.popup'),
      thanks = document.getElementById('thanks'),
      checkbox = document.querySelectorAll('input[type="checkbox"]'),
      thanksContent = thanks.querySelector('.form-content'),
      footerForm = document.getElementById('footer_form'),
      clubFooter = footerForm.querySelectorAll('.club > input[type="radio"]'),

      clubMessage = 'Пожалуйста, выберите клуб',
      warningMessage = 'Необходимо подтвердить согласие на обработку персональных данных';

   //проверка какой клуб выбран
   let clubChecked = false;
   
   clubFooter.forEach((elem) => {
      if(elem.checked) {
         clubChecked = true;
      }
   });

   if(!clubChecked) {
      footerForm.addEventListener('click',(event)=>{
         const target = event.target;

         if(target.closest('.club')) {
            statusMessage.textContent = '';
            clubChecked = true;
         }
      });
   }

   form.forEach (elem => {
      elem.addEventListener('submit', (event) => {
         event.preventDefault();
         elem.appendChild(statusMessage);
         const target = event.target;

         statusMessage.textContent = 'идет отправка';
         
         const formData = new FormData(elem); // получаем данные через объект formData (создаем экземпляр класса form Data)
         let body = {}; // создаем объект и будет оправлять его на сервер
         formData.forEach((val, key) => { // берем значения из formData
            body[key] = val;
         });

         //проверка на выбранный клуб
         if(target.closest('#footer_form')) {
            if(!clubChecked) {
               statusMessage.textContent = clubMessage;
               return;
            } else {
               statusMessage.textContent = '';
               clubChecked = false;
            }
         }

         postData(body)
         .then((response) => {
            if (response.status !== 200) {
               throw new Error('status networking not 200');
            } else {
               statusMessage.textContent = '';
               thanks.style.display = 'block';
               setTimeout(() => {
                  popup.forEach(elem => elem.style.display = 'none');
                  thanks.style.display = 'none';
               }, 2000);
            }

         })
         .catch((error) => {
            statusMessage.textContent = '';
            thanks.style.display = 'block';
               thanksContent.innerHTML = `<div class="form-content">
                  <h4>Извините!</h4>
                  <p>Что-то пошло не так.<br> Ваша заявка не отправлена.</p>
                  <button class="btn close-btn">Закрыть</button>
               </div>`;  
            setTimeout(() => {
               thanks.style.display = 'block';
               popup.forEach(elem => elem.style.display = 'none');
            }, 2000);
         });
         elem.reset();
      });
   });

   const postData = (body) => {
      return fetch('./server.php', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
      });
   }
};

export default sendForm;