import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";
import SmallSpinner from "../shared/Spinner/SmallSpinner";

const SignUp = () => {
  const { createUser, updateUser, signinwithgoogle, loading, setLoading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);

  if (token) {
    navigate("/");
  }

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
        updateUser(name);
        saveuserToDb(name, email, radio);
        setCreatedUserEmail(email);
        toast.success("Update user");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
        setLoading(false);
      });
  };

  const saveuserToDb = (name, email, radio) => {
    const currentUser = {
      name,
      email,
      role: radio,
    };

    fetch("https://laptop-resale-server-site.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    signinwithgoogle()
      .then((result) => {
        const user = result.user;
        setCreatedUserEmail(result.user.email);
        saveuserToDb(user.displayName, user.email, "bayer");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center text-white">
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
          <button type="submit" className="btn btn-accent w-full my-2">
            {loading ? <SmallSpinner></SmallSpinner> : "Sign Up"}
          </button>
        </form>
        <p>
          Already Have an account?
          <Link className="text-primary" to="/login">
            Log In
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full uppercase"
        >
          continue with google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
