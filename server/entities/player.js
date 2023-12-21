const Entity = require("./entity");

class Player extends Entity {

    constructor(parent, x, y, baseRadius, baseSpeed, baseColor, name, socket, io, hero) {
        super(parent, x, y, baseRadius, baseColor, baseSpeed, false, name);
        this.socket = socket;
        this.io = io;
        this.lastKeys = [];
        this.hero = hero;
        this.canDie = true;
        this.canMove = false;
    }

    setLastKeys(keys) {
        this.lastKeys = keys;
    }

    // Called in level.js
    tick() {
        const speed = this.speedModifier.getCurrentSpeed();
        if (this.lastKeys.includes("w")) {
            this.y -= speed;
        }
        if (this.lastKeys.includes("a")) {
            this.x -= speed;
        }
        if (this.lastKeys.includes("d")) {
            this.x += speed;
        }
        if (this.lastKeys.includes("s")) {
            this.y += speed;
        }

        this.hero.powerOne.tick();
        this.hero.powerTwo.tick();
    }

};

module.exports = Player;