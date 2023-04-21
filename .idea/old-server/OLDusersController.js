import users from "../data/users.js";
import * as usersDao from "../users/users-dao.js";

/*let currentUser = null;*/

function UsersController(app) {
    const getUsers = async (req, res) => {
        const users = await usersDao.getUsers();
        res.json(users);
    };
    const findUserById = async (req, res) => {
        const id = req.params.id;
        const user = await usersDao.findUserById(id);
        if (user) {
            res.json(user);
        } else {
            res.status(404);
            throw new Error('User does not exist');
        }
    };
    const deleteUserById = async (req, res) => {
        const id = req.params.id;
        const status = await usersDao.deleteUser(id);
        res.json(status);
    };

    const updateUser = async (req, res) => {
        const id = req.params.id;
        const status = await usersDao.updateUser(id, req.body);
        if (user) {
            user.username = req.body.username;
            user.email = req.body.email;
            res.json(user);
        } else {
            res.status(404)
            throw new Error('')
        }
        res.json(status);
    };
    const login = async (req, res) => {
        const foundUser = await usersDao.findUserByCredentials(
            req.body.username,
            req.body.password
        );
        if (foundUser) {
            req.session["currentUser"] = foundUser;
            res.send(foundUser);
        } else {
            res.sendStatus(404);
        }
    };
    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(204);
    };
    const profile = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (currentUser) {
            res.json(currentUser);
        } else {
            res.sendStatus(404);
        }
    };
    const register = async (req, res) => {
        const foundUser = await usersDao.findUserByUsername(req.body.username);
        if (foundUser) {
            res.sendStatus(409);
            return;
        } else {
            const newUser = await usersDao.createUser(req.body);
            req.session["currentUser"] = newUser;
            res.json(newUser);
        }
    };

    app.post("/api/users/register", register);
    app.post("/api/users/login", login);
    app.post("/api/users/logout", logout);
    app.get("/api/users/profile", profile);


    app.get("/api/users", getUsers);
    app.get("/api/users/:id", findUserById);
    app.delete("/api/users/:id", deleteUserById);
    app.put("/api/users/:id", updateUser);
}

export default UsersController;
