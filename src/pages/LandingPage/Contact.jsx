import { Mail, Smartphone } from "lucide-react";

import { Label, TextInput,Textarea ,Button } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { CiMobile4 } from "react-icons/ci";

const Contact = () => {
  return (
    <section
      className="w-full items-center justify-center flex mx-auto relative bg-bbackground border-t border-b border-border"
      id="contact"
    >
      <div className="px-6 md:px-0 py-8 pb-32 container mx-auto lg:max-w-6xl md:pt-12 lg:pb-32">
        <div className="flex flex-col gap-3 items-center justify-center w-full py-8 z-[1]">
          <h2 className="text-2xl md:text-3xl font-medium text-mytext">Contact</h2>
          <p className="text-mytext text-base flex-wrap leading-7 text-center mt-4">
            Something on your mind? Get in touch and let&apos;s chat!
          </p>
          {/* <div className="flex flex-col md:flex-row items-center justify-center w-full space-x-0 md:space-x-6 lg:space-x-12 space-y-5 md:space-y-0 mt-6"> */}
            
              
              <div className="max-w-md w-full">
      <div className="mb-2 block">
        <Label htmlFor="email4" value="Your email" />
      </div>
      <TextInput id="email4" type="email" icon={HiMail} placeholder="name@flowbite.com" required />
    </div>
            
           
    <div className="max-w-md w-full">
      <div className="mb-2 block">
        <Label htmlFor="mobile" value="Your mobile number" />
      </div>
      <TextInput id="mobile" type="text" icon={CiMobile4} placeholder="name@flowbite.com" required />
    </div>
          
      


         <div className="max-w-md w-full">
      <div className="mb-2 block">
        <Label htmlFor="username3" value="Name" />
      </div>
      <TextInput id="username3" placeholder="Bonnie Green" addon="@" required />
    </div>
          
    <div className="max-w-md w-full">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Your message" />
      </div>
      <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
    </div>

          <div className="w-full items-center flex justify-center">
          <Button gradientMonochrome="success">
             
            
              Send Message
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;