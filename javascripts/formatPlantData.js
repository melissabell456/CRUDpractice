"use strict";

const $ = require("jquery");
const createPlantContainer = require('./createDomElement');

module.exports.formatPlantData = (plantObjects) => {
    $("#userGarden").empty();
    console.log("Ready to format objects raw", plantObjects);
    for (let plant in plantObjects) {
        let plantStats = plantObjects[plant];
        plantStats.idNum = plant;
        for (let stat in plantStats) {
            plantStats[stat] = capitalizeStat(plantStats[stat]);
        }
        createPlantContainer.createPlantContainer(plantStats);
    }
};

let capitalizeStat = (statToCapitalize) => {
    return statToCapitalize.charAt(0).toUpperCase() + statToCapitalize.slice(1);
};

