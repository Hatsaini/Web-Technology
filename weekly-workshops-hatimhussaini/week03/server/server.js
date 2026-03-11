const express = require("express");
const app = express();
app.get("/", (req, res) => {
     const lastModified = new Date().toUTCString();
     const etag = '"123456"'; // Simulated ETag
     if (req.headers["if-none-match"] === etag) {
         res.status(304).end(); // Not Modified
     } else {
         res.set("ETag", etag);
         res.set("Last-Modified", lastModified);
         res.send("Hello, caching with ETag and Last-Modified!");
     }
});
app.listen(3000, () => console.log("Server running on http://localhost:3000"));