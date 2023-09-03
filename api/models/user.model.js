import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  // Enable automatic timestamps for 'createdAt' and 'updatedAt'
    {timestamps: true}
  );
  // Create a Mongoose model based on the schema and export it
  const User = mongoose.model('User', userSchema);

  export default User;