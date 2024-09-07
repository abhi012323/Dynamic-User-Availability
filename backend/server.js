const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const scheduleRoutes = require("./routes/scheduleRoutes");
const userRoutes = require("./routes/userRoutes");
const availabilityRoutes = require("./routes/availabilityRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
require("dotenv").config(); // Load environment variables

const app = express();

// Middleware setup
app.use(
  cors({
    origin: true, // Allows all origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/schedule", scheduleRoutes);
app.use("/api/users", userRoutes);
app.use("/api/availability", availabilityRoutes);
app.use("/api/sessions", sessionRoutes);

// Log the connection string to check if it is loaded correctly
console.log("Mongo URI from .env:", process.env.MONGO_URI);

// MongoDB connection with your URI
mongoose
  .connect(process.env.MONGO_URI || "mongodb+srv://educationhubeduhelp:qazwsx123@cluster0.s6vul.mongodb.net/clients?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Default error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).send("Something broke!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
