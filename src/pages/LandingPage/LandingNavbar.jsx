
import { Button } from "@radix-ui/themes";
import CreateAccount from '../../Components/Register/Register';
import UserLogin from '../../Components/Login/Login';
import  {Link , useNavigate} from 'react-router-dom';

import ICONS from "../../assets/Exports/Index"
import { useContext } from "react";
import Authcontext from "../../Context/Authcontext";

const LandingNavbar = () => {
//const session = false;
  const {setLogged} = useContext(Authcontext)
 const navigator=useNavigate();

  return (
    <header className="fixed inset-x-0 top-0 z-40 w-full border-b h-14 bg-white/40 backdrop-blur-md border-slate-200">
      <div className="flex items-center justify-between w-full h-full px-4 mx-auto max-w-7xl md:px-6 xl:px-0">
       

       
     
        <Link to="/">
          <img src={ICONS.Logo} alt="logo" className="h-10 p-1 hidden md:block" />
       </Link>

        
          <div className="flex items-center justify-end space-x-4">
            <Link to="/auth" onClick={()=>setLogged(false)}>
              Login
            </Link>
            <Link to="/auth" onClick={()=>setLogged(true)}>
              <Button variant="outline">Register</Button>
            </Link>
          </div>
        
      </div>
    </header>
  );
};

export default LandingNavbar;