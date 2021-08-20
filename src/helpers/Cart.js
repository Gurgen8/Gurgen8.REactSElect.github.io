import Events from "./Events";

class Cart {
  static add(productId, qty = 1) {
    const cart = this.get();
    const i = cart.findIndex(p => p.id === productId);
    if (i > -1) {
      cart[i].qty += qty;
      if (cart[i].qty <= 0) {
        return this.delete(productId);
      }
    } else if (qty > 0) {
      cart.push({
        id: productId,
        qty,
      })
    }
    this.save(cart);
    return cart;
  }

  static set(productId, qty) {
    const cart = this.get();
    if (qty <= 0) {
      return this.delete(productId);
    }
    const i = cart.findIndex(p => p.id === productId);
    if (i > -1) {
      cart[i].qty = qty;
    } else {
      cart.push({
        id: productId,
        qty,
      })
    }
    this.save(cart);
    return cart;
  }

  static delete(productId) {
    const cart = this.get().filter(p => p.id !== productId)
    this.save(cart);
    return cart;
  }

  static save(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    Events.emit('cartChange', cart);
  }

  static get() {
    try {
      return JSON.parse(localStorage.getItem('cart')) || [];
    } catch (e) {
      return [];
    }
  }
}

export default Cart
