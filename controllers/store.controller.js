const Store = require("../models/Store");

const storeCreate = async (req, res) => {
    const { proprietor, storeName, storeAddress, email, note } = req.body;
    let store = await Store.find({ email });
    if (store.length > 0) {
        return res.status(400).json({ message: "Store already exists" });
    }
    store = new Store({
        proprietor,
        storeName,
        storeAddress,
        email,
        note,
    });
    await store.save();
    res.status(201).json({ message: "Store created successfully" });
};
module.exports = {
    storeCreate,
};
