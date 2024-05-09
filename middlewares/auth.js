let jwt = require("jsonwebtoken");
const Proprietor = require("../models/Proprietor");
const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        if (!token) {
            res.send("Not authorized!");
        }

        const decode = jwt.verify(token, "secret");
        const id = decode.user;
        const findUser = await Proprietor.find({ id });
        req.user = findUser;
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    isAuth,
};
