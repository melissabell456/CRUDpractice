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

$(document).on("click", ".edit", function() {
    let plantClicked = this.id;
    let editFields = $(`#${plantClicked}`).children();
    console.log(editFields);
    // $(`.userInput${plantClicked}`).append(`<input type="text" id="plantName" placeholder="Plant Name" value="Cucumber"></input>`);
    // console.log(this, "this");
    // console.log(plantClicked);
    // console.log($(`#submit${plantClicked}`));
    $(`#submit${plantClicked}`).click( function () {
        console.log("submit button activated");
        // plantFactory.editPlants(plantClicked)
        // .then( () => {
        //     return plantFactory.getPlants();
        // })
        // .then ( (updatedData) => {
        //     formatData.formatPlantData(updatedData);
        //     alert("Your plant has been deleted");
        // })
        // .catch( (err) => {
        //     console.log(err);
        // });
    });
});