const MathUtils = require("../../utils/mathUtils");
const RegularBehavior = require("../behavior/regularBehavior");
const Enemy = require("../enemy");

class RegularEnemy extends Enemy {

    constructor(parent, x, y, baseRadius, baseSpeed) {
        super(parent, x, y, baseRadius, "gray", baseSpeed, true);
        this.behaviors.push(new RegularBehavior(this));
    }

    static buildFromData(level, data) {
        return new RegularEnemy(
            level,
            MathUtils.randomNumber(150 + data["radius"], level.width - (150 + data["radius"])),
            MathUtils.randomNumber(data["radius"], level.height - data["radius"]),
            data["radius"],
            data["speed"]
        );
    }

};

module.exports = RegularEnemy;