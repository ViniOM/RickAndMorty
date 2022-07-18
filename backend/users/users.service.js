const User = require("./Users");

const findByEmailUserService = (email) => User.findOne({ email: email });

const createUserService = (body) => User.create(body);

const findAllUserService = () => User.find();

const findByNameUserService = async (username) => User.findOne({ username: username });


module.exports = {
    findByEmailUserService,
    createUserService,
    findAllUserService,
    findByNameUserService,
}