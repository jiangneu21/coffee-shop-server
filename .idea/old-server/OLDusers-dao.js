import usersModel from "./users-model.js";

export const getUsers = async () => usersModel.find();

export const findUserById = async (uid) => usersModel.findById(uid);

export const findUserByUsername = async (username) => usersModel.findOne({ username });

export const findUserByCredentials = async (email, password) => usersModel.findOne({ email, password });

export const deleteUser = async (uid) => usersModel.deleteOne({ _id: uid });

export const createUser = async (user) => usersModel.create(user);

export const updateUser = async (uid, user) => usersModel.updateOne({ _id: uid }, user);
