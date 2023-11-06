import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const ContactusPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-rajdhani items-center justify-end mx-auto w-full">
        <div className="h-[334px] sm:h-[543px] md:px-5 relative w-full">
          <div className="font-wallpoet h-[334px] sm:h-[543px] m-auto w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
              <div className="h-[268px] relative w-full">
                <div className="bg-gray-700 h-[268px] m-auto w-full"></div>
                <Img
                  className="absolute h-[268px] inset-y-[0] my-auto object-cover right-[0]"
                  src="images/img_group13.png"
                  alt="groupFive"
                />
              </div>
              <div className="bg-teal-A100 flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[737px] w-full">
                <Button
                  className="common-pointer cursor-pointer font-bold font-yrsa min-w-[196px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                  onClick={() => navigate("/homepage")}
                >
                  Homepage
                </Button>
                <Text
                  className="common-pointer sm:ml-[0] ml-[18px] sm:mt-0 mt-[17px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtTrispaceRegular30"
                  onClick={() => navigate("/design")}
                >
                  Design
                </Text>
                <Text
                  className="common-pointer sm:ml-[0] ml-[30px] sm:mt-0 mt-[9px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtYrsaRegular40"
                  onClick={() => navigate("/information")}
                >
                  Register
                </Text>
                <Button
                  className="cursor-pointer font-yrsa min-w-[201px] sm:ml-[0] ml-[15px] sm:text-4xl md:text-[38px] text-[40px] text-center"
                  color="teal_900_87"
                >
                  Contact us
                </Button>
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
            src="images/img__246x293.png"
            alt="Six"
          />
        </div>
        <div className="font-yrsa h-[554px] mt-3 md:px-5 relative w-[51%] md:w-full">
          <Img
            className="h-[207px] mb-[-34.69px] mx-auto object-cover w-[32%] z-[1]"
            src="images/img__207x233.png"
            alt="Seven"
          />
          <div className="h-[381px] mt-auto mx-auto w-full">
            <Text
              className="leading-[130.00%] m-auto md:text-5xl text-6xl text-center text-gray-800_01"
              size="txtYrsaRegular60"
            >
              <span className="md:text-[38px] sm:text-4xl text-gray-800_01 font-yrsa text-[40px] font-normal">
                <>
                  Engrave Company Limited
                  <br />
                </>
              </span>
              <span className="text-gray-800_01 font-yrsa font-normal">
                <>
                  Thailand
                  <br />
                </>
              </span>
              <span className="md:text-[38px] sm:text-4xl text-gray-800_01 font-yrsa text-[40px] font-normal">
                <>
                  111, University Road, Suranaree Subdistrict, Mueang Nakhon
                  Ratchasima District, Nakhon Ratchasima 30000
                  <br /> 012 345 6789
                  <br /> @engrave23
                </>
              </span>
            </Text>
            <Img
              className="absolute bottom-[14%] h-[37px] left-[33%] object-cover w-[37px]"
              src="images/img_phonecall11.png"
              alt="phonecallEleven"
            />
            <Img
              className="absolute bottom-[0] h-[37px] left-[33%] object-cover w-[38px]"
              src="images/img_line1.png"
              alt="lineOne"
            />
          </div>
        </div>
        <Text
          className="bg-gray-500 h-[68px] justify-center max-w-[1440px] md:max-w-full mt-16 pb-5 sm:pl-5 pl-[35px] pr-[18px] pt-2 text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
          size="txtRajdhaniRegular30"
        >
          ENGRAVE COMPANY LIMITED
        </Text>
      </div>
    </>
  );
};

export default ContactusPage;
