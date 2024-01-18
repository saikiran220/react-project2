import React, { useState,useEffect } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";



function App() {

const herodata=[
  {
    text1:"Dive Into",text2:"What you love"
  },
  {
    text1:"Indulge",text2:"Your passions"
  },
  {
    text1:"Give in to",text2:"Your passions"
  },
]

const [heroCount,setHeroCount]=useState(0)
const [playStatus,setPlayStatus]=useState(false)

useEffect(()=>{
  setInterval(()=>{
    setHeroCount((count)=>{return count===2?0:count+1})
  }, 3000)
 
},[])

  return (
   <>
   <div>
    <Background  heroCount={heroCount} playStatus={playStatus}/>
    <Navbar/>
    <Hero
    setPlayStatus={setPlayStatus}
    setHeroCount={setHeroCount}
    heroCount={heroCount}
    herodata={herodata [heroCount]}
    playStatus={playStatus}
     />
   </div>
   </>
  );
}

export default App;
