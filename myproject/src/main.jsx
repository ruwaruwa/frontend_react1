import React from "react";
import {createRoot } from "react-dom/client";
 import   './Style.css'
const root =document.getElementById('root')
import SayHi from "./componnts/Header";
import Mdisction from "./componnts/Midlesection";
import FooterS from "./componnts/Footer";
createRoot(root).render(
<div className="">
  <SayHi/>
  <div className="flex mt-3 gap-4">
    <Mdisction title="Ruweyda Ali" image="https://img.freepik.com/free-photo/front-view-young-lady-holding-her-document_140725-37593.jpg?size=626&ext=jpg&ga=GA1.1.1324558945.1701195143&semt=ais" desc="this is first one"/>
   <Mdisction title="Sucaad Salad" desc="this is the second one" image="https://img.freepik.com/free-photo/beautiful-smiling-african-american-woman-holding-laptop_74855-4711.jpg?w=900&t=st=1702370611~exp=1702371211~hmac=3452937b56690191ef3988c0f291eecff7f4a6f0b0ca2f845465e579c2a18c92"/>
   <Mdisction title="Salma Mokhtaar" desc="this is the third one" image="https://img.freepik.com/free-photo/medium-shot-woman-editing-photo_23-2150439042.jpg?size=626&ext=jpg&ga=GA1.1.1324558945.1701195143&semt=ais"/>

  </div>
{/* <Mdisction/> */}
<FooterS/>
</div>

);


 

