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
        return plantFactory.getPlants();
    })
    .then( (newPlantData) => {
            formatData.formatPlantData(newPlantData);
            alert("Added new plant");
        })
    .catch( (err) => {
        console.log("unable to add data");
    });
});

$(document).on("click", ".delete", function() {
    let plantClicked = this.id;
    // $(`#${plantClicked}`).remove();
    plantFactory.removePlants(plantClicked)
    .then( () => {
        return plantFactory.getPlants();
    })
    .then ( (updatedData) => {
        formatData.formatPlantData(updatedData);
        alert("Your plant has been deleted");
    })
    .catch( (err) => {
        console.log(err);
    });
});