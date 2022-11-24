import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  //   const [signError, setSignupError] = useState("");
  //   const navigate = useNavigate();
  const { createUser, updateUser, signinwithgoogle } = useContext(AuthContext);
  //   const [createdUserToken, setCreatedUserToken] = useState("");
  //   const [token] = useToken(createdUserToken);

  //   if (token) {
  //     navigate("/");
  //   }

  const handleSubmit = (event) => {
    //     setSignupError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        updateUser(name)
          .then(() => {
            // toast.success("update profile");
            // saveuserToDb(data.name, data.email);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   const saveuserToDb = (name, email) => {
  //     const currentUser = {
  //       name,
  //       email,
  //     };

  //     fetch("http://localhost:5000/users", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(currentUser),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setCreatedUserToken(email);
  //       });
  //   };

  const handleGoogleSignIn = () => {
    signinwithgoogle()
      .then(() => {
        alert("sign in with google");
      })
      .catch((error) => console.log(error));
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
