import arrow from "../assets/arrow.svg";
import pencil from "../assets/pencil.svg";
import brand from "../assets/brand.svg";
import frontend from "../assets/frontend.svg";
import menu from "../assets/menu.svg";
import fdevelopment from "../assets/fdevelopment.jpg";
import arrowleft from "../assets/arrowleft.svg";
import arrowright from "../assets/arrowright.svg";
import memoji from "../assets/memoji.svg";

const Body = () => {
  return (
    <div className="flex flex-2">
      <div className="flex-1 flex flex-col gap-6 mx-6">
        <div className="rounded-2xl flex bg-[#6F62E5] h-fit w-full flex-col p-6 gap-6">
          <p className="text-white text-[14px] tracking-widest">
            ONLINE COURSE
          </p>
          <h2 className="text-white text-[54px] leading-16 font-medium mt-2">
            Sharpen Your Skills with <br />
            Professional Online Courses{" "}
          </h2>
          <div className="bg-black mt-6 flex flex-row items-center gap-4 px-2 py-2 rounded-full w-fit cursor-pointer">
            <p className="pl-5 text-white text-[18px]">Join Now</p>
            <img src={arrow} alt="Join Now" />
          </div>
        </div>

        <div className="flex flex-row gap-6 w-full">
          <div className="px-4 py-4 bg-white rounded-4xl flex flex-row gap-12 items-center w-full">
            <div className=" flex flex-row gap-6 items-center">
              {" "}
              <img src={pencil} alt="pencil image" className="h-22 w-22" />
              <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-[18px] font-medium">
                  2/8 watched
                </p>
                <p className="text-black text-[24px] font-semibold">
                  UI/UX Design
                </p>
              </div>
            </div>
            <img src={menu} alt="menu" />
          </div>
          <div className="px-4 py-4 bg-white rounded-4xl flex flex-row gap-28 items-center w-full">
            <div className=" flex flex-row gap-6 items-center">
              {" "}
              <img src={brand} alt="brand image" className="h-22 w-22" />
              <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-[18px] font-medium">
                  3/8 watched
                </p>
                <p className="text-black text-[24px] font-semibold">Branding</p>
              </div>
            </div>
            <img src={menu} alt="menu" />
          </div>
          <div className="px-4 py-4 bg-white rounded-4xl flex flex-row gap-28 items-center w-full">
            <div className=" flex flex-row gap-6 items-center">
              {" "}
              <img src={frontend} alt="front end image" className="h-22 w-22" />
              <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-[18px] font-medium">
                  6/12 watched
                </p>
                <p className="text-black text-[24px] font-semibold">
                  Front-End
                </p>
              </div>
            </div>
            <img src={menu} alt="menu" />
          </div>
        </div>

        <div>
          <div className="flex flex-row items-center justify-between mt-4 mb-6">
            <p className="text-black text-[24px] font-medium mt-4">
              Continue Watching
            </p>
            <div className="flex flex-row gap-2">
              <img src={arrowleft} alt="left arrow" className="h-18 w-18" />
              <img src={arrowright} alt="right arrow" className="h-18 w-18" />
            </div>
          </div>

          <div className="bg-white p-2 rounded-4xl w-full flex flex-row gap-12 overflow-x-scroll no-scrollbar overflow-hidden">
            <div className="w-fit">
              <img
                src={fdevelopment}
                alt="company image"
                className="w-auto h-50.5"
              />
              <div className="px-3 py-2 bg-[#E8F5FB] text-center mt-4 rounded-full w-fit flex flex-row gap-2 items-center">
                <img src={frontend} alt="front end image" className="h-8 w-8" />
                <p className="text-[#729cb4] text-[14px] font-semibold">
                  FRONT-END
                </p>
              </div>
              <p className="text-black mt-2 text-[24px] font-semibold">
                Beginnner's Guide to Becoming a<br />
                Professional Front-End Developer
              </p>
              <div className="h-1 w-full bg-gray-200">
                <div className="bg-[#6F62E5] h-1 w-2/3 rounded-full mt-4"></div>
              </div>
              <div className="flex mt-4 items-center">
                <img src={memoji} alt="Memoji" className="h-10 w-10 mr-4" />
                <div>
                  <h2 className="text-[16px] font-medium text-black">
                    Leonardo samsul
                  </h2>
                  <p className="text-[14px] font-regular text-gray-500">
                    Mentor
                  </p>
                </div>
              </div>
            </div>

            <div className="w-fit">
              <img
                src={fdevelopment}
                alt="company image"
                className="w-auto h-50.5"
              />
              <div className="px-3 py-2 bg-[#E8F5FB] text-center mt-4 rounded-full w-fit flex flex-row gap-2 items-center">
                <img src={frontend} alt="front end image" className="h-8 w-8" />
                <p className="text-[#729cb4] text-[14px] font-semibold">
                  FRONT-END
                </p>
              </div>
              <p className="text-black mt-2 text-[24px] font-semibold">
                Beginnner's Guide to Becoming a<br />
                Professional Front-End Developer
              </p>
              <div className="h-1 w-full bg-gray-200">
                <div className="bg-[#6F62E5] h-1 w-2/3 rounded-full mt-4"></div>
              </div>
              <div className="flex mt-4 items-center">
                <img src={memoji} alt="Memoji" className="h-10 w-10 mr-4" />
                <div>
                  <h2 className="text-[16px] font-medium text-black">
                    Leonardo samsul
                  </h2>
                  <p className="text-[14px] font-regular text-gray-500">
                    Mentor
                  </p>
                </div>
              </div>
            </div>

            <div className="w-fit">
              <img
                src={fdevelopment}
                alt="company image"
                className="w-auto h-50.5"
              />
              <div className="px-3 py-2 bg-[#E8F5FB] text-center mt-4 rounded-full w-fit flex flex-row gap-2 items-center">
                <img src={frontend} alt="front end image" className="h-8 w-8" />
                <p className="text-[#729cb4] text-[14px] font-semibold">
                  FRONT-END
                </p>
              </div>
              <p className="text-black mt-2 text-[24px] font-semibold">
                Beginnner's Guide to Becoming a<br />
                Professional Front-End Developer
              </p>
              <div className="h-1 w-full bg-gray-200">
                <div className="bg-[#6F62E5] h-1 w-2/3 rounded-full mt-4"></div>
              </div>
              <div className="flex mt-4 items-center">
                <img src={memoji} alt="Memoji" className="h-10 w-10 mr-4" />
                <div>
                  <h2 className="text-[16px] font-medium text-black">
                    Leonardo samsul
                  </h2>
                  <p className="text-[14px] font-regular text-gray-500">
                    Mentor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mr-6 rounded-2xl flex bg-[#000000] h-210 w-75"></div>
      </div>
    </div>
  );
};

export default Body;
