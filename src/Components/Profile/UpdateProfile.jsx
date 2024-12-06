import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import useInfo from "./../../Hooks/useInfo";

const UpdateProfile = () => {
  const [users] = useInfo();
  const navigate = useNavigate();
  console.log(users);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const updateinfo = {
        name: data?.name,
        email: data?.email,
        image: data?.PhotoURL,
        address: data?.address,
        phone: data?.phone,
        zip: data?.zip,
      };
      const res = await axios.put(
        `http://localhost:5000/user/${users?.id}`,
        updateinfo
      );
        if(res.data){
          reset();
          toast.success('Update successful!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } 
        navigate("/account");
    } catch (error) {
      console.error("Update failed:", error);
      const errorMessage = error.response?.data?.message || "Update failed";

      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="mt-14">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-4/5 md:w-3/4 mx-auto"
      >
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Name"
              className="input input-bordered"
              defaultValue={users?.name}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input input-bordered"
              defaultValue={users?.email}
            />
          </div>
        </div>
        <div className="form-control my-2">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            {...register("address")}
            placeholder="Address"
            className="input input-bordered"
            defaultValue={users?.address}
          />
        </div>
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Contact Number</span>
            </label>
            <input
              type="number"
              {...register("phone")}
              placeholder="Mobile Number"
              className="input input-bordered"
              defaultValue={users?.phone}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Zip Code</span>
            </label>
            <input
              type="number"
              {...register("zip")}
              placeholder="Zip Code"
              className="input input-bordered"
              defaultValue={users?.zip}
            />
          </div>
        </div>
        <div className="form-control my-3">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input
            type="text"
            {...register("PhotoURL")}
            placeholder="PhotoURL"
            className="input input-bordered"
            defaultValue={users?.img}
          />
        </div>
        <div className="form-control mt-6 ">
          <button className="btn bg-[#0776a6] text-white ">update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
