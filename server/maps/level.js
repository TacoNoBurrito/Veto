const Enemy = require("../entities/enemy");
const Player = require("../entities/player");

class Level {

    constructor(parent, position, width, height, entities = []) {
        this.parent = parent;
        this.position = position;
        this.width = width;
        this.height = height;
        this.entities = entities;
        this.lastPack = {};
    }

    getLastPack() {
        return this.lastPack;
    }

    tick() {
        for (const entity of this.entities) {
            if (entity instanceof Enemy) {
                entity.doAutomaticMove();
            }
            if (entity instanceof Player) {
                entity.processKeys();
            }

            for (const other of this.entities) {
                if (other.id == entity.id) {
                    continue;
                }
                if (other.collidesWith(entity)) {
                    other.whenCollide(entity);
                    entity.whenCollide(other);
                }
            }
        }
        this.lastPack = this.pack();
    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    removeEntity(entity) {
        const newEntityList = [];
        for (const e of this.entities) {
            if (entity.id == e.id) {
                continue;
            }
            newEntityList.push(entity);
        }
        this.entities = newEntityList;
    }

    packEntities() {
        const packedEntityList = [];
        for (const entity of this.entities) {
            packedEntityList.push(entity.pack());
        }
        return packedEntityList;
    }

    pack() {
        return {
            w: this.width,
            h: this.height,
            p: this.position,
            e: this.packEntities()
        };
    }

};

module.exports = Level;