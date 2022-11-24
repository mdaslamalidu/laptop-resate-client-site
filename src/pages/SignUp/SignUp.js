import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const radio = form.radio.value;
    console.log(name, email, password, radio);
    createUser(email, password)
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
              <span className="label-text">Name</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              name="name"
              type="text"
              placeholder="Name"
            />
          </div>
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

export default SignUp;
