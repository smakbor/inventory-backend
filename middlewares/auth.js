let jwt = require("jsonwebtoken");
const Proprietor = require("../models/Proprietor");
const isAuth = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    if (!token) {
        res.send("Not authorized!");
    }

    const decode = jwt.verify(JSON.parse(token), "secret");
    console.log(decode);
    const id = decode.user;
    const findUser = await Proprietor.find({ id });
    req.user = findUser;
    next();
};

module.exports = {
    isAuth,
};
