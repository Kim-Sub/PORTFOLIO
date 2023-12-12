import { useState, useRef } from "react";
import styled from "styled-components"

import ScrollPosition from '../../hook/ScrollPosition';



// 탭 메뉴 구현을 위한 컴포넌트

const SkillStack = styled.button`
   width: 100px; height: 100px ;cursor: pointer;
   font-size: 20px; font-family: 'Dai Banna SIL', serif;
   border-top:  1px solid #0a3d273b; border-bottom:  1px solid #0a3d273b; border-left: none; border-right: none;
   background-color: ${(props) => (props.isActive ? "#f0f0f0" : "#0a3d273b")};
`

const Skill = () => {
   const scrollPosition = ScrollPosition();
 
   const tab = ["HTML", "CSS", "Sass", "JS", "jQuery", "Bootstrap", "React", "Vue", "VSCode", "Git", "Figma"];
   const skillStack = ['HTML', 'CSS', 'Sass', 'JavaScript', 'JQuery', 'Bootstrap', 'React', 'Vue', 'VSCode', 'Git', 'Figma'];
 
   const [activeTab, setActiveTab] = useState(tab[0]);
   const [isDragging, setIsDragging] = useState(false);
   const [dragStartX, setDragStartX] = useState(null);
   const skillBoxRef = useRef(null);
 
   const handleTabClick = (tab) => {
     setActiveTab(tab);
   };
 
   const handleDragStart = (e) => {
     setIsDragging(true);
     setDragStartX(e.clientX || e.touches[0].clientX); // 마우스 또는 터치의 클라이언트 X 좌표 사용
   };
 
   const handleDrag = (e) => {
     if (isDragging) {
       const clientX = e.clientX || e.touches[0].clientX; // 마우스 또는 터치의 클라이언트 X 좌표 사용
       const offsetX = clientX - dragStartX;
       skillBoxRef.current.scrollLeft -= offsetX;
       setDragStartX(clientX);
     }
   };
 
   const handleDragEnd = () => {
     setIsDragging(false);
   };


   


   return (
      <div id='Skill'>
         <h1>Skill Stack</h1>
         <span>→ Drag</span>
         <div style={{display:"flex", justifyContent:"space-between", alignItems:"center",}}
         className='Skill-box' ref={skillBoxRef}
         onMouseDown={handleDragStart} onMouseMove={handleDrag} onMouseUp={handleDragEnd}
         onTouchStart={handleDragStart} onTouchMove={handleDrag} onTouchEnd={handleDragEnd}>
            {tab.map((tabItem, i) => (
               <SkillStack className={`Skill-button ${scrollPosition >= 1200 ? 'originPosition' : ''}`}
               key={tabItem} onClick={() => handleTabClick(tabItem)} isActive={activeTab === tabItem}>
                  <img className={`skill-Img ${scrollPosition >= 1200 ? 'originPosition' : ''}`}
                  src={`${process.env.PUBLIC_URL}/img/skills/${skillStack[i]}.svg`} alt="스킬이미지" />
               </SkillStack>
            ))}
         </div>
         <div className={`Skill-memo ${scrollPosition >= 1200 ? 'originPosition' : ''}`}>
            {activeTab === "HTML" &&
               <div>
                  <h3>HTML</h3>
                  <p>① <strong>문법 이해</strong>　-　요소(element)와 속성(attribute)으로 구성되는 HTML 문법을 이해하고, 올바른 구조의 문서를 작성할 수 있다.</p>
                  <p>② <strong>시멘틱 마크업</strong>　-　header, nav, article, footer 등 마크업 시맨틱 태그를 이해하며, 구조와 내용에 적절한 태그를 사용할 수 있다.</p>
                  <p>③ <strong>폼(Form) 제어</strong>　-　폼 요소를 생성하고, 유효성 검사를 수행하며, 사용자 입력을 처리할 수 있다.</p>
                  <p>④ <strong>크로스 브라우징</strong>　-　웹 표준을 준수하여 다양한 웹 브라우저에서 일관되게 작동하는 HTML을 작성할 수 있다.</p>
                  <p>⑤ <strong>웹 접근성</strong>　-　메타데이터와 스크린 리더기 등 웹 접근성을 고려한 문서를 작성할 수 있다.</p>
                  <p>⑥ <strong>HTML5 기능 활용</strong>　-　오디오, 비디오, 로컬 스토리지, 캔버스 등 HTML5의 새로운 기능과 API를 활용할 수 있다. </p>
               </div>
            }
            {activeTab === "CSS" &&
               <div>
                  <h3>CSS</h3>
                  <p>① <strong>선택자 및 속성 이해</strong>　-　Cascading Style Sheet의 기본적인 문법을 이해하며, 선택자(selector)와 속성(property)을 올바르게 사용하며 목표하는 요소를 수정할 수 있다.</p>
                  <p>② <strong>애니메이션 및 트랜지션</strong>　-　애니메이션과 트랜지션 효과를 만들 수 있으며, 웹 페이지의 사용자 경험을 보다 풍부하게 만들 수 있다.</p>
                  <p>③ <strong>성능 최적화</strong>　-　중복되거나 불필요한 코드를 최적화, 정리하여 웹 페이지 성능을 향상시키고 가독성을 높여 협업 효율에 도움이 된다.</p>
                  <p>④ <strong>반응형 웹</strong>　-　다양한 화면 크기와 디바이스에 대응하여 레이아웃과 스타일을 조정하여 웹 페이지가 모바일 기기부터 데스크톱 컴퓨터까지 잘 작동하도록 할 수 있다.</p>
               </div>
            }
            {activeTab === "Sass" &&
               <div>
                  <h3>SASS</h3>
                  <p>① <strong>문법 이해</strong>　-　SCSS (Sass)의 문법을 이해하고 올바르게 사용할 수 있다.</p>
                  <p>② <strong>변수 사용</strong>　-　변수를 활용하여 색상, 글꼴, 여백 등의 값을 관리하며 일관된 디자인을 구성하고 유지 보수를 수월히 할 수 있다.</p>
                  <p>③ <strong>중첩과 상속</strong>　-　중첩과 상속을 사용하여 하위 요소를 간편히 스타일링할 수 있으며, 코드 중복을 줄이고 더 간결한 CSS를 작성할 수 있다.</p>
                  <p>④ <strong>믹스인(Mix In) 활용</strong>　-　라운드된 버튼을 믹스인으로 정의하고 여러 버튼에 재사용하는 등 믹스인을 사용하여 스타일 속성을 재사용할 수 있다.  </p>

               </div>
            }
            {activeTab === "JS" &&
               <div>
                  <h3>JAVA SCRIPT</h3>
                  <p>① <strong>문법 이해</strong>　-　자바스크립트의 문법과 기본적인 개념을 이해하고 올바르게 읽어낼 수 있다. 변수 선언, 조건문, 반복문, 함수 선언, 객체 및 배열 조작 등을 의미한다.</p>
                  <p>② <strong>이벤트 처리</strong>　-　이벤트 처리를 다룰 수 있으며, 클릭, 마우스 호버, 키보드 입력 등 다양한 이벤트를 처리할 수 있다.</p>
                  <p>③ <strong>생태계 이해</strong>　-　Node.js, npm, Babel, Webpack 등과 같은 자바스크립트 생태계의 도구와 환경을 사용할 수 있다.</p>
                  <p>④ <strong>라이브러리 및 프레임워크</strong>　-　React, Vue와 같은 라이브러리를 활용할 수 있다.</p>
               </div>
            }
            {activeTab === "jQuery" &&
               <div>
                  <h3>J.QUERY</h3>
                  <p>① <strong>라이브러리 이해</strong>　-　DOM 조작, 이벤트 처리, 애니메이션, Ajax 요청과 같은 jQuery의 핵심 기능을 사용할 수 있다.</p>
                  <p>② <strong>이벤트 처리</strong>　-　jQuery를 사용하여 클릭, 호버, 키보드 이벤트 등의 이벤트 처리를 할 수 있다.</p>
                  <p>③ <strong>애니메이션</strong>　-　애니메이션 효과를 추가할 수 있으며, 요소의 움직임, 페이드 인/아웃, 슬라이딩 등 다양한 애니메이션을 만들 수 있다.</p>
                  <p>④ <strong>Ajax 요청</strong>　-　서버로 데이터를 보내거나 데이터를 받아와서 동적으로 페이지를 업데이트할 수 있다.</p>
               </div>
            }
            {activeTab === "Bootstrap" &&
               <div>
                  <h3>BOOTSTRAP</h3>
                  <p>① <strong>기본 이해</strong>　-　그리드, 레이아웃, 텍스트 스타일링, 버튼, 폼 요소, 모달, 탭, 카드 등의 UI 컴포넌트를 제공하는 부트스트랩의 기본 개념과 구성 요소를 이해하고 활용할 수 있다.</p>
                  <p>② <strong>UI 컴포넌트 사용</strong>　-　부트스트랩에서 제공하는 UI 컴포넌트를 사용하여 웹 페이지를 구축함은 물론 버튼, 폼, 네비게이션 바, 알림, 모달 다이얼로그 등을 활용하여 스타일링하고 동작시킬 수 있다.</p>
                  <p>③ <strong>커스텀 스타일링</strong>　-　스타일링 클래스를 재조합하거나 직접 CSS를 추가하여 웹 페이지의 컨셉을 커스터마이징할 수 있다.</p>
               </div>
            }
            {activeTab === "React" &&
               <div>
                  <h3>REACT</h3>
                  <p>① <strong>상태 및 속성 관리</strong>　-　상태(State)를 변경하고, 부모 컴포넌트로부터 속성(Props)을 전달받아 사용할 수 있습니다.</p>
                  <p>② <strong>라우팅</strong>　-　리액트 라우터를 사용하여 다양한 페이지 및 경로를 관리하고, 라우팅된 컴포넌트를 렌더링할 수 있다.</p>
                  <p>③ <strong>비동기 작업</strong>　-　API 호출 및 데이터 가져오기와 같은 비동기 작업을 구현하여 동적인 웹 페이지를 구축할 수 있다. </p>
                  <p>④ <strong>라이프사이클</strong>　-　컴포넌트의 라이프사이클 메서드를 활용하여 컴포넌트의 동작을 제어하고 최적화할 수 있다.</p>
                  <p>⑤ <strong>컴포넌트 설계</strong>　-　폼이나 NAV처럼 단순한 컴포넌트를 구성함을 넘어, HOOK과 CSS를 내장하여 독립적으로 재사용이 가능한 모듈화된 컴포넌트를 직접 설계할 수 있다.</p>
               </div>
            }
            {activeTab === "Vue" &&
               <div>
                  <h3>VUE</h3>
                  <p>① 　-　</p>
                  <p>② 　-　</p>
                  <p>③ 　-　</p>
                  <p>④ 　-　</p>
                  <p>⑤ 　-　</p>
                  <p>⑥ 　-　</p>
               </div>
            }
            {activeTab === "VSCode" &&
               <div>
                  <h3>Visual Studio CODE</h3>
                  <p>① <strong>확장 기능 활용</strong>　-　VSCode의 다양한 확장 기능(Extensions)을 설치하여 개발 환경을 개선하고 효율성을 높일 수 있다.</p>
                  <p>② <strong>통합 개발 환경</strong>　-　VSCode를 통합 개발 환경으로 사용하여 디버깅, 버전 관리, 통합 터미널 등 다양한 기능을 활용할 수 있다.</p>
                  <p>③ <strong>Git 및 버전 관리</strong>　-　Git과 연동하여 코드 관리를 할 수 있으며, 코드 변경 내역을 추적하고 비교할 수 있다.</p>
                  <p>④ <strong>테마 및 사용자 정의</strong>　-　단순히 테마를 다운로드 하는것을 넘어, 직접 커스텀 테마와 세팅을 생성 혹은 불편한 부분을 개선하여 개발 환경을 개인화할 수 있다.</p>
               </div>
            }
            {activeTab === "Git" &&
               <div>
                  <h3>GIT</h3>
                  <p>① <strong>깃허브 활용</strong>　-　GitHub 플랫폼을 활용할 수 있다. 원격 저장소를 생성하고 관리하며, 코드를 푸시하고 풀 리퀘스트를 적용할 수 있다.</p>
                  <p>② <strong>브랜치</strong>　-　Git 브랜치를 이해하고, 브랜치를 활용하여 협업을 꾀할 수 있으며 프로젝트를 개발하고 배포할 수 있다.</p>
                  <p>③ <strong>버전 관리 및 백업</strong>　-　프로젝트의 버전을 체계적으로 관리할 수 있으며, 필요한 경우 이전 버전으로 롤백할 수 있다.</p>
               </div>
            }
            {activeTab === "Figma" &&
               <div>
                  <h3>FIGMA</h3>
                  <p>① <strong>인터페이스 디자인</strong>　-　사용자 인터페이스(UI) 및 사용자 경험(UX) 디자인을 어느정도 수행할 수 있다. 웹 앱, 모바일 앱, 웹사이트 등 다양한 플랫폼 및 화면 크기에 대한 디자인을 포함한다.</p>
                  <p>② <strong>컴포넌트</strong>　-　컴포넌트와 스타일 시스템을 활용하여 디자인 일관성을 유지하고 재사용 가능한 컴포넌트를 관리할 수 있다.</p>
                  <p>③ <strong>애니메이션 및 상호작용</strong>　-　템플릿에 애니메이션 및 상호작용을 추가할 수 있다.</p>
                  <p>④ <strong>프로토타입</strong>　-　웹 또는 앱의 프로토타입을 제작하고 테스트하여, 디자인 아이디어를 실제 사용자 경험으로 시각화할 수 있다.</p>
                  <p>⑤ <strong>공유 및 협업</strong>　-　디자인 파일을 공유하고 다른 팀원과 협업할 수 있다. 주석 및 공유 링크를 통한 피드백 수렴과 수정을 진행할 수 있다.</p>
               </div>
            }
         </div>

      </div>
   )
}

export default Skill
