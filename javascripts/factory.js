"use strict";

const $ = require("jquery");

module.exports.getPlants = () => {
    return new Promise( (resolve,reject) => {
        $.ajax({
            url: "https://fir-a5a79.firebaseio.com/plants.json"
        })
        .done( (plantData) =>{
            resolve(plantData);
        })
        .fail((error) => {
            reject(error);
            console.log("error w/ data");
        });
    });
};