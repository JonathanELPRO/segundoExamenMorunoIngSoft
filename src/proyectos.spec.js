import buscarProyectoPor from "./proyectos.js";

describe("buscar proyecto por nombre", () => {
  it("Deberia retornar el mensaje no tiene poryectos si se trata de realizar una busqueda sobre una lista de proyectos vacia", () => {
    expect(buscarProyectoPor("proy1")).toEqual("No existen proyectos");
  });
});
