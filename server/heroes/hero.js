class Hero {

    constructor(parent, name, color, powerOne, powerTwo) {
        this.parent = parent;
        this.name = name;
        this.color = color;
        this.powerOne = powerOne;
        this.powerTwo = powerTwo;
    }

    pack() {
        return {
            n: this.name,
            c: this.color,
            c1: this.powerOne.getSecondsTillCanBeUsed(),
            c2: this.powerTwo.getSecondsTillCanBeUsed()
        };
    }

};

module.exports = Hero;