import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const Bubbles= ({ yStart,yEnd }) => {
  return (
    <div className="relative w-full h-1 hidden md:block">
      <div className="absolute flex justify-between w-full ">
        {[...Array(40)].map((_, indx) => {
          return (
            <div
              key={indx}
              className={twMerge(
                " flex items-center justify-between ",
                indx & 1 ? "flex-row-reverse" : "flex-row"
              )}
            >
              <motion.span
                key={indx}
                className="shadow-bubble-blue bg-sky-500 h-2 aspect-square rounded-full z-10 "
                initial={{
                  scale: 0.4,
                  translateY: yStart,
                }}
                animate={{
                  translateY: yEnd,
                  scale: 1.2,
                  transition: {
                    repeat: Infinity,
                    ease:"linear",
                    repeatType: "loop",
                    duration:
                      indx & 1
                        ? Math.random() * 10 + 100
                        : Math.random() * 10 + 200,
                  },
                }}
              ></motion.span>
              
              <motion.span
                key={indx+40}
                className="shadow-bubble-pink bg-rose-600 h-2 aspect-square rounded-full z-10 "
                initial={{
                  scale: 0.4,
                  translateY: yStart,
                }}
                animate={{
                  translateY: yEnd,
                  scale: 1,
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    ease:"linear",
                    duration:
                      indx & 1
                        ? Math.random() * 10 + 20
                        : Math.random() * 10 + 10,
                  },
                }}
              ></motion.span>
              <motion.span
                key={indx+60}
                className="shadow-bubble-pink bg-yellow-600 h-2 aspect-square rounded-full z-10 "
                initial={{
                  scale: 0.4,
                  translateY: yStart,
                }}
                animate={{
                  translateY: yEnd,
                  scale: 1,
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    ease:"linear",
                    duration:
                      indx & 1
                        ? Math.random() * 10 + 20
                        : Math.random() * 10 + 10,
                  },
                }}
              ></motion.span>

              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bubbles;