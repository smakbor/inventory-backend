const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

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
const profileRoutes = require("./routes/profile.routes");
const { isAuth } = require("./middlewares/auth");

// Routes

app.use("/api/customer", customerRoutes);
app.use("/api/warranty", warrantyRoutes);
app.use("/api/manufacturer", manufacturerRoutes);
app.use("/api/category", isAuth, categoryRoutes);
app.use("/api/unit", unitRouts);
app.use("/api", proprietors);
app.use("/api/store", storeRoutes);
app.use("/api/v1", profileRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
