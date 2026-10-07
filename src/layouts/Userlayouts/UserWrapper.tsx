import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";

const UserWrapper = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <UserNavbar />

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <UserFooter />
    </div>
  );
};

export default UserWrapper;