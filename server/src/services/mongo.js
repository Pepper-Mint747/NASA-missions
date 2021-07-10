const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://nasa-api:K1SGgdRO470c9GPL@training.nkgrw.mongodb.net/nasa?retryWrites=true&w=majority"

mongoose.connection.once("open", () => {
    console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
    console.error(err)
});

async function mongoConnect() {
    await  mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = { mongoConnect, mongoDisconnect }