import { CheckCircle2 } from "lucide-react";
import { plans } from "../public/data";
import TryBtn from "./components/TryBtn";

const Pricing = () => {
  return (
    <section className="bg-white py-12 px-[9%] sm:px-[4%] md:px-[6%] lg:px-[10%]">
      <div className="flex-1 space-y-6 mb-18">
        <h1 className="text-4xl sm:text-[40px] font-bold leading-tight text-center mb-3">
          Choose Your Plan
        </h1>

        <p className="text-sm min-[1500px]:text-base justify-self-center text-center max-w-3xl mb-12">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={`${i === 1 ? "bg-[#043873] shadow-xl md:scale-110" : "bg-white"} 
            rounded-lg border border-gray-200 p-6 flex flex-col`}
          >
            {/* Plan Header */}
            <div className={`mb-4 flex flex-col gap-5 ${i === 1 ? "text-white" : "text-black"}`}>
              <h3 className="text-base font-semibold">{plan.name}</h3>
              <p className={`text-2xl font-bold ${i === 1 ? "text-[#FFE492]" : "text-black"}`}>
                {plan.price}
              </p>
            </div>

            <div className={`${i === 1 ? "text-white" : "text-black"} text-sm`}>{plan.about}</div>

            {/* Features */}
            <ul className={`flex-1 space-y-2 text-sm text-gray-700 mb-6 -ml-3 
              ${i === 1 ? "text-white" : "text-black"}`}>
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-center`}
                >
                  <div className="text-green-400 h-10 w-10 p-2 justify-center items-center rounded-full">
                    <CheckCircle2 />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <TryBtn bgColor={i !== 1 ? "white" : "blue"} content="Get Started" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;