const express = require("express");
const router = express.Router();
const taskController = require("../Controller/taskController");
const taskValidation = require("../Middlewares/taskValidation");

router.post("/", taskValidation, taskController.create);
router.put("/:id", taskValidation, taskController.updated);
router.get("/:id", taskController.show);
router.delete("/:id", taskController.delete);
router.put("/:id/:done", taskController.done);

router.get("/filter/all/:mac_address", taskController.all);
router.get("/filter/late/:mac_address", taskController.late);
router.get("/filter/today/:mac_address", taskController.today);
router.get("/filter/week/:mac_address", taskController.week);
router.get("/filter/month/:mac_address", taskController.month);
router.get("/filter/year/:mac_address", taskController.year);

module.exports = router;
