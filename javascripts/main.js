"use strict";

const $ = require('jquery');
const plantFactory = require('./factory');
const formatData = require('./formatPlantData');

plantFactory.getPlants()
.then( (plantData) => {
    // console.log("on main.js", plantData);
    formatData.formatPlantData(plantData);
});

$("#addPlant").click ( () => {
    let plantObj = {
        name: $("#plantName").val(),
        plantCycle: $("input[name=plantCycle]:checked").val(),
        plantSeason: $("#plantMonth").val(),
        sunlight: $("#sunlightNeed").val()
    };
    plantFactory.addPlants(plantObj)
    .then( () => {
        plantFactory.getPlants()
        .then( (newPlantData) => {
            console.log("here", newPlantData);   
            formatData.formatPlantData(newPlantData);
        });
    });
});