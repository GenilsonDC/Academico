const { response } = require("express");
const taskModel = require("../Model/taskModel");

class taskController {
  async create(req, res) {
    const task = new taskModel(req.body);
    await task
      .save()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res
          .status(500)
          .json("⚠️ Não foi possível criar tarefa: " + error);
      });
  }
  async updated(req, res) {
    await taskModel
      .findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })

      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res
          .status(500)
          .json("⚠️ Não foi possível atualizar a tarefa: " + error);
      });
  }
  async all(req, res) {
    await taskModel
      .find({ mac_address: { $in: req.body.mac_address } }) // só tras as tarefas do mac adress do dispositivo
      .sort("when") //Organiza por Date
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res
          .status(500)
          .json("⚠️ Não foi possível mostrar todas as tarefa: " + error);
      });
  }
}

module.exports = new taskController();
