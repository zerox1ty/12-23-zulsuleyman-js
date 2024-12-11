
function triggerBurger(event) {
    const burger = document.querySelector('.burger');
  
    burger.classList.toggle('open');
  
    const image = event.currentTarget.querySelector('img');
  
    if (burger.classList.contains('open')) {
      image.src = 'assets/img/icons/close (1).svg';
    } else {
      image.src = 'assets/img/icons/burger.svg';
    }
  }