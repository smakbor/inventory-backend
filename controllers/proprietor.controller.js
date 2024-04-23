const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Proprietor = require("../models/proprietor");

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
        console.log(proprietor);

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

module.exports = {
    proprietorCreate,
};
