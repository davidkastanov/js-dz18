//                           Завдання 1 

// В HTML є список категорій ul#categories.

const itemsEl = document.querySelector("ul#categories")
const itemEl = itemsEl.querySelectorAll('li.item')
console.log(itemsEl)

// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.
const numbersItemsEl = (items) => console.log(` У списку ${items.length}  категорії`)
numbersItemsEl(itemEl)

// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:
// Категорія: Тварини
// Кількість елементів: 4


itemEl.forEach(item => {

    const titleEl = item.querySelector('h2')
    const titleText = titleEl.textContent


    const subItemEl = item.querySelectorAll('ul li')
    const itemText = subItemEl.length


    console.log(`Категорія  ${titleText} `)
    console.log(`Кількість елементів ${itemText} `)
});



//                                  Завдання 2 

// В HTML є пустий список ul#ingredients.
// В JS є масив рядків:

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
]

// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().
const elementsEl = document.querySelector('#ingredients')

const layoutIngredients = ingredients.map(item => {

    const subElementEl = document.createElement("li")

    const subTextEl = document.createElement("p")

    subElementEl.append(subTextEl)

    subTextEl.textContent = item

    return subElementEl
});

elementsEl.append(...layoutIngredients)



//                                                 Завдання 3

// Напиши скрипт для створення галереї зображень по масиву даних.
// В HTML є список ul#gallery.
// Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().
// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через css-класи.


const images = [
 {
  url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',  alt: 'White and Black Long Fur Cat',
 },

 {
  url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },

 {
  url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',  alt: 'Group of Horses Running',
 },
]

const galleryEl = document.querySelector("ul#gallery")
const layoutImages = images.map(({url, alt}) => {
    return `<li>
        <img src="${url}" alt="${alt}">
            </li>`
}).join('')

galleryEl.insertAdjacentHTML('beforeend', layoutImages)
document.body.append(galleryEl)


//                                       Завдання 4 

// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.
// Створи змінну counterValue в якій буде зберігається поточне значення лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

let counterValue = 0

const spanEl = document.querySelector("#value")
const minusBtnEl = document.querySelector(' button[data-action="decrement"]')


minusBtnEl.addEventListener("click",() => {
    counterValue -= 1
    spanEl.textContent = counterValue
})



const plusBtnEl = document.querySelector('button[data-action="increment"]');
plusBtnEl.addEventListener("click", () => {
    counterValue += 1
    spanEl.textContent = counterValue
})



