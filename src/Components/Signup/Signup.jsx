import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Signup = () => {
  const { createUser, updateUserProfile,signInWithGoogle } = useAuth();
  const navigate= useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser( data.email, data.password)
      .then((result) => {
        // const user = result.user
        result.user
        reset();
        // updateUserProfile(data.name, data.PhotoURL)
        //   .then(() => {
        //     const userInfo = {
        //       name: data.name,
        //       email: data.email,
        //       image: data.PhotoURL,
        //       role: "User"
        //     };
        //     axios.post("/user.json", userInfo)
        //     .then((res) => {
        //       if (res.data.insertedId) {
        //         reset();
        //       }
        //     });
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignin = () =>{
    signInWithGoogle()
    .then(result =>{
      result.user
      console.log(result.user);
      // const googleuserInfo = {
      //   name : result.user?.displayName,
      //   email: result.user?.email,
      //   image: result.user?.photoURL,
      //   role: "User"
      // }
      // axiosPublic.post('/users',googleuserInfo)
      // .then(res =>{
      //   console.log(res.data);
      // })
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
          className="w-4/5 md:w-1/4 mx-auto"
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