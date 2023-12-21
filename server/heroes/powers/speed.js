const Power = require("../power");

class Speed extends Power {

    constructor(entity) {
        super(entity, "Speed", 5);
        this.enabled = false;
    }

    tick() {
        if (this.enabled) {
            this.entity.speedModifier.addModifier(2, 2.0);
            this.entity.colorModifier.setModifier(2, "orange");
        }
    }

    whenUse() {
        if (this.isOnCoolDown()) {
            return;
        }
        if (!this.enabled) {
            this.enabled = true;
            return;
        }
        this.setCoolDown();
        this.enabled = false;
    }

};

module.exports = Speed;