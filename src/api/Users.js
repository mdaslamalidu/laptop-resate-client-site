export const getuserByEmail = async (email) => {
  console.log(email);
  const url = `http://localhost:5000/users/${email}`;

  const response = await fetch(url, {
    headers: {
      authorizations: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });

  const data = await response.json();

  return data;
};

export const getAllUsers = async () => {
  const url = "http://localhost:5000/users";

  const response = await fetch(url);
  const users = await response.json();
  return users;
};

export const makeVerify = async (user) => {
  console.log(user);
  delete user._id;
  const response = await fetch(`http://localhost:5000/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ ...user, status: "verified" }),
  });
  const users = await response.json();

  return users;
};
