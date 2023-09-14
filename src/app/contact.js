import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
 
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3xw2ade', 'template_ustx2x8', form.current, 'Q0bL-qvuXnRzT8uKp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
      return (
        <div name='Contacto ' className='w-full h-screen bg-white flex justify-center items-center p-4 my-5 dark:bg-gray-700 '>
            <form  ref={form} onSubmit={sendEmail} action='' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-3xl py-5 text-gray-800 text-center border-[#8BC8DF] dark:text-white  '>Contacto</p>
                </div>
                <input className='bg-[#ccd6f6]' type="text" placeholder='Name' name='name'/>
                <input className=" my-4 p-2 bg-[#ccd6f6] text" type='email' placeholder='Email' name='email'/>
                <textarea className='bg-[#ccd6f6] p-2' name="message" placeholder='Message' rows="10"></textarea>
                <button className='bg-[#ccd6f6] border-2 hover:bg-[#8BC8DF] px-4 py-3 my-8 mx-auto flex items-center' type="submit" value="Send">Enviar</button>
            </form>
        </div>
      )
    }
    
    export default Contact