const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create uploads folder if not exists
if (!fs.existsSync("./uploads")) {
    fs.mkdirSync("./uploads");
}

const app = express();
app.use(express.static("public")); // to serve upload.html

// Multer storage settings

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        const unique = Date.now() + "-" + Math.round(Math.random() * 1E9);
        cb(null, unique + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.get(["/",'/upload'], (req, res) => {
    res.sendFile(path.join(__dirname, "public", "upload.html"));
});

// Upload API (POST)
app.post("/upload", upload.single("myfile"), (req, res) => {
    console.log("File received:", req.file);
    res.send(`
        <h2>File uploaded successfully!</h2>
        <p>File name: ${req.file.filename}</p>
        <a href="/">Upload another file</a>
    `);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
