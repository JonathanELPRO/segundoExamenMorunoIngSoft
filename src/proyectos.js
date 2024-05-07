
function buscarProyectoPor(nombre, proyectos){
  const TAMANIOPROYECTOS=proyectos.length
  let iterador
  if(TAMANIOPROYECTOS==0)
    {
      return "No existen proyectos"
    }
  for (iterador=0;iterador<TAMANIOPROYECTOS;iterador++){
    if (proyectos[iterador]==nombre)
      {
        return proyectos[iterador]
      }
  }
  return proyectos[0]
}
export default buscarProyectoPor;
