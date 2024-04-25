const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Proprietor = require("../models/Proprietor");

const proprietorCreate = async (req, res) => {
    try {
        const {
            name,
            fatherName,
            mobile,
            email,
            password,
            address,
            nid,
            note,
        } = req.body;
        let proprietor = await Proprietor.findOne({ email });

        // check proprietor is exists
        if (proprietor) {
            return res
                .status(400)
                .json({ message: "Proprietor already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create new proprietor
        proprietor = new Proprietor({
            name,
            fatherName,
            mobile,
            email,
            password: hashedPassword,
            address,
            nid,
            note,
        });
        await proprietor.save();
        res.status(201).json({ message: "Proprietor created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const proprietorLogin = async (req, res) => {
    const { mobile, password } = req.body;
    const findUser = await Proprietor.findOne({ mobile });
    if (findUser) {
        bcrypt
            .compare(password, findUser.password)
            .then((result) => {
                // const token = {
                //     _id: findUser._id,
                //     name: findUser.name,
                //     email: findUser.email,
                //     mobile: findUser.mobile,
                // };
                // Generate JWT token
                const token = jwt.sign({ user: findUser._id }, "secret", {
                    expiresIn: "1h",
                });

                if (result) {
                    res.status(200).json({
                        message: "Login successfull",
                        accessToken: token,
                    });
                } else {
                    res.status(500).json({
                        message: "Server errror",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

// const proprietorProfile = async (req, res) => {
//     const user = req.user._id;
//     const findUser = await Proprietor.findOne({ user });
//     if (findUser) {
//         res.status(200).json({
//             data: findUser,
//         });
//     } else {
//         res.status(500).json({
//             message: "Server errror",
//         });
//     }
// };

module.exports = {
    proprietorCreate,
    proprietorLogin,
    // proprietorProfile,
};
