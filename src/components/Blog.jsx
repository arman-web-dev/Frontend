import React from "react";
import Container from "./Container";
import { FaRegDotCircle } from "react-icons/fa";
import BlogImg from "../assets/blog.png";

const Blog = () => {
  return (
    <section className="pb-[120px]">
      <Container>
        <div className="">
          <div className="flex gap-3 items-center justify-center pb-[10px]">
            <FaRegDotCircle />
            <h3 className="font-sans font-normal text-[16px] leading-[28px] text-[#101010]">
              My Blog
            </h3>
          </div>
          <div className="text-center pb-[42px]">
            <h2 className="font-sans font-bold text-[44px] leading-[58px] text-[#101010]">
              LATEST BLOG
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="w-[32%]">
            <div className="border border-[#FFE2D1] rounded-[6px]">
              <img src={BlogImg} alt="BlogImg" className="w-full" />
              <div className="pl-[30px]">
                <h3 className="font-sans font-normal text-[16px] leading-[26px] text-[#6F6B80] pt-[30px] pb-[20px]">
                  20 January, 2023
                </h3>
                <h2 className="font-sans font-medium text-[24px] leading-[31px] text-[#101010] pb-[26px]">
                  The Best App Development For Your Business Plan.
                </h2>
                <div className="pb-[26px]">
                  <a
                    href="#"
                    className="font-sans font-semibold text-[16px] leading-[26px] text-[#FF6B00]"
                  >
                    Read More &rarr;
                  </a>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="w-[32%]">
            <div className="border border-[#FFE2D1] rounded-[6px]">
              <img src={BlogImg} alt="BlogImg" className="w-full" />
              <div className="pl-[30px]">
                <h3 className="font-sans font-normal text-[16px] leading-[26px] text-[#6F6B80] pt-[30px] pb-[20px]">
                  20 January, 2023
                </h3>
                <h2 className="font-sans font-medium text-[24px] leading-[31px] text-[#101010] pb-[26px]">
                  The Best App Development For Your Business Plan.
                </h2>
                <div className="pb-[26px]">
                  <a
                    href="#"
                    className="font-sans font-semibold text-[16px] leading-[26px] text-[#FF6B00]"
                  >
                    Read More &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[32%]">
            <div className="border border-[#FFE2D1] rounded-[6px]">
              <img src={BlogImg} alt="BlogImg" className="w-full" />
              <div className="pl-[30px]">
                <h3 className="font-sans font-normal text-[16px] leading-[26px] text-[#6F6B80] pt-[30px] pb-[20px]">
                  20 January, 2023
                </h3>
                <h2 className="font-sans font-medium text-[24px] leading-[31px] text-[#101010] pb-[26px]">
                  The Best App Development For Your Business Plan.
                </h2>
                <div className="pb-[26px]">
                  <a
                    href="#"
                    className="font-sans font-semibold text-[16px] leading-[26px] text-[#FF6B00]"
                  >
                    Read More &rarr;
                  </a>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
