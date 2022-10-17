const http = require('http')


const server = http.createServer( (req,res) => {
    
    const URL = req.url
    if(URL == "/"){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h2>Anasayfaya hosgeldin</h2>")
}   
else if(URL == "/about"){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h2>About sayfasına hosgeldin</h2>")
}
else if(URL == "/contact"){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h2>Contact sayfasına hosgeldin</h2>")
}


}) 
const port = 5000
server.listen(port, ()=> {
   console.log( `Server ${port}unda oluşturuldu.`)
})