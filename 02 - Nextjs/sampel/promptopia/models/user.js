const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, "Email already exist"],
    required: [true, "email is required"],
  },
  username: {
    type: String,
    required: [true, "username is required"],
  },

  image: {
    type: String,
  },
});

// const User = model?.User || model("user", UserSchema);
const User = mongoose.models.User || mongoose.model("User", UserSchema);


export default User;
