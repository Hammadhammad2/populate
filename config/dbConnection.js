import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://Hammad:Hammadhammad1@cluster0.wa042.mongodb.net/newPopulate?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    )
    .then(() => console.log("Database Connected......"))
    .catch((error) => console.log(`${error} did not connect`));
};
export default dbConnection;
