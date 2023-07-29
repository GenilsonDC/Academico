const express = require("express");
const router = express.Router();
const taskController = require("../Controller/taskController");
const taskValidation = require("../Middlewares/taskValidation");
const macAdressValidation = require("../Middlewares/macAdressValidation");

router.post("/", taskValidation, taskController.create);
router.put("/:id", taskValidation, taskController.updated);
router.get("/filter/all", macAdressValidation, taskController.all);
// router.delete("", taskController.delete);
module.exports = router;
