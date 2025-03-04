import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux";

export const Login = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const user = users.find((user) => user.email === data.email && user.password === data.password);
    if (user) {
      dispatch(login(user));
      alert("Login successful!");
      window.location.href = "/success";
    } else {
      alert("User not found! Redirecting to signup.");
      window.location.href = "/signup";
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-600  ">
    <form onSubmit={handleSubmit(onSubmit)} className=" grid p-5 bg-white rounded-lg">
      <h2 className="text-xl font-extrabold mb-5">Login</h2>
      <input  className="outline-none m-2  border rounded-lg font-semibold" type="email" placeholder="Email" {...register("email", { required: "Email is required" })} />
      {errors.email && <p className="text-red-600 mb-4 font-semibold">{errors.email.message}</p>}
      
      <input className="outline-none m-2 border rounded-lg font-semibold" type="password" placeholder="Password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } })} />
      {errors.password && <p className="text-red-600 mb-4 font-semibold">{errors.password.message}</p>}
      
      <button className="bg-blue-600 p-1 rounded-lg text-xl font-bold text-white" type="submit">Login</button>
    </form>
    </div>
  );
};