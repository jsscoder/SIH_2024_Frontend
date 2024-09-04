import React,{useEffect, useRef} from "react";
import { Play, Plus, Calendar} from "lucide-react";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { MdSunny } from "react-icons/md";
import Images from "../../assets/Index"
import { IoMdMoon } from "react-icons/io";
import { useContext } from 'react';
import { MyTheme } from "../../Context/ThemeContext";

// import { Button } from "../../Components/ui/Button";




const Hero= () => {
    const ref=useRef(null);
    const {Theme,setTheme} = useContext(MyTheme);

    const Toggle=()=>{
     

      if(Theme==="light"){
        setTheme("dark")
      }
      else{
        setTheme("light");
      }
    }
     
    
  return (
    <section className="flex flex-col items-center justify-center w-full max-w-5xl px-5 py-20 mx-auto md:px-0 md:py-32 lg:py-40">
      <div className="w-full mx-auto space-y-5">
        <div className="flex items-center justify-center w-full bg-">
        
          <div ref={ref} className="flex items-center justify-center w-full">
            <motion.div  drag dragConstraints={ref} whileDrag={{scale:1.3}} className="mx-auto w-fit button-wrapper">
              <button className="flex items-center px-5 py-1.5 text-sm  text-center text-btntext bg-btnbg rounded-full w-fit cursor-pointer select-none gap-2 font-medium"
               onClick={Toggle}
               >
              
                  {Theme=="light"?<IoMdMoon className="w-4 h-4" />:<MdSunny className="w-4 h-4" />}
              </button>
              <div className="button-bg"></div>
            </motion.div>
          </div>
        </div>
        <h1 className="text-3xl font-Google1 font-extralight text-center md:text-6xl md:font-light drop-shadow-md toslte6 shadow-custom text-mytext">
           Automated System for Faculty 
        </h1>
        <p className="max-w-2xl font- mx-auto text-base text-center text-mytext md:text-lg">

        Facilitates and Streamlines the Career Advancement Process For Faculty Members In Higher Education Institutions
        </p>
        <div className="flex items-center justify-center space-x-5">
          
        </div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-bg_card/5 p-2 ring-1 ring-inset ring-mytext/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src={Images.Background}
                alt="product preview"
                // width={1440}
                // height={1024}
                className="rounded-md w-full h-[37rem] bg-background/50 p-2 sm:p-8 md:-20 shadow-2xl ring-1 ring-border/10"
              />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute hidden bg-teal-500 rounded-full opacity-20 md:block w-96 h-96 top-40 right-1/2 blur-3xl z-10"
        animate={{
          x: [50, -50, 50],
          y: [100, -100, 100],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      ></motion.div>
      <motion.div
        className="absolute hidden bg-yellow-800 rounded-full opacity-20 md:block w-96 h-96 top-80 right-40 blur-3xl z-10"
        animate={{
          x: [50, -50, 50],
          y: [100, -100, 100],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      ></motion.div>
    </section>
  );
};

export default Hero;