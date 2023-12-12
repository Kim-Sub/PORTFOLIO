// DOM
import { Routes, Route} from "react-router-dom";
// CSS
import "./App.scss";
import "./scss/relative.scss";
// 라우트 import
import Dev from "./Routes/Dev"
import Home from "./Routes/Home"
import Port from "./Routes/Port"
import Contact from "./Routes/Contact"
// 컴포넌트 import
import NavLeft from "./components/Nav-Left"
import ButtonToTop from "./components/Button-ToTop"
// 훅 import
import Scroll100vh from "./hook/Scroll-100vh"


function App() {


   return (
     <div id='App'>
       <Scroll100vh>
            <NavLeft/>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/CONTACT" element={<Contact />}></Route>
              <Route path="/PORT" element={<Port />}></Route>
              <Route path="/DEV" element={<Dev />}></Route>
            </Routes>
            <ButtonToTop />
       </Scroll100vh>
     </div>
   );
 }
 

 export default App;

 /*
★배포방법
터미널 명령어 : npm run deploy

1. npm install gh-pages
2. package.json 수정
　      "scripts": {
          (...)
          "predeploy": "npm run build",
          "deploy": "gh-pages -d build"
        },
        "homepage": "깃 배포 주소/"
3. 커밋 & 푸쉬
4. 터미널에 npm run deploy
5. 깃 레포지토리 - 설정 - 렌더링 페이지 gh-pages로 선택
*/
