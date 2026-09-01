document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger-toggle");
    const menu = document.getElementById("nav-menu");

    burger.addEventListener("click", function() {
        burger.classList.toggle("active");
        menu.classList.toggle("open");
    });
});

const button = document.getElementById('submit');
const form = document.getElementById('contacts-grid');

form.addEventListener('submit', function(event){

	 const inputs = this.querySelectorAll('input[type="text"], input[type="email"], textarea');
    let hasEmptyFields = false;

	inputs.forEach(input => {
    if (input.value.trim() === '') {
      hasEmptyFields = true;
	
  	}
  });
	
		if(hasEmptyFields=true) {
		event.preventDefault();	
		alert('Будь ласка, заповніть усі поля!');
	}else{
		alert('Дякуємо за ваше повідомлення!');
	}
	
});


const tickets = document.getElementsByClassName('buy-ticket');
for (const ticket of tickets) {
    ticket.addEventListener('click', function() {
        alert('Квитків немає в наявності.');
    });
}
