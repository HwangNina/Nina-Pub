const menu = document.getElementById('main-menu');

const allBtn = document.getElementById('category-btn__all')
const pizzaBtn = document.getElementById('category-btn__pizza')
const burgerBtn = document.getElementById('category-btn__burger')
const saladBtn = document.getElementById('category-btn__salad')
const beerBtn = document.getElementById('category-btn__beer')

// universal food class
class FoodItem {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    priceTag(){
        return `\$${this.price}`;
    }
};

// food classes and items
    // pizza
class Pizza extends FoodItem {
    constructor(name, price){
        super(name, price);
    }
    food= 'food_pizza'
    description() {
        return `Delicious ${this.name}! Might be a little cheesy`
    }
}

let beefSteak = new Pizza('Beef Steak Pizza', '25.99');
let hawaiian = new Pizza('Hawaiian Pizza', '20.99');
let margherita = new Pizza('Margherita Pizza', '20.99');
let gorgonzola = new Pizza('Gorgonzola Pizza', '19.99');

const pizzaObj = {
    1: beefSteak,
    2: hawaiian,
    3: margherita,
    4: gorgonzola
}

    // burger
class Burger extends FoodItem {
    constructor(name, price){
        super(name, price);
    }
    food= 'food_burger'
    description() {
        return `Delicious ${this.name}! Might be a little greezy`
    }
}

let beef = new Burger('Beef Burger', '11.99');
let baconcheese = new Burger('Bacon Cheese Burger', '9.99');
let chicken = new Burger('Chicken Burger', '8.99');
let cheese = new Burger('Cheese Burger', '7.99');
let veggie = new Burger('Veggie Burger', '7.99');

const burgerObj = {
    1: beef,
    2: baconcheese,
    3: chicken,
    4: cheese,
    5: veggie
}

    // salad
class Salad extends FoodItem {
    constructor(name, price){
        super(name, price);
    }
    food= 'food_salad'
    description() {
        return `Delicious and healthy meal:)`
    }
}

let salmon = new Salad('Salmon Salad', '10.99');
let cobb = new Salad('Cobb Salad', '8.99');
let pasta = new Salad('Pasta Salad', '6.99');
let caesar = new Salad('Caesar Salad', '6.99');

const saladObj = {
    1: salmon,
    2: cobb,
    3: pasta,
    4: caesar,
}

    // beer
class Beer extends FoodItem {
    constructor(name, price){
        super(name, price);
    }
    food= 'food_beer'
    description() {
        return `It's ${this.name} time! Cheers!`
    }
}

let germanpilsner = new Burger('German Pilsner', '3.99');
let ipa = new Burger('Indian Pale Ale', '3.99');
let irishstout = new Burger('Irish Stout', '3.99');

const beerObj = {
    1: germanpilsner,
    2: ipa,
    3: irishstout
}

//functions

    //let eventlistner happens only once
let itemAppeared = false;

    //append button to the menu
const foodListHandler = (obj) => {
    if(itemAppeared){
        //let eventlistner happens only once
        return;
    }else{
        //to return the each values of obj and append them
    for(i = 1; i <= Object.keys(obj).length; i++){
    const itemBtn = document.createElement('button');
    itemBtn.id = `${obj[i].food}`
    itemBtn.innerHTML = `
    <h2>${obj[i].name}</h2>
    <h3>${obj[i].priceTag()}</h3>
    <p>${obj[i].description()}</p>
    `;
    if(obj === pizzaObj){
        document.querySelector('.menu_pizza').append(itemBtn);
        }else if(obj === burgerObj){
        document.querySelector('.menu_burger').append(itemBtn);
        }else if(obj === saladObj){
        document.querySelector('.menu_salad').append(itemBtn);
        }else if(obj === beerObj){
        document.querySelector('.menu_beer').append(itemBtn);
        }
    }
}
}

//eventlistners
pizzaBtn.addEventListener('click', () => {
    menu.className = 'menu_pizza';
    foodListHandler(pizzaObj);
    itemAppeared = true;
})

burgerBtn.addEventListener('click', () => {
    menu.className = 'menu_burger';
    foodListHandler(burgerObj);
})

saladBtn.addEventListener('click', () => {
    menu.className = 'menu_salad';
    foodListHandler(saladObj);
})

beerBtn.addEventListener('click', () => {
    menu.className = 'menu_beer';
    foodListHandler(beerObj);
})

//does not work yet
// allBtn.addEventListener('click', () => {
//     menu.className = 'menu_all';
//     foodListHandler(burgerObj);
// })










