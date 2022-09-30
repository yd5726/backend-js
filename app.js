const express = require('express');  // express 모듈을 express 객체를 사용한다.
const morgan = require('morgan'); // HTTP request logger를 사용한다.
const bodyParser = require('body-parser');  //body-parser를 사용한다.

const app = express();   // app이라는 express 객체의 인스턴스를 생성한다.

app.set('view engine', 'pug'); // view 템플릿 엔진을 pug를 사용한다고 설정한다.
app.set('port',3000);   // 포트번호 : 3000

// 사용할 미들웨어 모듈 : 미들웨어는 순서대로 호출됨(=순서 중요함)
app.use(express.static('public')); // 정적인 파일 : img, css, js 처리
app.use(bodyParser.json()); // json 데이터를 처리
app.use(bodyParser.urlencoded({extended: true}));   // 인코딩된 문자열 처리
app.use(morgan("dev")); // 개발 끝나고, 서비스(=배포)할 때는 combined 사용
//app.use(morgan("combined"));

/*
// routing 처리
app.get('/', function (req, res) {  // get 요청이 들어오면 응답
  res.send('Hello World');          //서버에서 text로 응답
})
*/
/*
// routing 처리
app.get('/search', function (req, res) {  // get 요청이 들어오면 응답
    res.send('search page 입니다.');          //서버에서 text로 응답
})

app.post('/additem', function (req, res) {  // get 요청이 들어오면 응답
    res.send('add item page 입니다.');          //서버에서 text로 응답
})
*/
/*
const userInfo = [
    { id:1, name:"홍길동", city:"광주" },
    { id:2, name:"김길동", city:"나주" },
    { id:3, name:"박길동", city:"목포"}
]
app.get('/user', function (req, res) {
    console.log("======send user list==========")
    //res.send("번호 : 1, 이름: 홍길동, 사는 곳 : 광주\n");          
    //res.send("번호 : 1, 이름: 김길동, 사는 곳 : 장성\n");          
    //res.send("번호 : 1, 이름: 박길동, 사는 곳 : 목포\n");          
    res.send(userInfo);
})
*/
/*
const userInfo = [
    { id:1, name:"홍길동", city:"광주" },
    { id:2, name:"김길동", city:"나주" },
    { id:3, name:"박길동", city:"목포"}
]

let tags ="<table>";
tags += "<tr>";
tags += "<td>"+userInfo[0].id+"</td>"
        +"<td>"+userInfo[0].name+"</td>"
        +"<td>"+userInfo[0].city+"</td>"
tags += "</tr>";
tags += "</table>";
*/
/*
// routing 처리
app.get('/user', function (req, res) {
    console.log("======send user list==========")        
    res.send(tags);
})

app.get('/main', function (req, res) {       
    res.send('main page');
})

app.get('/page/:main', function (req, res) {       
    res.send('404 not found');
})
*/
// 정적인 파일 : img, css, js 처리
app.use(express.static('public'));

// routing 처리 : 요청에 따른 응답 방법을 결정하는 것
// routing method : get(), post() ...
app.get('/', function (req, res) {  // get 요청이 들어오면 응답
    //res.sendFile(__dirname+"/public/main.html");   // HTML 파일로 응답
    res.render('index', { title: '하나 투어', message: '지금 예약하세요!' }); // pug로 응답
})

app.get('/tour', function (req, res) {  // get 요청이 들어오면 응답
    res.render('tour');
})

app.get('/reserve', function (req, res) {  // get 요청이 들어오면 응답
    //res.sendFile(__dirname+"/public/reserve.html");   // HTML 파일로 응답
    res.render('reserve');
})

app.post('/send_reserve', function (req, res) {  // post 요청이 들어오면 응답
    //res.send('post 요청에 대한 응답 페이지');   // HTML 파일로 응답
    //console.log(req.body);  // bodyParser가 이해하고 출력
    //res.send(req.body.guest_name+"님, 환영합니다.");
    console.log(req.body)   /*ajax로 통신 : ajax.js*/
    /*
    if(req.body.guest_name === "홍길동"){   
        res.send(req.body.guest_name+"님, 환영합니다.");
    } else{
        res.send("회원가입 페이지로 이동합니다.")
    }
    */
})

app.get('/cs', function (req, res) {  // get 요청이 들어오면 응답
    res.render('cs');
})

/*
app.listen(3000, function(){
    console.log('서버가 3000번 포트에서 실행중입니다.')
})
*/
const CURRENT_PORT = app.get('port');   // app.set()으로 포터번호를 지정했음.
app.listen(CURRENT_PORT, function(){
    console.log(`서버가 ${CURRENT_PORT}번 포트에서 실행중입니다.`)
})