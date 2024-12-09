import React from "react";
import Container from "./Container";
import { FaRegDotCircle } from "react-icons/fa";
import CallImg from '../assets/call.png'

const Contact = () => {
  return (
    <section>
      <Container>
        <div className="">
          <div className="flex gap-3 items-center justify-center pb-[10px]">
            <FaRegDotCircle />
            <h3 className="font-sans font-normal text-[16px] leading-[28px] text-[#101010]">
              My Contact
            </h3>
          </div>
          <div className="text-center">
            <h2 className="font-sans font-bold text-[44px] leading-[58px] text-[#101010]">
              I WANT TO HEAR FROM YOU
            </h2>
          </div>
        </div>
        <div className="flex justify-between py-[50px]">
          <div className="w-[60%]">
            <form>
              <div className="flex justify-between">
                <div className="w-[49%]">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full py-3 px-2 outline-none border border-[#FFE2D1] rounded-[6px]"
                  />
                </div>
                <div className="w-[49%]">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full py-3 px-2 outline-none border border-[#FFE2D1] rounded-[6px]"
                  />
                </div>
              </div>
              <div className="flex justify-between py-[30px]">
                <div className="w-[49%]">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full py-3 px-2 outline-none border border-[#FFE2D1] rounded-[6px]"
                  />
                </div>
                <div className="w-[49%]">
                  <input
                    type="text"
                    placeholder="Your Subject"
                    className="w-full py-3 px-2 outline-none border border-[#FFE2D1] rounded-[6px]"
                  />
                </div>
              </div>

              <div className="w-[100%]">
                <textarea
                  placeholder="Your Message"
                  className="w-full py-3 px-2 outline-none border border-[#FFE2D1] rounded-[6px] resize-none"
                  rows="4"
                />
              </div>
              <div className="py-[30px]">
                <button className="font-sans font-medium text-[21px] leading-[20px] text-[#fff] bg-[#FF6B00] py-[15px] px-[32px] rounded-[6px]">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-[35%]">
            <div className="flex items-center gap-3 pb-[50px]">
              <div className="">
                <img src={CallImg} alt="CallImg" className="w-full"/>
              </div>
              <div className="">
                <h2 className="font-sans font-medium text-[24px] leading-[32px] text-[#101010]">Address</h2>
                <h3 className="font-sans font-normal text-[16px] leading-[28px] text-[#606060]">202 Dog Hill Lane Beloit, KS 67420</h3>
              </div>
            </div>
            <div className="flex items-center gap-3 pb-[50px]">
              <div className="">
                <img src={CallImg} alt="CallImg" className="w-full"/>
              </div>
              <div className="">
                <h2 className="font-sans font-medium text-[24px] leading-[32px] text-[#101010]">Address</h2>
                <h3 className="font-sans font-normal text-[16px] leading-[28px] text-[#606060]">202 Dog Hill Lane Beloit, KS 67420</h3>
              </div>
            </div>
            <div className="flex items-center gap-3 pb-[50px]">
              <div className="">
                <img src={CallImg} alt="CallImg" className="w-full"/>
              </div>
              <div className="">
                <h2 className="font-sans font-medium text-[24px] leading-[32px] text-[#101010]">Address</h2>
                <h3 className="font-sans font-normal text-[16px] leading-[28px] text-[#606060]">202 Dog Hill Lane Beloit, KS 67420</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
