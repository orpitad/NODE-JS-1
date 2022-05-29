const http = require('http')
const fs = require('fs');

// const server = http.createServer();

const server = http.createServer((req, res) => {
    if(req.url == '/createfile') {
       
          const d = new Date();
        //   fs.appendFile(`${d.getDate()}-${d.getTime()}.txt`, Date.now(), function (err) {
        //     res.writeHead(200, {'Content-Type': 'application/json'});
        //     res.write(Date.now().toString());
        //     return res.end();
        //   });
        fs.appendFile(`${d.getDate()}-${d.getTime()}.txt`, Date.now().toString(), function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(Date.now().toString());
        return res.end();
    }
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n')
  
}).listen(8080);
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })