import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const InformationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="font-trispace h-[334px] sm:h-[552px] md:px-5 relative w-full">
            <div className="h-[334px] sm:h-[552px] m-auto w-full">
              <div className="flex flex-col font-yrsa h-full items-center justify-start m-auto w-full">
                <div className="h-[268px] relative w-full">
                  <div className="bg-gray-700 h-[268px] m-auto w-full"></div>
                  <Img
                    className="absolute h-[268px] inset-y-[0] my-auto object-cover right-[0]"
                    src="images/img_group13.png"
                    alt="groupFive"
                  />
                </div>
                <div className="bg-teal-A100 flex sm:flex-col flex-row gap-[18px] items-start justify-start md:pr-10 sm:pr-5 pr-[756px] w-full">
                  <Button
                    className="common-pointer cursor-pointer font-bold min-w-[196px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                    onClick={() => navigate("/homepage")}
                  >
                    Homepage
                  </Button>
                  <Text
                    className="common-pointer sm:mt-0 mt-[9px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                    size="txtYrsaRegular40"
                    onClick={() => navigate("/design")}
                  >
                    Design
                  </Text>
                  <Button
                    className="cursor-pointer min-w-[160px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                    color="teal_900_87"
                  >
                    Register
                  </Button>
                  <Text
                    className="common-pointer sm:mt-0 mt-1.5 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
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
              alt="Four"
            />
          </div>
          <Text
            className="mt-[74px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900 text-center"
            size="txtVollkornRomanRegular45"
          >
            Sign up to your account
          </Text>
          <Text
            className="bg-gray-300 h-[60px] justify-center mt-[26px] pl-5 sm:pr-5 pr-[35px] rounded-[10px] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-400_01 w-[577px]"
            size="txtVollkornRomanRegular40"
          >
            Email
          </Text>
          <Text
            className="bg-gray-300 h-[60px] justify-center mt-[21px] pl-5 sm:pr-5 pr-[35px] py-0.5 rounded-[10px] sm:text-4xl md:text-[38px] text-[40px] text-center text-gray-400_01 w-[577px]"
            size="txtVollkornRomanRegular40"
          >
            Password
          </Text>
          <div className="flex sm:flex-col flex-row font-vollkorn gap-3.5 items-center justify-center mt-[18px] md:px-5 w-[41%] md:w-full">
            <div className="border-[3px] border-gray-500_01 border-solid h-[38px] rounded-[10px] w-[8%]"></div>
            <Text
              className="leading-[130.00%] text-gray-400_01 text-xl w-[91%] sm:w-full"
              size="txtVollkornRomanRegular20"
            >
              <span className="text-gray-400_01 font-vollkorn text-left font-normal">
                By continuing, you agree to{" "}
              </span>
              <span className="text-gray-500_02 font-vollkorn text-left font-normal">
                Terms of Company Service
              </span>
              <span className="text-gray-400_01 font-vollkorn text-left font-normal">
                {" "}
                and{" "}
              </span>
              <span className="text-gray-500_03 font-vollkorn text-left font-normal">
                Privacy Policy
              </span>
            </Text>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[577px] sm:min-w-full mt-[9px]"
            rightIcon={
              <div className="mt-[15px] mb-[18px] ml-[15px] bg-gray-700_02">
                <Img src="images/img_arrow_1.svg" alt="Arrow 1" />
              </div>
            }
            shape="round"
            color="gray_500_04"
            size="sm"
          >
            <div className="font-vollkorn md:text-[38px] sm:text-4xl text-[40px] text-center">
              Sign up
            </div>
          </Button>
          <Line className="bg-gray-700_b2 h-px max-w-[1340px] mt-[33px] mx-auto w-full" />
          <Text
            className="mt-[13px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-400_01"
            size="txtVollkornRomanRegular30"
          >
            <span className="text-gray-400_01 font-vollkorn font-normal">
              Already have an account?{" "}
            </span>
            <span className="text-gray-700_02 font-vollkorn font-normal">
              Log in
            </span>
          </Text>
          <Text
            className="bg-gray-500 h-20 justify-center max-w-[1440px] md:max-w-full mt-[63px] pb-8 sm:pl-5 pl-[35px] pr-[15px] pt-2 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
            size="txtRajdhaniRegular30"
          >
            ENGRAVE COMPANY LIMITED
          </Text>
        </div>
      </div>
    </>
  );
};

export default InformationPage;
