import express from "express";
import { indexRoute } from "./routes/indexRoute.mjs";
import { messageRoute } from "./routes/messageRoute.mjs";

const app = express();

app.get("/", indexRoute);
app.get("/message", messageRoute);

const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, () => {
    server.close(() => {
      console.log(`Process terminated with signal: ${signal}`);
    });
  });
});