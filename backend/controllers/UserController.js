const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getKey = async (req, res) => {
  const getUser = await UserModel.findById(req.user._id);

  if (!getUser) {
    res.status(401).json({ message: "No users found..." });
  } else {
    res.status(200).json(getUser);
  }
};

const createAccount = async (req, res) => {
  const { firstname, lastname, username, password, email, id, birthday } =
    req.body;
  const userExist = await UserModel.find({ username: username });

  if (userExist.length !== 0) {
    res.status(401).json({ message: "Error: Email is already in use." });
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const createUser = UserModel.create({
      firstname,
      lastname,
      username,
      password: hashedPassword,
      picture: `picture${Math.floor(Math.random() * 8)}`,
      email,
      id,
      birthday,
    });
    if (createUser) {
      res.status(201).json({ message: "Account creation sucessful." });
    } else {
      res.json({ message: "Error: Account creation failed." });
    }
  }
};

const loginAccount = async (req, res) => {
  const { username, password } = req.body;
  const userExist = await UserModel.findOne({ username: username });

  if (!userExist) {
    res.json({ message: "Invalid credentials." });
  } else if (
    userExist &&
    (await bcrypt.compare(password, userExist.password))
  ) {
    res
      .status(200)
      .json({ res: { token: genJWT(userExist._id), message: "logged in" } });
  }
};

const getAuth = async (req, res) => {
  const userData = await UserModel.findById(req.user._id);
  if (!userData) {
    res.json({ message: "No id recieved." });
  } else {
    res.json({ res: { userData, message: "Id recieved and user found." } });
  }
};

const getUserDetails = async (req, res) => {
  const userData = await UserModel.findById(req.user._id);

  if (userData) {
    const userDetails = {
      username: userData.username,
      id: userData.id,
      firstname: userData.firstname,
      lastname: userData.lastname,
      picture: userData.picture,
      email: userData.picture,
      birthday: userData.birthday,
    };
    res.status(200).json(userDetails);
  } else {
    res.status(401).json({ message: "Error retrieving data." });
  }
};

const getUserInfo = async (req, res) => {
  const { id } = req.params;
  const userData = await UserModel.findById(id);

  if (userData) {
    const userDetails = {
      username: userData.username,
      id: userData.id,
      picture: userData.picture,
    };
    res.status(200).json(userDetails);
  } else {
    res.status(401).json({ message: "Error retrieving data." });
  }
};

const getInfo = async (req, res) => {
  const { id } = req.params;
  const userData = await UserModel.findOne({ username: id });
  if (userData) {
    const userDetails = {
      username: userData.username,
      id: userData.id,
      picture: userData.picture,
    };
    res.status(200).json(userDetails);
  } else {
    res.status(201).json({ message: "Error retrieving data." });
  }
};

const getMultipleUsers = async (req, res) => {
  const { id } = req.params;
  const usersData = await UserModel.find({ username: { $regex: id } });
  let arr = [];
  if (usersData.length > 0) {
    usersData.forEach((element) => {
      const createUser = {
        username: element.username,
        id: element.id,
        picture: element.picture,
      };
      arr.push(createUser);
    });
    res.status(200).json(arr);
  } else {
    res.status(401).json({ message: "No users found..." });
  }
};

const genJWT = (id) => {
  return jwt.sign({ id }, process.env.TROPAPP_SECRET, { expiresIn: "30d" });
};

module.exports = {
  createAccount,
  loginAccount,
  getAuth,
  getUserDetails,
  getUserInfo,
  getInfo,
  getKey,
  getMultipleUsers,
};
