import express from "express";
import cors from "cors";
import 'dotenv/config';
import ImageKit from "imagekit";

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());


app.get("/api/upload", (req, res) => {
    res.send("Hello World");
  });

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});