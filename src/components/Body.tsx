import arrow from "../assets/arrow.svg";
import pencil from "../assets/pencil.svg";
import brand from "../assets/brand.svg";
import frontend from "../assets/frontend.svg";
import menu from "../assets/menu.svg";
import fdevelopment from "../assets/fdevelopment.jpg";
import compimg from "../assets/company-image.jpg";
import arrowleft from "../assets/arrowleft.svg";
import arrowright from "../assets/arrowright.svg";
import memoji4 from "../assets/memoji4.svg";
import memoji5 from "../assets/memoji5.svg";
import memoji6 from "../assets/memoji6.svg";
import uiux from "../assets/ui-ux.jpg";
import uiuxs from "../assets/uiuxsing.svg";
import brands from "../assets/branding-sing.svg";
import frontends from "../assets/frontend-sing.svg";
import heart from "../assets/heart.svg";
import memoji7 from "../assets/memoji7.svg";
import WeeklyActivityCharts from "./WeeklyActivityCharts";
import add from "../assets/add.svg";
import memofr1 from "../assets/memofr1.svg";
import memofr2 from "../assets/memofr2.svg";
import memofr3 from "../assets/memofr3.svg";
import follow from "../assets/follow.svg";

const Body = () => {
  return (
    <div className="flex flex-2">
      <div className="flex-1 flex flex-col gap-6 mx-6">
        <div className="rounded-2xl flex bg-[#6F62E5] h-fit w-full flex-col p-6 gap-6">
          <div className="gap-2">
            <p className="text-white text-[14px] tracking-widest">
              ONLINE COURSE
            </p>
            <h2 className="text-white text-[44px] leading-13 font-medium mt-2">
              Sharpen Your Skills with <br />
              Professional Online Courses{" "}
            </h2>
          </div>

          <div className="bg-black mt-6 flex flex-row items-center gap-4 px-2 py-2 rounded-full w-fit cursor-pointer">
            <p className="pl-5 text-white text-[16px]">Join Now</p>
            <img src={arrow} alt="Join Now" className="h-12 w-12" />
          </div>
        </div>

        <div className="flex flex-row gap-6 w-full">
          <div className="px-4 py-4 h-fit bg-white rounded-4xl flex flex-row gap-18 items-center w-full">
            <div className=" flex flex-row gap-6 items-center">
              {/* {" "} */}
              <img src={pencil} alt="pencil image" className="h-18 w-18" />
              <div className="flex flex-col gap-0.5 w-32">
                <p className="text-gray-400 text-[16px] font-medium">
                  2/8 watched
                </p>
                <p className="text-black text-[20px] font-medium">
                  UI/UX Design
                </p>
              </div>
            </div>
            <img src={menu} alt="menu" />
          </div>
          <div className="px-4 py-4 bg-white rounded-4xl flex flex-row gap-18 items-center w-full">
            <div className=" flex flex-row gap-6 items-center">
              {/* {" "} */}
              <img src={brand} alt="brand image" className="h-18 w-18" />
              <div className="flex flex-col gap-0.5 w-32">
                <p className="text-gray-400 text-[16px] font-medium">
                  3/8 watched
                </p>
                <p className="text-black text-[20px] font-medium">Branding</p>
              </div>
            </div>
            <img src={menu} alt="menu" />
          </div>
          <div className="px-4 py-4 bg-white rounded-4xl flex flex-row gap-18 items-center w-full">
            <div className=" flex flex-row gap-6 items-center">
              {" "}
              <img src={frontend} alt="front end image" className="h-18 w-18" />
              <div className="flex flex-col gap-0.5 w-32">
                <p className="text-gray-400 text-[16px] font-medium">
                  6/12 watched
                </p>
                <p className="text-black text-[20px] font-medium">Front-End</p>
              </div>
            </div>
            <img src={menu} alt="menu" />
          </div>
        </div>

        <div>
          <div className="flex flex-row items-center justify-between mt-2 mb-4">
            <p className="text-black text-[24px] font-medium mt-4">
              Continue Watching
            </p>
            <div className="flex flex-row gap-3">
              <img src={arrowleft} alt="left arrow" className="h-12 w-12" />
              <img src={arrowright} alt="right arrow" className="h-12 w-12" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl w-full flex flex-row gap-12 overflow-x-scroll no-scrollbar overflow-hidden">
            <div className="w-fit">
              <div className="relative">
                <img
                  src={heart}
                  alt="company image"
                  className="w-8 h-8 absolute m-4 items-end justify-end left-70"
                />
                <img
                  src={fdevelopment}
                  alt="company image"
                  className="w-auto h-48"
                />
              </div>

              <div className="px-3 py-2 bg-[#E8F5FB] text-center mt-4 rounded-full w-fit flex flex-row gap-2 items-center">
                <img
                  src={frontends}
                  alt="front end image"
                  className="h-4 w-4"
                />
                <p className="text-[#729cb4] text-[14px] font-medium">
                  FRONT-END
                </p>
              </div>
              <p className="text-black mt-2 text-[20px] font-medium">
                Beginnner's Guide to Becoming a<br />
                Professional Front-End Developer
              </p>
              <div className="h-1 w-full bg-gray-200">
                <div className="bg-[#6F62E5] h-1 w-2/3 rounded-full mt-4"></div>
              </div>
              <div className="flex mt-4 items-center">
                <img src={memoji4} alt="Memoji" className="h-10 w-10 mr-4" />
                <div className="gap-2">
                  <h2 className="text-[14px] font-medium text-black">
                    Leonardo samsul
                  </h2>
                  <p className="text-[14px] font-regular text-gray-500">
                    Mentor
                  </p>
                </div>
              </div>
            </div>

            <div className="w-fit">
              <div className="relative">
                <img
                  src={heart}
                  alt="company image"
                  className="w-8 h-8 absolute m-4 items-end justify-end left-70"
                />
                <img src={uiux} alt="company image" className="w-auto h-48" />
              </div>

              <div className="px-3 py-2 bg-[#e7e2ff] text-center mt-4 rounded-full w-fit flex flex-row gap-2 items-center">
                <img src={uiuxs} alt="front end image" className="h-4 w-4" />
                <p className="text-[#8D7FD4] text-[14px] font-medium">
                  UI/UX DESIGN
                </p>
              </div>
              <p className="text-black mt-2 text-[20px] font-medium">
                Optimizing User Experience with
                <br />
                the Best UI/UX Design
              </p>
              <div className="h-1 w-full bg-gray-200">
                <div className="bg-[#6F62E5] h-1 w-1/3 rounded-full mt-4"></div>
              </div>
              <div className="flex mt-4 items-center">
                <img src={memoji5} alt="Memoji" className="h-10 w-10 mr-4" />
                <div className="gap-2">
                  <h2 className="text-[14px] font-medium text-black">
                    Bayu Salto
                  </h2>
                  <p className="text-[14px] font-regular text-gray-500">
                    Mentor
                  </p>
                </div>
              </div>
            </div>

            <div className="w-fit">
              <img src={compimg} alt="company image" className="w-auto h-48" />
              <div className="px-3 py-2 bg-[#f8e6ff] text-center mt-4 rounded-full w-fit flex flex-row gap-2 items-center">
                <img src={brands} alt="front end image" className="h-4 w-4" />
                <p className="text-[#8600B9] text-[14px] font-medium">
                  BRANDING
                </p>
              </div>
              <p className="text-black mt-2 text-[20px] font-medium">
                Reviving and Refreshing Your
                <br />
                Company's Image
              </p>
              <div className="h-1 w-full bg-gray-200">
                <div className="bg-[#6F62E5] h-1 w-2/3 rounded-full mt-4"></div>
              </div>
              <div className="flex mt-4 items-center">
                <img src={memoji6} alt="Memoji" className="h-10 w-10 mr-4" />
                <div className="gap-2">
                  <h2 className="text-[14px] font-medium text-black">
                    Pahdang Satrio
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
        <div className="mr-6 rounded-2xl flex bg-white h-238 w-96 p-4">
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-row items-center justify-between mb-4">
              <p className="text-black text-[20px] font-medium">Statistic</p>
              <img src={menu} alt="menu" className="h-6 w-6" />
            </div>
            <div className="text-center flex flex-col gap-6">
              <img
                src={memoji7}
                alt="statistic image"
                className="h-44 w-full"
              />
              <div className="gap-4">
                <h2 className="text-black text-[20px] font-medium">
                  Good Morning Jason 🔥
                </h2>
                <p className="text-gray-400 text-[14px]">
                  Continue your learning to achieve your target!
                </p>
              </div>
            </div>
            <div className="p-4">
              <WeeklyActivityCharts />
            </div>
            <div>
              <div className="flex flex-row justify-between items-center ">
                <h2 className="text-black text-[20px] font-medium">
                  Your Mentor
                </h2>
                <img src={add} alt="mentor image" className="h-8 w-8" />
              </div>
              <div className="p-6 bg-[#f5f6fb] rounded-3xl mt-4 gap-6 flex flex-col">
                <div className="flex flex-row border-2 border-b-gray-300 pb-4 border-dashed">
                  <div className="flex items-center">
                    <img
                      src={memofr3}
                      alt="Memoji"
                      className="h-10 w-10 mr-4"
                    />
                    <div className="gap-2">
                      <h2 className="text-[14px] font-medium text-black">
                        Pahdang Satrio
                      </h2>
                      <p className="text-[14px] font-regular text-gray-500">
                        Mentor
                      </p>
                    </div>
                  </div>
                  <button className="ml-auto border border-[#6F62E5] bg-white px-4 py-1 rounded-full text-[#6F62E5] text-[14px]">
                    <img
                      src={follow}
                      alt="Follow"
                      className="h-4 w-4 inline-block mr-2"
                    />
                    Follow
                  </button>
                </div>
                <div className="flex flex-row border-2 border-b-gray-300 pb-4 border-dashed">
                  <div className="flex items-center">
                    <img
                      src={memofr2}
                      alt="Memoji"
                      className="h-10 w-10 mr-4"
                    />
                    <div className="gap-2">
                      <h2 className="text-[14px] font-medium text-black">
                        Zakir Horizontal
                      </h2>
                      <p className="text-[14px] font-regular text-gray-500">
                        Mentor
                      </p>
                    </div>
                  </div>
                  <button className="ml-auto border border-[#6F62E5] bg-white px-4 py-1 rounded-full text-[#6F62E5] text-[14px]">
                    <img
                      src={follow}
                      alt="Follow"
                      className="h-4 w-4 inline-block mr-2"
                    />
                    Follow
                  </button>
                </div>
                <div className="flex flex-row">
                  <div className="flex items-center">
                    <img
                      src={memofr1}
                      alt="Memoji"
                      className="h-10 w-10 mr-4"
                    />
                    <div className="gap-2">
                      <h2 className="text-[14px] font-medium text-black">
                        Leonardo Samsul
                      </h2>
                      <p className="text-[14px] font-regular text-gray-500">
                        Mentor
                      </p>
                    </div>
                  </div>
                  <button className="ml-auto border border-[#6F62E5] bg-white px-4 py-1 rounded-full text-[#6F62E5] text-[14px]">
                    <img
                      src={follow}
                      alt="Follow"
                      className="h-4 w-4 inline-block mr-2"
                    />
                    Follow
                  </button>
                </div>
                <div>
                  <button className="w-full  bg-[#e8e4ff] px-4 py-3 rounded-full text-[#6F62E5] text-[14px]">
                    See All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
