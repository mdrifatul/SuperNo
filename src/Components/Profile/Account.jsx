import useAuth from "../../Hooks/useAuth";
import userPicture from "/images/user.jpg";

const Account = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="mt-24 w-full flex justify-center items-center rounded-none">
      <div className="card card-compact bg-base-100 md:w-[40rem] flex md:flex-row-reverse shadow-xl shadow-slate-300 rounded-none">
        <figure className="rounded-none">
          <img
            className="md:w-60 md:h-80"
            src={user?.photoURL || userPicture}
          />
        </figure>
        <div className="card-body">
          <h1 className="text-lg">Name: {user?.displayName}</h1>
          <h1 className="text-lg">Email: {user?.email}</h1>
          <h1 className=" text-lg">Address: {user?.address}</h1>
          <h1 className=" text-lg">Phone: {user?.Number}</h1>
          <h1 className=" text-lg">Zip Code: {user?.zip}</h1>
        </div>
      </div>
    </div>
  );
};

export default Account;
