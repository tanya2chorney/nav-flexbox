// Завдання 1
const categories = document.querySelectorAll("#categories .item");
console.log(`У списку ${categories.length} категорії.`);
categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul li").length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemsCount}`);
});

// Завдання 2
const igredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const ingredientsList = document.getElementById("ingredients");
igredients.forEach((ingElem) => {
  const liElem = document.createElement("li");
  ingredientsList.appendChild(liElem);
  liElem.textContent = ingElem;
});
console.log(ingredientsList);

// Завадння 3
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryList = document.getElementById('gallery');
images.forEach((img) => {
    const liElem = document.createElement('li');
    galleryList.appendChild(liElem);
    const itemImg = document.createElement('img');
    liElem.appendChild(itemImg);
    itemImg.src = img.url;
    itemImg.alt = img.alt;
});
console.log(galleryList);