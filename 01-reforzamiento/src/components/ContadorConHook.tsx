import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = () => {
  const { acumular, valor } = useCounter();

  return (
    <>
      <h3>Contador con Hook: {valor}</h3>
      <button onClick={() => acumular(1)} className="btn btn-primary m-1">
        +1
      </button>
      <button onClick={() => acumular(-1)} className="btn btn-primary m-1">
        -1
      </button>
    </>
  );
};
