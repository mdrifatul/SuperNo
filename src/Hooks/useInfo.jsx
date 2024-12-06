import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useInfo = () => {
  const {user} = useAuth();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("/user.json");
      const logUser = res.data?.user;
      return logUser.find((filteruser) => filteruser.email === user.email);
    },
  });

  return [users]
  
};

export default useInfo;