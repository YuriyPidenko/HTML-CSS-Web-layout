// []()
// []()
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
const superLink = document.getElementById('#super_link');
console.log(superLink);

// []()
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
const cardLinksEl = document.querySelectorAll('.card-link');
cardLinksEl.forEach(link => {
    link.textContent = 'ссылка';
});
// []()
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
const cardBody = document.querySelector('.card-body')
const cardLinks = cardBody.querySelectorAll('.card-link');
console.log(cardLinks);
// []()
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
const element = document.querySelector('[data-number="50"]');
console.log(element);

// []()
// 5. Выведите содержимое тега title в консоль.

const titleEl = document.querySelector('title');
console.log(titleEl.textContent);
// []()
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()
const cardTitle = document.querySelector(".card-title");
const parent = cardTitle.parentElement;
console.log(parent);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
const textEl = document.querySelector('.card');
const textP = document.createElement('p');
textP.textContent = 'Привет';
textEl.appendChild(textP);
// 8. Удалите тег h6 на странице.
const headEl = document.querySelector('h6');
headEl.remove();