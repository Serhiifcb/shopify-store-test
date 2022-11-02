$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  easing: 'ease',
  infinite: false,
  // centerMode: true,
});

const redBtn = document.querySelector('.products__switches-r');
const blackBtn = document.querySelector('.products__switches-b');

redBtn.addEventListener('click', () => {
  redBtn.classList.toggle('products__switches-active');
  blackBtn.classList.remove('products__switches-active');
});

blackBtn.addEventListener('click', () => {
  blackBtn.classList.toggle('products__switches-active');
  redBtn.classList.remove('products__switches-active');
});

//openProductInfo

const descField = document.querySelector('.description');
const shipField = document.querySelector('.shipping');
const matField = document.querySelector('.material');

function openProductInfo(item) {
  item.addEventListener('click', () => {
    item.firstElementChild.nextElementSibling.classList.toggle('display-block');
    item.lastElementChild.classList.toggle('display-block');
    item.firstElementChild.classList.toggle('change-arrow');
    if (item.firstElementChild.classList.contains('change-arrow')) {
      item.firstElementChild.nextElementSibling.style.display = 'none';
      item.lastElementChild.style.display = 'none';
    } else {
      item.firstElementChild.nextElementSibling.style.display = 'block';
      item.lastElementChild.style.display = 'block';
    }
  });
}

openProductInfo(descField);
openProductInfo(shipField);
openProductInfo(matField);
