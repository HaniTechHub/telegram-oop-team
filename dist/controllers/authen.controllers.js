"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("../schemas/user.schema");
const login_user = (req, res) => {
    user_schema_1.UserSchema.apiQuery(req.query)
        .select("username")
        .then((users) => {
        res.json(users);
    })
        .catch((err) => {
        res.status(422).send(err.errors);
    });
};
const register_user = (req, res) => {
    user_schema_1.UserSchema.findById(req.params.userId)
        .then((user) => {
        res.json(user);
    })
        .catch((err) => {
        res.status(422).send(err.errors);
    });
};
module.exports = {
    login_user,
    register_user,
};
