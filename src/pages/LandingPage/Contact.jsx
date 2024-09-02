// import { Mail, Smartphone } from "lucide-react";
// import { Input } from "../ui/input";
// import { Textarea } from "../ui/textarea";
// import { Button } from "../ui/button";

// const Contact = () => {
//   return (
//     <section
//       className="w-full items-center justify-center flex mx-auto relative bg-white"
//       id="contact"
//     >
//       <div className="px-6 md:px-0 py-8 pb-32 container mx-auto lg:max-w-6xl md:pt-12 lg:pb-32">
//         <div className="flex flex-col items-center justify-center w-full py-8 z-[1]">
//           <h2 className="text-2xl md:text-3xl font-medium">Contact</h2>
//           <p className="text-slate-600 text-base flex-wrap leading-7 text-center mt-4">
//             Something on your mind? Get in touch and let&apos;s chat!
//           </p>
//           <div className="flex flex-col md:flex-row items-center justify-center w-full space-x-0 md:space-x-6 lg:space-x-12 space-y-5 md:space-y-0 mt-6">
//             <a
//               href="mailto:team@medusaai.com"
//               className="text-slate-500 space-x-3 text-sm hover:text-slate-500"
//             >
//               <div className="flex items-center justify-start gap-x-3 bg-slate-100 rounded-lg w-80 px-8 py-4">
//                 <Mail
//                   size={24}
//                   strokeWidth={1.5}
//                   className="w-8 h-8 object-cover"
//                 />
//                 team@medusaai.com
//               </div>
//             </a>
//             <a
//               href="tel:123456789"
//               className="text-slate-500 text-sm hover:text-slate-500"
//             >
//               <div className="flex items-center justify-start gap-x-3 bg-slate-100 rounded-lg w-80 px-8 py-4">
//                 <Smartphone
//                   size={24}
//                   strokeWidth={1.5}
//                   className="w-8 h-8 object-cover"
//                 />
//                 +91 123 456 7890
//               </div>
//             </a>
//           </div>
//         </div>
//         <div className="flex items-center justify-center flex-col space-y-5 w-full mt-6">
//           <div className="w-full md:w-3/5">
//             {/* <input
//                             autoComplete='off'
//                             required
//                             type="text"
//                             placeholder='Your Name'
//                             name='name'
//                             className='outline-none border rounded-md px-5 py-2 bg-slate-100 w-full'
//                         /> */}
//             <Input placeholder="Your Name" />
//           </div>
//           <div className="w-full md:w-3/5">
//             <Input placeholder="Your Email" />
//           </div>
//           <div className="w-full md:w-3/5">
//             <Textarea
//               autoComplete="off"
//               required
//               placeholder="Your Message"
//               rows={4}
//               name="message"
//               // className='resize-none outline-none border rounded-md px-5 py-2 bg-slate-100 w-full'
//             />
//           </div>

//           <div className="w-full items-center flex justify-center">
//             <Button
//               type="button"
//               className={`font-medium px-5 py-2 rounded-md`}
//             >
//               Send Message
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;