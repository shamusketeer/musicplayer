const http = require('http');
const port = 8002;
const fs = require('fs');

function requestHandler(req,res){
    //console.log(req.url);
    res.writeHead(200, {'content-type':'text/html'});
    let filepath;

    switch (req.url) {
        case '/':
            filepath = './index.html'
            break;
    
        case '/Playlist':
            filepath = './playlist.html' 
            break;

        default:
            filepath = './404.html'
            break;
    }

    fs.readFile(filepath, function(err, data){
        if(err){
            console.log('error', err);
            return res.end('<h1>Error!</h1>')
        }

        return res.end(data);
    });

    //    res.end('<h1>Gotit!</h1>')
}
const server = http.createServer(requestHandler);

server.listen(port, function(err){

    if(err){
        console.log(err);
        return;
    }

    console.log("Server is up and running on port: ", port);

});