class IDGenerator {

    static currentID = 0;

    static getNextID() {
        return IDGenerator.currentID++;
    }

};

module.exports = IDGenerator;