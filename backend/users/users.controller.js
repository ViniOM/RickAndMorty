const userService = require("./users.service");
const authService = require("../auth/auth.service");

const createUserController = async (req, res) => {
  const { username, name, email, password, avatar } = req.body;

  if (!username || !name || !email || !password || !avatar) {
    return res.status(400).send({
      message:
        "Alguns campos estão faltando. Os campos são: 'username', 'name', email, 'password' ou 'avatar'",
    });
  }

  const foundUser = await userService.findByEmailUserService(email);

  if (foundUser) {
    return res.status(400).send({
      message: "Usuario ja existe!",
    });
  }

  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err));

    if (!user) {
        return res.status(400).send({
            message: "Erro ao criar Usuario"
        })
    }

    const token = authService.generateToken(user.id);

    res.status(201).send({
      user: {
        id: user.id,
        name, 
        username,
        email,
        avatar,
      },
      token,
    });
};

const findAllUserController = async (req, res) => {
  const users = await userService.findAllUserService();

  if (users.length === 0) {
    return res
      .status(400)
      .send({ message: "Não existem usuarios cadastrados!" });
  }
  res.send(users);
};

const findByNameUserController = async(req, res) => {
  const {username} = req.body;

  const foundUsername = await userService.findByNameUserService(username);

  if (!foundUsername){
    res.status(404).send({ message: "Username nao cadastrado!"})
  }

  res.status(201).send(foundUsername);
}

const deleteUserController = async(req,res) => {
  const id = req.params.id;

  if (!id) {
    return res
    .status(401)
    .status({ message: "Id Invalido!"})
  }

  await userService.deleteUserService(id);

  res.status(201).send({ message: "Deletado com sucesso!"})
}

module.exports = { findAllUserController, createUserController, findByNameUserController, deleteUserController };
