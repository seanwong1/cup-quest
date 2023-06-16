import express from 'express';
import 'dotenv/config'
import path from 'path';
import * as https from 'node:https';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
//all this work just for __dirname in es6
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){
  const url = "https://media.tenor.com/4iqJFHzJIDsAAAAC/cat-scream.gif";
  res.write(`
  <!DOCTYPE html>
  <h1> SERVER IS SET UP!!!!</h1>
  <img src="${url}"></img>
  </html>`)
  res.end();
})

// routes go here



const port = process.env.PORT;
app.listen(port, () => {
  console.log('listening on port', port);
  console.log(`Go to http://localhost:${port} for more details`)
});

