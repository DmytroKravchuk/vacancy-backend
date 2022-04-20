const {Schema, model} = require("mongoose");

const VacancySchema = new Schema({
    "name": {type: String, required: true},
    "city": {type: String, required: true},
    "price": {type: Object, required: true},
    "priceComment": {type: String},
    "createdAt": {type: Number, required: true},
    "address": {type: String, required: true},
});

module.exports = model("Vacancy", VacancySchema);