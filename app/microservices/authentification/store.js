class Store {
    constructor() {
        console.log('created store');
    }

    set(key, value) {
        console.log(`set key ${key}`)
        this[key] = value;
    }

    push(key, value) {
        console.log(`push to key ${key}`);
        if (!this[key]) {
            this[key] = [value];
            return;
        }

        this[key].push(value);
    }

    find(key, q) {
        console.log(`find to key ${key}`);
        if (!this[key]) {
            return null;
        }

        return this[key].find(q) || null;
    }
}

module.exports = new Store();