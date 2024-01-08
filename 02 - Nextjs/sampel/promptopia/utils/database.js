const mongoose = require("mongoose");

export const connecetToDb = async () => {
  mongoose.set("strictQuery", false);
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.zutazhf.mongodb.net/next_p1_promptopia`
    );

    console.log(`db is connect at ${connect.connection.host}`);
  } catch (err) {
    console.log(err, "data base cant connect");
    process.exit(1);
  }
};
