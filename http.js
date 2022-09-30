const http = require("http");
/*
const app = http.createServer((function(request, response){
    console.log("서버 실행중")
}))
app.listen(3000, function(){
    
})
*/

const app = http.createServer((req, res)=>{
    res.writeHead(200,{"Content-Type":"text/pain"});
    res.write("welcome\n");
    res.end("!!response end!!");
})

app.listen(3000, () => {
    console.log("서버 실행중")
})