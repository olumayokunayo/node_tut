const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  } else if (req.url === "/about") {
    res.end("Here is our about page");
  } else {
    res.end(`
  <h1>Ooops!</h1>
  <p>Can't seem to have the page you're looking for</p>
  <a href="/">Back to home </a>`);
  }
});

server.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
