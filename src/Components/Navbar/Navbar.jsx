import { Link, NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";
import userPicture from '/images/user.jpg';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handlelogOut = () => {
    logOut().then().catch();
  };
  console.log(user);

  return (
    <div className="bg-cyan-700">
      <div className="navbar w-11/12 mx-auto ">
  <div className="navbar-start">
    <a href="/" className="btn btn-ghost text-4xl text-white text-bold">SuperNo</a>
  </div>
  <div className="navbar-end">
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal px-1">
        {!user &&<Link
            to="/login"
            className="hover:bg-base-300 rounded-lg"
          >                           
          <button
            className="btn btn-sm w-full bg-[#0776a6] text-white"
          >
            login
          </button>
          </Link>}
        </ul>
      </div>
      <div className="">
        {user && (
          <>  
            <div className="dropdown dropdown-end flex">
              <label tabIndex={0} className="">
              <div className="w-10 rounded-full mx-auto ">
                <img className="rounded-full" src={user?.photoURL ||userPicture
                } />
              </div>
            </label>
            <div
                tabIndex={0}
                className="mt-11 dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-44 "
              >
                <NavLink
                  to="/account"
                  className="px-1 hover:bg-base-300 py-2 rounded-lg text-xl"
                >
                  Profile
                </NavLink>
                
                <NavLink
                  to="/"
                  className="hover:bg-base-300 rounded-lg"
                >                           
                <button
                  className="btn btn-sm text-xl w-full bg-[#0776a6] text-white"
                  onClick={handlelogOut}
                >
                  logout
                </button>
                </NavLink>
              </div>
              </div>
          </>
        )}
      </div>
  </div>
</div>
    </div>
  );
};

export default Navbar;
