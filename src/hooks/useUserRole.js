import { useEffect, useState } from "react";

const useUserRole = (email) => {
  const [isRole, setIsRole] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (email) {
      console.log(email);
      fetch(`http://localhost:5000/users/role/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsRole(data.role);
          setIsLoading(false);
        });
    }
  }, [email]);
  return [isRole, isLoading];
};

export default useUserRole;
