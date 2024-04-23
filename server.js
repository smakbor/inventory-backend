const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// TEST ROUTE

app.get("/test", (req, res) => {
    res.send("This is test server and the path is right");
});

// DATABASE CONNECTION

mongoose
    .connect("mongodb://127.0.0.1:27017/sardar-inventory")
    .then(() => {
        console.log("DB Connected");
    })
    .catch((error) => handleError(error));

//imported Routes

const proprietors = require("./routes/proprietor.route");
const storeRoutes = require("./routes/store.route");
const unitRouts = require("./routes/unit.route");
const categoryRoutes = require("./routes/category.route");
const manufacturerRoutes = require("./routes/manufacturer.route");
const warrantyRoutes = require("./routes/warranty.route");
const customerRoutes = require("./routes/customer.route");

// Routes
app.use("/api/customer", customerRoutes);
app.use("/api/warranty", warrantyRoutes);
app.use("/api/manufacturer", manufacturerRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/unit", unitRouts);
app.use("/api/proprietor", proprietors);
app.use("/api/store", storeRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
