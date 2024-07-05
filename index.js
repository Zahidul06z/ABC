const https = require('http')

const port = 3000
const hostName = '127.0.0.1'
const fs = require('fs')

const server = https.createServer((req,res)=>{
    const fun = (location,statusCode )=>{
        fs.readFile(location,(err,data)=>{
            res.writeHead(statusCode,{'Content-type':'text/html'})
            res.write(data)
            res.end()
        })
    }

    if(req.url==='/'){
        fun('./Pages/index.html',200)
    }
    else if(req.url==='/about'){
        fun('./Pages/about.html',200)
    }
    else if(req.url==='/contact'){
        fun('./Pages/contact.html',200)
    }else{
        fun('./Pages/error.html',400)
    }
})

server.listen(port,hostName,()=>{
    console.log(`Server is running successfull at http://${hostName}:${port}`)
})