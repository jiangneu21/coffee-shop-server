import mongoose from "mongoose";
import usersSchema from "./users-schema.js";
const OLDusersModel = mongoose.model("users", usersSchema);
export default usersModel;