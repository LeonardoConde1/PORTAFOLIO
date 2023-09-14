
"use client";
import Head from "next/head";
import React, { useState } from 'react';
import {BsLightbulbFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import foto from '../Images/foto1.png';
import javascript from '../Images/javascript.png';
import tailwind from '../Images/tailwind.png';
import sql from '../Images/sql.png';
import react from "../Images/react.png";
import java from '../Images/java.png';
import c from '../Images/c.png';
import paginaWeb from '../Images/paginaWeb.png';
import weather from '../Images/weather.png';
import Contact from './contact.js'



export default function Home() {
  
  const [darkMode, setDarkMode] = useState(false);
  return (
   <div className={darkMode ? "dark" :""}>
    <Head>
      <title>Portafolio de Leonardo</title>
      <meta name='descripcion' content='G'></meta>
      <link rel='icon' href='/favicon.ico'/>
    </Head>
 
    <main className="bg-white px-10 md:px-20 lg:px-40  dark:bg-gray-700   ">
      <section className=" min-h-screen">
     <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons">DESARROLLADOR</h1>
      <ul className="flex items-center">
        <li><BsLightbulbFill onClick={() => setDarkMode(!darkMode) } 
        className="cursor-pointer text-xl>"/></li>
        <li>
          <a className=" bg-gradient-to-r from-cyan-500 to-white px-4 py-2 rounded-md ml-8 " href="#">RESUMEN</a>
        </li>
      </ul>
      </nav>
      <div className="text-center p-10 py     ">
        <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl ">
          Leonardo Conde</h2>
        <h3 className="text-2xl py-2 md:text-3xl">Desarrollador</h3>
        <p className="text-md py-5 leading-6 text-gray-700 md:text-xl max-w-lg mx-auto dark:text-white ">Desarrollador buscando su primer empleo en el mundo de la tecnologia, con muchas ganas de aprender y superarse.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 cursor-pointer target:bla">
      <a href={"https://www.linkedin.com/in/leonardo-conde-7a6168224/"} target="_blank">
      <AiFillLinkedin /></a>
      <a href={"https://github.com/LeonardoConde1"} target="_blank">
        < AiFillGithub/></a>  
      </div>
      <div className="realtive mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-110 mt-5 overflow-hidden md:h-90 md:w-90 ">
       <Image src={foto} alt="Foto"  />
      </div>
      </section>

      <section>
          <div className="md:px-20  lg:px-40 text-center">
            <h3 className="text-3xl py-5 text-gray-800 dark:text-white  ">Conocimientos</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white ">
               Tecnologias con las que tengo experiencia,  
              <span className="text-teal-500"> proyectos escolares </span>
              Tambien otras tecnologias como kotlin (android), github entre otras cosas
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1  space-y-5">
             <Image className="mx-auto" src={sql} width={100} height={100} alt="logo sql" />   
             <Image  className="mx-auto" src={javascript} width={100} height={100} alt="logo javascript" />  
             <Image className="mx-auto"src={react} width={100} height={100} alt="logo react" />
            </div>
          </div>

          <div className="lg:flex  gap-10  ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 space-y-5 ">
             <div className="className=mx-auto">
              
             <Image  className="mx-auto" src={c} width={100} height={100} alt="logo c#" />   
             <Image className="mx-auto" src={java} width={100} height={100} alt="logo de java"/>  
             <Image className="mx-auto" src={tailwind} width={100} height={100} alt="logo de tailwind"/>
             </div>
            </div>
            </div>
      </section>

      <section>
       <div>
            <h3 className="text-3xl py-5 text-gray-800 text-center dark:text-white  ">Proyectos</h3>
      </div>

   <div className="flex flex-col gap-10 py-12 ">
  <div className="basis-1/3 flex-1 relative">
    <Image
      src={weather}
      alt="imagen de la aplicación"
      className="rounded-lg object-cover"
      width={'100%'}
      height={'100%'}
      layout="responsive"
    />
    <div className="absolute top-9 left-0 w-full h-full flex justify-center items-center space-x-8 ">
    <a target="_blank" href="https://leonardoconde1.github.io/WeatherApp/">
    <button className="bg-teal-500 text-white py-2 px-4 rounded-lg transition-opacity duration-300 hover:opacity-75">
        Demo
      </button></a>
      <a target="_blank" href="https://github.com/LeonardoConde1/WeatherApp">
      <button className="bg-gray-800 text-white py-2 px-4 rounded-lg transition-opacity duration-300 hover:opacity-75">
        Code
      </button></a>
         </div>
      </div>
      </div> 
      <div className="flex flex-col gap-10 py-12 ">
 
   <div className="basis-1/3 flex-1 relative">
    <Image
      src={paginaWeb}
      alt="imagen de la aplicación"
      className="rounded-lg object-cover"
      width={'100%'}
      height={'100%'}
      layout="responsive"
    />
    <div className="absolute top-9 left-0 w-full h-full flex justify-center items-center space-x-8 ">
      <a target="_blank" href="https://leonardoconde1.github.io/Landing-page/">
    <button className="bg-teal-500 text-white py-2 px-4 rounded-lg transition-opacity duration-300 hover:opacity-75">
        Demo
      </button></a>
      <a target="_blank" href="https://github.com/LeonardoConde1/Landing-page">
      <button className="bg-gray-800 text-white py-2 px-4 rounded-lg transition-opacity duration-300 hover:opacity-75">
        Code
      </button></a>
         </div>
      </div>
      </div>

      </section>
    <section>
    <Contact />
      </section>
    </main>
   </div>
   
  )
}
