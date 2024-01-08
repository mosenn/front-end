const { hash } = require("../middleware/bcrypt");
const mongoose = require("mongoose");
const userRegisterValid = require("../middleware/userValidation");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    // unique: true,
  },
  password: {
    require: true,
    type: String,
  },
  confirmPassword: {
    require: true,
    type: String,
  },
  pic: {
    type: String,
  },
});

userSchema.statics.userRegisterValid = (reqBody) => {
  return userRegisterValid.validate(reqBody, { abortEarly: false });
};

//*hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  //*new update for hasing most be get this in model

  const { hashPassword, hashConfirmPassword } = await hash(
    this.password,
    this.confirmPassword
  );
  this.password = hashPassword;
  this.confirmPassword = hashConfirmPassword;
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
