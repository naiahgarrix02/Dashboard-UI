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
            <img src="/src/assets/arrow.svg" alt="Join Now" />
          </div>
        </div>

        <div className="flex flex-row gap-6 w-full">
          
          <div className="px-4 py-4 bg-white rounded-4xl flex flex-row gap-12 items-center w-full">
            <div className=" flex flex-row gap-6 items-center">
              {" "}
              <img
                src="/src/assets/pencil.svg"
                alt="pencil image"
                className="h-22 w-22"
              />
              <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-[18px] font-medium">
                  2/8 watched
                </p>
                <p className="text-black text-[24px] font-semibold">UI/UX Design</p>
              </div>
            </div>
            <img src="/src/assets/menu.svg" alt="menu" />
          </div>
          <div className="px-4 py-4 bg-white rounded-4xl flex flex-row gap-28 items-center w-full">
            <div className=" flex flex-row gap-6 items-center">
              {" "}
              <img
                src="/src/assets/brand.svg"
                alt="body image"
                className="h-22 w-22"
              />
              <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-[18px] font-medium">
                  3/8 watched
                </p>
                <p className="text-black text-[24px] font-semibold">Branding</p>
              </div>
            </div>
            <img src="/src/assets/menu.svg" alt="menu" />
          </div>
          <div className="px-4 py-4 bg-white rounded-4xl flex flex-row gap-28 items-center w-full">
            <div className=" flex flex-row gap-6 items-center">
              {" "}
              <img
                src="/src/assets/frontend.svg"
                alt="front end image"
                className="h-22 w-22"
              />
              <div className="flex flex-col gap-1">
                <p className="text-gray-400 text-[18px] font-medium">
                 6/12 watched
                </p>
                <p className="text-black text-[24px] font-semibold">Front-End</p>
              </div>
            </div>
            <img src="/src/assets/menu.svg" alt="menu" />
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
