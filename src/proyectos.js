
function buscarProyectoPor(nombre, proyectos){
  const TAMANIOPROYECTOS=proyectos.length
  let iterador
  let proyectosBuscados=[]
  if(TAMANIOPROYECTOS==0)
    {
      return "No existen proyectos"
    }
  for (iterador=0;iterador<TAMANIOPROYECTOS;iterador++){
    if (proyectos[iterador]==nombre)
      {
        proyectosBuscados.push(proyectos[iterador])
      }
  }
  return proyectosBuscados.join(",")
}
export default buscarProyectoPor;
