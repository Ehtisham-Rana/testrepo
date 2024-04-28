const breakfastMenu = ['Pancakes - $15', 'Eggs Benedict - $25', 'Oatmeal - $10', 'Frittata - $18'];
const mainCourseMenu = ['Steak - $22', 'Pasta - $25', 'Burger - $10', 'Salmon - $30'];
const dessertMenu = ['Cake - $13', 'Ice Cream - $20', 'Pudding - $22', 'Fruit Salad - $20'];
//map method
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
//forEach loop
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
// for loop
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
