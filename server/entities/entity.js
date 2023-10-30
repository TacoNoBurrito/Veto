const IDGenerator = require("../utils/idGenerator");
const ColorModifier = require("./modifiable/colorModifier");
const RadiusModifier = require("./modifiable/radiusModifier");
const SpeedModifier = require("./modifiable/speedModifier");

class Entity {

    constructor(parent, x, y, baseRadius, baseColor, baseSpeed, outline, text = "") {
        this.parent = parent;
        this.x = x;
        this.y = y;
        this.radiusModifier = new RadiusModifier(baseRadius);
        this.speedModifier = new SpeedModifier(baseSpeed);
        this.colorModifier = new ColorModifier(baseColor);
        this.outline = outline;
        this.text = text;
        this.id = IDGenerator.getNextID();
    }

    getCollider() {
        return new SAT.Circle(new SAT.Vector(this.x, this.y), this.radiusModifier.getCurrentRadius());
    }

    collidesWith(entity) {
        return SAT.testCircleCircle(entity.getCollider(), this.getCollider());
    }

    // abstract, triggered from level.js
    whenCollide(entity) {}

    pack() {
        return {
            x: this.x,
            y: this.y,
            r: this.radiusModifier.getCurrentRadius(),
            c: this.colorModifier.getCurrentColor(),
            t: this.text,
            i: this.id,
            o: this.outline
        };
    }

};

module.exports = Entity;