export const getuserByEmail = async (email) => {
  const url = `https://laptop-resale-server-site.vercel.app/users/${email}`;

  const response = await fetch(url, {
    headers: {
      authorizations: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });

  const data = await response.json();

  return data;
};

export const getAllUsers = async () => {
  const url = "https://laptop-resale-server-site.vercel.app/users";

  const response = await fetch(url);
  const users = await response.json();
  return users;
};

export const makeVerify = async (user) => {
  console.log(user);
  delete user._id;
  const response = await fetch(
    `https://laptop-resale-server-site.vercel.app/users/${user?.email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...user, status: "verified" }),
    }
  );
  const users = await response.json();

  return users;
};
