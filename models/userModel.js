import mongoose from "mongoose";


const userSchema = mongoose.Schema ({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true , required: true },
    isAdmin: {type: Boolean, default: false, required: true }
    },
    {
        collection: "users",
    },
);
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
})
const User = mongoose.model('user', userSchema);

export default User;