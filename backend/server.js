//import
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

// configurasi
dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
const userRoutes = require("./routes/UserRoutes");
const productRoutes = require("./routes/ProductRoutes");
const fileRoutes = require("./routes/FileRoutes");
const authRoutes = require("./routes/AuthRoutes");
const signupRoutes = require("./routes/SignUpRoutes");
const transactionRoutes = require("./routes/TransactionRoutes");
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/signup", signupRoutes);

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}:`)
);
