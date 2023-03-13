import React from 'react'
import  { useState } from 'react';
import { Link } from 'react-router-dom'
import "../css/ContactForm.css"
import chat from "../assets/chat.svg";
import road from "../assets/road.svg"



const ContactForm = () => {
  const [i, setI] = useState(0);

  const handleClick = () => {
    const btn = document.querySelector('button');
    btn.innerText = i;
    btn.classList.remove('finished');
    btn.classList.add('loading');

    const inter = setInterval(() => {
      setI(prevI => {
        const updatedI = prevI + 1;
        btn.innerText = updatedI;
        btn.classList.remove(`percent-${prevI}`);
        btn.classList.add(`percent-${updatedI}`);

        if (updatedI >= 100) {
          clearInterval(inter);
          setI(0);
          btn.innerText = '';
          btn.classList.remove('loading');
          btn.classList.add('finished');
          btn.classList.remove('percent-100');
        }

        return updatedI;
      });
    }, 25);
  };
  return (
    <>
    <div className='contact-container'> 

      <div id="wrap">
        
      <h1 className='text-5xl'>CONNECT TO ME </h1>
      <br /><br /><br />
      <div id="form-wrap">
        <form name=""contact-demo method="POST" action="https://formspree.io/f/xeqwzedy"> 
          
          <label for="message">Your Message:</label>
          <textarea name="message" id="message"></textarea>
         
          <label for="name">Name:</label>
          <input type="text" name="name"  id="name" />
          <label for="email">Email:</label>
          <input type="email" name="email" id="email"/>
      
          
          
           <div className="flex justify-center m-5">
  <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 t mr-2 mb-2" name="submit" value="SEND">SEND</button>
</div> 

{/* <button onClick={handleClick}>Submit</button> */}

          </form>
      </div>
      <Link to="/">
      <h1  className='absolute top-[837px] z-20 left-[142px] w-44'>Home </h1>
        </Link>
        
        <Link to="/blogs">
      <h1  className='absolute top-[911px] z-20 left-[142px] w-44'>Blog </h1>
        </Link>
    </div>   
    <img src={chat} alt="" className='absolute top-[210px] right-[659px] w-16 h-16' />
    <img src={road} alt="" className='absolute top-[773px] z-2 left-20 w-72 h-72 animate-pulse' />
    
    </div>
    
    
    </>
  
  )
  
}

export default ContactForm
