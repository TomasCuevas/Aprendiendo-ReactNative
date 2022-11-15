import { useEffect, useState } from "react";

//* axios *//
import { reqResApi } from "../axios/reqRes";

//* interfaces *//
import { IUser, IUsersResponse } from "../interfaces/IUser";

export const Usuarios = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    reqResApi
      .get<IUsersResponse>("/users")
      .then(({ data: { data } }) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th>
                <img
                  style={{ width: 60, borderRadius: 100 }}
                  src={user.avatar}
                  alt={user.first_name}
                />
              </th>
              <th>
                <h4>{`${user.first_name} ${user.last_name}`}</h4>
              </th>
              <th>
                <span>{user.email}</span>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
