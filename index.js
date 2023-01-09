import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/a" && req.method === "GET") {
    res.end("Anda berhasil mengakses /a, method get");
  } else if (req.url === "/a" && req.method === "POST") {
    res.end("Anda berhasil mengakses /a, method post");
  } else if (req.url === "/d" && req.method === "DELET") {
    res.end("Anda berhasil menghapus /d");
  } else if (req.url === "/u"  && req.method === "UPDATE" ) {
    res.end("Anda berhasil mengudate /u");
  } else {
    res.end("Not found.");
  }
});

server.listen(3000);