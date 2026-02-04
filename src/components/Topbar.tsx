import Search from "./Search";
import email from "../assets/email.svg";
import notifications from "../assets/notifications.svg";
import memoji2 from "../assets/memoji2.svg";

const Topbar = () => {
  return (
    <div className="flex items-center gap-4 h-16 px-6 my-4">
      <div className="flex-6">
        <Search />
      </div>

      <div className="flex flex-row items-center gap-4 flex-2">
        <div className="flex items-center gap-4 mx-2 shrink-0">
          <div className="bg-white border border-gray-300 rounded-full p-2 m-auto h-12 w-12">
            <img
              src={email}
              alt="Profile"
              className="h-8 w-8 p-1.5 rounded-full"
            />
          </div>

          <div className="bg-white border border-gray-300 rounded-full p-2 m-auto h-12 w-12">
            <img
              src={notifications}
              alt="Notifications"
              className="h-8 w-8 p-1.5 rounded-full"
            />
          </div>
        </div>

        <div className="w-px h-12 bg-gray-400"></div>
        <div className="flex items-center gap-2 shrink-0">
          <img
            src={memoji2}
            alt="Profile"
            className="h-16 w-16 p-1 rounded-full"
          />
          <p className="text-black font-medium text-[18px]">Jason Ranti</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
