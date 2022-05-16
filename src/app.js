import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";

import routes from "./routes/index.js"

const app = express();
const port = process.env.API_PORT;

app.use(bodyParser.json())

app.use(routes);

app.listen(port, () => {
  console.log(`Application listening on port ${port}`)
})

export default app;
