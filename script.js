document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger-toggle");
    const menu = document.getElementById("nav-menu");

    burger.addEventListener("click", function() {
        burger.classList.toggle("active");
        menu.classList.toggle("open");
    });
});


const form = document.getElementById('contacts-grid');

form.addEventListener('submit', function(event){
alert('Дякуємо за ваше повідомлення!');
});



const tickets = document.getElementsByClassName('buy-ticket');
for (const ticket of tickets) {
    ticket.addEventListener('click', function() {
        alert('Квитків немає в наявності.');
    });
}
