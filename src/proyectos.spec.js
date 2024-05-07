import buscarProyectoPor from "./proyectos.js";

describe("buscar proyecto por nombre", () => {
  it("Deberia retornar el mensaje no tiene proyectos si se trata de realizar una busqueda sobre una lista de proyectos vacia", () => {
    let proyectos=[]
    expect(buscarProyectoPor("proy1",proyectos)).toEqual("No existen proyectos");
  });
  it("Deberia retornar el nombre del proyectos buscado si es que solo tenemos un proyecto", () => {
    let proyectos=["proy1"]
    expect(buscarProyectoPor("proy1",proyectos)).toEqual("proy1");
  });
  it("Deberia retornar el nombre del proyectos buscado si es que tenemos mas de un proyecto en proyectos", () => {
    let proyectos=["proy1","proy2"]
    expect(buscarProyectoPor("proy2",proyectos)).toEqual("proy2");
  });
  it("Deberia retornar los nombres de los proyectos que coincidan con la busqueda", () => {
    let proyectos=["proy1","proy2","proy2"]
    expect(buscarProyectoPor("proy2",proyectos)).toEqual("proy2,proy2");
  });
  it("Deberia retornar los nombres de los proyectos que coincidan con la busqueda", () => {
    let proyectos=["proy1","proy2","proy2","proy2Moruno","proy2Moruno2"]
    expect(buscarProyectoPor("proy2",proyectos)).toEqual("proy2,proy2,proy2Moruno,proy2Moruno2");
  });
});
