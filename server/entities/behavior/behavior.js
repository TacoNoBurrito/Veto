class Behavior {

    constructor(entity) {
        this.entity = entity;
    }

    // abstract, called in enemy.js
    modify() {}

};

module.exports = Behavior;