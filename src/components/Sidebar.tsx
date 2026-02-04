import clogo from "../assets/clogo.svg";
import dashboard from "../assets/dashboard.svg";
import inbox from "../assets/inbox.svg";
import lesson from "../assets/lesson.svg";
import task from "../assets/task.svg";
import group from "../assets/group.svg";
import memoji1 from "../assets/memoji1.svg";
import memoji2 from "../assets/memoji2.svg";
import memoji3 from "../assets/memoji3.svg";
import settings from "../assets/settings.svg";
import logout from "../assets/logout.svg";

const Sidebar = () => {
  return (
    <div className="fixed w-70 h-screen bg-white text-black overflow-y-auto px-6">
      <div className="px-4 py-6 flex flex-row gap-1">
        <img src={clogo} alt="Logo" className="h-8 w-8 mr-2" />
        <h2 className="text-2xl font-medium mb-4">Coursue</h2>
      </div>
      {/* Overview Section */}
      <div className="flex flex-col justify-start items-start px-4 py-2 gap-6">
        <h3 className="text-[16px] font-medium text-gray-400">OVERVIEW</h3>

        <div className="justify-start items-start gap-6 flex flex-col">
          <div className="flex flex-row justify-center items-center">
            <img src={dashboard} alt="Dashboard" className="h-6 w-6 mr-4" />
            <h2 className="text-[16px] font-semibold">Dashboard</h2>
          </div>

          <div className="flex flex-row justify-center items-center">
            <img src={inbox} alt="Inbox" className="h-6 w-6 mr-4" />
            <h2 className="text-[16px] font-regular">Inbox</h2>
          </div>

          <div className="flex flex-row justify-center items-center">
            <img src={lesson} alt="Lesson" className="h-6 w-6 mr-4" />
            <h2 className="text-[16px] font-regular">Lesson</h2>
          </div>

          <div className="flex flex-row justify-center items-center">
            <img src={task} alt="Task" className="h-6 w-6 mr-4" />
            <h2 className="text-[16px] font-regular">Task</h2>
          </div>

          <div className="flex flex-row justify-center items-center">
            <img src={group} alt="Group" className="h-6 w-6 mr-4" />
            <h2 className="text-[16px] font-regular">Group</h2>
          </div>
        </div>
      </div>

      {/* Friends Section */}
      <div className="mt-6 flex flex-col justify-start items-start px-4 py-2 gap-6">
        <h3 className="text-[16px] font-medium text-gray-400">FRIENDS</h3>
        <div className="justify-start items-start gap-6 flex flex-col">
          <div className="flex flex-row justify-center items-center">
            <img src={memoji1} alt="Memoji" className="h-10 w-10 mr-4" />
            <div>
              <h2 className="text-[16px] font-medium">Baghas Mahpie</h2>
              <p className="text-[14px] font-regular text-gray-500">Friend</p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">
            <img src={memoji2} alt="Memoji" className="h-10 w-10 mr-4" />
            <div>
              <h2 className="text-[16px] font-medium">Sir Dandy</h2>
              <p className="text-[14px] font-regular text-gray-500">
                Old Friend
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">
            <img src={memoji3} alt="Memoji" className="h-10 w-10 mr-4" />
            <div>
              <h2 className="text-[16px] font-medium">Jhon Tosan</h2>
              <p className="text-[14px] font-regular text-gray-500">Friend</p>
            </div>
          </div>
        </div>
      </div>

      {/*Settings Section */}
      <div className="mt-36 flex flex-col justify-start items-start px-4 py-2 gap-6">
        <h3 className="text-[16px] font-medium text-gray-400">SETTINGS</h3>
        <div className="justify-start items-start gap-6 flex flex-col">
          <div className="flex flex-row justify-center items-center">
            <img src={settings} alt="Settings" className="h-6 w-6 mr-4" />
            <div>
              <h2 className="text-[16px] font-medium">Settings</h2>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">
            <img src={logout} alt="Logout" className="h-6 w-6 mr-4" />
            <div>
              <h2 className="text-[16px] text-red-500 font-medium">Logout</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
