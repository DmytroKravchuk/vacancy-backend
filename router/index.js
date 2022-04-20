const Router = require("express").Router;
const vacancyController = require("../controllers/vacancyController");
const router = new Router();

router.get('/vacancies', vacancyController.getAllVacancies);
router.post('/vacancy', vacancyController.addVacancy);
router.put('/vacancy/:id', vacancyController.updateVacancy);
router.delete('/vacancy/:id', vacancyController.deleteVacancy);

module.exports = router;