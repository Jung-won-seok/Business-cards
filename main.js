const formName = document.querySelector('.form .name')
const formTitle = document.querySelector('.form .title')

function toggleCard() {
  var card = document.querySelector('.card');
  card.classList.toggle('show');
}


const card = document.querySelector('.card')
const cardName = document.querySelector('.card .name')
const cardTitle = document.querySelector('.card .title .value')

createCardBtn.addEventListener('click', function () {
  card.classList.add('show')
  cardName.innerHTML = formName.value
})