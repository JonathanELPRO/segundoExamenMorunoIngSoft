
function buscarProyectoPor(nombre, proyectos){
  const TAMANIOPROYECTOS=proyectos.length
  let iteradorProyectos
  let proyectosBuscados=[]
  if(TAMANIOPROYECTOS==0)
    {
      return "No existen proyectos"
    }
  for (iteradorProyectos=0;iteradorProyectos<TAMANIOPROYECTOS;iteradorProyectos++){
    let proyectoBuscado=proyectos[iteradorProyectos]
    if (proyectoBuscado.startsWith(nombre))
      {
        proyectosBuscados.push(proyectos[iteradorProyectos])
      }
  }
  return proyectosBuscados.join(",")
}
export default buscarProyectoPor;
