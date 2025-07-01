import React from "react";
import AIGeneratedImageIcon from "../Icons/svgIcons/AIGeneratedImageIcon";

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-dark-indigo-800 to-purple-600-alpha0 rounded-xl p-4 shadow-md ${className}`}
  >
    {children}
  </div>
);

const Layout2 = () => {
  return (
    <div className="min-h-screen bg-dark-indigo-900 p-6 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[25%_50%_25%] gap-4 max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-[20px]">
          <Card className="h-[396px] flex flex-col justify-between p-8">
            <div className="">
              <h1 className="text-4xl font-semibold bg-gradient-to-r from-[#FFFFFF] to-[#AA9CFC] bg-clip-text text-transparent">
                Create your  own template
              </h1>
            </div>
            <div>
                <p className="text-purple-300 text-semi-base font-bold">14 days trial</p>
                <p className="text-purple-400 text-base font-semibold">after – $5/month</p>
            </div>
          </Card>
          <Card className="h-[220px]">
              <div>
                  <h1 className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent font-semibold text-[62px]">20</h1>
                  <p className="font-normal text-semi-base text-purple-200">Top Users</p>
              </div>
              <div>

              </div>
          </Card>
          <Card className="h-[164px] flex items-center justify-center font-semibold">
            <button className="p-3 w-[182px] flex items-center justify-center rounded-full shadow-lg" style={{
                    backgroundImage: 'radial-gradient(circle, #5F33D6 100%, #BBA5F4 0%)',
                    boxShadow: `
                        inset 0 1px 3px 0px rgba(1, 5, 30, 0.5),  /* Inner shadow */
                        0 1px 1px 0px rgba(255, 255, 255, 0.07)          /* Drop shadow */
                        `,
                }}>
                <div className="flex items-center gap-[6px]">
                  <AIGeneratedImageIcon />
                  <span className="text-xl font-medium font-plus-jakarta-sans">Generate</span>
                </div>
            </button>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="min-h-40">
            <div className="">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#AA9CFC] bg-clip-text text-transparent">
                Create your  own template
              </h1>
            </div>
            <div>
                <p className="text-purple-300 text-semi-base font-bold">14 days trial</p>
                <p className="text-purple-400 text-base font-semibold">after – $5/month</p>
            </div>
          </Card>
          <Card className="h-40">20 Top Users</Card>
          <Card className="h-16 bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center font-semibold">
            Generate
          </Card>
        </div>

        <div className="flex flex-col gap-[20px]">
          <Card className="h-[164px] bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center font-semibold">
            Generate
          </Card>
          <Card className="h-[220px]">20 Top Users</Card>
          <Card className="h-[396px]">
            <div className="">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#AA9CFC] bg-clip-text text-transparent">
                Create your  own template
              </h1>
            </div>
            <div>
                <p className="text-purple-300 text-semi-base font-bold">14 days trial</p>
                <p className="text-purple-400 text-base font-semibold">after – $5/month</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Layout2;
