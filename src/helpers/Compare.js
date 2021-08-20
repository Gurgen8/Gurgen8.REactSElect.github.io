import Events from "./Events";

class Compare{
  static add(productId, qty = 1) {
    const compare = this.get();
    const i = compare.findIndex(p => p.id === productId);
    if (i > -1) {
        compare[i].qty += qty;
      if (compare[i].qty <= 0) {
        return this.delete(productId);
      }
    } else if (qty > 0) {
        compare.push({
        id: productId,
        qty,
      })
    }
    this.save(compare);
    return compare;
  }

  static set(productId, qty) {
    const compare = this.get();
    if (qty <= 0) {
      return this.delete(productId);
    }
    const i = compare.findIndex(p => p.id === productId);
    if (i > -1) {
        compare[i].qty = qty;
    } else {
        compare.push({
        id: productId,
        qty,
      })
    }
    this.save(compare);
    return compare;
  }

  static delete(productId) {
    const compare= this.get().filter(p => p.id !== productId)
    this.save(compare);
    return compare;
  }

  static save(compare) {
    localStorage.setItem('compare', JSON.stringify(compare));
    Events.emit('compareChange', compare);
  }

  static get() {
    try {
      return JSON.parse(localStorage.getItem('compare')) || [];
    } catch (e) {
      return [];
    }
  }
}

export default Compare
