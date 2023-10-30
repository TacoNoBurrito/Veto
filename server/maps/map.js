class Map {

    constructor(parent, name, color) {
        this.parent = parent;
        this.name = name;
        this.color = color;
        this.levels = [];
    }

    addLevel(level) {
        this.levels.push(level);
    }

    getLevelAt(i) {
        return this.levels[i];
    }

    pack() {
        return {
            n: this.name,
            c: this.color
        };
    }

};

module.exports = Map;