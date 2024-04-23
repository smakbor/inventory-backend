let jwt = require("jsonwebtoken");
const isAuth = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        res.send("Not authorized!");
    }

    const decode = jwt.verify(token, "secret");
    req.user = decode._id;
    next();
};

module.exports = {
    isAuth,
};
