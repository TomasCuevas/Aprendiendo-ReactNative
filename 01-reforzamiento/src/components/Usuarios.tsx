import { useEffect } from "react";

//* axios *//
import { reqResApi } from "../axios/reqRes";

export const Usuarios = () => {
  useEffect(() => {
    reqResApi
      .get("/users")
      .then(({ data }) => console.log(data.data))
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
        <tbody></tbody>
      </table>
    </>
  );
};
