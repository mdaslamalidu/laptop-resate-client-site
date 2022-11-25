import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loginEmail, setLoginEmail] = useState("");
  const [token] = useToken(loginEmail);

  if (token) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginEmail(email);
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
            <div class="flex">
              <div class="form-check form-check-inline mr-4">
                <input
                  class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="radio"
                  id="inlineRadio1"
                  value="bayer"
                />
                <label
                  class="form-check-label inline-block"
                  for="inlineRadio10"
                >
                  Bayer
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="radio"
                  id="inlineRadio2"
                  value="seller"
                />
                <label
                  class="form-check-label inline-block"
                  for="inlineRadio20"
                >
                  Saller
                </label>
              </div>
            </div>
          </div>

          <input
            type="submit"
            value="Sign Up"
            className="btn btn-accent w-full my-2"
          />
        </form>
        <p>
          Are You new In This Site?
          <Link className="text-primary" to="/signup">
            Sign Up
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
