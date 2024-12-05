import { IoArrowBackOutline } from "react-icons/io5";
import { MdBookmarkBorder } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router";

const Sidebar = () => {

  return (
    <div className="flex flex-col gap-2">
      <li>
        <Link to={"/account"} className="text-2xl text-white"><VscAccount />Account</Link>
      </li>
      <li >
        <Link to={"order"} className="text-2xl text-white"><MdBookmarkBorder />Order</Link>
      </li>
      <li >
        <Link to="/" className="text-2xl text-white">
          <IoArrowBackOutline />
          Back Home
        </Link>
      </li>
    </div>
  );
};

export default Sidebar;
