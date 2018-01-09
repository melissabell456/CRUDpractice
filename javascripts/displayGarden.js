"use strict";

const $ = require("jquery");

module.exports.displayPlant = (plantDiv) => {
    $("#userGarden").append(plantDiv);
};