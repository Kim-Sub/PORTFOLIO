import React from 'react';
import { Link } from 'react-router-dom';

import ButtonNormal from '../components/Button-Normal';
import ButtonCodeview from '../components/Button-Codeview';



const Port = () => {
   return (
      <div id='Port'>
         <div className='inner'>
            {/* 프로젝트1 */}
            <section className='section1'>
               <div>
                  <h1>Project 01　─　Government Office (Clone)</h1>
                  <div>
                     <div className='jpegBox'>
                        <img src={require('../img/portfolio1.png')} alt="포폴 프로젝트 이미지" />
                     </div>
                     <article>
                        <h3>프로젝트 이름　:　강원관광</h3>
                        <p>메인 툴　:　
                           <img src={process.env.PUBLIC_URL + '/img/skills/HTML.svg'} alt="스텍 이미지" />HTML
                           <img src={process.env.PUBLIC_URL + '/img/skills/CSS.svg'} alt="스텍 이미지" />CSS
                        </p>
                        <p>개발 기간　:　20일</p>
                        <p>참여도　:　개인 100%</p>
                        <p><span>요약　:　일반 웹</span><br />
                        웹개발 공부를 시작함과 동시에 도전한 관공서 클론코딩. <br/>
                        js를 사용할 줄 몰랐기에 css + 애니메이션으로 비슷한 기능을 최대한 구현하였다.</p>
                        <div>
                           <Link to="https://kim-sub.github.io/Gangwon-Tour/" target='blank_'><p><ButtonNormal/></p></Link>
                           <Link to="https://github.com/Kim-Sub/Gangwon-Tour" target='blank_'><p><ButtonCodeview/></p></Link>
                        </div>
                     </article>
                  </div>
               </div>
            </section>
            {/* 프로젝트2 */}
            <section className='section2'>
            <div>
                  <h1>Project 02　─　Corporate mini.Project</h1>
                  <div>
                     <div className='jpegBox'>
                        <img src={require('../img/portfolio2.png')} alt="포폴 프로젝트 이미지" />
                     </div>
                     <article>
                        <h3>프로젝트 이름　:　제네시스 회원가입</h3>
                        <p>메인 툴　:　
                           <img src={process.env.PUBLIC_URL + '/img/skills/CSS.svg'} alt="스텍 이미지" />CSS
                           <img src={process.env.PUBLIC_URL + '/img/skills/JavaScript.svg'} alt="스텍 이미지" />JavaScript
                        </p>
                        <p>개발 기간　:　2일</p>
                        <p>참여도　:　개인 100%</p>
                        <p><span>요약　:　창작 웹</span><br />
                        html과 css를 학습한 후, js를 시작하며 배운 정규식 표현으로 회원가입 페이지를 구축하였다. <br />
                        더불어 소소하지만 동적인 액션을 추가하였다.</p>
                        <div>
                           <Link to="https://kim-sub.github.io/Genesis/" target='blank_'><p><ButtonNormal/></p></Link>
                           <Link to="https://github.com/Kim-Sub/Genesis" target='blank_'><p><ButtonCodeview/></p></Link>
                        </div>
                     </article>
                  </div>
               </div>
            </section>
            {/* 프로젝트3 */}
            <section className='section3'>
               <div>
                  <h1>Project 03　─　BootStrap + sCSS</h1>
                  <div>
                     <div className='jpegBox'>
                        <img src={require('../img/portfolio3.png')} alt="포폴 프로젝트 이미지" />
                     </div>
                     <article>
                        <h3>프로젝트 이름　:　홍콩 갤러리</h3>
                        <p>메인 툴　:　
                           <img src={process.env.PUBLIC_URL + '/img/skills/Bootstrap.svg'} alt="스텍 이미지" />Bootstrap
                           <img src={process.env.PUBLIC_URL + '/img/skills/Sass.svg'} alt="스텍 이미지" />sCSS
                        </p>
                        <p>개발 기간　:　3일</p>
                        <p>참여도　:　개인 100%</p>
                        <p><span>요약　:　부트스트랩</span><br />
                        부트스트랩으로 전반적인 프레임을 완성하였고<br />
                        sCSS를 활용하여 작업 능률과 활용성을 높였다. 더불어 날씨와 지도 API를 활용하였다.</p>
                        <div>
                           <Link to="https://kim-sub.github.io/Project-World-Gallery/" target='blank_'><p><ButtonNormal/></p></Link>
                           <Link to="https://github.com/Kim-Sub/Project-World-Gallery" target='blank_'><p><ButtonCodeview/></p></Link>
                        </div>
                     </article>
                  </div>
               </div>
            </section>
            {/* 프로젝트4 */}
            <section className='section4'>
               <div>
                  <h1>Project 04　─　Corporate Page</h1>
                  <div>
                     <div className='jpegBox'>
                        <img src={require('../img/portfolio4.png')} alt="포폴 프로젝트 이미지" />
                     </div>
                     <article>
                        <h3>프로젝트 이름　:　NB BIO</h3>
                        <p>메인 툴　:　
                           <img src={process.env.PUBLIC_URL + '/img/skills/JavaScript.svg'} alt="스텍 이미지" />JavaScript
                           <img src={process.env.PUBLIC_URL + '/img/skills/JQuery.svg'} alt="스텍 이미지" />JQuery
                        </p>
                        <p>개발 기간　:　10일</p>
                        <p>참여도　:　개인 100%</p>
                        <p><span>요약　:　창작 웹</span><br />
                        GDWEB DESIGN AWARDS 수상작들을 벤치마킹하여 최신 디자인과 페이지의 역동성에 초점을 두었고, 협업이 필요할 때 누구나 복제, 수정할 수 있도록 주석을 활용하여 명료하고 간결하게 작성하였다.</p>
                        <div>
                           <Link to="https://kim-sub.github.io/BioCompany/" target='blank_'><p><ButtonNormal/></p></Link>
                           <Link to="https://github.com/Kim-Sub/BioCompany" target='blank_'><p><ButtonCodeview/></p></Link>
                        </div>
                     </article>
                  </div>
               </div>
            </section>
            {/* 프로젝트5 */}
            <section className='section5'>
               <div>
                  <h1>Project 05　─　Portfolio Page</h1>
                  <div>
                     <div className='jpegBox'>
                        <img src={require('../img/portfolio5.png')} alt="포폴 프로젝트 이미지" />
                     </div>
                     <article>
                        <h3>프로젝트 이름　:　포트폴리오 페이지</h3>
                        <p>메인 툴　:　
                           <img src={process.env.PUBLIC_URL + '/img/skills/Sass.svg'} alt="스텍 이미지" />sCSS
                           <img src={process.env.PUBLIC_URL + '/img/skills/JavaScript.svg'} alt="스텍 이미지" />JavaScript
                        </p>
                        <p>개발 기간　:　10일</p>
                        <p>참여도　:　개인 100%</p>
                        <p><span>요약　:　창작 웹</span><br />
                           역동적인 웹 페이지를 만들고 싶어서 만들어본 포트폴리오 페이지
                        </p>
                        <div>
                           <Link to="https://kim-sub.github.io/Let-me-introduce-my-self/" target='blank_'><p><ButtonNormal/></p></Link>
                           <Link to="https://github.com/Kim-Sub/Let-me-introduce-my-self" target='blank_'><p><ButtonCodeview/></p></Link>
                        </div>
                     </article>
                  </div>
               </div>
            </section>
            {/* 프로젝트6 */}
            <section className='section6'>
               <div>
                  <h1>Project 06　─　React App.</h1>
                  <div>
                     <div className='jpegBox'>
                        <img src={require('../img/portfolio6.png')} alt="포폴 프로젝트 이미지" />
                     </div>
                     <article>
                        <h3>프로젝트 이름　:　LCDC-Seoul</h3>
                        <p>메인 툴　:　
                           <img src={process.env.PUBLIC_URL + '/img/skills/React.svg'} alt="스텍 이미지" />React
                           <img src={process.env.PUBLIC_URL + '/img/skills/Sass.svg'} alt="스텍 이미지" />sASS
                        </p>
                        <p>개발 기간　:　10일</p>
                        <p>참여도　:　개인 100%</p>
                        <p><span>요약　:　웹 리디자인</span><br />
                           <a href='https://lcdc-seoul.com/' target='blank_'>LCDC-Seoul</a> 웹페이지를 리액트로 리-디자인한 페이지이다. UI를 향상시켜 사용자 편의를 더하고 각 요소들에 이벤트를 넣어 역동성을 더했다.<br />
                           더불어 직접 만든 컴포넌트를 적극 활용하여 웹 작업의 능률을 높였다.
                        </p>
                        <div>
                           <Link to="https://kim-sub.github.io/React-LCDC/" target='blank_'><p><ButtonNormal/></p></Link>
                           <Link to="https://github.com/Kim-Sub/React-LCDC" target='blank_'><p><ButtonCodeview/></p></Link>
                        </div>
                     </article>
                  </div>
               </div>
            </section>
            {/* 프로젝트7 */}
            <section className='section7'>
               <div>
                  <h1>Project 07　─　작업중</h1>
                  <div>
                     <div className='jpegBox'>
                        <img src={require('../img/portfolio7.png')} alt="포폴 프로젝트 이미지" />
                     </div>
                     <article>
                        <h3>프로젝트 이름　:　Movie App</h3>
                        <p>메인 툴　:　
                           <img src={process.env.PUBLIC_URL + '/img/skills/React.svg'} alt="스텍 이미지" />React
                           <img src={process.env.PUBLIC_URL + '/img/skills/Sass.svg'} alt="스텍 이미지" />sASS
                        </p>
                        <p>개발 기간　:　진행중</p>
                        <p>참여도　:　개인 100%</p>
                        <p><span>요약　:　창작 웹</span><br />
                           PMDB의 API 데이터를 활용하여 웹 앱을 구축하였다.<br />
                           단순히 영화를 나열하는 것에 그치지 않고 예고편 지원, 리뷰 살펴보기, 영화 검색 기능을 구현하였다. 
                        </p>
                        <div>
                           <Link to="https://kim-sub.github.io/React-Movie/" target='blank_'><p><ButtonNormal/></p></Link>
                           <Link to="https://github.com/Kim-Sub/React-Movie" target='blank_'><p><ButtonCodeview/></p></Link>
                        </div>
                     </article>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};

export default Port;