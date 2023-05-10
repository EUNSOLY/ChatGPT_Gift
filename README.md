# chatGPT를 활용한 선물 추천받는 사이트

### 데모페이지 바로가기 👉 [Gift](https://etourguide.pages.dev/)

chat GPT를 활용한 선물 추천 웹앱 프로젝트

<img src="https://github.com/EUNSOLY/ChatGPT_Gift/blob/master/frontend/readmeImg/mockup.jpg?raw=true" alt="moukup"  width="400px" >

### 🖐 요즘 유행하는 chatGPT 오픈 API소스를 활용하여 선물 추천해주는 웹앱

<br/>

### 📌 개발기간

> 2023.05.08 ~ 2023.05.09

### 📌 사용 툴

> <img src="https://img.shields.io/badge/AdobePhotoshop-31A8FF?style=flatt&logo=Adobe Photoshop&logoColor=white"/>
> <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flatt&logo=Visual Studio Code&logoColor=white"/>

### 📌 개발 언어

> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/>
> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/>
> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/>
> <img src="https://img.shields.io/badge/node.js-339933?style=flat&logo=nodedotjs&logoColor=black"/>

### 📌 사용 플랫폼

> <img src="https://img.shields.io/badge/cloudflare-F38020?style=flat&logo=cloudflare&logoColor=black"/>
> <img src="https://img.shields.io/badge/awslambda-FF9900?style=flat&logo=awslambda&logoColor=black"/>
> <img src="https://img.shields.io/badge/amazonapigateway-FF4F8B?style=flat&logo=amazonapigateway&logoColor=black"/>

<br/>
<br/>

## 🖐Chat API 사용코드

<br/>

```
let apiKey = "";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);
```

## 🖐서버에 호스팅 할 때 실제 http연결 하기 위해 라이브러리 사용

<br/>

```
const serverless = require("serverless-http");
// app.listen(3000); -> 로컬에서 진행할 때
module.exports.handler = serverless(app);
```

## 🖐kakao AdFit광고 붙여 보기

실제 배포된 사이트라면 kakaoadfit에서 광고를 붙일 수 있다

1. kakao AdFit 로그인 (카카오계정으로 연결되서 사용된다.)
2. 광고관리 탭에서 매체등록을 진행한다.  
   a. 매체정보입력
   b. Web 매체 (서버에 배포된 사이트 url)
   c. 광고 형태 체크하기
3. 광고를 내 code에 넣을 수 있도록 코드 생성
4. 등록하면 일정 기간 이후 승인처리 된다.
   <br/>

> 위와 같은 방법으로 광고 등록하기 가능! (광고클릭하면 조금씩 돈이 들어온다고는한다..!)

<br/>

### 🖐프로젝트 진행 중 특이사항

> backend 서버 구동은 aws를 이용하고 frontend 구동은 cloudflare를 활용했다.  
> 두 플랫폼을 연동하기 위해서 awsurl생성을 진행했지만 연결이 안되는 현상이 발생해서
> awsAPI로 게이트웨이를 추가하여 실행하였다.
> 실제 local에서 진행 할 경우 CORS이슈가 생성 되어서 해당 이슈를 해결하기 위해서 CORS라이브러리를 다운받고 index.js에서 추가 설정을 진행하였다.

<br/>

### 🖐CORS 이슈 해결 코드

```
const cors = require("cors");
let corsOptions = {
  origin: "https://etourguide.pages.dev",
  credentials: true,
};
```

### 🖐새로알게된 점

> chatGPT오픈 API를 활용하였기 때문에 Playground활용법과 APIreference탭에서 key발급 받는 예습을 할 수 있었다.
> chatGPT 오픈 KEY값은 오픈된 사이트(github..)에 올라가면 오픈사이트에 공개된것을 감지하고 key값을 사라지게 한다. 이로인한 오류현상을 확인하였고 보통은 chat에 연결되어있는 email로 해당 내용을 안내받을 수 있다.  
> key 값이 사라지면 걱정할 것 없이 재 발급 받으면된다
> key값은 처음 생성시에만 fullkey를 보여주고 이후에는 보여주지 않는다.

<br/>
