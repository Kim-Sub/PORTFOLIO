import React, { useState } from "react";
import TodoList from '../components/Todo-List';
import Modal from '../components/Modal';
import FormContact from "../components/Form-Contact";

// 아이콘 import
import { BsTelephonePlusFill } from "react-icons/bs"; 
import { FaMailBulk } from "react-icons/fa"; 
import { ImAddressBook } from "react-icons/im"; 




const Contact = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleOpenModal = () => {
     setIsModalOpen(true);
   };
 
   const handleCloseModal = () => {
     setIsModalOpen(false);
   };
   return (
      <div id='Contact'>
         <div className='inner'>
            <div>
               <ul>
                  <li>
                     <ImAddressBook />
                     수원 영통구 광교
                  </li>
                  <li onClick={handleOpenModal}>
                     <FaMailBulk />
                     powersub1101@naver.com
                  </li>
                     <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={
                        <div>
                           <FormContact />
                        </div>
                     } />
                  <li>
                     <BsTelephonePlusFill />
                     010-2484-4795
                  </li>
               </ul>
               <TodoList />
            </div>
         </div>
      </div>
   );
};

export default Contact;