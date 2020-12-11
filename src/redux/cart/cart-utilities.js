export let addItemToCart = (cartItems, cartItemToAdd) => {
  let existingItem = cartItems.find((item) => item.id === cartItemToAdd.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export let decreaseItemQuantity = (cartItems, cartItemToDecrease) => {
  if (cartItemToDecrease.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToDecrease.id);
  }
  return cartItems.map((item) =>
    item.id === cartItemToDecrease.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
