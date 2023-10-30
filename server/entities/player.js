const Entity = require("./entity");

class Player extends Entity {

    constructor(parent, x, y, baseRadius, baseSpeed, baseColor, name, socket, io) {
        super(parent, x, y, baseRadius, baseColor, baseSpeed, false, name);
        this.socket = socket;
        this.io = io;
        this.lastKeys = [];
    }

    setLastKeys(keys) {
        this.lastKeys = [];
    }

    // Called in level.js
    processKeys() {
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
    }

};

module.exports = Player;