const express = require("express");
const app = express();
const { PORT } = require("./utils/config");
const { connectToDatabase } = require("./utils/db");
const notesRouter = require("./controllers/notes");

app.use(express.json());

app.use("/api/notes", notesRouter);

//const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
