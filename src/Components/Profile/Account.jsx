import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useInfo from "../../Hooks/useInfo";
import userPicture from "/images/user.jpg";

const Account = () => {
  const { user } = useAuth();
  const [users] =  useInfo(); 

  return (
    <div className="mt-24 w-full flex justify-center items-center rounded-none">
      <div className="card card-compact bg-base-100 w-full md:w-[40rem] flex md:flex-row-reverse shadow-xl shadow-slate-300 rounded-none">
        <figure className="rounded-none">
          <img
            className="md:w-60 md:h-80"
            src={user?.photoURL || userPicture || users?.img}
          />
        </figure>
        <div className="card-body">
          <div className="flex flex-col h-full justify-between">
            <div className="">
              <h1 className="text-xl">
                Name:
                <span className="font-bold capitalize"> {users?.name}</span>
              </h1>
              <h1 className="text-xl">Email: {users?.email}</h1>
              <h1 className="text-xl">Address: {users?.address}</h1>
              <h1 className="text-xl">Phone: {users?.phone}</h1>
              <h1 className="text-xl">Zip Code: {users?.zip}</h1>
            </div>
            <div className="md:mt-0 mt-5">
              <Link to={'update'}><button className="btn btn-sm text-green-600  border-1 border-green-600">Update Profile</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
