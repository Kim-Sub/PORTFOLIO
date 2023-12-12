import React, { useState } from "react";
import '../scss/mouse.scss'


import ParticleCanvas from '../components/Particle-Canvas';
import Modal from '../components/Modal';
import Skill from "./home/Skill";

import ScrollPosition from '../hook/ScrollPosition';







const Home = () => {
   const scrollPosition = ScrollPosition()

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

   
   return (
      <div id='Home'>
         <section className='canvasBox'>
            <ParticleCanvas/>
            <h1>MarkUp, Publishing, Front End Developer</h1>
            {/* 메인 우측 하단 scroll 안내 마우스 */}
            <div className='mouseBox'>
               <div className="mouse"></div>
               <p>Scroll</p>
            </div>
         </section>

         <section className="section1">
            <div className='inner'>
               <div>
                  {/* 좌측 */}
                  <div className='profile'>
                     <img src={require("../img/SUB.jpg")} alt="" />
                     <ul>
                        <li>name. <span>김문섭</span></li>
                        <li>birth. <span>92.11.01</span></li>
                        <li onClick={handleOpenModal}>job. <span> - </span></li>
                           <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={
                              <div>
                                 <strong>움냐냐 저는 현재 백수입니다</strong>
                                 <p>자영업 개인 매장 운영 4년</p>
                                 <p>SNS 바이럴 마케팅 종사 2년</p>
                                 <p>네이버 인플루언서 블로그 운영 9년</p>
                              </div>}
                           />
                        <li>company. <span> - </span></li>
                        <li>major. <span> 경제학 </span></li>
                     </ul>
                  </div>
                  {/* 우측 */}
                  <div className={`greetings ${scrollPosition >= 600 ? 'originVisible' : ''}`}>
                     <h1>Hello</h1>
                     <em style={{fontWeight:"bold"}}>마크업, 퍼블리싱, 프론트엔드 개발을 할 수 있습니다. </em>
                     <em>ENFP , 궁금한 건 참지 못하는 자기주도적 사람. 인내심과 정신력 더불어 적응력이 강합니다.</em>
                     <em>광고업과 서비스업 등 커리어를 돌고 돌아 뒤늦게 개발자의 길을 걷고 있지만, 인생 어느 때보다 지독한 흥미 속에 즐거운 하루를 보내고 있습니다. </em>
                     <em>개발과 디자인이란 사용자에게 반복되는 불편을 인지하고, 어떻게든 해결책을 찾아내 구현하는 것이라 생각합니다.</em>
                     <em>사람들과 어울려 소통하는 것을 좋아하지만, 반대로 한구석에서 혼자 조용히 작업하는 것도 좋아합니다.</em>
                     <em>이른 시간에 잠에 들어 이른 시간에 기상하는, 비교적 잠이 없는 편입니다.</em>
                     <em>AM 6:00 새벽의 어스름한 맥주 한 잔을 즐깁니다.</em>
                  </div>
               </div>
            </div>
         </section>
         
         <section className="section2">
            <div className='inner'>
               <Skill />
            </div>
         </section>



         
      </div>
   );
};

export default Home;