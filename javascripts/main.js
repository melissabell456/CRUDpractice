"use strict";

const $ = require('jquery');
const plantFactory = require('./factory');
const formatData = require('./formatPlantData');

plantFactory.getPlants()
.then( (plantData) => {
    // console.log("on main.js", plantData);
    formatData.formatPlantData(plantData);
});