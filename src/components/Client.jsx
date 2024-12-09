import React from "react";
import Container from "./Container";
import { FaRegDotCircle } from "react-icons/fa";
import ClientImg from "../assets/client.png";

const Client = () => {
  return (
    <section className="pb-[120px]">
      <Container>
        <div className="">
          <div className="flex gap-3 items-center justify-center pb-[10px]">
            <FaRegDotCircle />
            <h3 className="font-sans font-normal text-[16px] leading-[28px] text-[#101010]">
              Testimonial
            </h3>
          </div>
          <div className="text-center pb-[42px]">
            <h2 className="font-sans font-bold text-[44px] leading-[58px] text-[#101010]">
              Client Feedback
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-[32%]">
            <div className="px-[30px] pt-[40px] pb-[62px] rounded-[8px] bg-[rgba(255,245,239,.5)] hover:bg-[#FFF5EF] duration-300">
              <div className="flex items-center gap-4 pb-[20px]">
                <div className="">
                  <img src={ClientImg} alt="ClientImg" />
                </div>
                <div className="">
                  <h3 className="font-sans font-medium text-[24px] leading-[31px] text-[#101010]">
                    Siam Talukder
                  </h3>
                  <h3 className="font-sans font-normal text-[16px] leading-[27px] text-[#606060]">
                    CTO, Xyz Group
                  </h3>
                </div>
              </div>
              <p className="font-sans font-normal text-[16px] leading-[27px] text-[#606060]">
                “Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature fr45
                BC, mak it over 2000 years old.
              </p>
            </div>
          </div>
          <div className="w-[32%]">
            <div className="px-[30px] pt-[40px] pb-[62px] rounded-[8px] bg-[rgba(255,245,239,.5)] hover:bg-[#FFF5EF] duration-300">
              <div className="flex items-center gap-4 pb-[20px]">
                <div className="">
                  <img src={ClientImg} alt="ClientImg" />
                </div>
                <div className="">
                  <h3 className="font-sans font-medium text-[24px] leading-[31px] text-[#101010]">
                    Siam Talukder
                  </h3>
                  <h3 className="font-sans font-normal text-[16px] leading-[27px] text-[#606060]">
                    CTO, Xyz Group
                  </h3>
                </div>
              </div>
              <p className="font-sans font-normal text-[16px] leading-[27px] text-[#606060]">
                “Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature fr45
                BC, mak it over 2000 years old.
              </p>
            </div>
          </div>
          <div className="w-[32%]">
            <div className="px-[30px] pt-[40px] pb-[62px] rounded-[8px] bg-[rgba(255,245,239,.5)] hover:bg-[#FFF5EF] duration-300">
              <div className="flex items-center gap-4 pb-[20px]">
                <div className="">
                  <img src={ClientImg} alt="ClientImg" />
                </div>
                <div className="">
                  <h3 className="font-sans font-medium text-[24px] leading-[31px] text-[#101010]">
                    Siam Talukder
                  </h3>
                  <h3 className="font-sans font-normal text-[16px] leading-[27px] text-[#606060]">
                    CTO, Xyz Group
                  </h3>
                </div>
              </div>
              <p className="font-sans font-normal text-[16px] leading-[27px] text-[#606060]">
                “Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature fr45
                BC, mak it over 2000 years old.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Client;
