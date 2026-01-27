function showMeal(event) {
    if (event.target === breakfastBtn) {
    document.getElementById('breakfastMenuItems').style.display = "block";
    }
    else if (event.target === mainBtn) {
    document.getElementById('maincourseMenuItems').style.display = "block";
    }
    else if (event.target === dessertBtn) {
    document.getElementById('dessertMenuItems').style.display = "block";
    }
}

const breakfastBtn = document.getElementById('breakfastBtn');
const mainBtn = document.getElementById('mainBtn');
const dessertBtn = document.getElementById('dessertBtn');

breakfastBtn.addEventListener("click", showMeal);
mainBtn.addEventListener("click", showMeal);
dessertBtn.addEventListener("click", showMeal);

const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $21.99', 'Pasta - $21.99', 'Burger - $21.99', 'Salmon - $21.99'];
const dessertMenu = ['Cake - $21.99', 'Ice Cream - $21.99', 'Pudding - $21.99', 'Fruit Salad - $21.99'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for  (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;