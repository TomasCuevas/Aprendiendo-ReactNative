import { useRef, useState } from "react";

//* axios *//
import { reqResApi } from "../axios/reqRes";

//* interfaces *//
import { IUser, IUsersResponse } from "../interfaces/IUser";

export const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const pageRef = useRef<number>(1);

  const loadUsers = async (optional?: "next" | "previous") => {
    const {
      data: { data },
    } = await reqResApi.get<IUsersResponse>(`/users`, {
      params: {
        page: pageRef.current,
      },
    });

    if (optional && optional === "previous" && data.length > 0) {
      return setUsers(data);
    }

    if (optional && optional === "next" && data.length > 0) {
      return setUsers(data);
    }

    if (data.length > 0) {
      setUsers(data);
    } else {
      pageRef.current--;
      alert("No hay mas usuarios");
    }
  };

  const nextPage = () => {
    pageRef.current++;
    loadUsers("next");
  };

  const previousPage = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      loadUsers("previous");
    }
  };

  return {
    // getter
    users,

    // methods
    loadUsers,
    nextPage,
    previousPage,
  };
};
