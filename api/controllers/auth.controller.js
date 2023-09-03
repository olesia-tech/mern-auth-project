import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';


//async function to handle user sign-up
export const signup =  async (req, res, next) => {
  const { username, email, password } = req.body;
  // Hash the password using bcryptjs
  const hashedPassword = bcryptjs.hashSync(password, 10);
   // Create a new User instance with the hashed password
  const newUser = new User({username, email, password: hashedPassword});
 try {
  // Save the new User to the database
  await newUser.save();
  // Respond with a 201 (Created) status code and success message
  res.status(201).json({message: 'User created successfully'});
 } catch (error) {
 next(error);
 }
}
