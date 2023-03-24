function getItemsInCart(){
    let itemsInCart = JSON.parse(localStorage.getItem("cartItems"));
    if (itemsInCart) {
        return itemsInCart;
    } else {
        return [];
    }
}

function someItemInCart(itemId){
    let itemsInCart = JSON.parse(localStorage.getItem("cartItems"));

    return itemsInCart.some(item => item.id === itemId)
}

function saveSingleItemToCart(newItem, qty){
    let itemsInCart = JSON.parse(localStorage.getItem("cartItems"));
    if (itemsInCart) {
        itemsInCart.push({...newItem, qty: qty});
    } else {
        itemsInCart = new Array({...newItem, qty: qty})
    }

    localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
    console.log("Guardado en carrito");
}

function deleteItem(oldItemId){
    let itemsInCart = JSON.parse(localStorage.getItem("cartItems"));
    if (itemsInCart){
        itemsInCart = itemsInCart.filter(item => item.id !== oldItemId);

        localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
    } 
}

function addQtyToItem(newItemId, qty){
    let itemsInCart = JSON.parse(localStorage.getItem("cartItems"));
    if (itemsInCart){
        let currentItemInCart = itemsInCart.find((item) => item.id === newItemId);
        currentItemInCart.qty = currentItemInCart.qty + qty;

        localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
    } 
}

function updateItemQty(newItemId, qty){
    let itemsInCart = JSON.parse(localStorage.getItem("cartItems"));
    if (itemsInCart){
        let currentItemInCart = itemsInCart.find((item) => item.id === newItemId);
        currentItemInCart.qty =  qty;

        localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
    } 
}

export {getItemsInCart, someItemInCart, saveSingleItemToCart, deleteItem, addQtyToItem, updateItemQty}