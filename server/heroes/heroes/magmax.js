const Hero = require("../hero");
const Guard = require("../powers/guard");
const Speed = require("../powers/speed");

class MagMax extends Hero {

    constructor(entity) {
        super(entity, "MagMax", "red", new Guard(entity), new Speed(entity));
    }

};

module.exports = MagMax;