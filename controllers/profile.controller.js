const Proprietor = require("../models/Proprietor");

const proprietorProfile = async (req, res) => {
    const user = req.user._id;
    const findUser = await Proprietor.findOne({ user });
    if (findUser) {
        res.status(200).json({
            data: findUser,
        });
    } else {
        res.status(500).json({
            message: "Server errror",
        });
    }
};
module.exports = {
    proprietorProfile,
};
