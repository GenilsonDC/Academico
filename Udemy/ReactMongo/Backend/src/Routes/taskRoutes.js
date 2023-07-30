const express = require("express");
const router = express.Router();
const taskController = require("../Controller/taskController");
const taskValidation = require("../Middlewares/taskValidation");
const macAdressValidation = require("../Middlewares/macAdressValidation");

router.post("/", taskValidation, taskController.create);
router.put("/:id", taskValidation, taskController.updated);
router.get("/:id", taskController.show);
router.delete("/:id", taskController.delete);
router.put("/:id/:done", taskController.done);

router.get("/filter/all", macAdressValidation, taskController.all);
router.get("/filter/late", macAdressValidation, taskController.late);
router.get("/filter/today", macAdressValidation, taskController.today);
router.get("/filter/week", macAdressValidation, taskController.week);
router.get("/filter/month", macAdressValidation, taskController.month);
router.get("/filter/year", macAdressValidation, taskController.year);

module.exports = router;
