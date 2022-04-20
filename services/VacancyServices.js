const VacancyModel = require("../models/VacancyModel");
const ApiError = require("../exceptions/api-error");

class VacancyServices {
    async getAllVacancies() {
        const data = await VacancyModel.find();
        return data;
    }

    async addVacancy(body) {
        const data = await VacancyModel.create( {...body, createdAt: Date.now()});
        return data;
    }

    async updateVacancy(body, id) {
        const vacancy = VacancyModel.findOne({_id: id});
        if (!vacancy) {
            throw ApiError.BadRequest(`Vacancy with id ${id} doesn't exist`);
        }
        const data = await VacancyModel.findByIdAndUpdate( id, body, {new: true});
        return data;
    }

    async deleteVacancy(id) {
        const vacancy = VacancyModel.findOne({_id: id});
        if (!vacancy) {
            throw ApiError.BadRequest(`Vacancy with id ${id} doesn't exist`);
        }
        const data = await VacancyModel.deleteOne( {_id: id});
        return data;
    }
}

module.exports = new VacancyServices();