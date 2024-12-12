const makeRequestModal = document.querySelector('#make_request');

// makeRequestModal.showModal();
// makeRequestModal.close();

const accordions = document.querySelectorAll('.accordion');
// аккордион
accordions.forEach(accordion => {
  const trigger = accordion.querySelector('.accordion__trigger');
  const content = accordion.querySelector('.accordion__content');

  trigger.addEventListener('click', () => {
    accordion.classList.toggle('open');
  });
});
// вложенные ссылки
document.addEventListener('DOMContentLoaded', () => {
    const linkExpandElements = document.querySelectorAll('.link_expand');
  
    linkExpandElements.forEach(element => {
      element.addEventListener('mouseover', () => {
        element.classList.add('open');
      });
  
      element.addEventListener('mouseout', () => {
        element.classList.remove('open');
      });
    });
  });
 // Модальное окно
 const dialog = document.getElementById('make_request');
 const closeButton = dialog.querySelector('.close');
 const triggerElement = document.querySelector('.button');
 
 closeButton.addEventListener('click', () => {
   dialog.close();
 });
 
 triggerElement.addEventListener('click', () => {
   dialog.showModal();
 });
 
 dialog.addEventListener('close', () => {
   dialog.classList.remove('open');
 });
  
 function openDialog() {
     dialog.showModal();
     dialog.classList.add('open');
 }