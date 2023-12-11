import mangoose from "mongoose"

const connect = async() => {
  try {
    await mangoose.connect(process.env.Mongo)
  } catch (error) {
    throw new  Error("Connection failed");
  }
}

export default connect;