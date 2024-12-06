import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const {logIn, signInWithGoogle} = useAuth();
  const navigate = useNavigate(); 
  const location = useLocation();
  const [loginError, setLoginError] = useState("");


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    logIn(data.email, data.password)
    .then(result =>{
        console.log(result.user);
        reset();
        navigate(location?.state ? location.state : '/')
    })
    .catch(error =>{
        console.error(error);
        setLoginError('The email address and password is wrong.')
    })   
  }

  const handleGoogleSignin = () =>{
    signInWithGoogle()
    .then(result =>{
      result.user
      toast.success('Log In successful!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        navigate(location?.state ? location.state : '/')
      }, 1600); 
    })
  .catch(error =>{
    console.error(error);
    })
  }

  return (
    <>
      <div className="my-10">
        <h2 className="text-3xl my-3 text-center font-bold text-[#0776a6]">
          Login
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-4/5 md:w-1/3 mx-auto"
        >
          <div className="form-control">
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
              {...register("password", { required: true })}
              placeholder="Password"
              className="input input-bordered"
            />
            {errors.password && (
              <span className="text-red-500">
                password should be at least 6 characters, a capital letter and a special character
              </span>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#0776a6] text-white">Login</button>
          </div>
        </form>
        {loginError && <p className="text-red-600 text-center text-red mt-2">{loginError}</p>}
        <p className="text-center mt-4">
          Do not have an account?{" "}
          <Link className="text-red-500 font-bold" to="/signup">
            Register
          </Link>
        </p>
        <hr className="w-3/5 mx-auto my-3 " />
        <div className="flex justify-center items-center ">
          <button
            onClick={handleGoogleSignin}
            className="mx-auto btn border-blue  w-fit "
          >
            <FcGoogle className="text-blue text-2xl"></FcGoogle>
            Login with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
