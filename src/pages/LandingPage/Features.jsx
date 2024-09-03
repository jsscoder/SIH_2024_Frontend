
import { ArrowRight, ArrowUpRight, Zap } from "lucide-react";



const Features = () => {
    const features = [
    {
        title: "System check",
        description: "Our software performs a comprehensive system check to ensure that your device is compatible with our platform. This includes checking your internet connection, browser settings, and device specifications.",
        image: "https://assets.website-files.com/64080e2f7d2a307017bd5ef9/644e27652fb9ab2a1358b7dd_HIW%20Image%2003.svg",
    },
    {
        title: "Track Your Progress",
        description: "Stay motivated and monitor your typing progress in real-time. Our software provides detailed insights into your typing speed, accuracy, and performance over time.",
        image: "https://assets.website-files.com/64080e2f7d2a307017bd5ef9/644e276544c5364e86998203_HIW%20Image%2004.svg",
    },
    {
        title: "Challenge Yourself",
        description: "Challenge yourself with tailored exercises that match your interests and goals, and watch your typing speed and accuracy soar.",
        image: "https://assets.website-files.com/64080e2f7d2a307017bd5ef9/644e27652fb9ab2a1358b7dd_HIW%20Image%2003.svg",
    },
];








  const alternatingClass = "flex flex-col md:flex-row md:items-center";

  return (
    <section className="flex flex-col items-center justify-center w-full py-16 space-y-8">
      {/* <div className="grid w-full grid-cols-1 md:grid-cols-2">
                <div className="flex items-center justify-center w-full">
                    <Image
                        src=""
                        alt="Features"
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex flex-col items-start space-y-4">
                    <h2 className="!font-heading text-2xl font-semibold text-slate-800">
                        System check
                    </h2>
                    <p className="text-slate-600 text-start">

                    </p>
                </div>
            </div> */}
      <div className="flex flex-col items-center justify-center w-full py-8">
        <h2 className="!font-heading font-bold text-slate-900 text-center text-2xl md:text-3xl">
          Powerful features
        </h2>
        <p className="max-w-xl text-center text-slate-600">
          Discover the capabilites that set our platform apart from the rest.
        </p>
      </div>
      <div className="relative w-full mt-12 lg:mt-20">
        <div
          className={
            "absolute hidden rounded-full opacity-25 md:block bg-gradient-to-br from-fuchsia-500 to-white w-96 h-96 top-1/4 blur-3xl -z-10"
          }
        />
        <div
          className={
            "absolute hidden rounded-full opacity-25 md:block bg-gradient-to-br from-blue-500 to-white w-96 h-96 top-1/3 blur-3xl -z-10 right-0"
          }
        />
        <div
          className={
            "absolute hidden rounded-full opacity-25 md:block bg-gradient-to-br from-violet-500 to-white w-96 h-96 top-3/4 blur-3xl -z-10 left-0"
          }
        />
        <div
          className={
            "absolute hidden rounded-full opacity-25 md:block bg-gradient-to-br from-cyan-500 to-white w-96 h-96 top-[85%] blur-3xl -z-10 right-0"
          }
        />
        {features?.map((feature, index) => (
          <div
            key={feature.title}
            className=
              {`flex items-center justify-between 
              ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`
            }
            
          >
            <div
              className={`
                px-5 py-16 w-1/2
                ${index % 2 === 0 ? "lg:pl-20" : "lg:pr-20"}`
              }
            >
              <div className="flex items-center justify-center w-full max-w-md">
                <img
                  src={feature.image}
                  alt="Image"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex-col items-center self-stretch hidden xl:flex gap-y-6">
              <div className="w-px h-full bg-slate-200"></div>
              <div className="flex items-center justify-center flex-none w-12 h-12 tracking-tighter text-white rounded-full lette bg-slate-800">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <div className="w-px h-full bg-slate-200"></div>
            </div>
            <div
              className={`
                flex justify-end py-16 pl-20 pr-20
                ${index % 2 === 0 ? "lg:mr-[88px]" : "lg:ml-[88px]"}`
              }
            >
              <div className="w-full max-w-sm">
                <div className="mb-2 lg:mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 capitalize md:text-3xl">
                    {feature.title}
                  </h3>
                </div>
                <p className="mb-4 font-normal lg:mb-6 text-slate-600">
                  {feature.description}
                </p>
                <button variant="outline" size="lg">
                  Read More{" "}
                  <ArrowUpRight className="w-4 h-4 ml-2 text-current" />
                </button>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Features;