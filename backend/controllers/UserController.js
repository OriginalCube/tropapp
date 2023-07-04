const createAccount = (req, res) => {
  console.log(req.body);
  res.send("Creating Account...");
};

const loginAccount = (req, res) => {
  console.log(req.body);
  res.send("Loging in Account...");
};

module.exports = { createAccount, loginAccount };
