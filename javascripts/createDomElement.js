"use strict";

const $ = require("jquery");
const displayPlant = require('./displayGarden');

module.exports.createPlantContainer = (plantObj) => {
    let plantContainer = $(document.createElement('div')).attr('id', `${plantObj.idNum}`).attr('class', "plant").append(`<h2>${plantObj.name}</h2><h3>Plant Cycle: ${plantObj.plantCycle}</h3><h3>Plant in: ${plantObj.plantSeason}</h3><h3>Plant Location: ${plantObj.sunlight}</h3><button id="edit${plantObj.idNum}">Edit</button><button id="delete${plantObj.idNum}">Delete</button>`);
    console.log(plantContainer);
    displayPlant.displayPlant(plantContainer);
    };