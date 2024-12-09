import React from "react";
import Container from "./Container";
import HeroTwo from "../assets/hero2.png";
import { FaRegDotCircle } from "react-icons/fa";
import { BsCheck2Square } from "react-icons/bs";
import Clock from "../assets/clock.png";

const About = () => {
  return (
    <section className="py-[120px]">
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-2/5">
            <img src={HeroTwo} alt="" className="w-full" />
          </div>
          <div className="w-[50%]">
            <div className="flex gap-3 items-center">
              <FaRegDotCircle />
              <h3>About Me</h3>
            </div>
            <div className="pb-[46px] pt-3">
              <h1 className="font-sans font-bold text-[44px] leading-[57px] text-[#101010] w-[402px]">
                I Can Design Anything You Want
              </h1>
            </div>
            <p className="font-sans font-normal text-[18px] leading-[30.6px] text-[#606060] pb-[50px]">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et.
            </p>
            <div className="flex gap-8 pb-[50px]">
              <div className="flex items-center gap-2">
                <div className="">
                  <img src={Clock} alt="Clock" />
                </div>
                <div className="">
                  <h3 className="font-sans font-bold text-[21px] text-[#FF6B00]">
                    350+
                  </h3>
                  <h3 className="font-sans font-bold text-[21px] text-[#101010]">
                    Complete Project
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="">
                  <img src={Clock} alt="Clock" />
                </div>
                <div className="">
                  <h3 className="font-sans font-bold text-[21px] text-[#FF6B00]">
                    16+
                  </h3>
                  <h3 className="font-sans font-bold text-[21px] text-[#101010]">
                    Complete Project
                  </h3>
                </div>
              </div>
            </div>
            <div className="pb-[40px]">
              <div className=" pb-[20px] flex items-center gap-4">
                <BsCheck2Square />
                <h3 className="font-sans font-normal text-[16px] text-[#000000] leading-[150%]">
                  Work simple and cline design
                </h3>
              </div>
              <div className=" pb-[20px] flex items-center gap-4">
                <BsCheck2Square />
                <h3 className="font-sans font-normal text-[16px] text-[#000000] leading-[150%]">
                  Work simple and cline design
                </h3>
              </div>
            </div>
            <button className="font-sans font-medium text-[21px] leading-[20px] text-[#fff] bg-[#FF6B00] py-[15px] px-[32px] rounded-[6px]">
              Download My CV
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
