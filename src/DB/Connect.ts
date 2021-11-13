import mongoose from "mongoose";

export const Connect = async function () {
  console.log(process.env.DBName);
  await mongoose.connect(
    `mongodb+srv://${process.env.DBName}:${process.env.DBKey}@cluster0.4l1wj.mongodb.net/NewsDB?retryWrites=true&w=majority`
  );
};
