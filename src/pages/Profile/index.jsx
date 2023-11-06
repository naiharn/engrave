import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, PagerIndicator, Text } from "components";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 font-yrsa h-[1024px] mx-auto relative w-full">
        <div className="flex flex-col h-full items-center justify-end m-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-gray-700 flex flex-col items-end justify-start p-[25px] sm:px-5 w-full">
              <div className="flex flex-col justify-start mb-[42px] mt-[5px] md:px-5 w-[84%] md:w-full">
                <div className="flex md:flex-col flex-row font-wallpoet md:gap-10 items-start justify-between w-full">
                  <Text
                    className="md:mt-0 mt-[55px] md:text-5xl text-[100px] text-white-A700"
                    size="txtWallpoet100"
                  >
                    ENGRAVE
                  </Text>
                  <Img
                    className="h-[78px] md:h-auto object-cover w-[78px]"
                    src="images/img_user11.png"
                    alt="userEleven"
                  />
                </div>
                <Text
                  className="ml-32 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtTrispaceRegular30"
                >
                  Zero Carbon Architechure
                </Text>
              </div>
            </div>
            <div className="bg-teal-A100 flex md:flex-col flex-row md:gap-5 items-center justify-start md:pr-10 sm:pr-5 pr-[768px] w-full">
              <div className="bg-gray-400 flex flex-col items-center justify-end p-1.5 md:px-5">
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
              className="bg-gray-500 h-[89px] justify-center max-w-[1440px] md:max-w-full mt-[-1px] mx-auto pb-[35px] pl-[35px] pr-[25px] pt-2 sm:px-5 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full z-[1]"
              size="txtRajdhaniRegular30"
            >
              ENGRAVE COMPANY LIMITED
            </Text>
          </div>
        </div>
        <Img
          className="absolute h-[246px] left-[0] object-cover top-[3%] w-[21%]"
          src="images/img_.png"
          alt="Two"
        />
        <div className="absolute h-[1024px] md:h-[713px] inset-y-[0] my-auto md:px-5 right-[0] w-[45%] md:w-full">
          <div className="h-[1024px] md:h-[713px] m-auto w-full">
            <div className="flex flex-col m-auto w-full">
              <div className="h-[271px] mx-auto w-full">
                <Img
                  className="h-[271px] m-auto object-cover"
                  src="images/img_rectangle14.png"
                  alt="rectangleFourteen"
                />
                <Img
                  className="absolute h-[271px] inset-y-[0] my-auto object-cover right-[1%]"
                  src="images/img_rectangle13.png"
                  alt="rectangleThirteen"
                />
              </div>
              <div className="bg-light_green-300 flex flex-col justify-start mb-auto ml-auto mt-[-271.34px] p-[13px] w-[66%] z-[1]">
                <div className="md:h-[312px] h-[349px] md:ml-[0] ml-[49px] relative w-[88%]">
                  <div className="absolute bottom-[0] h-[312px] left-[0] w-[91%]">
                    <Img
                      className="h-[312px] m-auto object-cover w-full"
                      src="images/img_user11.png"
                      alt="userThirteen"
                    />
                    <Img
                      className="absolute bottom-[0] h-[70px] object-cover right-[7%] w-[70px]"
                      src="images/img_plus1.png"
                      alt="plusOne"
                    />
                  </div>
                  <Img
                    className="common-pointer absolute h-10 right-[0] top-[0]"
                    src="images/img_polygon1.svg"
                    alt="polygonOne"
                    onClick={() => navigate("/homepage")}
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[41px] mt-[155px] md:text-3xl sm:text-[28px] text-[32px] text-gray-600"
                  size="txtYrsaSemiBold32"
                >
                  Description
                </Text>
                <Text
                  className="mb-[221px] md:ml-[0] ml-[281px] mt-48 md:text-3xl sm:text-[28px] text-[32px] text-light_green-100"
                  size="txtYrsaSemiBold32Lightgreen100"
                >
                  0/200
                </Text>
              </div>
            </div>
            <div className="absolute h-[179px] right-[0] top-[37%] w-[72%] sm:w-full">
              <Text
                className="leading-[130.00%] m-auto text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
                size="txtYrsaBold36"
              >
                <span className="md:text-5xl text-white-A700 font-yrsa text-[64px] font-bold">
                  <>
                    Guest
                    <br />
                  </>
                </span>
                <span className="text-light_green-400 font-yrsa font-bold">
                  <>example@gmail.com &gt;</>
                </span>
              </Text>
              <div className="absolute flex flex-col md:gap-10 gap-[65px] justify-start right-[7%] top-[22%] w-[78%]">
                <Img
                  className="h-[21px] md:h-auto md:ml-[0] ml-[262px] object-cover w-[21px]"
                  src="images/img_editing11.png"
                  alt="editingEleven"
                />
                <Line className="bg-gray-600_01 h-1 w-full" />
              </div>
            </div>
          </div>
          <div className="absolute bg-gray-700_66 bottom-[23%] h-[232px] right-[5%] rounded-[10px] w-[56%]"></div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
