export let cart = JSON.parse(localStorage.getItem("cart")) || [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  },
];

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId, qty) {
  let matchingItem;

  cart.forEach((item) => {
    if (item.productId === productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += Number(qty);
  } else {
    const item = {
      productId,
      quantity: Number(qty),
    };

    cart.push(item);
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
}

export function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });

  return cartQuantity;
}

export function updateQuantity(productID, newQuantity) {
  if (newQuantity < 0 && newQuantity >= 1000) {
    alert('Quantity must be at least 0 and less than 1000');
    return;
  }

  cart.forEach((item) => {
    if (productID == item.productId) {
      item.quantity = newQuantity;
    }
  });

  console.log(cart);
  saveToStorage();
}