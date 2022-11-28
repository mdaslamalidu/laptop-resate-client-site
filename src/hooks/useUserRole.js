import { useEffect, useState } from "react";

const useUserRole = (email) => {
  const [isRole, setIsRole] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://laptop-resale-server-site.vercel.app/users/role/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsRole(data.role);
          setIsLoading(false);
        });
    }
  }, [email]);
  return [isRole, isLoading];
};

export default useUserRole;
