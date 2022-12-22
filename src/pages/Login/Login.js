import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";
import SmallSpinner from "../shared/Spinner/SmallSpinner";

const Login = () => {
  const { signIn, signinwithgoogle, loading, setLoading } =
    useContext(AuthContext);
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
    console.log(currentUser);

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signinwithgoogle()
      .then((result) => {
        const user = result.user;
        setLoginEmail(result.user.email);
        saveuserToDb(user.displayName, user.email, "bayer");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center text-black">
      <div className="w-96 p-7 my-8 bg-black rounded">
        <h2 className="text-xl text-center text-white">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text text-white">Email</span>
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
              <span className="label-text text-white">Password</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-accent w-full my-2">
            {loading ? <SmallSpinner></SmallSpinner> : "Sing In"}
          </button>
        </form>
        <p className="text-white">
          Are You new In This Site?
          <Link className="text-white" to="/signup">
            Sign Up
          </Link>
        </p>
        <div className="divider text-white">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full uppercase text-white"
        >
          continue with google
        </button>
      </div>
    </div>
  );
};

export default Login;
