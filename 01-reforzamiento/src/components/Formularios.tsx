//* hooks
import { useForm } from "../hooks/useForm";

export const Formularios = () => {
  const { formValues, email, password, onChange } = useForm({
    email: "",
    password: "",
  });

  return (
    <>
      <h3>formValues</h3>
      <input
        className="form-control"
        name="email"
        placeholder="Email"
        type="text"
        value={email}
        onChange={({ target }) => {
          onChange(target.value, "email");
        }}
      />
      <input
        className="form-control mt-2"
        name="password"
        placeholder="Password"
        type="text"
        value={password}
        onChange={({ target }) => {
          onChange(target.value, "password");
        }}
      />

      <code>
        <pre className="mt-2">{JSON.stringify(formValues, null, 2)}</pre>
      </code>
    </>
  );
};
