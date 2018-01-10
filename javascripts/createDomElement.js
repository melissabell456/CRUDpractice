"use strict";

const $ = require("jquery");
const displayPlant = require('./displayGarden');

module.exports.createPlantContainer = (plantObj) => {
    let plantContainer = $(document.createElement('div')).attr('id', `${plantObj.idNum}`).attr('class', "plant").append(`<h2 class='userInput${plantObj.idNum}'>${plantObj.name}</h2><h3 class='userInput${plantObj.idNum}'>Plant Cycle: ${plantObj.plantCycle}</h3><h3 class='userInput${plantObj.idNum}'>Plant in: ${plantObj.plantSeason}</h3><h3 class='userInput${plantObj.idNum}'>Plant Location: ${plantObj.sunlight}</h3><button class='edit' id='edit${plantObj.idNum}'>Edit</button><button class='submit' id='submit${plantObj.idNum}'>Submit</button><button class='delete' id='delete${plantObj.idNum}'>Delete</button>`);
    displayPlant.displayPlant(plantContainer);
    };