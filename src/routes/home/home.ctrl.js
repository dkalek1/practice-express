const User = require("../../model/User");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const reponse = await user.login();
    return res.json(reponse);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const reponse = await user.register();
    return res.json(reponse);
  },
};

module.exports = { output, process };
