import Events from "./Events";

class Heart {
  static add(productId, qty = 1) {
    const heart = this.get();
    const i = heart.findIndex(p => p.id === productId);
    if (i > -1) {
      heart[i].qty += qty;
      if (heart[i].qty <= 0) {
        return this.delete(productId);
      }
    } else if (qty > 0) {
      heart.push({
        id: productId,
        qty,
      })
    }
    this.save(heart);
    return heart;
  }

  static set(productId, qty) {
    const heart = this.get();
    if (qty <= 0) {
      return this.delete(productId);
    }
    const i = heart.findIndex(p => p.id === productId);
    if (i > -1) {
     heart[i].qty = qty;
    } else {
      heart.push({
        id: productId,
        qty,
      })
    }
    this.save(heart);
    return heart;
  }

  static delete(productId) {
    const heart= this.get().filter(p => p.id !== productId)
    this.save(heart);
    return heart;
  }

  static save(heart) {
    localStorage.setItem('heart', JSON.stringify(heart));
    Events.emit('heartChange', heart);
  }

  static get() {
    try {
      return JSON.parse(localStorage.getItem('heart')) || [];
    } catch (e) {
      return [];
    }
  }
}

export default Heart
