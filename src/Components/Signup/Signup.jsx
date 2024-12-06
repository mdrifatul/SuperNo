import axios from "axios";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const Signup = () => {
  const { createUser, signInWithGoogle } = useAuth();
  const navigate= useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser( data.email, data.password)
      .then((result) => {
        result.user
        reset();
        const userInfo = {
          name: data?.name,
          email: data?.email,
          image: data?.PhotoURL,
        };
        const res = axios.post("http://localhost:5000/user", userInfo)
          if (res) {
            reset();
            toast.success('Sign Up successful!', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
              navigate("/");
          }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignin = () =>{
    signInWithGoogle()
    .then(result =>{
      const googleuserInfo = {
        name : result.user?.displayName,
        email: result.user?.email,
        img: result.user?.photoURL,
      }
      axios.post('http://localhost:5000/user',googleuserInfo)
      .then(res =>{
        toast.success('Sign Up successful!', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      navigate('/')   
    })
  .catch(error =>{
    console.error(error);
    })
  }


  return (
    <>
      <div className="mb-10">
      <div className="mb-10">
        <h2 className="text-3xl my-3 text-center font-bold text-[#0776a6]">SIGN UP</h2>
        <form
        onSubmit={handleSubmit(onSubmit)}
          className="w-4/5 md:w-3/6 lg:w-2/6 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.{6,})/ })}
              placeholder="Password"
              className="input input-bordered"
            />
            {errors.password && (
              <span className="text-red-500">
                password should be at least 6 characters and  a capital letter
              </span>
            )}
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
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#0776a6] text-white ">
              Register
            </button>
          </div>
        </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-red-500 font-bold" to="/login">
              Login
            </Link>
          </p>
          <hr className="w-3/5 mx-auto my-3 " />
          <div className="flex justify-center items-center">
            <button onClick={handleGoogleSignin} className="mx-auto btn border-blue  w-fit ">
              <FcGoogle className=" text-2xl"></FcGoogle>
              Login with Google
            </button>
          </div>
      </div>
      </div>
    </>
  );
};

export default Signup;