const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const todoRoutes = require("./routes/todo.route");
const cors = require("cors");
const setupSwagger = require("./docs/swagger");
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  }),
);

setupSwagger(app);

//Routes
app.use("/api/todo", todoRoutes);


const PORT = process.env.PORT || 1819;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/api-docs/`);
  });
});
