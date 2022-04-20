require('dotenv').config();
const express = require("express");
const mongoose = require( "mongoose" );
const cors = require("cors");
const router = require("./router");
const errorMiddleware = require("./middlewares/error-middleware");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use("/", router);
app.use(errorMiddleware);

const init = async () => {
    try {
        await mongoose.connect(process.env.DB_URL).then(() => {
            console.log("connect to DB has been successfully")
        }).catch(e => console.log(e));

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
        app.get('/', (req, res) => {
            res.send({title: "Work Ua"});
        });
    } catch (e) {
        console.log(e);
    }
}

init();