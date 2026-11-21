const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");

const server = http.createServer((req, res) => {
  if (req.url === "/api/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: "OK" }));
  }

  if (req.url === "/api/chat" && req.method === "POST") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      res.end(JSON.stringify({
        reply: "Sonic YT সার্ভার সংযুক্ত হয়েছে! এখন AI সংযোগের কাজ বাকি।"
      }));
    });

    return;
  }

  let requestedPath = req.url.split("?")[0];
  if (requestedPath === "/") requestedPath = "/index.html";

  const filePath = path.resolve(PUBLIC_DIR, "." + requestedPath);

  if (!filePath.startsWith(PUBLIC_DIR + path.sep)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end("File not found");
    }

    res.writeHead(200, {
      "Content-Type": filePath.endsWith(".html")
        ? "text/html"
        : "text/plain"
    });

    res.end(data);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Sonic YT server running on port " + PORT);
});
