import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import express from "express";

const login = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    const foundUser = await User.findOne({email});
    if (foundUser && await foundUser.elemMatch(password)) {
        res.json({foundUser})
    } else {
        res.sendStatus(404);
    }
});
const logout = asyncHandler(async (req, res) => {
    req.session.destroy();
    res.sendStatus(204);
});
const getProfile = asyncHandler(async (req, res) => {
    const currentUser = await User.findById(req.user._id);
    if (currentUser) {
        res.json({currentUser});
    } else {
        res.sendStatus(404);
    }
});
const register = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    const foundUser = await User.findOne({email});
    if (foundUser) {
        res.sendStatus(409);
        return;
    } else {
        const newUser = await User.create({username, email, password})
        req.session["currentUser"] = newUser;
        res.json(newUser);
    }
});

const updateProfile = asyncHandler(async (req, res) => {
    const currentUser = await User.findById(req.user._id);
    if (currentUser) {
        currentUser.username = req.body.username || currentUser.username
        currentUser.email = req.body.email || currentUser.email;
        if (req.body.password) {
            currentUser.passward = req.body.passward;
        }
        const updateUer = await user.save();
        res.json({updateUer});
    } else {
        res.sendStatus(404);
    }
});

const getUserList = asyncHandler(async(req, res) => {
    const users = await User.find({});
    res.json(users);
});

export {login, logout, register, getProfile, updateProfile, getUserList}
