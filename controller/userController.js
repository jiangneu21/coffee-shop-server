import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../token.js';

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log("email:", email);
    console.log("password:", password);
    console.log(req.body);

    const foundUser = await User.findOne({ email });
    if (foundUser && (await foundUser.matchPassword(password))) {
        res.json({
            _id: foundUser._id,
            name: foundUser.name,
            email: foundUser.email,
            isAdmin: foundUser.isAdmin,
            token: generateToken(foundUser._id),

        });
    } else {
        console.log("Invalid email or password.");
    }
});

//api/users/profile
const profile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404);
    }
})

const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    
    const foundUser = await User.findOne({ email });
    if (foundUser) {
        res.sendStatus(400);
        throw new Error("User already exists");
    }

    const newUser = await User.create({ name, email, password })
    if (newUser) {
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: generateToken(newUser._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }


});



//export default login;
export { login, profile, register };