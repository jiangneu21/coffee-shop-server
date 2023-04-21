import mongoose from "mongoose";
const OLDusersSchema = new mongoose.Schema(
    {

        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        email: { type: String, unique: true },
        role: { type: String, default: "USER", enum: ["USER", "ADMIN"]},
    },
    {
        collection: "users",
    }
);
export default usersSchema;
