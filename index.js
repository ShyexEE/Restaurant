import express from "express";
import path from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

const app = express();
const port= 3000;


app.use(express.static(path.join(__dirname, 'build')));


 app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, () => {
    console.log("Server is running on port "+ port);
})



