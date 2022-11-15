import { useRef, useState } from "react";

//* axios *//
import { reqResApi } from "../axios/reqRes";

//* interfaces *//
import { IUser, IUsersResponse } from "../interfaces/IUser";

export const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const pageRef = useRef<number>(1);

  const loadUsers = async () => {
    const {
      data: { data },
    } = await reqResApi.get<IUsersResponse>(`/users`, {
      params: {
        page: pageRef.current,
      },
    });

    if (data.length > 0) {
      setUsers(data);
      pageRef.current++;
    } else {
      alert("No hay mas usuarios");
    }
  };

  return {
    users,
    loadUsers,
  };
};
