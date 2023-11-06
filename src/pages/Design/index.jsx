import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const DesignPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-start justify-end w-full">
          <div className="font-trispace h-[334px] md:h-[557px] md:px-5 relative w-full">
            <div className="h-[334px] md:h-[557px] m-auto w-full">
              <div className="flex flex-col font-yrsa h-full items-center justify-start m-auto w-full">
                <div className="h-[268px] relative w-full">
                  <div className="bg-gray-700 h-[268px] m-auto w-full"></div>
                  <Img
                    className="absolute h-[268px] inset-y-[0] my-auto object-cover right-[0]"
                    src="images/img_group13.png"
                    alt="groupFive"
                  />
                </div>
                <div className="bg-teal-A100 flex md:flex-col flex-row md:gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[763px] w-full">
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[196px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                    onClick={() => navigate("/homepage")}
                  >
                    Homepage
                  </Button>
                  <div className="bg-teal-900_87 flex flex-col items-center justify-end p-[7px]">
                    <Text
                      className="mt-0.5 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                      size="txtYrsaRegular40"
                    >
                      Design
                    </Text>
                  </div>
                  <Text
                    className="common-pointer md:ml-[0] ml-[13px] md:mt-0 mt-2 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                    size="txtYrsaRegular40"
                    onClick={() => navigate("/information")}
                  >
                    Register
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[25px] md:mt-0 mt-[5px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
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
              alt="Five"
            />
          </div>
          <div className="flex md:flex-col flex-row gap-[41px] items-center justify-end md:ml-[0] ml-[72px] mt-3 md:px-5 w-[95%] md:w-full">
            <div className="h-[510px] md:h-[631px] relative w-[96%] md:w-full">
              <div className="font-yesevaone h-[510px] md:h-[631px] m-auto w-full">
                <div className="h-[510px] md:h-[631px] m-auto w-full">
                  <div className="absolute h-[510px] inset-y-[0] my-auto right-[0] w-[48%] md:w-full">
                    <Img
                      className="h-[510px] m-auto object-cover rounded-[30px] w-full"
                      src="images/img_rectangle21.png"
                      alt="rectangleTwentyOne"
                    />
                    <div className="absolute bg-gradient1  h-[510px] inset-[0] justify-center m-auto rounded-[29px] w-full"></div>
                  </div>
                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[87%]">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="h-[510px] relative w-[57%] md:w-full">
                        <Img
                          className="h-[510px] m-auto object-cover rounded-[30px] w-full"
                          src="images/img_rectangle19.png"
                          alt="rectangleNineteen"
                        />
                        <div className="absolute bg-gradient2  h-[510px] md:h-[78px] inset-[0] justify-center m-auto p-[58px] md:px-10 sm:px-5 rounded-[25px] w-full">
                          <Text
                            className="absolute bottom-[20%] inset-x-[0] mx-auto md:text-5xl text-[70px] text-center text-white-A700 w-max"
                            size="txtYesevaOneRegular70"
                          >
                            Classic
                          </Text>
                          <div className="absolute bg-blue_gray-100_cc bottom-[11%] h-11 inset-x-[0] mx-auto rounded-[22px] w-[46%]"></div>
                          <Text
                            className="absolute bottom-[11%] inset-x-[0] mx-auto sm:text-[31px] md:text-[33px] text-[35px] text-black-900_9b w-max"
                            size="txtRajdhaniSemiBold35Black9009b"
                          >
                            learn more...
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="md:mt-0 mt-[330px] md:text-5xl text-[70px] text-center text-white-A700"
                        size="txtYesevaOneRegular70"
                      >
                        Natural
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-blue_gray-100_cc bottom-[11%] h-11 right-[13%] rounded-[22px] w-[23%]"></div>
              </div>
              <Text
                className="absolute bottom-[12%] right-[17%] sm:text-[31px] md:text-[33px] text-[35px] text-black-900_9b_01"
                size="txtRajdhaniSemiBold35Black9009b01"
              >
                learn more...
              </Text>
            </div>
            <div className="md:h-[582px] h-[601px] relative w-[2%] md:w-full">
              <div className="absolute bg-blue_gray-100_01 h-[582px] inset-[0] justify-center m-auto rotate-[-90deg] rounded-[9px] w-full"></div>
              <div className="absolute bg-gray-500_05 h-[241px] left-[0] rotate-[-90deg] rounded-lg top-[0] w-full"></div>
            </div>
          </div>
          <Text
            className="bg-gray-500 h-[81px] justify-center max-w-[1440px] md:max-w-full mt-4 pb-[29px] sm:pl-5 pl-[35px] pr-[18px] pt-3 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
            size="txtRajdhaniRegular30"
          >
            ENGRAVE COMPANY LIMITED
          </Text>
        </div>
      </div>
    </>
  );
};

export default DesignPage;
