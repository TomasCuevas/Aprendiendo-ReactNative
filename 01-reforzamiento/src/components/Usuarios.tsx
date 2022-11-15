import { useEffect } from "react";

//* hooks *//
import { useUsers } from "../hooks/useUsers";

export const Usuarios = () => {
  const { loadUsers, users, nextPage, previousPage } = useUsers();

  useEffect(() => {
    loadUsers();
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
      <button onClick={() => previousPage()} className="btn btn-primary m-1">
        Anterior
      </button>
      <button onClick={() => nextPage()} className="btn btn-primary m-1">
        Siguiente
      </button>
    </>
  );
};
