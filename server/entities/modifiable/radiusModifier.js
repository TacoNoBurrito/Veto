class RadiusModifier {

    constructor(baseRadius) {
        this.baseRadius = baseRadius;
        this.modifiers = [];
        this.currentRadius = baseRadius;
    }

    getCurrentRadius() {
        return this.currentRadius;
    }

    addModifier(timeToLive, amount) {
        this.modifiers.push({
            ttl: timeToLive,
            amount: amount
        });
    }

    tick() {
        let newRadius = this.baseRadius;
        const newModifierList = [];
        for (const modifier of this.modifiers) {
            modifier.ttl--;
            if (modifier.ttl < 1) {
                continue;
            }
            newRadius += modifier.amount;
            newModifierList.push(modifier);
        }
        this.modifiers = newModifierList;
        this.currentRadius = newRadius;
    }

};

module.exports = RadiusModifier;