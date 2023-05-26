import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, require: true, default: null, unique: true },
  password: { type: String, require: true, default: null },
  email: { type: String, default: null },
  phoneNumber: { type: String, default: null },
  isActive: { type: Boolean, default: true },
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
