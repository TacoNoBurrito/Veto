class SpeedModifier {

    constructor(baseSpeed) {
        this.baseSpeed = baseSpeed;
        this.modifiers = [];
        this.currentSpeed = baseSpeed;
    }

    getCurrentSpeed() {
        return this.currentSpeed;
    }

    addModifier(timeToLive, amount) {
        this.modifiers.push({
            ttl: timeToLive,
            amount: amount
        });
    }

    tick() {
        let newSpeed = this.baseSpeed;
        const newModifierList = [];
        for (const modifier of this.modifiers) {
            modifier.ttl--;
            if (modifier.ttl < 1) {
                continue;
            }
            newModifierList.push(modifier);
            newSpeed *= modifier.amount;
        }
        this.currentSpeed = newSpeed;
        this.modifiers = newModifierList;
    }

};

module.exports = SpeedModifier;