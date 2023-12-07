"use strict";

document.addEventListener("DOMContentLoaded", function () {
    // set variables 
    let crustSize;
    let selectedToppings;
    let pizzaOrders = []; // an array of pizza objects
    let customerData = {}; // an object

    let errors = "";

    const addPizzaBtn = document.getElementById("add-pizza");
    const confirmBtn = document.getElementById("confirm");
    const ordersList = document.getElementById("orders-list");
    const crustSizeList = document.querySelectorAll("input[name=crust-size]");
    const priceDiv = document.getElementById("price");
    const taxDiv = document.getElementById("tax");
    const totalDiv = document.getElementById("total");
    const form = document.getElementById("form");
    const errorsDiv = document.getElementById("errors");
    const ordObjDiv = document.getElementById("ord-object");


    init(); // start the script when page loads by calling this function

    function init() {
        selectedToppings = [];
        // refer to the selected size from the form. 
        crustSize = document.querySelector("input[name=crust-size]:checked").value;
        for (let i = 0; i < crustSizeList.length; i++) {
            crustSizeList[i].addEventListener("click", function () {
                crustSize = this.value;
                const { price, tax, total } = calculatePrice(selectedToppings, crustSize);
                updateDisplayedPrice(price, tax, total);
            });
        }
    }

    // for pizza object
    function Pizza(size, toppings, price) {
        this.size = size;
        this.toppings = toppings;
        this.price = price;
    }

    addToppingsEventListeners();
    function addToppingsEventListeners() {
        const toppingOptionsElements = document.querySelectorAll("input[name=toppings]");
    
        for (let i = 0; i < toppingOptionsElements.length; i++) {
            toppingOptionsElements[i].addEventListener("change", function () {
                if (this.checked) {
                    selectedToppings.push(this.value);
                } else {
                    const index = selectedToppings.indexOf(this.value);
                    if (index !== -1) {
                        selectedToppings.splice(index, 1);
                    }
                }
                const { price, tax, total } = calculatePrice(selectedToppings, crustSize);
                updateDisplayedPrice(price, tax, total);
            });
        }
    }
    

    // function to calculate the price of your pizza
    // pass in parameters toppings and size
    function calculatePrice(selectedToppings, size) {
        let price = 0;
        // calculate price starting with toppings.
        price += selectedToppings.length * 1.50;
        // update price based on size of pizza
        if (size === "small") {
            price += 5.5;
        }
        if (size === "medium") {
            price += 7.5;
        }
        if (size === "large") {
            price += 9.5
        }
        // calculate taxes
        const tax = price * 0.1; // multiply by 10%
        const total = price + tax; // add tax to the price
        // return the price, tax and the new total values.
        return { price, tax, total };
    }

    // when called the update the info of the elements on screen
    function updateDisplayedPrice(price, tax, total) {
        priceDiv.innerHTML = `$${price.toFixed(2)}`;
        taxDiv.innerHTML = `$${tax.toFixed(2)}`;
        totalDiv.innerHTML = `$${total.toFixed(2)}`;
    }

    // create a new Pizza object
    // add each pizza to the array of pizza Orders
    function addPizza(size, toppings, total) {
        let pizza = new Pizza(size, toppings, total);
        pizzaOrders.push(pizza);
        console.log(pizza);
    }

    function displayOrders() {
        let orders = ""; // orders is a string
        let grandTotal = 0; // total cost is a number
        // display pizzas you want to order (i.e. the second column)
        orders = "<ul>";
        for (let i = 0; i < pizzaOrders.length; i++) {
            const pizza = pizzaOrders[i];
            const tops = pizza.toppings.join(", ");
            const total = pizza.price;
            console.log(total);
            grandTotal += total;
            orders += `
                <li class="individualOrderItem">
                  <div class="pizza-info">
                      <div class="name"> #${i + 1} ${pizza.size} Pizza</div>
                      <div class="toppings-list">
                          ${tops}
                      </div>
                    </div>
                  </div>
                  <div class="price">
                    $ ${total.toFixed(2)}
                  </div>
                </li>`;
        }
        // end list of orders loop

        // add total cost: 
        orders += `
                <li class="individualOrderItem">
                    <div class="details">
                        <strong>Total</strong>
                    </div>
                    <div class="price">
                    $ ${grandTotal.toFixed(2)}
          </div>
      </li>
      </ul>`;

        ordersList.innerHTML = orders;
    }


    function submitAddPizzaForm(e) {
        e.preventDefault(); // prevents form from being submitted causing a page refresh
        let formData = new FormData(form);
        let checkedToppings = [];
        let size;
        // loop through all form input fields
        formData.forEach(function (value, key) {
            if (key === "toppings") {
                checkedToppings.push(value);
            } else {
                if (key === "crust-size") {
                    size = value;
                }
            }
        });

        // if there's customer data from the form...
        // console.log(checkedToppings.length);
        if (customerData) {
            errorsDiv.innerHTML = "";
            if (checkedToppings.length > 0) {
                const total = calculatePrice(checkedToppings, size);
                console.log("toppings: " + checkedToppings);

                addPizza(size, checkedToppings, total.total);
                displayOrders();
                init();
            } else {
                errorsDiv.innerHTML = "Please select at least one topping.";
            }
        } else {
            errorsDiv.innerHTML = errors;
        }
    }


    function confirmOrder() {
        // order confirmation body of customer info and pizza info
        const body = {
            customer: customerData,
            pizzas: pizzaOrders,
        };
        console.log("body: ");
        console.log(body);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://my-json-server.typicode.com/mikelangelo/pizzaJson/orders");
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(body));
        xhr.onload = function () {
            console.log(xhr.response);
            // ordObjDiv.innerHTML = JSON.stringify(JSON.parse(xhr.response), null, 2);
            ordObjDiv.innerHTML = xhr.response;
        };
    }

    addPizzaBtn.addEventListener("click", submitAddPizzaForm);
    confirmBtn.addEventListener("click", confirmOrder);
});