interface IPersona {
  nombre: string;
  nombreCompleto?: string;
  edad: number;
  direccion: IDirection;
}

interface IDirection {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {
  const persona: IPersona = {
    nombre: "Tomas",
    edad: 22,
    direccion: {
      pais: "Argentina",
      casaNo: 2823,
    },
  };

  persona.nombreCompleto = "Tomas Cuevas";

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
