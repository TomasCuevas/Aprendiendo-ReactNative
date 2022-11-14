export const TiposBasicos = () => {
  const nombre: string = "Tomas";
  const edad: number = 22;
  const estaActivo: boolean = true;

  const poderes: string[] = [];

  poderes.push("Velocidad");
  poderes.push("Super fuerza");
  poderes.push("Respirar en el agua");

  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre}, {edad}, {estaActivo ? "Activo" : "No Activo"}
      <br />
      {poderes.join(", ")}
    </>
  );
};
