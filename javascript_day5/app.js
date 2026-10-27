const initialTask = {
    id: 1,
    title: "Master javaScript Objects",
    status: "In progress",
    priority: "high",
    assignee: {
        name: "Jafar",
        role: "Developer",
    }
};

const {title, status, assignee: {name: developerName}} = initialTask;

function updateTaskStatus (taskObject, keyToUpdate, newValue, newDev){
    return {
        ...taskObject,
        [keyToUpdate]: newValue,
        [developerName]: newDev
    };
}

const completedTask = updateTaskStatus(initialTask, "status", "completed", "Jafar");
console.log("Original Task: ", initialTask);
console.log("Updated Task: ", completedTask);

const cartItem = {
    id: 42,
    name: "Mechanical Keyboard",
    price: 120,
    quantity: 1,
    details: {
        color: "Midnight Black",
        switchType: "Brown",

    }
};

const {name, price, details: {color: Itemcolor}} = cartItem;
function updateCartProperty (itemObject, updatesObject, propertyKey, newValue){
    return {
        ...itemObject,
        ...updatesObject,
    
    }
}
const newOrder = updateCartProperty(cartItem, {
name: "Wired mouse",
price: "50",
details: {
    ...cartItem.details,
    color: "Blue"
}
});

console.log("initialCartItem: ",cartItem );
console.log("latestOrder: ", newOrder);