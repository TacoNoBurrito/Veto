const Entity = require("./entity");

class Enemy extends Entity {

    constructor(parent, x, y, baseRadius, baseColor, baseSpeed, outline = true) {
        super(parent, x, y, baseRadius, baseColor, baseSpeed, outline, "");
        this.behaviors = [];
    }

    whenCollide(entity) {
        
    }

    callBehaviors() {
        for (const behavior of this.behaviors) {
            behavior.modify();
        }
    }

    // called from level.js
    doAutomaticMove() {
        this.callBehaviors();
    }

    // abstract, used in mapManager in loading of maps
    static buildFromData(level) {}

};

module.exports = Enemy;