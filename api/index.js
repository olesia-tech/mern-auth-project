import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import useRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config();

// Attempt to connect to MongoDB using the connection string from environment variables
mongoose
.connect(process.env.MONGO)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.log(err);
});

// Initialize the Express application
const app = express();

app.use(express.json());
// Start the Express server and listen on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// Use 'useRoutes' for handling routes prefixed with '/api/user'
app.use('/api/user', useRoutes);
// Use 'authRoutes' for handling routes prefixed with '/api/auth'
app.use('/api/auth', authRoutes);

// Middleware function for error handling
//captures any errors that occur during request processing
app.use((err, req, res, next) => {
   // Get the status code from the error object; default to 500
  const statusCode = err.statusCode || 500;
  // Get the error message; default to 'Internal Server Error'
  const message = err.message || 'Internal Server Error';
  // Send a JSON response with the error details
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
