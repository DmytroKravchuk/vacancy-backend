const VacancyService = require("../services/VacancyServices");

class VacancyController {
    async getAllVacancies(req, res, next) {
        try {
            const vacancies = await VacancyService.getAllVacancies();
            res.json(vacancies);
        } catch (e) {
            next(e);
        }
    }

    async addVacancy(req, res, next) {
        try {
            const vacancyData = await VacancyService.addVacancy(req.body);
            return res.json(vacancyData);
        } catch (e) {
            next(e);
        }
    }

    async updateVacancy(req, res, next) {
        try {
            const {id} = req.params;
            const vacancyData = await VacancyService.updateVacancy(req.body, id);
            return res.json(vacancyData);
        } catch (e) {
            next(e);
        }
    }

    async deleteVacancy(req, res, next) {
        try {
            const {id} = req.params;
            await VacancyService.deleteVacancy(id);
            return res.json({id});
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new VacancyController();