const fs = require("fs");
const Map = require("./map");
const Level = require("./level");
const RegularEnemy = require("../entities/enemies/regularEnemy");

const nameToEntity = {
    "regular": RegularEnemy
};

class MapManager {

    constructor() {
        this.maps = [];
        this.loadAllMaps();
    }

    loadAllMaps() {
        console.log("Loading maps...");
        let mapsLoaded = 0;
        let levelsLoaded = 0;
        let enemiesLoaded = 0;
        const start = new Date().getTime();
        const dir = fs.opendirSync("maps");
        let fileName;
        while((fileName = dir.readSync()) !== null) {
            const data = require(`../../maps/${fileName.name}`);
            const map = new Map(this, data.name, data.color);
            let currentPos = 0;
            for (const levelData of data.levels) {
                const level = new Level(map, currentPos, levelData.width, levelData.height);
                for (const entity of levelData.enemies) {
                    for (let i = 0; i <= entity["amount"]; i++) {
                        level.addEntity(nameToEntity[entity.type].buildFromData(level, entity));
                        enemiesLoaded++;
                    }
                }
                map.addLevel(level);
                levelsLoaded++;
                currentPos++;
            }
            mapsLoaded++;
        }
        dir.closeSync();
        console.log(`---\nDone loading maps. Took ${new Date().getTime() - start}ms.\n(${mapsLoaded} maps, ${levelsLoaded} levels, ${enemiesLoaded} enemies)\n---`);
    }

};

module.exports = MapManager;