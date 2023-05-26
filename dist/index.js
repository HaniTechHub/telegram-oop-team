"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authen_route_1 = __importDefault(require("./router/authen.route"));
const book_route_1 = __importDefault(require("./router/book.route"));
const connectDb_1 = require("./util/connectDb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// app.use(express.urlencoded({ extended: false }));
app.use("/api/authen", authen_route_1.default);
app.use("/api/book", book_route_1.default);
app.get('/ping', (req, res) => {
    res.send('pong 🏓');
});
app.get('/hello', (req, res) => {
    res.send('Hello Pong 🏓');
});
app.get("*", (req, res) => {
    res.send("404");
});
(0, connectDb_1.connectMongoose)()
    .then(() => {
    console.log("Mongoose Connect Success");
    app.listen(port, () => {
        console.log(`Ditconmemay app is running on http://localhost:${port}`);
    });
})
    .catch((err) => {
    console.log("Mongoose Connect Error", err);
    process.exit(1);
});
