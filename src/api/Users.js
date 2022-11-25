export const getuser = async (email) => {
  const url = `http://localhost:5000/users/${email}`;

  const response = await fetch(url);

  const data = await response.json();
  return data;
};

export const getAllUsers = async () => {
  const url = "http://localhost:5000/users";

  const response = await fetch(url);
  const users = await response.json();
  return users;
};
