import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text">Password</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Bayer</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500"
                checked
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Saller</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                checked
              />
            </label>
          </div>

          <input
            type="submit"
            value="Sign Up"
            className="btn btn-accent w-full my-2"
          />
        </form>
        <p>
          Already Have an account?
          <Link className="text-primary" to="/login">
            Log In
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full uppercase">
          continue with google
        </button>
      </div>
    </div>
  );
};

export default Login;
