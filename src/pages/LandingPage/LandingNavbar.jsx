
import { Button } from "flowbite-react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";


import  {Link , useNavigate} from 'react-router-dom';

import ICONS from "../../assets/Index"
import { useContext } from "react";
import Authcontext from "../../Context/Authcontext";

const LandingNavbar = () => {
//const session = false;
  const {setLogged} = useContext(Authcontext)
 const navigator=useNavigate();

  return (
    <header className="fixed inset-x-0 top-0 z-40 w-full border-b h-14 bg-background/40 backdrop-blur-md border-slate-200">
      
      <div className="flex items-center justify-between w-full h-full px-4 mx-auto max-w-7xl md:px-6 xl:px-0">
       

       
     
        <Link to="/">
          <img src={ICONS.Logo} alt="logo" className="h-10 p-1 hidden md:block" />
       </Link>

        
          <div className="flex items-center justify-end space-x-4">
            <Link to="/confirm" onClick={()=>setLogged(false)}>
            <Button outline gradientDuoTone="greenToBlue">
           Login
      </Button>
            </Link>
            <Link to="/confirm" onClick={()=>setLogged(true)}>
              <Button outline gradientDuoTone="purpleToBlue"> <BsFillArrowRightCircleFill className="mr-2 h-4 w-4" /> Register </Button>
            </Link>
          </div>
        
      </div>
    </header>
  );
};

export default LandingNavbar;