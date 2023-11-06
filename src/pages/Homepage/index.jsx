import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, PagerIndicator, Text } from "components";

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-trispace items-center justify-end mx-auto w-full">
        <div className="h-[334px] md:h-[541px] md:px-5 relative w-full">
          <div className="h-[334px] md:h-[541px] m-auto w-full">
            <div className="flex flex-col font-yrsa h-full items-center justify-start m-auto w-full">
              <div className="h-[268px] relative w-full">
                <div className="bg-gray-700 h-[268px] m-auto w-full"></div>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-end justify-start my-auto p-[25px] sm:px-5 right-[0] w-[44%]"
                  style={{ backgroundImage: "url('images/img_group13.png')" }}
                >
                  <Img
                    className="common-pointer h-[78px] md:h-auto mb-[135px] mt-[5px] object-cover w-[78px]"
                    src="images/img_user11.png"
                    alt="userEleven"
                    onClick={() => navigate("/profile")}
                  />
                </div>
              </div>
              <div className="bg-teal-A100 flex md:flex-col flex-row md:gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[768px] w-full">
                <div className="bg-gray-400 flex flex-col items-center justify-end p-1.5">
                  <Text
                    className="mt-[5px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                    size="txtYrsaBold40"
                  >
                    Homepage
                  </Text>
                </div>
                <Text
                  className="common-pointer md:ml-[0] ml-[19px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtYrsaRegular40"
                  onClick={() => navigate("/design")}
                >
                  Design
                </Text>
                <Text
                  className="common-pointer md:ml-[0] ml-[26px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtYrsaRegular40"
                  onClick={() => navigate("/information")}
                >
                  Register
                </Text>
                <Text
                  className="common-pointer md:ml-[0] ml-[26px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtYrsaRegular40"
                  onClick={() => navigate("/contactus")}
                >
                  Contact us
                </Text>
              </div>
            </div>
            <Text
              className="absolute left-[17%] md:text-5xl text-[100px] text-white-A700 top-1/4"
              size="txtWallpoet100"
            >
              ENGRAVE
            </Text>
          </div>
          <Text
            className="absolute bottom-[40%] left-[26%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
            size="txtTrispaceRegular30"
          >
            Zero Carbon Architechure
          </Text>
          <Img
            className="absolute h-[246px] left-[0] object-cover top-[9%] w-[21%]"
            src="images/img_.png"
            alt="Three"
          />
        </div>
        <div className="flex flex-col font-rajdhani md:px-5 relative w-full">
          <div className="h-[631px] mx-auto w-full">
            <div className="font-yesevaone h-[631px] m-auto w-full">
              <div className="h-[631px] m-auto w-full">
                <div className="h-[631px] m-auto w-full">
                  <Img
                    className="h-[631px] m-auto object-cover w-full"
                    src="images/img_1.png"
                    alt="One"
                  />
                  <PagerIndicator
                    className="absolute bottom-[6%] flex h-[23px] inset-x-[0] justify-center mx-auto w-[157px]"
                    count={4}
                    activeCss="inline-block cursor-pointer rounded-[50%] h-[23px] bg-gray-700_01 w-[23px] relative"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-[23px] bg-blue_gray-100 w-[23px] relative"
                    selectedWrapperCss="inline-block mx-[11.00px]"
                    unselectedWrapperCss="inline-block mx-[11.00px]"
                  />
                </div>
                <div className="absolute bg-gradient  flex flex-col md:gap-10 gap-56 h-max inset-y-[0] items-center justify-end my-auto p-7 sm:px-5 right-[0] w-[54%]">
                  <Text
                    className="leading-[130.00%] mt-[11px] md:text-5xl text-[100px] text-lime-50 text-right w-[78%] sm:w-full"
                    size="txtYesevaOneRegular100"
                  >
                    Design Makes A Better Life.
                  </Text>
                  <Img
                    className="h-[31px]"
                    src="images/img_menu.svg"
                    alt="menu"
                  />
                </div>
              </div>
              <div className="absolute bg-blue_gray-100_b2 bottom-[15%] h-11 inset-x-[0] mx-auto rounded-[22px] w-1/5"></div>
            </div>
            <Text
              className="absolute bottom-[15%] inset-x-[0] mx-auto sm:text-[31px] md:text-[33px] text-[35px] text-gray-900 w-max"
              size="txtRajdhaniSemiBold35"
            >
              Read more...
            </Text>
          </div>
          <Text
            className="bg-gray-500 h-[69px] justify-center max-w-[1440px] md:max-w-full mt-[-1px] mx-auto pb-[21px] pl-[35px] pr-[25px] pt-2 sm:px-5 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full z-[1]"
            size="txtRajdhaniRegular30"
          >
            ENGRAVE COMPANY LIMITED
          </Text>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
