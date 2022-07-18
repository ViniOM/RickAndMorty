const User = require("./Users");

const findAllUserService = () => User.find();

const findByEmailUserService = (email) => User.findOne({ email: email });

const findByNameUserService = async (username) => User.findOne({ username: username });

const createUserService = (body) => User.create(body);

const deleteUserService = (id) => User.findByIdAndDelete(id);


module.exports = {
    findByEmailUserService,
    createUserService,
    findAllUserService,
    findByNameUserService,
    deleteUserService,
}