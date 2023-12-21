class Power {

    // coolDown is defined with seconds.
    constructor(entity, name, coolDown) {
        this.entity = entity;
        this.name = name;
        this.coolDown = coolDown;
        this.lastUsed = 0;
    }

    getSecondsTillCanBeUsed() {
        return this.coolDown - this.getSecondsSinceLastUse();
    }

    getSecondsSinceLastUse() {
        return (new Date().getTime() - this.lastUsed) / 1000;
    }

    isOnCoolDown() {
        return this.getSecondsSinceLastUse() < this.coolDown;
    }

    whenUse() {}

};

module.exports = Power;