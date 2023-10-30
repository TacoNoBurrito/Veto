class ColorModifier {

    constructor(baseColor) {
        this.baseColor = baseColor;
        this.ttl = 0;
        this.modifierColor = baseColor;
    }

    getCurrentColor() {
        return this.modifierColor;
    }

    setModifier(ttl, color) {
        this.ttl = ttl;
        this.modifierColor = color;
    }

    tick() {
        if (this.ttl < 1) {
            return;
        }
        this.ttl--;
        if (this.ttl < 1) {
            this.modifierColor = this.baseColor;
        }
    }

};

module.exports = ColorModifier;