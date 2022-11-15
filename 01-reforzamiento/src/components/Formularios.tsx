import { useState } from "react";

export const Formularios = () => {
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
  });

  const onChange = (value: string, field: string) => {
    setFormulario((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <h3>Formularios</h3>
      <input
        className="form-control"
        name="email"
        placeholder="Email"
        type="text"
        value={formulario.email}
        onChange={({ target }) => {
          onChange(target.value, target.name);
        }}
      />
      <input
        className="form-control mt-2"
        name="password"
        placeholder="Password"
        type="text"
        value={formulario.password}
        onChange={({ target }) => {
          onChange(target.value, target.name);
        }}
      />

      <code>
        <pre className="mt-2">{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};
