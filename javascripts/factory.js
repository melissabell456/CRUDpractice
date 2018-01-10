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

module.exports.addPlants = (newPlant) => {
    return new Promise( (resolve,reject) => {
        $.ajax({
            url: "https://fir-a5a79.firebaseio.com/plants.json",
            method: "POST",
            data: JSON.stringify(newPlant)
        })
        .done( (newPlantData) =>{
            console.log(newPlantData);
            resolve(newPlantData);
        })
        .fail((error) => {
            reject(error);
            console.log("error w/ data");
        });
    });
};

module.exports.removePlants = (plantToRemove) => {
    return new Promise( (resolve,reject) => {
        $.ajax({
            url: `https://fir-a5a79.firebaseio.com/plants/${plantToRemove}.json`,
            method: "DELETE",
        })
        .done( (updatedData) =>{
            resolve(updatedData);
        })
        .fail((error) => {
            reject(error);
            console.log("error deleting data");
        });
    });
};

module.exports.editPlants = (plantToEdit) => {
    return new Promise( (resolve,reject) => {
        $.ajax({
            url: `https://fir-a5a79.firebaseio.com/plants/${plantToEdit}.json`,
            method: "PATCH",
            data: JSON.stringify(plantToEdit)
        })
        .done( (updatedData) =>{
            resolve(updatedData);
        })
        .fail((error) => {
            reject(error);
            console.log("error deleting data");
        });
    });
};