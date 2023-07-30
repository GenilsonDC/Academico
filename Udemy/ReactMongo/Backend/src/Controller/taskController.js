const { response } = require("express");
const taskModel = require("../Model/taskModel");
const currentDate = new Date();
const {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfYear,
  endOfYear,
  startOfMonth,
  endOfMonth,
} = require("date-fns");

class taskController {
  async create(req, res) {
    const task = new taskModel(req.body);
    await task
      .save()
      .then((response) => {
        return res.status(200).json({ response: "✅ Tarefa criada" });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível criar tarefa! " });
      });
  }
  async updated(req, res) {
    await taskModel
      .findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })

      .then((response) => {
        return res.status(200).json({ response: "✅ Tarefa atualizada" });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível atualizar a tarefa! " });
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
          .json({ error: "⚠️ Não foi possível mostrar todas as tarefa! " });
      });
  }
  async show(req, res) {
    await taskModel
      .findById(req.params.id)

      .then((response) => {
        if (response) return res.status(200).json(response);
        else
          return res
            .status(404)
            .json({ error: "⚠️ Não foi possível encontrar a tarefa! " });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível mostrar a tarefa! " });
      });
  }
  async delete(req, res) {
    await taskModel
      .deleteOne({ _id: req.params.id })

      .then((response) => {
        if (response)
          return res.status(200).json({ response: "✅ Tarefa deletada " });
        else
          return res
            .status(404)
            .json({ error: "⚠️ Não foi possível encontrar a tarefa! " });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível excluir a tarefa! " });
      });
  }
  async done(req, res) {
    await taskModel
      .findByIdAndUpdate(
        { _id: req.params.id },
        { done: req.params.done },
        { new: true }
      )
      .then((response) => {
        if (response)
          return res.status(200).json({ response: "✅ Tarefa atualizada " });
        else
          return res
            .status(404)
            .json({ error: "⚠️ Não foi possível encontrar a tarefa! " });
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível atualizar a tarefa! " });
      });
  }
  async late(req, res) {
    await taskModel
      .find({
        when: { $lt: currentDate },
        mac_address: { $in: req.body.mac_address },
      })
      .sort("when")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possível encontrar a tarefa! " });
      });
  }
  async today(req, res) {
    await taskModel
      .find({
        mac_address: { $in: req.body.mac_address },
        when: { $gte: startOfDay(currentDate), $lte: endOfDay(currentDate) },
      })
      .sort("when")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possivel encontrar a tarefa!" });
      });
  }
  async week(req, res) {
    await taskModel
      .find({
        mac_address: { $in: req.body.mac_address },
        when: { $gte: startOfWeek(currentDate), $lte: endOfWeek(currentDate) },
      })
      .sort("when")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possivel encontrar a tarefa!" });
      });
  }
  async month(req, res) {
    await taskModel
      .find({
        mac_address: { $in: req.body.mac_address },
        when: {
          $gte: startOfMonth(currentDate),
          $lte: endOfMonth(currentDate),
        },
      })
      .sort("when")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possivel encontrar a tarefa!" });
      });
  }

  async year(req, res) {
    await taskModel
      .find({
        mac_address: { $in: req.body.mac_address },
        when: { $gte: startOfYear(currentDate), $lt: endOfYear(currentDate) },
      })
      .sort("when")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res
          .status(500)
          .json({ error: "⚠️ Não foi possivel encontrar a tarefa!" });
      });
  }
}

module.exports = new taskController();
