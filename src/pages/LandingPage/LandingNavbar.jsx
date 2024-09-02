
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import { Button } from "../ui/button";
import { Button } from "@radix-ui/themes";
import CreateAccount from '../../Components/Register/Register';
import UserLogin from '../../Components/Login/Login';



const LandingNavbar = () => {
//   const session = false;

  return (
    <header className="fixed inset-x-0 top-0 z-40 w-full border-b h-14 bg-white/40 backdrop-blur-md border-slate-200">
      <div className="flex items-center justify-between w-full h-full px-4 mx-auto max-w-7xl md:px-6 xl:px-0">
        <CreateAccount />
        <UserLogin />

        {/* <Link to="">

        </Link> */}
        {/* Logo */}
        {/* <Link to="/">
          <img src="/medusalogo.png" alt="logo" className="h-20 p-1 " />
        </Link> */}

        {/* Buttons */}
        {/* {session ? (
          <div className="flex items-center justify-end space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        ) : ( */}
          <div className="flex items-center justify-end space-x-4">
            {/* <Link to="">
              <Button>Login</Button>
            </Link>
            <Link to="">
              <Button variant="outline">Register</Button>
            </Link> */}
          </div>
        {/* )} */}
      </div>
    </header>
  );
};

export default LandingNavbar;