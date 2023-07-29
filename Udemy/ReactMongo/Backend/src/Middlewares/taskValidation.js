const taskModel = require("../Model/taskModel");
const { isPast } = require("date-fns");
const taskValidation = async (req, res, next) => {
  const { mac_address, type, title, description, when } = req.body;

  if (!mac_address)
    return res.status(400).json({ error: "⚠️ Mac address é obrigatório ⚠️" });
  else if (!type)
    return res.status(400).json({ error: "⚠️ Tipo é obrigatório ⚠️ " });
  else if (!title)
    return res.status(400).json({ error: "⚠️ Título é obrigatório ⚠️ " });
  else if (!description)
    return res.status(400).json({ error: "⚠️ Descrição é obrigatória ⚠️ " });
  else if (!when)
    return res
      .status(400)
      .json({ error: "⚠️ Data e hora são obrigatórios ⚠️ " });
  else if (isPast(new Date(when)))
    return res
      .status(400)
      .json({ error: "⚠️ Forneça somente data futura para o evento  ⚠️ " });
  else {
    let exists;

    if (req.params.id) {
      exists = await taskModel.findOne({
        _id: { $ne: req.params.id },
        when: { $eq: new Date(when) },
        mac_address: { $in: mac_address },
      });
    }

    exists = await taskModel.findOne({
      when: { $eq: new Date(when) },
      mac_address: { $in: mac_address },
    });
    if (exists) {
      return res.status(400).json({
        error: "⚠️ Já existe uma tarefa pra essa data e horário ⚠️",
      });
    }
    next();
  }
};

module.exports = taskValidation;
