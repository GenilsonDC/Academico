const macAdressValidation = (req, res, next) => {
  if (!req.body.mac_address)
    return res.status(400).json({ error: "⚠️ Mac address é obrigatório ⚠️" });
  else next();
};

module.exports = macAdressValidation;
