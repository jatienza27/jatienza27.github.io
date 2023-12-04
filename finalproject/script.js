let order = {
    customer: {},
    pizzas: [],
};

function addPizza() {
    const pizzaSize = document.getElementById("pizzaSize").value;
    const toppings = Array.from(document.getElementsByClassName("topping"))
        .filter(topping => topping.checked)
        .map(topping => topping.value);

    const pizza = {
        size: pizzaSize,
        toppings: toppings,
        price: calculatePizzaPrice(pizzaSize, toppings),
    };

    order.pizzas.push(pizza);

    updateOrderSummary();
}

function calculatePizzaPrice(size, toppings) {
    const basePrice = {
        small: 8.99,
        medium: 11.99,
        large: 14.99,
    }[size];

    const toppingsPrice = toppings.length * 1.5;

    return basePrice + toppingsPrice;
}

function updateOrderSummary() {
    const orderList = document.getElementById("orderList");
    const totalPriceElement = document.getElementById("totalPrice");


    orderList.innerHTML = "";

    order.pizzas.forEach((pizza, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Pizza ${index + 1}: ${pizza.size} - ${pizza.toppings.join(", ")} - $${pizza.price.toFixed(2)}`;
        orderList.appendChild(listItem);
    });


    const totalPrice = order.pizzas.reduce((total, pizza) => total + pizza.price, 0);
    totalPriceElement.textContent = (totalPrice * 1.1).toFixed(2);
}

function submitOrder() {
    console.log(order);
    alert("Order submitted successfully!");
}