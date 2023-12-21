const Power = require("../power");

class Guard extends Power {

    constructor(entity) {
        super(entity, "Guard", 5);
        this.isGuarded = false;
    }

    tick() {
        if (this.isGuarded) {
            this.entity.colorModifier.setModifier(2, "black");
        }
    }

    whenUse() {
        if (this.isOnCoolDown()) {
            return; 
        } 
        if (this.isGuarded) {
            this.isGuarded = false;
            this.entity.canDie = true;
            this.entity.canMove = true;
            this.setCoolDown();
            return;
        }
        this.entity.canDie = false;
        this.entity.canMove = false;
        this.isGuarded = true;
    }

};

module.exports = Guard;