const Behavior = require("./behavior");

// Bounces entity off of walls.
class RegularBehavior extends Behavior {

    constructor(entity) {
        super(entity);
        this.angle = Math.random() * 6.28318531;
		this.vx = Math.cos(this.angle);
		this.vy = Math.sin(this.angle);
    }

    modify() {
        const levelWidth = this.entity.parent.width;
        const levelHeight = this.entity.parent.height;
        const entity = this.entity;
        const radius = entity.radiusModifier.getCurrentRadius();

        entity.x += this.vx * entity.speedModifier.getCurrentSpeed();
        entity.y += this.vy * entity.speedModifier.getCurrentSpeed();

        if (entity.x > (levelWidth - (150 + radius))) {
            entity.x = levelWidth - (150 + radius);
            this.vx = -this.vx;
        }
        if (entity.x < (150 + radius)) {
            entity.x = 150 + radius;
            this.vx = -this.vx;
        }
        if (entity.y < radius) {
            entity.y = radius;
            this.vy = -this.vy;
        }
        if (entity.y > (levelHeight - radius)) {
            entity.y = levelHeight - radius;
            this.vy = -this.vy;
        }
    }

};

module.exports = RegularBehavior;