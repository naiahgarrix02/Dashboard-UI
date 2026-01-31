import Search from "./Search";
import email from "../assets/email.svg";
import notifications from "../assets/notifications.svg";
import memoji from "../assets/memoji.svg";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between gap-4 h-16 px-6 my-4">
      <div className="flex-1">
        <Search />
       </div>
       
        <div className="flex items-center gap-4 mx-4 shrink-0">
          <div className="border border-gray-300 rounded-full p-1">
            <img
              src={email}
              alt="Profile"
              className="h-8 w-8 p-1 rounded-full"
            />
          </div>

          <div className="border border-gray-300 rounded-full p-1">
            <img
              src={notifications}
              alt="Notifications"
              className="h-8 w-8 p-1 rounded-full"
            />
          </div>
        </div>
     

      <div className="w-px h-6 bg-gray-400"></div>
      <div className="flex items-center gap-2 shrink-0">
        <img
          src={memoji}
          alt="Profile"
          className="h-12 w-12 p-1 rounded-full"
        />
        <p className="text-black  font-[16px]">Jason Ranti</p>
      </div>
    </div>
  );
};

export default Topbar;
